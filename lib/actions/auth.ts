'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { createClient } from '@/lib/supabase/server'

const signupSchema = z.object({
  firstName: z.string().min(1).max(50).trim(),
  lastName: z.string().min(1).max(50).trim(),
  email: z.string().email().toLowerCase().trim(),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Must contain an uppercase letter')
    .regex(/\d/, 'Must contain a number')
    .regex(/[!@#$%^&*]/, 'Must contain a special character'),
})

const loginSchema = z.object({
  email: z.string().email().toLowerCase().trim(),
  password: z.string().min(1),
})

export type AuthState = {
  error?: string
  fieldErrors?: Record<string, string[]>
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
    if (error.message.includes('already registered')) {
      return { error: 'An account with this email already exists. Try logging in.' }
    }
    return { error: error.message }
  }

  // If email confirmation is required, there will be no session yet
  if (!data.session) {
    return { error: 'Account created! Please check your email to confirm before logging in.' }
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
    return { error: 'Invalid email or password format.' }
  }

  const supabase = await createClient()
  const { data, error } = await supabase.auth.signInWithPassword({
    email: parsed.data.email,
    password: parsed.data.password,
  })

  if (error) {
    // Generic message prevents user enumeration
    return { error: 'Invalid email or password.' }
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('onboarding_complete')
    .eq('id', data.user.id)
    .single()

  revalidatePath('/', 'layout')
  redirect(profile?.onboarding_complete === false ? '/onboarding' : '/dashboard')
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/')
}

export async function saveOnboarding(prevState: AuthState, formData: FormData): Promise<AuthState> {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'Not authenticated.' }

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
