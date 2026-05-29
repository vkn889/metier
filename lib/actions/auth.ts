'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { createClient } from '@/lib/supabase/server'

const passwordSchema = z.string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Must contain an uppercase letter')
  .regex(/\d/, 'Must contain a number')
  .regex(/[!@#$%^&*]/, 'Must contain a special character')

const signupSchema = z.object({
  firstName: z.string().min(1).max(50).trim(),
  lastName: z.string().min(1).max(50).trim(),
  email: z.string().email().toLowerCase().trim(),
  password: passwordSchema,
})

const loginSchema = z.object({
  email: z.string().email().toLowerCase().trim(),
  password: z.string().min(1),
})

export type AuthState = {
  error?: string
  info?: string
  fieldErrors?: Record<string, string[]>
}

async function getOnboardingDest(supabase: Awaited<ReturnType<typeof createClient>>, userId: string) {
  const { data: profile } = await supabase
    .from('profiles')
    .select('onboarding_complete')
    .eq('id', userId)
    .single()
  return profile?.onboarding_complete === false ? '/onboarding' : '/dashboard'
}

export async function signUp(prevState: AuthState, formData: FormData): Promise<AuthState> {
  const raw = {
    firstName: formData.get('firstName') as string,
    lastName: formData.get('lastName') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const parsed = signupSchema.safeParse(raw)
  if (!parsed.success) {
    return { fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]> }
  }

  const supabase = await createClient()
  const { data, error } = await supabase.auth.signUp({
    email: parsed.data.email,
    password: parsed.data.password,
    options: {
      data: {
        first_name: parsed.data.firstName,
        last_name: parsed.data.lastName,
      },
    },
  })

  if (error) {
    if (error.message.toLowerCase().includes('already registered')) {
      return { error: 'An account with this email already exists. Try logging in.' }
    }
    return { error: error.message }
  }

  // No session means email confirmation is required (or repeated signup)
  if (!data.session) {
    return { info: 'Check your email for a confirmation link to activate your account.' }
  }

  redirect('/onboarding')
}

export async function logIn(prevState: AuthState, formData: FormData): Promise<AuthState> {
  const raw = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const parsed = loginSchema.safeParse(raw)
  if (!parsed.success) {
    return { error: 'Please enter a valid email and password.' }
  }

  const supabase = await createClient()
  const { data, error } = await supabase.auth.signInWithPassword({
    email: parsed.data.email,
    password: parsed.data.password,
  })

  if (error) {
    return { error: 'Incorrect email or password. Use "Forgot password?" to reset it.' }
  }

  const dest = await getOnboardingDest(supabase, data.user.id)
  revalidatePath('/', 'layout')
  redirect(dest)
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/')
}

export async function updatePassword(_prevState: AuthState, formData: FormData): Promise<AuthState> {
  const password = formData.get('password') as string
  const confirm = formData.get('confirmPassword') as string

  if (password !== confirm) return { error: 'Passwords do not match.' }

  const parsed = passwordSchema.safeParse(password)
  if (!parsed.success) return { error: parsed.error.errors[0].message }

  const supabase = await createClient()

  // Verify an active (recovery) session exists
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'Your reset link has expired. Please request a new one.' }

  const { error } = await supabase.auth.updateUser({ password: parsed.data })
  if (error) return { error: error.message }

  const dest = await getOnboardingDest(supabase, user.id)
  revalidatePath('/', 'layout')
  redirect(dest)
}

export async function saveOnboarding(prevState: AuthState, formData: FormData): Promise<AuthState> {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'Session expired. Please log in again.' }

  const careerGoal = formData.get('careerGoal') as string
  const experienceLevel = formData.get('experienceLevel') as string

  const { error } = await supabase
    .from('profiles')
    .update({
      career_goal: careerGoal,
      experience_level: experienceLevel as 'none' | 'junior' | 'mid' | 'senior',
      onboarding_complete: true,
    })
    .eq('id', user.id)

  if (error) return { error: error.message }

  redirect('/dashboard')
}
