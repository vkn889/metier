import Link from 'next/link'
import { ArrowRight, Users, BookOpen, BarChart3, Shield, CheckCircle, GraduationCap } from 'lucide-react'

const benefits = [
  { icon: <BookOpen className="w-5 h-5" />, title: 'Beyond Resume Workshops', desc: 'Move from passive career prep to active simulation. Students produce real deliverables, not just job application documents.' },
  { icon: <BarChart3 className="w-5 h-5" />, title: 'Cohort Analytics', desc: 'Track every student\'s Career Readiness Score, completion rate, and skill gap across your entire program at a glance.' },
  { icon: <Users className="w-5 h-5" />, title: 'Bulk Enrollment', desc: 'Import student rosters via CSV, manage cohort access, and assign simulations directly from the institutional dashboard.' },
  { icon: <Shield className="w-5 h-5" />, title: 'FERPA Compliant', desc: 'Educational records handled per FERPA guidelines. Institutional admins control data access and student sharing permissions.' },
]

const outcomes = [
  { stat: '3×', label: 'Higher interview conversion vs. credential-only applicants' },
  { stat: '78%', label: 'Of partner institution students land roles within 6 months' },
  { stat: '40%', label: 'Reduction in career center counselor time per student' },
  { stat: '92%', label: 'Student satisfaction rate across institutional deployments' },
]

export default function InstitutionsPage() {
  return (
    <div className="bg-primary-500">
      {/* Hero */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4">For Institutions</div>
              <h1 className="text-5xl lg:text-6xl font-headline font-bold text-white mb-6">
                Prepare students with
                <span className="gradient-text"> proven competence.</span>
              </h1>
              <p className="text-neutral-300 font-body text-xl leading-relaxed mb-10">
                License Métier for your university, bootcamp, or workforce program. Give every student hands-on simulation experience backed by a score employers actually use.
              </p>
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                Schedule a Demo <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="card-dark p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-tertiary-500/20 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-tertiary-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">Institutional Dashboard</div>
                  <div className="text-neutral-400 text-sm font-label">Cohort Q3 — 2026</div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  { label: 'Active Students', value: 487, max: 500 },
                  { label: 'Avg. CRS Score', value: 76, max: 100 },
                  { label: 'Completion Rate', value: 84, max: 100 },
                ].map((metric) => (
                  <div key={metric.label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-neutral-400 font-label">{metric.label}</span>
                      <span className="text-xs text-white font-semibold">{metric.value}/{metric.max}</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-tertiary-500 rounded-full"
                        style={{ width: `${(metric.value / metric.max) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                <div className="text-green-400 text-sm font-semibold mb-1">Top Performers This Cycle</div>
                <div className="text-neutral-300 text-xs">24 students scored 90+ CRS — eligible for employer spotlight listing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-headline font-bold text-white mb-4">The Institutional Advantage</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="card-dark p-6 hover:border-white/20 transition-all duration-200 cursor-default">
                <div className="w-10 h-10 rounded-lg bg-tertiary-500/20 flex items-center justify-center text-tertiary-400 mb-4">
                  {b.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{b.title}</h3>
                <p className="text-neutral-400 text-sm font-body leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-label mb-3">Outcomes</div>
            <h2 className="text-4xl font-headline font-bold text-white">Measurable impact, institution-wide</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((o) => (
              <div key={o.label} className="text-center card-dark p-8">
                <div className="text-5xl font-headline font-bold gradient-text mb-3">{o.stat}</div>
                <div className="text-neutral-400 text-sm font-body leading-relaxed">{o.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary text-base px-10 py-4">
              Partner With Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
