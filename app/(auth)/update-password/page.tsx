'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { updatePassword, type AuthState } from '@/lib/actions/auth'

const initialState: AuthState = {}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button type="submit" disabled={pending}
      className="w-full py-3 px-4 bg-tertiary-500 hover:bg-tertiary-600 text-white text-sm font-semibold font-headline rounded-xl transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {pending ? (
        <>
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Saving…
        </>
      ) : 'Set new password'}
    </button>
  )
}

export default function UpdatePasswordPage() {
  const [state, action] = useFormState(updatePassword, initialState)
  const [show, setShow] = useState(false)
  const [showC, setShowC] = useState(false)

  return (
    <>
      <h1 className="text-xl font-headline font-bold text-white mb-1">Set new password</h1>
      <p className="text-neutral-500 text-sm mb-7">Must be 8+ chars with uppercase, number, and symbol.</p>

      {state.error && (
        <div role="alert" className="mb-5 p-3 bg-red-500/10 border border-red-500/25 rounded-xl text-red-400 text-sm">
          {state.error}
        </div>
      )}

      <form action={action} className="space-y-4">
        <div>
          <label htmlFor="password" className="block text-xs font-medium text-neutral-400 mb-1.5 uppercase tracking-wider">New password</label>
          <div className="relative">
            <input id="password" name="password" type={show ? 'text' : 'password'} required
              placeholder="Create a strong password"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-11 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-tertiary-500/60 focus:ring-1 focus:ring-tertiary-500/20 transition-all duration-150"
            />
            <button type="button" onClick={() => setShow(s => !s)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-600 hover:text-neutral-400 transition-colors">
              {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-xs font-medium text-neutral-400 mb-1.5 uppercase tracking-wider">Confirm password</label>
          <div className="relative">
            <input id="confirmPassword" name="confirmPassword" type={showC ? 'text' : 'password'} required
              placeholder="Repeat your password"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-11 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-tertiary-500/60 focus:ring-1 focus:ring-tertiary-500/20 transition-all duration-150"
            />
            <button type="button" onClick={() => setShowC(s => !s)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-600 hover:text-neutral-400 transition-colors">
              {showC ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <SubmitButton />
      </form>
    </>
  )
}
