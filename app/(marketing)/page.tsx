'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight, Star, TrendingUp, Target, Award, Zap, Users, Building2, BookOpen } from 'lucide-react'
import { Reveal, StaggerContainer, fadeUp, scaleIn, slideRight, staggerFast } from '@/components/ui/motion'

// ─── Animation variants ───────────────────────────────────────────────
const heroTitle = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const heroWord = {
  hidden: { opacity: 0, y: 60, skewY: 3 },
  visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const stats = [
  { value: '10,000+', label: 'Active Users' },
  { value: '50+', label: 'Career Tracks' },
  { value: '20', label: 'Universities' },
  { value: '94%', label: 'Placement Rate' },
]

const steps = [
  { number: '01', icon: <Target className="w-5 h-5" />, title: 'Choose Your Path', description: 'Select from 50+ career tracks across industries. Each simulation mirrors real executive-level challenges at a specific seniority.' },
  { number: '02', icon: <Zap className="w-5 h-5" />, title: 'Complete Real Tasks', description: 'Work through authentic deliverables — reports, analyses, emails, presentations — exactly as you would on the job, with an AI manager.' },
  { number: '03', icon: <Award className="w-5 h-5" />, title: 'Earn Your Score', description: 'Receive a Career Readiness Score with AI-driven feedback across 5 professional dimensions. Export it. Share it. Use it to get hired.' },
]

const tracks = [
  { category: 'Technology', weeks: 12, rating: 4.9, title: 'Senior Product Analyst', description: 'Master data-driven decision making across analytics pipelines and exec presentations.', color: 'from-blue-700/80 to-tertiary-700/80', label: 'HOT TRACK' },
  { category: 'Leadership', weeks: 8, rating: 4.7, title: 'Management Trainee', description: 'Foundational executive skills including resource allocation and conflict resolution.', color: 'from-secondary-600/80 to-primary-700/80', label: '' },
  { category: 'Finance & Ops', weeks: 10, rating: 4.8, title: 'FinOps Director', description: 'Advance in cloud economics and organizational financial agility at Fortune 500 scale.', color: 'from-emerald-800/80 to-teal-800/80', label: 'CERTIFIED' },
  { category: 'Strategy', weeks: 5, rating: 4.6, title: 'Strategy Consultant', description: 'Solve macro-economic puzzles for Fortune 500 conglomerates in a risk-free lab.', color: 'from-purple-800/80 to-secondary-700/80', label: '' },
  { category: 'AI & Data', weeks: 8, rating: 4.9, title: 'AI Operations Lead', description: 'Integrate generative AI workflows into existing enterprise pipelines end-to-end.', color: 'from-tertiary-700/80 to-purple-700/80', label: 'NEXT GEN' },
  { category: 'Design', weeks: 6, rating: 4.7, title: 'UX Research Lead', description: 'Master usability testing, synthesis, and research-to-design handoff at scale.', color: 'from-pink-800/80 to-rose-800/80', label: '' },
]

const testimonials = [
  { quote: "Métier gave me something no bootcamp could — real deliverables I could show in interviews. I landed my first data role 3 weeks after completing the track.", name: 'Jordan K.', role: 'Junior Data Analyst, Stripe', initials: 'JK' },
  { quote: "I switched from retail to UX after completing the designer track. The simulation felt like actual work, not coursework. My portfolio spoke for itself.", name: 'Priya M.', role: 'UX Designer, Figma', initials: 'PM' },
  { quote: "We use Métier to pre-screen candidates before first-round interviews. The signal is far better than anything we get from résumés.", name: 'Marcus T.', role: 'Head of Early Careers, Scale AI', initials: 'MT' },
]

export default function HomePage() {
  return (
    <div className="bg-[#080812]">

      {/* ─── HERO ───────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Layered background */}
        <div className="absolute inset-0 bg-[#080812]" />
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* Radial glow top-left */}
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-tertiary-500/8 blur-[120px]" />
          {/* Radial glow bottom-right */}
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary-500/15 blur-[100px]" />
          {/* Fine grid */}
          <div className="absolute inset-0 opacity-[0.025]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
            backgroundSize: '72px 72px',
          }} />
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid lg:grid-cols-[1fr_420px] gap-20 items-center">

            {/* Left */}
            <div>
              {/* Live badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-tertiary-500/15 border border-tertiary-500/25 mb-10"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary-400 animate-pulse" />
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-tertiary-400 font-label">Live Simulation Environment</span>
              </motion.div>

              {/* MEGA headline */}
              <motion.h1
                variants={heroTitle}
                initial="hidden"
                animate="visible"
                className="font-headline font-black tracking-[-0.04em] leading-[0.88] mb-8 text-white"
                style={{ fontSize: 'clamp(72px, 10vw, 140px)' }}
              >
                <motion.span variants={heroWord} className="block">PRECISION</motion.span>
                <motion.span
                  variants={heroWord}
                  className="block"
                  style={{ WebkitTextStroke: '2px rgba(79,110,247,0.6)', color: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text', backgroundImage: 'linear-gradient(135deg,#4F6EF7,#A5B8FF)' }}
                >
                  PERFORMANCE.
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="text-lg text-neutral-400 font-body leading-relaxed max-w-[480px] mb-12"
              >
                Step into the workspace of the future. MÉTIER provides high-fidelity career simulations for those who value earned authority and purposeful growth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Link href="/signup" className="group inline-flex items-center gap-2 bg-tertiary-500 hover:bg-tertiary-400 active:bg-tertiary-600 text-white font-headline font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 cursor-pointer shadow-[0_0_32px_rgba(79,110,247,0.35)] hover:shadow-[0_0_48px_rgba(79,110,247,0.5)] focus:outline-none focus:ring-2 focus:ring-tertiary-400 focus:ring-offset-2 focus:ring-offset-[#080812]">
                  Enter Workspace
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
                </Link>
                <Link href="/how-it-works" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white text-sm font-medium transition-colors duration-150 cursor-pointer">
                  How it works <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* Right: simulation preview */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block"
            >
              <div className="relative bg-secondary-500/30 border border-white/10 rounded-2xl p-1 backdrop-blur-sm shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
                {/* Fake browser chrome */}
                <div className="flex items-center gap-1.5 px-4 py-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <div className="bg-[#0D0D1E] rounded-xl p-6 space-y-5">
                  {/* Module header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[10px] text-tertiary-400 font-label uppercase tracking-widest mb-1">Current Active Module</p>
                      <p className="text-white font-headline font-bold text-lg leading-tight">Management Trainee<br/>Level IV</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-tertiary-500/20 border border-tertiary-500/30 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-tertiary-400" />
                    </div>
                  </div>

                  {/* KPI bars */}
                  <div className="space-y-3">
                    {[
                      { l: 'Efficiency', v: 87, c: 'bg-tertiary-500' },
                      { l: 'Velocity', v: 72, c: 'bg-blue-400' },
                      { l: 'Acumen', v: 94, c: 'bg-emerald-400' },
                      { l: 'Soft Skills', v: 61, c: 'bg-purple-400' },
                    ].map((b, i) => (
                      <div key={b.l}>
                        <div className="flex justify-between mb-1">
                          <span className="text-[10px] text-neutral-500 font-label uppercase tracking-wider">{b.l}</span>
                          <span className="text-[10px] text-white font-semibold">{b.v}%</span>
                        </div>
                        <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full ${b.c} rounded-full`}
                            initial={{ width: 0 }}
                            animate={{ width: `${b.v}%` }}
                            transition={{ duration: 0.9, delay: 0.9 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* AI insight */}
                  <div className="p-3 bg-tertiary-500/10 border border-tertiary-500/20 rounded-xl">
                    <p className="text-[10px] text-tertiary-400 font-label uppercase tracking-wider mb-0.5">Critical Skill</p>
                    <p className="text-white text-sm font-semibold">Delegation</p>
                    <p className="text-neutral-500 text-[10px] mt-0.5 font-body">High-impact sessions recommended</p>
                  </div>
                </div>
              </div>

              {/* Floating score badge */}
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="absolute -bottom-5 -left-5 bg-[#131327] border border-white/10 rounded-2xl px-5 py-3 shadow-xl"
              >
                <p className="text-neutral-500 text-[10px] font-label">Overall Score</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-white font-headline font-black text-2xl">98.4%</span>
                  <span className="text-emerald-400 text-xs font-semibold">+2.9%</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080812] to-transparent pointer-events-none" />
      </section>

      {/* ─── STATS BAR ──────────────────────────────────────────────── */}
      <section className="border-y border-white/8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8" fast>
            {stats.map(s => (
              <motion.div key={s.label} variants={fadeUp} className="text-center">
                <div className="font-headline font-black text-white mb-1" style={{ fontSize: 'clamp(28px,4vw,42px)' }}>{s.value}</div>
                <div className="text-neutral-500 text-sm font-label">{s.label}</div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── KINETIC PIPELINE ──────────────────────────────────────── */}
      <section className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="mb-16">
            <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-tertiary-400 font-label mb-4">The Kinetic Pipeline</p>
            <h2 className="font-headline font-black text-white tracking-tight leading-[0.9]" style={{ fontSize: 'clamp(40px,6vw,80px)' }}>
              A continuous flow<br />of performance-driven<br />career data.
            </h2>
          </Reveal>

          <StaggerContainer className="grid lg:grid-cols-3 gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="group relative bg-white/[0.03] border border-white/8 rounded-2xl p-8 hover:border-tertiary-500/30 hover:bg-white/[0.05] transition-all duration-300 cursor-default overflow-hidden"
              >
                {/* Number watermark */}
                <span className="absolute top-4 right-5 font-headline font-black text-[80px] leading-none text-white/[0.04] select-none group-hover:text-white/[0.07] transition-colors duration-300">
                  {step.number}
                </span>
                <div className="w-11 h-11 rounded-xl bg-tertiary-500/15 border border-tertiary-500/25 flex items-center justify-center text-tertiary-400 mb-7 group-hover:bg-tertiary-500/25 transition-colors duration-200">
                  {step.icon}
                </div>
                <h3 className="font-headline font-bold text-white text-xl mb-3">{step.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-body">{step.description}</p>
                {i === 0 && (
                  <div className="mt-6 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    98.4% precision · &lt;12ms latency
                  </div>
                )}
              </motion.div>
            ))}
          </StaggerContainer>

          {/* Unlock CTA strip */}
          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-tertiary-500/10 border border-tertiary-500/20">
              <div>
                <p className="text-white font-headline font-bold text-xl">Unlock The Next Level</p>
                <p className="text-neutral-400 text-sm mt-0.5">Advance to top-tier high-intensity sessions</p>
              </div>
              <Link href="/signup" className="shrink-0 inline-flex items-center gap-2 bg-tertiary-500 hover:bg-tertiary-400 text-white font-headline font-bold px-6 py-3 rounded-xl text-sm transition-all duration-200 cursor-pointer shadow-glow-sm">
                Start Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── EARN YOUR RANK ────────────────────────────────────────── */}
      <section className="py-28 lg:py-36 bg-[#060610]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-tertiary-400 font-label mb-4">Earn Your Rank</p>
            <h2 className="font-headline font-black text-white tracking-tight leading-[0.9] mb-6" style={{ fontSize: 'clamp(36px,5vw,72px)' }}>
              In MÉTIER, noise isn't given<br />— it's computed.
            </h2>
            <p className="text-neutral-400 max-w-xl mx-auto font-body text-lg leading-relaxed">
              Our simulator tracks every nuanced measure of your professional capability, building a digital map of your entire professional identity.
            </p>
          </Reveal>

          {/* Feature pillars */}
          <StaggerContainer className="grid sm:grid-cols-3 gap-4 mb-16" fast>
            {[
              { title: 'No Verbal Fallback', desc: 'Evaluation happens on open-loop, role-specific task completion only — not self-assessment.' },
              { title: 'Peer Verified Next', desc: 'Top-ranking simulation runs are cross-validated with real-world professional outcomes.' },
              { title: 'Precision Ranked', desc: 'Your ranking is benchmarked against thousands of candidates in the same role globally.' },
            ].map(item => (
              <motion.div key={item.title} variants={fadeUp} className="p-5 rounded-xl bg-white/[0.03] border border-white/8 hover:border-tertiary-500/25 transition-all duration-200 cursor-default">
                <p className="text-white font-headline font-bold mb-2">{item.title}</p>
                <p className="text-neutral-500 text-sm font-body leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>

          {/* Track cards */}
          <div className="flex items-center justify-between mb-8">
            <Reveal><h3 className="font-headline font-bold text-white text-2xl">Available Tracks</h3></Reveal>
            <Link href="/careers" className="inline-flex items-center gap-1 text-tertiary-400 hover:text-tertiary-300 text-sm font-medium transition-colors cursor-pointer">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tracks.map(track => (
              <motion.div
                key={track.title}
                variants={scaleIn}
                className="group bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden hover:border-white/15 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className={`h-36 bg-gradient-to-br ${track.color} relative flex items-center justify-center`}>
                  <BookOpen className="w-8 h-8 text-white/30" />
                  {track.label && (
                    <span className={`absolute top-3 left-3 px-2 py-0.5 rounded text-white text-[10px] font-bold uppercase tracking-wider ${track.label === 'HOT TRACK' ? 'bg-red-500' : track.label === 'CERTIFIED' ? 'bg-emerald-600' : 'bg-tertiary-500'}`}>
                      {track.label}
                    </span>
                  )}
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/40 rounded px-2 py-0.5">
                    <Star className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />
                    <span className="text-white text-xs font-semibold">{track.rating}</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[10px] text-tertiary-400 font-label uppercase tracking-wider mb-2">{track.category} · {track.weeks}w</p>
                  <h4 className="text-white font-headline font-bold text-lg mb-2 group-hover:text-tertiary-300 transition-colors duration-150 leading-tight">{track.title}</h4>
                  <p className="text-neutral-500 text-sm font-body leading-relaxed mb-5 flex-1">{track.description}</p>
                  <Link href="/signup" onClick={e => e.stopPropagation()} className="w-full inline-flex items-center justify-center gap-2 bg-tertiary-500/20 hover:bg-tertiary-500 border border-tertiary-500/30 hover:border-tertiary-500 text-tertiary-300 hover:text-white font-semibold text-sm py-2.5 rounded-xl transition-all duration-200 cursor-pointer">
                    Enroll Track
                  </Link>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── TESTIMONIALS ──────────────────────────────────────────── */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-tertiary-400 font-label mb-4">Proven Results</p>
            <h2 className="font-headline font-black text-white tracking-tight" style={{ fontSize: 'clamp(32px,4vw,60px)' }}>
              Built on demonstrated competence
            </h2>
          </Reveal>

          <StaggerContainer className="grid lg:grid-cols-3 gap-5">
            {testimonials.map(t => (
              <motion.div key={t.name} variants={fadeUp} className="bg-white/[0.03] border border-white/8 rounded-2xl p-8 hover:border-white/15 transition-all duration-300 cursor-default flex flex-col">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed font-body flex-1 italic mb-7">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-tertiary-500/25 border border-tertiary-500/35 flex items-center justify-center text-tertiary-300 text-xs font-black font-headline shrink-0">{t.initials}</div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-neutral-600 text-xs font-label">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── DUAL CTA ───────────────────────────────────────────────── */}
      <section className="py-28 bg-[#060610] border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer className="grid lg:grid-cols-2 gap-5">
            <motion.div variants={slideRight} className="bg-white/[0.03] border border-white/8 rounded-2xl p-10 text-center hover:border-tertiary-500/25 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-tertiary-500/15 border border-tertiary-500/25 flex items-center justify-center mx-auto mb-6 group-hover:bg-tertiary-500/25 transition-colors duration-200">
                <Users className="w-6 h-6 text-tertiary-400" />
              </div>
              <h3 className="font-headline font-black text-white text-2xl mb-3 tracking-tight">For Individuals</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-8 font-body max-w-xs mx-auto">Build your career readiness portfolio, prove your skills, and land the role you actually want.</p>
              <Link href="/signup" className="inline-flex items-center justify-center gap-2 w-full bg-tertiary-500 hover:bg-tertiary-400 text-white font-headline font-bold px-6 py-3.5 rounded-xl text-sm transition-all duration-200 cursor-pointer shadow-glow-sm">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-neutral-600 text-xs mt-3">No credit card required</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white/[0.03] border border-white/8 rounded-2xl p-10 text-center hover:border-tertiary-500/25 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-tertiary-500/15 border border-tertiary-500/25 flex items-center justify-center mx-auto mb-6 group-hover:bg-tertiary-500/25 transition-colors duration-200">
                <Building2 className="w-6 h-6 text-tertiary-400" />
              </div>
              <h3 className="font-headline font-black text-white text-2xl mb-3 tracking-tight">For Institutions & Employers</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-8 font-body max-w-xs mx-auto">Deploy structured simulations for your candidates and students. Source pre-validated talent at scale.</p>
              <Link href="/employers" className="inline-flex items-center justify-center gap-2 w-full bg-white/8 hover:bg-white/12 border border-white/15 hover:border-white/25 text-white font-headline font-bold px-6 py-3.5 rounded-xl text-sm transition-all duration-200 cursor-pointer">
                Book a Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-neutral-600 text-xs mt-3">Custom enterprise pricing</p>
            </motion.div>
          </StaggerContainer>
        </div>
      </section>
    </div>
  )
}
