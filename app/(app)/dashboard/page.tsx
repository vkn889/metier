'use client'

import Link from 'next/link'
import { BarChart3, TrendingUp, AlertCircle, ChevronRight, ArrowRight, Clock, Star, Zap, CheckCircle } from 'lucide-react'

const kpiBars = [
  { label: 'Efficiency', value: 87, color: 'bg-tertiary-500', trend: '+3%' },
  { label: 'Velocity', value: 72, color: 'bg-blue-400', trend: '-1%' },
  { label: 'Acumen', value: 94, color: 'bg-green-400', trend: '+7%' },
  { label: 'Soft Skills', value: 61, color: 'bg-purple-400', trend: '+5%' },
]

const approvals = [
  {
    type: 'BUDGET REVIEW',
    urgent: true,
    title: 'Simulation X-01 Overspend',
    desc: 'Department "Marketing" approved 3rd AI asset generation.',
    tag: 'urgent',
  },
  {
    type: 'HIRE REQUEST',
    urgent: false,
    title: 'Sr. Data Analyst Replacement',
    desc: 'Approval needed to post external simulation role.',
    tag: 'hire',
  },
  {
    type: 'PROJECT SIGN-OFF',
    urgent: false,
    title: 'Project Sentinel Final Review',
    desc: 'Unlocks in Simulation Day 41.',
    tag: 'project',
  },
]

const topPerformer = {
  name: 'Elena R.',
  score: 94,
  dimension: 'Delegation',
}

export default function DashboardPage() {
  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-headline font-bold text-white mb-1">Manager's Dashboard</h1>
          <p className="text-neutral-400 text-sm font-body">Refining operational excellence through precision simulations.</p>
        </div>
        <div className="text-right hidden sm:block">
          <div className="text-xs text-neutral-500 font-label uppercase tracking-wider mb-1">Overall Status</div>
          <div className="text-green-400 font-headline font-bold text-sm">EXCELLENT</div>
          <div className="text-xs text-neutral-500 font-label mt-0.5">Simulation Cycle Q3_WK12</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main left panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Team Performance Overview */}
          <div className="card-dark p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-headline font-semibold text-white">Team Performance Overview</h2>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
                <span className="text-xs text-green-400 font-label font-semibold">Real-Time Data</span>
              </div>
            </div>

            {/* Bar chart visualization */}
            <div className="flex items-end gap-4 h-36 mb-4">
              {kpiBars.map((bar) => (
                <div key={bar.label} className="flex-1 flex flex-col items-center gap-2">
                  <div className="text-xs text-white font-semibold">{bar.value}%</div>
                  <div className="w-full rounded-t-md relative overflow-hidden" style={{ height: `${bar.value}%` }}>
                    <div className={`absolute inset-0 ${bar.color} opacity-80`} />
                    <div className={`absolute inset-0 ${bar.color} opacity-20 animate-pulse-slow`} />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              {kpiBars.map((bar) => (
                <div key={bar.label} className="flex-1 text-center">
                  <div className="text-xs text-neutral-400 font-label uppercase tracking-wider">{bar.label}</div>
                  <div className={`text-xs font-semibold mt-0.5 ${bar.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{bar.trend}</div>
                </div>
              ))}
            </div>

            {/* Top performer */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xs text-neutral-500 font-label uppercase tracking-wider mb-1">Top Performer</div>
                <div className="text-white font-headline font-bold text-xl">{topPerformer.name}</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-neutral-500 font-label uppercase tracking-wider mb-1">Critical Skill</div>
                <div className="text-tertiary-400 font-headline font-bold">{topPerformer.dimension}</div>
              </div>
            </div>
          </div>

          {/* Strategic Coaching Insight */}
          <div className="card-dark p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 rounded bg-tertiary-500/30 flex items-center justify-center">
                <Zap className="w-3 h-3 text-tertiary-400" />
              </div>
              <span className="text-xs text-neutral-400 font-label uppercase tracking-wider">Strategic Coaching Insight</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 items-start">
              <div>
                <blockquote className="text-neutral-200 text-sm font-body leading-relaxed italic mb-4">
                  "Your recent team performance indicates a high velocity but a declining quality in soft-skill interactions. I recommend focusing the next 4 simulation cycles on radical transparency exercises."
                </blockquote>

                <div className="space-y-2 mb-4">
                  <div className="text-xs text-neutral-500 font-label uppercase tracking-wider">Suggested Module</div>
                  <div className="flex items-center gap-2 p-2.5 bg-white/5 rounded-lg">
                    <div className="w-8 h-8 rounded bg-tertiary-500/30 flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-tertiary-400" />
                    </div>
                    <div>
                      <div className="text-white text-xs font-semibold">Difficult Conversations 101</div>
                      <div className="text-neutral-500 text-[10px] font-label">Simulacra v4.2</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="btn-primary text-xs py-2 px-4">Accept Recommendation</button>
                  <button className="btn-secondary text-xs py-2 px-4">Dismiss</button>
                </div>
              </div>

              <div>
                <div className="mb-3">
                  <div className="text-xs text-neutral-500 font-label mb-1">Predicted Growth</div>
                  <div className="text-green-400 font-headline font-bold text-2xl">+18%</div>
                  <div className="text-neutral-400 text-xs font-body">Team Cohesion</div>
                </div>
                <div className="p-3 bg-secondary-500/50 rounded-xl border border-white/10">
                  <div className="text-xs text-neutral-400 font-label">A · MÉTIER</div>
                  <div className="text-white text-sm font-semibold mt-1">Simulacra v4.2</div>
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-600'}`} />
                    ))}
                    <span className="text-xs text-neutral-500 ml-1">4.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Posting Time', value: '12:44:02', sub: 'Active session' },
              { label: 'Near Probability', value: '6%', sub: 'Goal convergence' },
              { label: 'Score', value: '6%', sub: 'Above cohort avg' },
            ].map((stat) => (
              <div key={stat.label} className="card-dark p-4 text-center">
                <div className="text-white font-headline font-bold text-xl mb-0.5">{stat.value}</div>
                <div className="text-xs text-neutral-500 font-label">{stat.label}</div>
                <div className="text-xs text-neutral-600 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Approvals Queue */}
        <div className="space-y-4">
          <div className="card-dark p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-headline font-semibold text-white">Approvals Queue</h2>
              <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded-md uppercase">3 Urgent</span>
            </div>

            <div className="space-y-3">
              {approvals.map((item, i) => (
                <div key={i} className={`p-3.5 rounded-xl border cursor-pointer hover:border-white/20 transition-all duration-150 ${
                  item.urgent ? 'bg-red-500/10 border-red-500/30' : 'bg-white/5 border-white/10'
                }`}>
                  <div className={`text-xs font-label font-semibold uppercase tracking-wider mb-1 ${
                    item.urgent ? 'text-red-400' : 'text-neutral-500'
                  }`}>{item.type}</div>
                  <div className="text-white text-sm font-semibold mb-1">{item.title}</div>
                  <div className="text-neutral-400 text-xs font-body leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 text-center text-xs text-tertiary-400 hover:text-tertiary-300 transition-colors duration-150 cursor-pointer py-2 font-medium">
              View All Tasks
            </button>
          </div>

          {/* Score card */}
          <div className="card-dark p-5">
            <div className="section-label mb-3">Analysis of Strategy</div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-neutral-400 text-xs font-body mb-1">Career Readiness</div>
                <div className="text-4xl font-headline font-bold text-white">84<span className="text-xl text-neutral-500">/100</span></div>
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-tertiary-500/40 flex items-center justify-center">
                <div className="text-tertiary-400 text-xs font-headline font-bold">84%</div>
              </div>
            </div>
            <div className="space-y-2">
              {[
                { label: 'Strategic Synthesis', value: 92 },
                { label: 'Conflict Resolution', value: 64 },
              ].map((metric) => (
                <div key={metric.label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-neutral-400">{metric.label}</span>
                    <span className="text-xs text-white font-semibold">{metric.value}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary-500 rounded-full" style={{ width: `${metric.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <Link href="/performance" className="flex items-center justify-center gap-1 mt-4 text-xs text-tertiary-400 hover:text-tertiary-300 transition-colors duration-150 cursor-pointer font-medium">
              Full Report <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Next sim CTA */}
          <div className="p-4 bg-tertiary-500/15 border border-tertiary-500/30 rounded-xl">
            <div className="section-label mb-2">Up Next</div>
            <div className="text-white font-semibold text-sm mb-1">Re-Simulate Crisis Scenario</div>
            <div className="text-neutral-400 text-xs font-body mb-3">Improve your conflict resolution score before Week 13 review.</div>
            <button className="btn-primary text-xs py-2 w-full justify-center">
              Launch Scenario
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
