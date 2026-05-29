'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'
import { logIn, type AuthState } from '@/lib/actions/auth'

const initialState: AuthState = {}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-3 px-4 bg-tertiary-500 hover:bg-tertiary-600 active:bg-tertiary-700 text-white text-sm font-semibold font-headline rounded-xl transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {pending ? (
        <>
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Signing in…
        </>
      ) : 'Sign in'}
    </button>
  )
}

export default function LoginPage() {
  const [state, action] = useFormState(logIn, initialState)
  const [show, setShow] = useState(false)

  return (
    <>
      <h1 className="text-xl font-headline font-bold text-white mb-1">Welcome back</h1>
      <p className="text-neutral-500 text-sm mb-7">
        No account?{' '}
        <Link href="/signup" className="text-tertiary-400 hover:text-tertiary-300 transition-colors font-medium">
          Sign up free
        </Link>
      </p>

      {state.error && (
        <div role="alert" className="mb-5 p-3 bg-red-500/10 border border-red-500/25 rounded-xl text-red-400 text-sm">
          {state.error}
        </div>
      )}

      <form action={action} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-neutral-400 mb-1.5 uppercase tracking-wider">
            Email
          </label>
          <input
            id="email" name="email" type="email" required autoComplete="email"
            placeholder="you@example.com"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-tertiary-500/60 focus:ring-1 focus:ring-tertiary-500/20 transition-all duration-150"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="password" className="block text-xs font-medium text-neutral-400 uppercase tracking-wider">
              Password
            </label>
            <Link href="/forgot-password" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <input
              id="password" name="password" type={show ? 'text' : 'password'} required autoComplete="current-password"
              placeholder="••••••••"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-11 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-tertiary-500/60 focus:ring-1 focus:ring-tertiary-500/20 transition-all duration-150"
            />
            <button
              type="button" onClick={() => setShow(s => !s)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-600 hover:text-neutral-400 transition-colors"
            >
              {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <SubmitButton />
      </form>
    </>
  )
}
