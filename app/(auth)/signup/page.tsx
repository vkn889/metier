'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'
import { signUp, type AuthState } from '@/lib/actions/auth'

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
          Creating account…
        </>
      ) : 'Create account'}
    </button>
  )
}

export default function SignupPage() {
  const [state, action] = useFormState(signUp, initialState)
  const [show, setShow] = useState(false)

  return (
    <>
      <h1 className="text-xl font-headline font-bold text-white mb-1">Create your account</h1>
      <p className="text-neutral-500 text-sm mb-7">
        Already have one?{' '}
        <Link href="/login" className="text-tertiary-400 hover:text-tertiary-300 transition-colors font-medium">
          Sign in
        </Link>
      </p>

      {state.error && (
        <div role="alert" className="mb-5 p-3 bg-red-500/10 border border-red-500/25 rounded-xl text-red-400 text-sm">
          {state.error}
        </div>
      )}
      {state.info && (
        <div role="status" className="mb-5 p-3 bg-tertiary-500/10 border border-tertiary-500/25 rounded-xl text-tertiary-300 text-sm">
          {state.info}
        </div>
      )}

      <form action={action} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="firstName" className="block text-xs font-medium text-neutral-400 mb-1.5 uppercase tracking-wider">First</label>
            <input id="firstName" name="firstName" type="text" required autoComplete="given-name"
              placeholder="Viraat"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-tertiary-500/60 focus:ring-1 focus:ring-tertiary-500/20 transition-all duration-150"
            />
            {state.fieldErrors?.firstName && (
              <p className="text-red-400 text-xs mt-1">{state.fieldErrors.firstName[0]}</p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-xs font-medium text-neutral-400 mb-1.5 uppercase tracking-wider">Last</label>
            <input id="lastName" name="lastName" type="text" required autoComplete="family-name"
              placeholder="Nellutla"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-tertiary-500/60 focus:ring-1 focus:ring-tertiary-500/20 transition-all duration-150"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-medium text-neutral-400 mb-1.5 uppercase tracking-wider">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email"
            placeholder="you@example.com"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-tertiary-500/60 focus:ring-1 focus:ring-tertiary-500/20 transition-all duration-150"
          />
          {state.fieldErrors?.email && (
            <p className="text-red-400 text-xs mt-1">{state.fieldErrors.email[0]}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-xs font-medium text-neutral-400 mb-1.5 uppercase tracking-wider">Password</label>
          <div className="relative">
            <input id="password" name="password" type={show ? 'text' : 'password'} required autoComplete="new-password"
              placeholder="Min 8 chars, uppercase, number, symbol"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-11 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-tertiary-500/60 focus:ring-1 focus:ring-tertiary-500/20 transition-all duration-150"
            />
            <button type="button" onClick={() => setShow(s => !s)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-600 hover:text-neutral-400 transition-colors"
            >
              {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {state.fieldErrors?.password && (
            <p className="text-red-400 text-xs mt-1">{state.fieldErrors.password[0]}</p>
          )}
        </div>

        <SubmitButton />
      </form>

      <p className="mt-5 text-neutral-600 text-xs text-center">
        By continuing you agree to our{' '}
        <Link href="/terms" className="hover:text-neutral-400 transition-colors">Terms</Link>
        {' & '}
        <Link href="/privacy" className="hover:text-neutral-400 transition-colors">Privacy</Link>
      </p>
    </>
  )
}
