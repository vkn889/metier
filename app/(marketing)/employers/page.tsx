import Link from 'next/link'
import { ArrowRight, Users, BarChart3, Settings, Shield, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'Simulation Builder',
    description: 'Build a company-branded simulation in hours. Choose from pre-built task templates or write custom briefs. Configure your AI manager persona, evaluation weights, and publishing settings.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Candidate Pipeline',
    description: 'View every candidate who completes your simulation. Access their full Career Readiness Score, dimension breakdown, and work samples — before a single interview.',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Cohort Analytics',
    description: 'Understand your candidate pool at scale. See performance distributions, skill gaps, and top performers across your entire applicant cohort.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II compliant infrastructure. All candidate data encrypted at rest and in transit. GDPR and CCPA ready. Dedicated security documentation available on request.',
  },
]

const useCases = [
  { label: 'Pre-screen candidates before first-round interviews' },
  { label: 'Replace or supplement resume review entirely' },
  { label: 'Identify top performers from high-volume applicant pools' },
  { label: 'Reduce time-to-hire by 40% on average' },
  { label: 'Build employer brand as a skills-first company' },
  { label: 'Source from Métier\'s 10,000+ user candidate network' },
]

export default function EmployersPage() {
  return (
    <div className="bg-primary-500">
      {/* Hero */}
      <section className="py-24 lg:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="section-label mb-4">For Employers</div>
            <h1 className="text-5xl lg:text-6xl font-headline font-bold text-white mb-6">
              Hire on demonstrated competence,
              <span className="gradient-text"> not résumés.</span>
            </h1>
            <p className="text-neutral-300 font-body text-xl leading-relaxed mb-10">
              Partner with Métier to build your own simulation, source pre-validated candidates, and make hiring decisions backed by real work samples — not GPA and credential proxies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                Book a Demo <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/careers" className="btn-secondary text-base px-8 py-4">
                Browse Candidate Pool
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-headline font-bold text-white mb-4">The Employer Platform</h2>
            <p className="text-neutral-400 font-body max-w-xl mx-auto">
              A complete talent intelligence layer — from simulation builder to candidate analytics.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="card-dark p-8 hover:border-white/20 transition-all duration-300 cursor-default">
                <div className="w-12 h-12 rounded-xl bg-tertiary-500/20 border border-tertiary-500/30 flex items-center justify-center text-tertiary-400 mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-headline font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-neutral-400 font-body leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 bg-secondary-500/20 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4">Why Partners Choose Métier</div>
              <h2 className="text-4xl font-headline font-bold text-white mb-8">
                The most signal-rich hiring layer available.
              </h2>
              <ul className="space-y-4">
                {useCases.map((uc) => (
                  <li key={uc.label} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-tertiary-400 shrink-0" />
                    <span className="text-neutral-300 font-body">{uc.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-dark p-8">
              <h3 className="text-2xl font-headline font-bold text-white mb-2">Ready to build your first simulation?</h3>
              <p className="text-neutral-400 font-body mb-6">
                Our team will walk you through the simulation builder, help you configure your first track, and set up your candidate pipeline — all within one onboarding session.
              </p>
              <div className="space-y-3 mb-6">
                {['Company name', 'Your name & title', 'Team email'].map((field) => (
                  <input
                    key={field}
                    type="text"
                    placeholder={field}
                    className="w-full bg-white/10 border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-tertiary-500/50 transition-colors duration-150"
                  />
                ))}
              </div>
              <Link href="/contact" className="btn-primary justify-center w-full">
                Book Your Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
