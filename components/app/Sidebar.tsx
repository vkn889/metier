'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Layers, Wrench, BarChart3, Settings, Plus, LogOut } from 'lucide-react'
import clsx from 'clsx'
import { signOut } from '@/lib/actions/auth'

const navItems = [
  { label: 'Workspace',    href: '/dashboard',   icon: LayoutDashboard },
  { label: 'Career Track', href: '/library',      icon: Layers },
  { label: 'Skill Lab',    href: '/skilllab',     icon: Wrench },
  { label: 'Performance',  href: '/performance',  icon: BarChart3 },
  { label: 'Settings',     href: '/settings',     icon: Settings },
]

interface SidebarProps {
  user?: { name: string; email: string; initials: string; plan: string } | null
}

export default function Sidebar({ user }: SidebarProps) {
  const pathname = usePathname()

  return (
    <aside className="w-56 shrink-0 bg-[#06060F] border-r border-white/8 flex flex-col h-screen sticky top-0 z-40">
      {/* Logo */}
      <div className="px-4 py-4 border-b border-white/8">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 bg-tertiary-500 rounded-md flex items-center justify-center font-headline font-black text-white text-xs shadow-glow-sm group-hover:shadow-glow-blue transition-shadow duration-200">
            M/
          </div>
          <div>
            <p className="text-white font-headline font-black text-xs uppercase tracking-wider leading-none">MÉTIER</p>
            <p className="text-neutral-700 text-[9px] font-label leading-none mt-0.5">Career Simulator</p>
          </div>
        </Link>
      </div>

      {/* Simulation context */}
      <div className="px-4 py-3 border-b border-white/8">
        <p className="text-[9px] text-neutral-700 font-label uppercase tracking-wider mb-0.5">Active Simulation</p>
        <p className="text-white text-xs font-bold leading-tight truncate">Management Trainee</p>
        <p className="text-tertiary-500 text-[10px] font-label">Q3_WK12</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto app-scroll" role="navigation" aria-label="App navigation">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = pathname === href || (href !== '/dashboard' && pathname.startsWith(href))
          return (
            <Link
              key={label}
              href={href}
              className={clsx(
                'flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-150',
                active
                  ? 'text-white bg-tertiary-500/15 border border-tertiary-500/25'
                  : 'text-neutral-600 hover:text-white hover:bg-white/6 border border-transparent'
              )}
            >
              <Icon className={clsx('w-4 h-4 shrink-0', active ? 'text-tertiary-400' : '')} aria-hidden="true" />
              {label}
            </Link>
          )
        })}
      </nav>

      {/* Bottom */}
      <div className="px-3 py-4 border-t border-white/8 space-y-2">
        {/* New simulation */}
        <button className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-tertiary-500 text-white text-[13px] font-black hover:bg-tertiary-400 active:bg-tertiary-600 transition-colors duration-150 cursor-pointer shadow-glow-sm focus:outline-none focus:ring-2 focus:ring-tertiary-400 focus:ring-offset-2 focus:ring-offset-[#06060F]">
          <Plus className="w-4 h-4" aria-hidden="true" />
          New Simulation
        </button>

        {/* User row */}
        <div className="flex items-center gap-2.5 px-2 py-1.5 rounded-xl hover:bg-white/5 transition-colors duration-150 cursor-default group">
          <div className="w-7 h-7 rounded-full bg-secondary-500 border border-white/15 flex items-center justify-center text-white text-[10px] font-black font-headline shrink-0">
            {user?.initials ?? 'JB'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-xs font-semibold truncate">{user?.name ?? 'Jordan B.'}</p>
            <p className="text-neutral-700 text-[10px] font-label capitalize">{user?.plan ?? 'Free'} Plan</p>
          </div>
          {/* Sign out */}
          <form action={signOut}>
            <button type="submit" aria-label="Sign out"
              className="opacity-0 group-hover:opacity-100 text-neutral-600 hover:text-red-400 cursor-pointer transition-all duration-150 focus:outline-none focus:opacity-100"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </aside>
  )
}
