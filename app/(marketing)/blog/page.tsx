'use client'

import Link from 'next/link'
import { Reveal, StaggerContainer, fadeUp } from '@/components/ui/motion'
import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'

const posts = [
  { slug: 'precision-performance', category: 'Product', date: 'May 24, 2026', readTime: '6 min', title: 'Precision Performance: How Métier Measures What Matters', excerpt: 'Most career platforms measure completion. We measure capability. Here\'s how our 5-dimension CRS framework was built — and why it predicts job success better than GPA.', featured: true },
  { slug: 'case-study-jordan', category: 'Case Study', date: 'May 18, 2026', readTime: '4 min', title: 'From 0 Experience to Data Analyst at Stripe in 47 Days', excerpt: 'Jordan completed 3 simulations, scored 91 on the CRS, and landed an offer before graduating. A step-by-step look at the path.', featured: false },
  { slug: 'employer-hiring-signal', category: 'Employers', date: 'May 12, 2026', readTime: '5 min', title: 'Why Résumés Are a Lagging Indicator of Job Performance', excerpt: 'An analysis of 2,000+ hire decisions shows that demonstrated work samples predict 90-day ramp time 3× better than credentials alone.', featured: false },
  { slug: 'ai-evaluation-engine', category: 'Engineering', date: 'May 6, 2026', readTime: '8 min', title: 'Inside the Métier AI Evaluation Engine', excerpt: 'How we built a GPT-4o evaluation pipeline that delivers consistent, calibrated scores across 50+ career tracks — and what "professional standards" actually means in code.', featured: false },
  { slug: 'institutional-case-study', category: 'Institutions', date: 'April 28, 2026', readTime: '5 min', title: 'How UC Berkeley Career Center Deployed Métier for 500 Students', excerpt: 'The implementation story, cohort outcomes, and what the career center\'s director wishes she had known going in.', featured: false },
  { slug: 'career-switcher-guide', category: 'Career Advice', date: 'April 21, 2026', readTime: '7 min', title: 'The Career Switcher\'s Playbook: Prove Competence Before Day One', excerpt: 'If you\'re changing careers, credentials aren\'t enough. Here\'s the step-by-step system for building a portfolio that makes employers take a chance on you.', featured: false },
]

export default function BlogPage() {
  return (
    <div className="bg-[#080812] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="mb-16">
          <p className="section-label mb-4">The Métier Blog</p>
          <h1 className="font-headline font-black text-white tracking-tight" style={{ fontSize: 'clamp(40px,6vw,80px)' }}>
            Career intelligence,<br />not career advice.
          </h1>
        </Reveal>

        {/* Featured */}
        {posts.filter(p => p.featured).map(post => (
          <Reveal key={post.slug} className="mb-10">
            <Link href={`/blog/${post.slug}`} className="group block bg-white/[0.03] border border-white/8 rounded-2xl p-8 lg:p-12 hover:border-white/15 transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-3 mb-5">
                <span className="px-2.5 py-1 bg-tertiary-500/20 border border-tertiary-500/30 rounded-lg text-tertiary-400 text-xs font-bold uppercase tracking-wider">{post.category}</span>
                <span className="text-neutral-600 text-xs flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime} read</span>
                <span className="text-neutral-600 text-xs">{post.date}</span>
              </div>
              <h2 className="font-headline font-black text-white text-3xl lg:text-4xl mb-4 tracking-tight group-hover:text-tertiary-300 transition-colors duration-200 leading-tight">{post.title}</h2>
              <p className="text-neutral-400 font-body leading-relaxed text-lg max-w-3xl mb-6">{post.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-tertiary-400 group-hover:text-tertiary-300 text-sm font-semibold transition-colors duration-150">
                Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
              </span>
            </Link>
          </Reveal>
        ))}

        {/* Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.filter(p => !p.featured).map(post => (
            <motion.div key={post.slug} variants={fadeUp}>
              <Link href={`/blog/${post.slug}`} className="group block bg-white/[0.03] border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-all duration-300 cursor-pointer h-full flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-0.5 bg-white/8 rounded text-neutral-400 text-[10px] font-bold uppercase tracking-wider">{post.category}</span>
                  <span className="text-neutral-600 text-[10px]">{post.readTime}</span>
                </div>
                <h3 className="font-headline font-bold text-white text-lg mb-3 leading-tight group-hover:text-tertiary-300 transition-colors duration-150 flex-1">{post.title}</h3>
                <p className="text-neutral-500 text-sm font-body leading-relaxed mb-4">{post.excerpt}</p>
                <span className="text-tertiary-400 text-xs font-semibold flex items-center gap-1 group-hover:text-tertiary-300 transition-colors">
                  Read <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </div>
  )
}
