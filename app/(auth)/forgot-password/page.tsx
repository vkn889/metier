'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const supabase = createClient()
    const { error: err } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/update-password`,
    })
    setLoading(false)
    if (err) setError('Could not send reset email. Please try again.')
    else setSent(true)
  }

  if (sent) {
    return (
      <div className="text-center">
        <div className="w-12 h-12 rounded-2xl bg-tertiary-500/20 border border-tertiary-500/30 flex items-center justify-center mx-auto mb-5">
          <svg className="w-5 h-5 text-tertiary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="text-lg font-headline font-bold text-white mb-2">Check your email</h2>
        <p className="text-neutral-400 text-sm leading-relaxed mb-6">
          Sent a reset link to <span className="text-white font-medium">{email}</span>. Click it to set a new password.
        </p>
        <Link href="/login" className="text-tertiary-400 hover:text-tertiary-300 text-sm transition-colors">
          Back to login
        </Link>
      </div>
    )
  }

  return (
    <>
      <h1 className="text-xl font-headline font-bold text-white mb-1">Reset password</h1>
      <p className="text-neutral-500 text-sm mb-7">Enter your email and we'll send a reset link.</p>

      {error && (
        <div role="alert" className="mb-5 p-3 bg-red-500/10 border border-red-500/25 rounded-xl text-red-400 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-neutral-400 mb-1.5 uppercase tracking-wider">Email</label>
          <input id="email" type="email" required value={email} onChange={e => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-tertiary-500/60 focus:ring-1 focus:ring-tertiary-500/20 transition-all duration-150"
          />
        </div>
        <button type="submit" disabled={loading}
          className="w-full py-3 px-4 bg-tertiary-500 hover:bg-tertiary-600 text-white text-sm font-semibold font-headline rounded-xl transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Sending…' : 'Send reset link'}
        </button>
      </form>

      <Link href="/login" className="flex items-center gap-1 text-neutral-500 hover:text-neutral-300 text-sm mt-6 transition-colors">
        <ChevronLeft className="w-4 h-4" /> Back to login
      </Link>
    </>
  )
}
