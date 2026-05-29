import Link from 'next/link'
import { ArrowRight, TrendingUp, AlertCircle, CheckCircle, FileText, BarChart3, RefreshCw } from 'lucide-react'

const dimensions = [
  { label: 'Strategic Synthesis', score: 92, desc: 'Exceptional ability to connect disparate data points into a cohesive narrative.' },
  { label: 'Conflict Resolution', score: 64, desc: 'Found to be overly cautious in direct confrontation scenarios.' },
  { label: 'Execution Quality', score: 88, desc: 'Demonstrates consistent follow-through across multi-stakeholder deliverables.' },
  { label: 'Communication', score: 79, desc: 'Strong written clarity with room for growth in cross-functional framing.' },
  { label: 'Problem-Solving', score: 83, desc: 'Creative, structured approach to novel scenarios with measurable outcomes.' },
]

const strengths = [
  'Ability to synthesize complex, multi-variable data into executive decisions',
  'Written communication under pressure demonstrates high professional fluency',
  'Proactive stakeholder management in multi-team environments',
]

const improvements = [
  {
    area: 'Conflict Resolution',
    suggestion: 'Engage more directly in confrontational simulations. Practice "radical candor" module in Skill Lab.',
  },
  {
    area: 'Technical Delegation',
    suggestion: 'Avoid delegating technical deep-dives to specialists while maintaining high-level oversight.',
  },
]

const artifacts = [
  { title: 'Team Performance Report', grade: 'A+', status: 'VALIDATED', type: 'SIMULATION A1', desc: 'Detailed breakdown of simulation team dynamics and quarterly output.' },
  { title: 'Strategic Expansion Plan', grade: 'A', status: 'VALIDATED', type: 'SIMULATION A2', desc: 'Go-to-market strategy for simulated Southeast Asia territory expansion.' },
  { title: 'Crisis Response Audit', grade: 'A-', status: 'SIMULATION A3', type: 'SIMULATION A3', desc: 'Internal review of leadership decisions during a simulated data breach event.' },
]

const overall = 84

export default function PerformancePage() {
  const scoreLabel =
    overall >= 90 ? 'Elite Candidate'
    : overall >= 80 ? 'Job Ready'
    : overall >= 70 ? 'Developing'
    : 'Needs Practice'

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-headline font-bold text-white mb-1">
          Your Career Readiness Score:{' '}
          <span className="gradient-text">{overall}/100</span>
        </h1>
        <p className="text-neutral-400 text-sm font-body">
          Performance Review for Cycle Q3. You are demonstrating high kinetic precision in strategic planning with room for growth in cross-functional team leadership.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* AI Evaluation Breakdown */}
          <div className="card-dark p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-tertiary-500/30 flex items-center justify-center">
                  <BarChart3 className="w-3 h-3 text-tertiary-400" />
                </div>
                <h2 className="text-base font-headline font-semibold text-white">AI Evaluation Breakdown</h2>
              </div>
              <span className="text-xs text-neutral-500 font-label">Generated 2h ago</span>
            </div>

            <div className="space-y-5">
              {dimensions.map((dim) => (
                <div key={dim.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-semibold text-white">{dim.label}</span>
                    <span className={`text-sm font-bold ${
                      dim.score >= 85 ? 'text-green-400' :
                      dim.score >= 70 ? 'text-yellow-400' :
                      'text-red-400'
                    }`}>{dim.score}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-1.5">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        dim.score >= 85 ? 'bg-green-400' :
                        dim.score >= 70 ? 'bg-yellow-400' :
                        'bg-red-400'
                      }`}
                      style={{ width: `${dim.score}%` }}
                    />
                  </div>
                  <p className="text-xs text-neutral-500 font-body leading-relaxed">{dim.desc}</p>
                </div>
              ))}
            </div>

            {/* Critical Insight */}
            <div className="mt-6 p-4 bg-tertiary-500/10 border border-tertiary-500/25 rounded-xl">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-tertiary-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertCircle className="w-4 h-4 text-tertiary-400" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-tertiary-400 uppercase tracking-wider font-label mb-1">Critical Insight</div>
                  <p className="text-neutral-300 text-sm font-body leading-relaxed italic">
                    "Your simulation data suggests a 40% higher probability of project success when you delegate technical deep-dives to specialists while maintaining high-level oversight."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Strengths & Improvements */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="card-dark p-6">
              <h3 className="text-sm font-headline font-semibold text-white mb-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Top Strengths
              </h3>
              <ul className="space-y-3">
                {strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-300 font-body">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</div>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-dark p-6">
              <h3 className="text-sm font-headline font-semibold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-yellow-400" />
                Areas to Improve
              </h3>
              <ul className="space-y-4">
                {improvements.map((item, i) => (
                  <li key={i}>
                    <div className="text-white text-sm font-semibold mb-1">{item.area}</div>
                    <div className="text-neutral-400 text-xs font-body leading-relaxed">{item.suggestion}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Artifact Portfolio */}
          <div className="card-dark p-6">
            <h2 className="text-base font-headline font-semibold text-white mb-5 flex items-center gap-2">
              <FileText className="w-4 h-4 text-tertiary-400" />
              Artifact Portfolio
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {artifacts.map((artifact) => (
                <div key={artifact.title} className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-all duration-200 cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-1.5 py-0.5 rounded text-xs font-bold ${
                      artifact.grade === 'A+' ? 'bg-green-500/20 text-green-400' :
                      artifact.grade === 'A' ? 'bg-green-500/15 text-green-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>{artifact.grade}</span>
                    <span className="text-xs text-tertiary-400 font-label">{artifact.status}</span>
                  </div>
                  <div className="text-white text-sm font-semibold mb-1 leading-tight">{artifact.title}</div>
                  <div className="text-neutral-500 text-[10px] font-label mb-2">{artifact.type}</div>
                  <div className="text-neutral-400 text-xs font-body leading-relaxed">{artifact.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Simulation environment */}
          <div className="relative h-40 rounded-2xl overflow-hidden card-dark flex items-end p-6">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-primary-500 opacity-70" />
            <div className="relative z-10">
              <div className="text-xs text-neutral-400 font-label mb-1">Simulation Environment</div>
              <div className="text-white font-headline font-bold">"Executive Suite 06: Global Strategy Deployment"</div>
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="space-y-5">
          {/* Score circle */}
          <div className="card-dark p-6 text-center">
            <div className="section-label mb-4">Overall Status</div>
            <div className="relative w-28 h-28 mx-auto mb-4">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36" aria-label={`Score: ${overall} out of 100`}>
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                <circle
                  cx="18" cy="18" r="15.9" fill="none"
                  stroke="#4F6EF7" strokeWidth="3"
                  strokeDasharray={`${overall} ${100 - overall}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-3xl font-headline font-bold text-white">{overall}</div>
                <div className="text-xs text-neutral-500">/ 100</div>
              </div>
            </div>
            <div className="text-tertiary-400 font-semibold font-label">{scoreLabel}</div>
          </div>

          {/* Market Insight */}
          <div className="card-dark p-5">
            <div className="section-label mb-3">Market Insight</div>
            <p className="text-neutral-300 text-xs font-body leading-relaxed mb-4">
              The current management landscape values "Agile Adaptability" over traditional hierarchy. Your score puts you in the top 12% of simulation candidates globally.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-tertiary-400" />
                <span className="text-xs text-neutral-400 font-body">Demand for your skill profile: <span className="text-white font-semibold">High</span></span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-yellow-400" />
                <span className="text-xs text-neutral-400 font-body">Priority Skill: <span className="text-yellow-300 font-semibold">Crisis Mgmt</span></span>
              </div>
            </div>
          </div>

          {/* Career Trajectory */}
          <div className="card-dark p-5">
            <div className="section-label mb-4">Career Trajectory</div>
            <div className="relative w-24 h-24 mx-auto mb-4">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36" aria-label="Career trajectory: 84%">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#4F6EF7" strokeWidth="3"
                  strokeDasharray={`${84} ${100 - 84}`} strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-xl font-headline font-bold text-white">84%</div>
              </div>
            </div>
            <div className="text-center text-xs text-neutral-400 font-label mb-4">Trajectory Score</div>
            <button className="w-full py-2 text-xs bg-white/10 text-neutral-300 hover:bg-white/15 rounded-lg font-semibold transition-all duration-150 cursor-pointer flex items-center justify-center gap-2">
              <RefreshCw className="w-3.5 h-3.5" />
              Re-Simulate Crisis Scenario
            </button>
          </div>

          {/* Export */}
          <div className="card-dark p-5">
            <div className="text-white font-semibold text-sm mb-3">Export Your Report</div>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 text-xs text-neutral-300 cursor-pointer transition-all duration-150 flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-tertiary-400" /> Download PDF Report
              </button>
              <button className="w-full text-left px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 text-xs text-neutral-300 cursor-pointer transition-all duration-150 flex items-center gap-2">
                <ArrowRight className="w-3.5 h-3.5 text-tertiary-400" /> Share Portfolio Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
