import Sidebar from '@/components/app/Sidebar'
import { Bell, Search } from 'lucide-react'
import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  let profile = null as { first_name: string | null; last_name: string | null; subscription_tier: string } | null
  if (user) {
    const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single()
    if (data) profile = data
  }

  const firstName = profile?.first_name ?? 'J'
  const lastName = profile?.last_name ?? 'B'
  const initials = `${firstName[0] ?? 'J'}${lastName[0] ?? 'B'}`.toUpperCase()
  const name = `${firstName} ${lastName[0] ?? ''}.`.trim()

  const sidebarUser = user ? {
    name,
    email: user.email ?? '',
    initials,
    plan: profile?.subscription_tier ?? 'free',
  } : null

  return (
    <div className="flex h-screen bg-[#080812] overflow-hidden">
      <Sidebar user={sidebarUser} />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="h-14 border-b border-white/8 flex items-center px-6 gap-4 bg-[#080812]/95 backdrop-blur-sm shrink-0">
          <div className="flex-1 text-sm text-neutral-600">
            Simulation:{' '}
            <span className="text-white font-semibold">Management Trainee</span>
          </div>

          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-700" aria-hidden="true" />
            <input
              type="search"
              placeholder="Search data points…"
              className="bg-white/[0.04] border border-white/8 rounded-lg pl-8 pr-4 py-1.5 text-xs text-white placeholder-neutral-700 focus:outline-none focus:border-tertiary-500/40 w-52 transition-colors duration-150"
            />
          </div>

          <button
            className="relative w-8 h-8 rounded-xl bg-white/[0.04] border border-white/8 flex items-center justify-center text-neutral-600 hover:text-white hover:bg-white/8 transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#080812]"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4" aria-hidden="true" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-red-500" aria-hidden="true" />
          </button>

          <div
            className="w-8 h-8 rounded-full bg-secondary-500 border border-white/15 flex items-center justify-center text-white text-[11px] font-black font-headline cursor-default hover:border-tertiary-500/40 transition-all duration-150"
            aria-label={`Logged in as ${name}`}
          >
            {initials}
          </div>
        </header>

        <main className="flex-1 overflow-y-auto app-scroll">
          {children}
        </main>
      </div>
    </div>
  )
}
