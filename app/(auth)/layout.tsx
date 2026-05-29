import Link from 'next/link'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-dark flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-5/12 flex-col bg-hero-gradient relative overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-tertiary-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col h-full p-12">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-tertiary-500 rounded-lg flex items-center justify-center font-headline font-bold text-white text-sm">M/</div>
            <span className="text-white font-headline font-semibold tracking-wide text-sm uppercase">MÉTIER</span>
          </Link>

          <div className="flex-1 flex flex-col justify-center">
            <div className="section-label mb-4">Career Simulator</div>
            <h2 className="text-4xl font-headline font-bold text-white mb-6 leading-tight">
              Precision performance,
              <br />
              <span className="gradient-text">earned by doing.</span>
            </h2>
            <p className="text-neutral-400 font-body leading-relaxed max-w-sm">
              Complete real professional tasks. Receive AI-driven feedback. Build the portfolio that proves you can do the work.
            </p>

            <div className="mt-12 space-y-4">
              {[
                { label: '10,000+', desc: 'Active professionals' },
                { label: '94%', desc: 'Interview success rate' },
                { label: '50+', desc: 'Career tracks available' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="text-2xl font-headline font-bold gradient-text w-20">{item.label}</div>
                  <div className="text-neutral-400 text-sm font-body">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-neutral-600 text-xs">© 2026 Métier. All rights reserved.</p>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-12 xl:px-16">
        <div className="lg:hidden mb-8 flex justify-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-tertiary-500 rounded-lg flex items-center justify-center font-headline font-bold text-white text-sm">M/</div>
            <span className="text-white font-headline font-semibold tracking-wide text-sm uppercase">MÉTIER</span>
          </Link>
        </div>
        <div className="max-w-md w-full mx-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
