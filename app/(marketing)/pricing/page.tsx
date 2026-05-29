'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, ArrowRight, Zap } from 'lucide-react'

const plans = [
  {
    name: 'Solo',
    price: { monthly: 14.99, annual: 11.99 },
    description: 'Perfect for students and early career professionals exploring their path.',
    cta: 'Start Free Trial',
    ctaHref: '/signup',
    highlighted: false,
    features: [
      'Access to 3 career tracks',
      '1 active simulation at a time',
      'AI evaluation on all submissions',
      'Career Readiness Score report',
      'Basic portfolio (3 items)',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    price: { monthly: 29.99, annual: 23.99 },
    description: 'For serious candidates who want full access and maximum career signal.',
    cta: 'Start Free Trial',
    ctaHref: '/signup',
    highlighted: true,
    badge: 'Most Popular',
    features: [
      'Access to all 50+ career tracks',
      'Unlimited simultaneous simulations',
      'Priority AI evaluation (< 5s)',
      'Full CRS report with benchmarking',
      'Unlimited portfolio items',
      'Public portfolio share link',
      'Employer visibility toggle',
      'Advanced analytics dashboard',
      'Priority email & chat support',
    ],
  },
  {
    name: 'Institutional',
    price: { monthly: null, annual: null },
    description: 'For universities, bootcamps, and workforce programs deploying at scale.',
    cta: 'Contact Sales',
    ctaHref: '/contact',
    highlighted: false,
    features: [
      'Everything in Pro for all students',
      'Cohort management dashboard',
      'Bulk enrollment & CSV import',
      'Institution-branded simulations',
      'Aggregate analytics & reporting',
      'FERPA-compliant data handling',
      'SSO / LMS integration',
      'Dedicated success manager',
      'Custom simulation builds',
      'SLA & uptime guarantee',
    ],
  },
]

const faq = [
  {
    q: 'Is there a free trial?',
    a: 'Yes. Solo and Pro plans both include a 7-day free trial with no credit card required. You can complete one full simulation and receive your Career Readiness Score before deciding to subscribe.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Absolutely. Cancel anytime from your billing settings. Your access continues until the end of your paid billing period. No cancellation fees, ever.',
  },
  {
    q: 'How does institutional billing work?',
    a: 'Institutional plans are billed annually per seat or as a cohort license. We offer flexible pricing based on student count and usage patterns. Contact our sales team for a custom quote.',
  },
  {
    q: 'Do employers get access to my profile?',
    a: 'Only if you choose to make your portfolio public and enable employer visibility. Your data is private by default — you control exactly what is shared and with whom.',
  },
  {
    q: 'What data does Métier collect?',
    a: 'We collect your name, email, and simulation content to power evaluations. We never sell your data. All PII is encrypted at rest and in transit. Read our full Privacy Policy for details.',
  },
  {
    q: 'Can I retry a simulation?',
    a: 'Yes. On Solo and Pro plans, you can retry any completed simulation to improve your score. Your portfolio will show your best score by default.',
  },
]

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)

  return (
    <div className="bg-primary-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label mb-3">Pricing</div>
          <h1 className="text-5xl lg:text-6xl font-headline font-bold text-white mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-neutral-400 max-w-xl mx-auto font-body text-lg">
            Start free. Upgrade when you're ready. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-medium ${!annual ? 'text-white' : 'text-neutral-400'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-tertiary-500 focus:ring-offset-2 focus:ring-offset-primary-500 ${annual ? 'bg-tertiary-500' : 'bg-white/20'}`}
              aria-label="Toggle annual billing"
            >
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${annual ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm font-medium ${annual ? 'text-white' : 'text-neutral-400'}`}>
              Annual
              <span className="ml-2 px-1.5 py-0.5 rounded bg-green-500/20 text-green-400 text-xs font-semibold">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Plans */}
        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-tertiary-500/15 border-2 border-tertiary-500 shadow-glow-blue'
                  : 'card-dark hover:border-white/20'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-tertiary-500 text-white text-xs font-semibold rounded-full uppercase tracking-wider flex items-center gap-1">
                    <Zap className="w-3 h-3" /> {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-headline font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-neutral-400 text-sm font-body">{plan.description}</p>
              </div>

              <div className="mb-8">
                {plan.price.monthly ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-headline font-bold text-white">
                      ${annual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-neutral-400 text-sm">/month</span>
                  </div>
                ) : (
                  <div className="text-4xl font-headline font-bold text-white">Custom</div>
                )}
                {annual && plan.price.monthly && (
                  <div className="text-xs text-green-400 mt-1">
                    Billed annually — saves ${((plan.price.monthly - (plan.price.annual || 0)) * 12).toFixed(0)}/year
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-tertiary-400 shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaHref}
                className={plan.highlighted ? 'btn-primary justify-center' : 'btn-secondary justify-center'}
              >
                {plan.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-headline font-bold text-white text-center mb-10">Frequently asked questions</h2>
          <div className="space-y-4">
            {faq.map((item) => (
              <div key={item.q} className="card-dark p-6">
                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-body">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
