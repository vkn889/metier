import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const team = [
  { name: 'Elena R.', title: 'CEO & Co-Founder', background: 'Former Head of Talent at McKinsey. Built early-career pipelines for 5,000+ hires.' },
  { name: 'James W.', title: 'CTO & Co-Founder', background: 'Ex-Staff Engineer at OpenAI. Designed AI evaluation systems for Fortune 100 clients.' },
  { name: 'Sana K.', title: 'Head of Product', background: 'Former PM at LinkedIn Learning. Led career development products used by 10M+ users.' },
  { name: 'Marcus T.', title: 'Head of Partnerships', background: 'Built employer programs at Handshake. Grew institutional network from 20 to 500+ schools.' },
]

const values = [
  { title: 'Competence over credentials', desc: 'We believe demonstrated ability is the only fair proxy for potential. Degrees and GPAs are signals — simulated work is proof.' },
  { title: 'Precision over volume', desc: 'We refuse to be another passive learning platform. Every interaction is designed to produce a measurable, defensible output.' },
  { title: 'Earned confidence', desc: 'The best career preparation builds real self-knowledge — not just skills, but the evidence that you have them.' },
]

export default function AboutPage() {
  return (
    <div className="bg-primary-500">
      {/* Mission */}
      <section className="py-24 lg:py-32 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-label mb-4">Our Mission</div>
          <h1 className="text-5xl lg:text-7xl font-headline font-bold text-white mb-8 leading-tight">
            Career readiness, based on
            <span className="gradient-text"> what you can do.</span>
          </h1>
          <p className="text-xl text-neutral-300 font-body leading-relaxed">
            Métier exists to close the gap between education and employment — not with more courses, but with real work. We build the infrastructure that makes demonstrated competence the global standard for career validation.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4">The Story</div>
              <h2 className="text-4xl font-headline font-bold text-white mb-6">Built by people who've seen both sides</h2>
              <div className="space-y-4 text-neutral-300 font-body leading-relaxed">
                <p>
                  Métier was founded in 2024 after our founders — coming from talent acquisition, AI engineering, and product — realized the same thing independently: the hiring system was broken in the same direction at every level.
                </p>
                <p>
                  Candidates were unprepared for the actual work. Employers were screening on proxies that predicted little. Career centers were running the same workshops they ran in 1997.
                </p>
                <p>
                  We built Métier to be the infrastructure that fixes all three problems at once — by making real work the unit of career exchange.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: '2024', label: 'Founded' },
                { stat: '10K+', label: 'Users' },
                { stat: '50+', label: 'Career tracks' },
                { stat: '20+', label: 'University partners' },
              ].map((item) => (
                <div key={item.label} className="card-dark p-6 text-center">
                  <div className="text-4xl font-headline font-bold gradient-text mb-2">{item.stat}</div>
                  <div className="text-neutral-400 text-sm font-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary-500/20 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-headline font-bold text-white">What we believe</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card-dark p-8">
                <h3 className="text-xl font-headline font-bold text-white mb-4">{v.title}</h3>
                <p className="text-neutral-400 font-body leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-label mb-3">The Team</div>
            <h2 className="text-4xl font-headline font-bold text-white">People who've been in the room</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="card-dark p-6 hover:border-white/20 transition-all duration-200 cursor-default text-center">
                <div className="w-16 h-16 rounded-2xl bg-tertiary-500/20 border border-tertiary-500/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-headline font-bold text-tertiary-300">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="text-white font-semibold mb-0.5">{member.name}</div>
                <div className="text-tertiary-400 text-sm font-label mb-3">{member.title}</div>
                <div className="text-neutral-400 text-xs font-body leading-relaxed">{member.background}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="card-dark p-14 text-center">
          <h2 className="text-4xl font-headline font-bold text-white mb-4">Join the movement</h2>
          <p className="text-neutral-400 font-body mb-8 max-w-md mx-auto">
            Whether you're a job seeker, an employer, or an institution — Métier has a path for you.
          </p>
          <Link href="/signup" className="btn-primary text-base px-10 py-4">
            Get Started Free <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
