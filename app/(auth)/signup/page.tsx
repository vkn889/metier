'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, ArrowRight, Check } from 'lucide-react'
import { signUp, type AuthState } from '@/lib/actions/auth'
import { createClient } from '@/lib/supabase/client'

const initialState: AuthState = {}

function PasswordStrength({ password }: { password: string }) {
  const checks = [
    { label: '8+ characters', ok: password.length >= 8 },
    { label: 'Uppercase', ok: /[A-Z]/.test(password) },
    { label: 'Number', ok: /\d/.test(password) },
    { label: 'Special char', ok: /[!@#$%^&*]/.test(password) },
  ]
  const strength = checks.filter(c => c.ok).length
  const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500']
  if (!password) return null
  return (
    <div className="mt-2 space-y-1.5">
      <div className="flex gap-1">
        {[0,1,2,3].map(i => (
          <div key={i} className={`h-1 flex-1 rounded-full transition-colors duration-300 ${i < strength ? colors[strength-1] : 'bg-white/10'}`} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
        {checks.map(c => (
          <div key={c.label} className={`flex items-center gap-1 text-xs transition-colors ${c.ok ? 'text-green-400' : 'text-neutral-600'}`}>
            <Check className="w-3 h-3" />{c.label}
          </div>
        ))}
      </div>
    </div>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button type="submit" disabled={pending}
      className="btn-primary justify-center w-full text-sm py-3.5 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
    >
      {pending ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Creating account…
        </span>
      ) : (
        <>Create free account <ArrowRight className="w-4 h-4" /></>
      )}
    </button>
  )
}

export default function SignupPage() {
  const [state, action] = useFormState(signUp, initialState)
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')

  const handleGoogleSignIn = async () => {
    const supabase = createClient()
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    })
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-headline font-extrabold text-white mb-2 tracking-tight">Create your account</h1>
        <p className="text-neutral-400 text-sm">
          Already have an account?{' '}
          <Link href="/login" className="text-tertiary-400 hover:text-tertiary-300 transition-colors font-semibold">Log in</Link>
        </p>
      </div>

      {/* Google sign-up — disabled until Google provider is configured in Supabase */}
      <button onClick={handleGoogleSignIn}
        disabled
        title="Google sign-up coming soon"
        className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white/5 border border-white/8 rounded-xl text-neutral-600 text-sm font-medium cursor-not-allowed mb-6 opacity-50"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Sign up with Google
      </button>

      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10" /></div>
        <div className="relative flex justify-center text-xs text-neutral-500">
          <span className="px-3 bg-dark">or sign up with email</span>
        </div>
      </div>

      {state.error && (
        <div role="alert" className="mb-4 p-3 bg-red-500/15 border border-red-500/30 rounded-xl text-red-300 text-sm flex items-start gap-2">
          <span>⚠</span>{state.error}
        </div>
      )}

      <form action={action} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-neutral-300 mb-2">First name</label>
            <input id="firstName" name="firstName" type="text" required autoComplete="given-name"
              className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-tertiary-500/60 focus:ring-1 focus:ring-tertiary-500/30 transition-all duration-150"
              placeholder="Jordan"
            />
            {state.fieldErrors?.firstName && <p className="text-red-400 text-xs mt-1">{state.fieldErrors.firstName[0]}</p>}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-neutral-300 mb-2">Last name</label>
            <input id="lastName" name="lastName" type="text" required autoComplete="family-name"
              className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-tertiary-500/60 focus:ring-1 focus:ring-tertiary-500/30 transition-all duration-150"
              placeholder="Smith"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">Email address</label>
          <input id="email" name="email" type="email" required autoComplete="email"
            className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-tertiary-500/60 focus:ring-1 focus:ring-tertiary-500/30 transition-all duration-150"
            placeholder="you@example.com"
          />
          {state.fieldErrors?.email && <p className="text-red-400 text-xs mt-1">{state.fieldErrors.email[0]}</p>}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-neutral-300 mb-2">Password</label>
          <div className="relative">
            <input id="password" name="password" type={showPassword ? 'text' : 'password'} required autoComplete="new-password"
              value={password} onChange={e => setPassword(e.target.value)}
              className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 pr-12 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-tertiary-500/60 focus:ring-1 focus:ring-tertiary-500/30 transition-all duration-150"
              placeholder="Create a strong password"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 cursor-pointer transition-colors"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          <PasswordStrength password={password} />
          {state.fieldErrors?.password && <p className="text-red-400 text-xs mt-1">{state.fieldErrors.password[0]}</p>}
        </div>

        <SubmitButton />

        <p className="text-neutral-500 text-xs text-center">
          By signing up you agree to our{' '}
          <Link href="/terms" className="text-tertiary-400 hover:text-tertiary-300 transition-colors">Terms</Link>
          {' '}and{' '}
          <Link href="/privacy" className="text-tertiary-400 hover:text-tertiary-300 transition-colors">Privacy Policy</Link>
        </p>
      </form>
    </div>
  )
}
