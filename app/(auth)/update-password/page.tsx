'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { useState } from 'react'
import { Eye, EyeOff, Check } from 'lucide-react'
import { updatePassword, type AuthState } from '@/lib/actions/auth'

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
        {[0, 1, 2, 3].map(i => (
          <div key={i} className={`h-1 flex-1 rounded-full transition-colors duration-300 ${i < strength ? colors[strength - 1] : 'bg-white/10'}`} />
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
          Saving…
        </span>
      ) : 'Set new password'}
    </button>
  )
}

export default function UpdatePasswordPage() {
  const [state, action] = useFormState(updatePassword, initialState)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [password, setPassword] = useState('')

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-headline font-extrabold text-white mb-2 tracking-tight">Set new password</h1>
        <p className="text-neutral-400 text-sm">Choose a strong password for your account.</p>
      </div>

      {state.error && (
        <div role="alert" className="mb-4 p-3 bg-red-500/15 border border-red-500/30 rounded-xl text-red-300 text-sm flex items-start gap-2">
          <span className="mt-0.5">⚠</span>
          {state.error}
        </div>
      )}

      <form action={action} className="space-y-4">
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-neutral-300 mb-2">New password</label>
          <div className="relative">
            <input
              id="password" name="password" type={showPassword ? 'text' : 'password'} required
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
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-300 mb-2">Confirm password</label>
          <div className="relative">
            <input
              id="confirmPassword" name="confirmPassword" type={showConfirm ? 'text' : 'password'} required
              className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 pr-12 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-tertiary-500/60 focus:ring-1 focus:ring-tertiary-500/30 transition-all duration-150"
              placeholder="Repeat your password"
            />
            <button type="button" onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 cursor-pointer transition-colors"
              aria-label={showConfirm ? 'Hide password' : 'Show password'}
            >
              {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <SubmitButton />
      </form>
    </div>
  )
}
