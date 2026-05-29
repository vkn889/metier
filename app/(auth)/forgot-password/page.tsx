'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, Mail } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setError('')

    const supabase = createClient()
    const { error: err } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/update-password`,
    })

    setLoading(false)
    if (err) {
      setError('Something went wrong. Please try again.')
    } else {
      setSent(true)
    }
  }

  if (sent) {
    return (
      <div className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-tertiary-500/20 border border-tertiary-500/30 flex items-center justify-center mx-auto mb-6">
          <Mail className="w-7 h-7 text-tertiary-400" />
        </div>
        <h2 className="text-3xl font-headline font-black text-white mb-3 tracking-tight">Check your email</h2>
        <p className="text-neutral-400 font-body text-sm leading-relaxed mb-8">
          We sent a password reset link to <span className="text-white font-semibold">{email}</span>. Check your inbox and follow the link to set a new password.
        </p>
        <p className="text-neutral-600 text-xs">
          Didn't get it?{' '}
          <button onClick={() => setSent(false)} className="text-tertiary-400 hover:text-tertiary-300 cursor-pointer transition-colors">
            Try again
          </button>
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-headline font-black text-white mb-2 tracking-tight">Reset password</h1>
        <p className="text-neutral-400 text-sm">Enter your email and we'll send you a reset link.</p>
      </div>

      {error && (
        <div role="alert" className="mb-4 p-3 bg-red-500/15 border border-red-500/30 rounded-xl text-red-300 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">Email address</label>
          <input id="email" type="email" required value={email} onChange={e => setEmail(e.target.value)}
            className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-tertiary-500/60 focus:ring-1 focus:ring-tertiary-500/30 transition-all duration-150"
            placeholder="you@example.com"
          />
        </div>
        <button type="submit" disabled={loading}
          className="btn-primary justify-center w-full text-sm py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending…
            </span>
          ) : (
            <>Send reset link <ArrowRight className="w-4 h-4" /></>
          )}
        </button>
      </form>

      <Link href="/login" className="flex items-center gap-1 text-neutral-500 hover:text-neutral-300 text-sm mt-6 cursor-pointer transition-colors">
        <ChevronLeft className="w-4 h-4" /> Back to login
      </Link>
    </div>
  )
}
