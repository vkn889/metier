'use client'

import { useFormState, useFormStatus } from 'react-dom'
import Link from 'next/link'
import { Eye, EyeOff, LogIn } from 'lucide-react'
import { useState } from 'react'
import { logIn, type AuthState } from '@/lib/actions/auth'
import { createClient } from '@/lib/supabase/client'

const initialState: AuthState = {}

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
          Signing in…
        </span>
      ) : (
        <><LogIn className="w-4 h-4" /> Log in</>
      )}
    </button>
  )
}

export default function LoginPage() {
  const [state, action] = useFormState(logIn, initialState)
  const [showPassword, setShowPassword] = useState(false)

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
        <h1 className="text-4xl font-headline font-extrabold text-white mb-2 tracking-tight">Welcome back</h1>
        <p className="text-neutral-400 text-sm">
          Don't have an account?{' '}
          <Link href="/signup" className="text-tertiary-400 hover:text-tertiary-300 transition-colors duration-150 font-semibold">
            Sign up free
          </Link>
        </p>
      </div>

      {/* Google SSO — disabled until Google provider is configured in Supabase */}
      <button
        onClick={handleGoogleSignIn}
        disabled
        title="Google sign-in coming soon"
        className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white/5 border border-white/8 rounded-xl text-neutral-600 text-sm font-medium cursor-not-allowed mb-6 opacity-50"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Continue with Google
      </button>

      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/10" />
        </div>
        <div className="relative flex justify-center text-xs text-neutral-500">
          <span className="px-3 bg-dark">or continue with email</span>
        </div>
      </div>

      {state.error && (
        <div role="alert" className="mb-4 p-3 bg-red-500/15 border border-red-500/30 rounded-xl text-red-300 text-sm flex items-start gap-2">
          <span className="mt-0.5">⚠</span>
          {state.error}
        </div>
      )}

      <form action={action} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">Email address</label>
          <input
            id="email" name="email" type="email" required autoComplete="email"
            className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-tertiary-500/60 focus:ring-1 focus:ring-tertiary-500/30 transition-all duration-150"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="password" className="text-sm font-medium text-neutral-300">Password</label>
            <Link href="/forgot-password" className="text-xs text-tertiary-400 hover:text-tertiary-300 transition-colors">Forgot password?</Link>
          </div>
          <div className="relative">
            <input
              id="password" name="password" type={showPassword ? 'text' : 'password'} required autoComplete="current-password"
              className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 pr-12 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-tertiary-500/60 focus:ring-1 focus:ring-tertiary-500/30 transition-all duration-150"
              placeholder="Enter your password"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 cursor-pointer transition-colors"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <SubmitButton />
      </form>
    </div>
  )
}
