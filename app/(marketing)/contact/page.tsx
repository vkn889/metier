'use client'

import { useState } from 'react'
import { Send, Mail, MessageSquare, Building2 } from 'lucide-react'

const inquiryTypes = [
  { id: 'individual', label: 'Individual / Student', icon: <MessageSquare className="w-4 h-4" /> },
  { id: 'employer', label: 'Employer Partnership', icon: <Building2 className="w-4 h-4" /> },
  { id: 'institution', label: 'Institution License', icon: <Mail className="w-4 h-4" /> },
  { id: 'press', label: 'Press / Media', icon: <Send className="w-4 h-4" /> },
]

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState('individual')
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-primary-500 min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-tertiary-500/20 border border-tertiary-500/30 flex items-center justify-center mx-auto mb-6">
            <Send className="w-7 h-7 text-tertiary-400" />
          </div>
          <h2 className="text-3xl font-headline font-bold text-white mb-3">Message received.</h2>
          <p className="text-neutral-400 font-body">
            We'll get back to you within 1 business day. If this is urgent, email us directly at{' '}
            <span className="text-tertiary-400">hello@metier.com</span>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-primary-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className="section-label mb-3">Contact</div>
          <h1 className="text-5xl font-headline font-bold text-white mb-4">Get in touch</h1>
          <p className="text-neutral-400 font-body">We respond to every message within 1 business day.</p>
        </div>

        <form onSubmit={handleSubmit} className="card-dark p-10">
          {/* Inquiry type */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-white mb-3">What brings you here?</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {inquiryTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setInquiryType(type.id)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border cursor-pointer transition-all duration-150 ${
                    inquiryType === type.id
                      ? 'bg-tertiary-500/20 border-tertiary-500 text-white'
                      : 'border-white/10 text-neutral-400 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {type.icon}
                  <span className="text-xs font-medium text-center leading-tight">{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">Full Name</label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-tertiary-500/60 transition-colors duration-150"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">Email Address</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-tertiary-500/60 transition-colors duration-150"
                placeholder="you@company.com"
              />
            </div>
          </div>

          {(inquiryType === 'employer' || inquiryType === 'institution') && (
            <div className="mb-5">
              <label htmlFor="company" className="block text-sm font-medium text-neutral-300 mb-2">
                {inquiryType === 'employer' ? 'Company Name' : 'Institution Name'}
              </label>
              <input
                id="company"
                type="text"
                value={form.company}
                onChange={e => setForm({ ...form, company: e.target.value })}
                className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-tertiary-500/60 transition-colors duration-150"
                placeholder={inquiryType === 'employer' ? 'Your company' : 'Your institution'}
              />
            </div>
          )}

          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">Message</label>
            <textarea
              id="message"
              rows={5}
              required
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-tertiary-500/60 transition-colors duration-150 resize-none"
              placeholder="Tell us what you're looking to accomplish..."
            />
          </div>

          <button type="submit" className="btn-primary justify-center w-full text-base py-4">
            Send Message <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  )
}
