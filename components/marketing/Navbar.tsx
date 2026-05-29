'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Workspace', href: '/dashboard' },
  { label: 'Career Tracks', href: '/careers' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Pricing', href: '/pricing' },
  {
    label: 'Company',
    href: '#',
    children: [
      { label: 'About', href: '/about' },
      { label: 'For Employers', href: '/employers' },
      { label: 'For Institutions', href: '/institutions' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080812]/95 backdrop-blur-md border-b border-white/8 shadow-[0_1px_0_rgba(255,255,255,0.05)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 bg-tertiary-500 rounded-lg flex items-center justify-center font-headline font-black text-white text-xs shadow-glow-sm group-hover:shadow-glow-blue transition-shadow duration-300">
              M/
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-headline font-black tracking-wider text-sm uppercase">MÉTIER</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5" role="navigation" aria-label="Main navigation">
            {navLinks.map(link => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setDropdown(link.label)}
                onMouseLeave={() => setDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    pathname === link.href || pathname.startsWith(link.href + '/')
                      ? 'text-white'
                      : 'text-neutral-500 hover:text-white'
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdown === link.label ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {link.children && dropdown === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-[#0D0D1E] border border-white/10 rounded-xl shadow-[0_16px_48px_rgba(0,0,0,0.6)] overflow-hidden animate-fade-in">
                    {link.children.map(child => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-3 text-sm text-neutral-400 hover:text-white hover:bg-white/8 transition-colors duration-150"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/login" className="text-sm font-medium text-neutral-500 hover:text-white transition-colors duration-150">
              Log in
            </Link>
            <Link href="/signup" className="btn-primary text-sm py-2 px-5 !shadow-glow-sm">
              Start Free Trial
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-neutral-400 hover:text-white cursor-pointer transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/8 bg-[#080812]/98 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.label}
                href={link.href === '#' ? '/about' : link.href}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/8 transition-colors duration-150"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/8 space-y-2">
              <Link href="/login" className="block px-3 py-2.5 text-sm font-medium text-neutral-400 hover:text-white text-center transition-colors" onClick={() => setMobileOpen(false)}>
                Log in
              </Link>
              <Link href="/signup" className="btn-primary justify-center w-full text-sm py-3" onClick={() => setMobileOpen(false)}>
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
