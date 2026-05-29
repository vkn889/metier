import Link from 'next/link'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#080812] flex flex-col items-center justify-center px-4 py-12">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 mb-10">
        <div className="w-9 h-9 bg-tertiary-500 rounded-xl flex items-center justify-center shadow-glow-sm">
          <span className="text-white font-headline font-black text-sm leading-none">M/</span>
        </div>
        <span className="text-white font-headline font-black tracking-widest text-sm uppercase">MÉTIER</span>
      </Link>

      {/* Card */}
      <div className="w-full max-w-sm bg-primary-500/60 border border-white/10 rounded-2xl p-8 shadow-card">
        {children}
      </div>

      <p className="mt-8 text-neutral-600 text-xs">© 2026 Métier. All rights reserved.</p>
    </div>
  )
}
