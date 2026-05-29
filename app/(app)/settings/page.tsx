'use client'

import { useState } from 'react'
import { Bell, Shield, CreditCard, User } from 'lucide-react'

const tabs = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'billing', label: 'Billing', icon: CreditCard },
]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className="p-6 lg:p-8 max-w-3xl">
      <h1 className="text-3xl font-headline font-bold text-white mb-8">Settings</h1>

      {/* Tabs */}
      <div className="flex gap-1 mb-8 bg-white/5 p-1 rounded-xl">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all duration-150 ${
                activeTab === tab.id
                  ? 'bg-tertiary-500/20 text-white border border-tertiary-500/30'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          )
        })}
      </div>

      {activeTab === 'profile' && (
        <div className="space-y-6">
          <div className="card-dark p-6">
            <h2 className="text-lg font-headline font-semibold text-white mb-5">Personal Information</h2>
            <div className="flex items-center gap-5 mb-6">
              <div className="w-16 h-16 rounded-full bg-secondary-500 border border-white/20 flex items-center justify-center text-white text-xl font-bold font-headline">
                JB
              </div>
              <div>
                <button className="btn-secondary text-xs py-2 px-4">Change Photo</button>
                <div className="text-neutral-500 text-xs mt-1">JPG, GIF or PNG. Max 2MB.</div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'First Name', value: 'Jordan', id: 'fn' },
                { label: 'Last Name', value: 'Baker', id: 'ln' },
                { label: 'Email Address', value: 'jordan@example.com', id: 'em' },
                { label: 'Career Goal', value: 'Land my first senior role', id: 'cg' },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-sm font-medium text-neutral-300 mb-2">{field.label}</label>
                  <input
                    id={field.id}
                    type="text"
                    defaultValue={field.value}
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-tertiary-500/60 transition-colors duration-150"
                  />
                </div>
              ))}
            </div>
            <div className="mt-5">
              <button className="btn-primary text-sm">Save Changes</button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'notifications' && (
        <div className="card-dark p-6">
          <h2 className="text-lg font-headline font-semibold text-white mb-5">Notification Preferences</h2>
          <div className="space-y-4">
            {[
              { label: 'AI feedback ready', desc: 'When your task evaluation is complete', enabled: true },
              { label: 'Simulation completed', desc: 'CRS report available notification', enabled: true },
              { label: 'New track available', desc: 'Weekly digest of new career tracks', enabled: false },
              { label: 'Billing reminders', desc: '7 days before subscription renewal', enabled: true },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                <div>
                  <div className="text-white text-sm font-medium">{item.label}</div>
                  <div className="text-neutral-500 text-xs font-body">{item.desc}</div>
                </div>
                <div className={`w-10 h-6 rounded-full cursor-pointer transition-colors duration-200 relative ${item.enabled ? 'bg-tertiary-500' : 'bg-white/20'}`}>
                  <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${item.enabled ? 'translate-x-4' : 'translate-x-0.5'}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'billing' && (
        <div className="space-y-4">
          <div className="card-dark p-6">
            <h2 className="text-lg font-headline font-semibold text-white mb-4">Current Plan</h2>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-tertiary-400 font-headline font-bold text-xl">Pro Plan</div>
                <div className="text-neutral-400 text-sm font-body">$29.99/month · Renews June 28, 2026</div>
              </div>
              <button className="btn-secondary text-sm py-2">Manage Plan</button>
            </div>
          </div>
          <div className="card-dark p-6">
            <h2 className="text-lg font-headline font-semibold text-white mb-4">Payment Method</h2>
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="w-10 h-7 rounded bg-white/20 flex items-center justify-center text-xs text-white font-bold">VISA</div>
              <div>
                <div className="text-white text-sm font-medium">Visa ending in 4242</div>
                <div className="text-neutral-500 text-xs">Expires 12/27</div>
              </div>
              <button className="ml-auto text-xs text-tertiary-400 hover:text-tertiary-300 cursor-pointer transition-colors duration-150">Update</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
