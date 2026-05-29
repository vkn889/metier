import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#080812] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="font-headline font-black text-white/5 select-none" style={{ fontSize: 'clamp(120px,20vw,220px)', lineHeight: '1' }}>
          404
        </div>
        <div className="-mt-8 relative z-10">
          <h1 className="font-headline font-black text-white text-4xl mb-4 tracking-tight">Page not found</h1>
          <p className="text-neutral-500 font-body mb-8">
            This simulation environment doesn't exist — or it never did. Let's get you back to something real.
          </p>
          <Link href="/" className="btn-primary">
            Back to home <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
