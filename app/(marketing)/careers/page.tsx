'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Star, Clock, ArrowRight, Search, ChevronRight } from 'lucide-react'

const allTracks = [
  { id: 1, title: 'Senior Product Analyst', category: 'Technology', weeks: 12, rating: 4.9, difficulty: 'Senior', label: 'HOT TRACK', demand: '96% Demand', description: 'Master the art of data-driven decision making. Work through real analytics pipelines, stakeholder presentations, and product decisions.', color: 'from-blue-700 to-tertiary-600', enrolled: 3421, starts: 'Immediate' },
  { id: 2, title: 'Management Trainee', category: 'Leadership', weeks: 8, rating: 4.7, difficulty: 'Junior', label: '', demand: '62% Demand', description: 'Foundational executive skills including resource allocation and conflict resolution within an agile environment.', color: 'from-secondary-500 to-primary-600', enrolled: 2180, starts: 'Immediate' },
  { id: 3, title: 'FinOps Director', category: 'Finance & Ops', weeks: 10, rating: 4.8, difficulty: 'Senior', label: 'CERTIFIED', demand: '88% Demand', description: 'Advance your career in cloud economics and organizational financial agility. Fortune 500 financial modeling.', color: 'from-emerald-700 to-teal-700', enrolled: 1654, starts: 'Immediate' },
  { id: 4, title: 'Strategy Consultant', category: 'Strategy', weeks: 5, rating: 4.6, difficulty: 'Senior', label: '', demand: '74% Demand', description: 'Solve macro-economic puzzles for Fortune 500 conglomerates in a risk-free lab. Starts in 3 days.', color: 'from-purple-700 to-secondary-500', enrolled: 987, starts: 'In 3 days' },
  { id: 5, title: 'AI Operations Lead', category: 'AI & Data', weeks: 8, rating: 4.9, difficulty: 'Senior', label: 'NEXT GEN', demand: '99% Demand', description: 'Learn to integrate generative AI workflows into existing enterprise pipelines. Request access required.', color: 'from-tertiary-600 to-purple-600', enrolled: 541, starts: 'Request Access' },
  { id: 6, title: 'UX Research Lead', category: 'Design', weeks: 6, rating: 4.7, difficulty: 'Junior', label: '', demand: '71% Demand', description: 'Master user research methodologies, usability testing, and research-to-design handoff processes.', color: 'from-pink-700 to-rose-700', enrolled: 1203, starts: 'Immediate' },
  { id: 7, title: 'Marketing Coordinator', category: 'Marketing', weeks: 6, rating: 4.5, difficulty: 'Junior', label: '', demand: '58% Demand', description: 'Campaign briefs, social copy, email sequences, and competitive analysis — the full marketing stack.', color: 'from-orange-700 to-amber-700', enrolled: 2654, starts: 'Immediate' },
  { id: 8, title: 'Project Manager', category: 'Operations', weeks: 7, rating: 4.6, difficulty: 'Junior', label: '', demand: '82% Demand', description: 'Project briefs, stakeholder emails, risk logs, and status reports across a cross-functional team simulation.', color: 'from-slate-600 to-secondary-500', enrolled: 1876, starts: 'Immediate' },
  { id: 9, title: 'Financial Analyst', category: 'Finance & Ops', weeks: 9, rating: 4.8, difficulty: 'Junior', label: '', demand: '91% Demand', description: 'Financial summaries, variance analyses, recommendation memos, and model reviews — bank-grade rigor.', color: 'from-green-700 to-emerald-700', enrolled: 1432, starts: 'Immediate' },
]

const industries = ['Technology', 'Finance & Ops', 'Leadership', 'Data Science', 'Marketing', 'Design', 'Strategy', 'Operations', 'AI & Data']
const levels = ['Junior', 'Senior', 'Executive']

export default function CareersPage() {
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([])
  const [selectedLevels, setSelectedLevels] = useState<string[]>([])
  const [search, setSearch] = useState('')

  const toggleIndustry = (ind: string) => {
    setSelectedIndustries(prev => prev.includes(ind) ? prev.filter(i => i !== ind) : [...prev, ind])
  }
  const toggleLevel = (level: string) => {
    setSelectedLevels(prev => prev.includes(level) ? prev.filter(l => l !== level) : [...prev, level])
  }

  const filtered = allTracks.filter(track => {
    const matchesIndustry = selectedIndustries.length === 0 || selectedIndustries.includes(track.category)
    const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(track.difficulty)
    const matchesSearch = track.title.toLowerCase().includes(search.toLowerCase()) || track.category.toLowerCase().includes(search.toLowerCase())
    return matchesIndustry && matchesLevel && matchesSearch
  })

  return (
    <div className="bg-primary-500 min-h-screen">
      {/* Top bar */}
      <div className="border-b border-white/10 bg-secondary-500/30 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <span>Simulation Tracks</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-tertiary-400 font-semibold">Live Catalog</span>
          </div>
          <div className="flex-1 max-w-sm ml-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
              <input
                type="search"
                placeholder="Search simulations..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-secondary-500/50 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-tertiary-500/50 transition-colors duration-150"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar filters */}
          <aside className="w-56 shrink-0 hidden lg:block">
            <div className="sticky top-24">
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-white mb-3 font-label uppercase tracking-wider">Industry</h3>
                <div className="space-y-2">
                  {industries.map((ind) => (
                    <label key={ind} className="flex items-center gap-2.5 cursor-pointer group">
                      <div
                        className={`w-4 h-4 rounded border transition-all duration-150 flex items-center justify-center cursor-pointer ${
                          selectedIndustries.includes(ind)
                            ? 'bg-tertiary-500 border-tertiary-500'
                            : 'border-white/30 group-hover:border-white/60'
                        }`}
                        onClick={() => toggleIndustry(ind)}
                        role="checkbox"
                        aria-checked={selectedIndustries.includes(ind)}
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && toggleIndustry(ind)}
                      >
                        {selectedIndustries.includes(ind) && (
                          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className={`text-sm transition-colors duration-150 ${selectedIndustries.includes(ind) ? 'text-white' : 'text-neutral-400 group-hover:text-white'}`}>
                        {ind}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white mb-3 font-label uppercase tracking-wider">Level</h3>
                <div className="flex flex-wrap gap-2">
                  {levels.map((level) => (
                    <button
                      key={level}
                      onClick={() => toggleLevel(level)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all duration-150 ${
                        selectedLevels.includes(level)
                          ? 'bg-tertiary-500 text-white'
                          : 'bg-white/10 text-neutral-300 hover:bg-white/20'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1">
            <div className="mb-6">
              <h1 className="text-3xl font-headline font-bold text-white mb-1">Available Tracks</h1>
              <p className="text-neutral-400 text-sm font-body">
                Select a simulation to begin your earned progression. Each track consists of 12 real-world modules designed to mirror executive-level challenges.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((track) => (
                <div key={track.id} className="card-dark overflow-hidden hover:border-white/20 hover:shadow-card-hover transition-all duration-300 cursor-pointer group flex flex-col">
                  {/* Image area */}
                  <div className={`h-32 bg-gradient-to-br ${track.color} relative`}>
                    {track.label && (
                      <span className={`absolute top-3 left-3 px-2 py-0.5 text-white text-xs font-bold uppercase tracking-wider rounded-md ${
                        track.label === 'HOT TRACK' ? 'bg-red-500' :
                        track.label === 'CERTIFIED' ? 'bg-green-600' :
                        'bg-tertiary-500'
                      }`}>
                        {track.label}
                      </span>
                    )}
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/40 backdrop-blur-sm rounded px-1.5 py-0.5">
                      <Star className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />
                      <span className="text-white text-xs font-semibold">{track.rating}</span>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className="text-xs text-white/70 font-label uppercase tracking-wider">{track.category}</span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-1.5">
                      <h3 className="text-white font-headline font-semibold text-base leading-tight group-hover:text-tertiary-300 transition-colors duration-150">
                        {track.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-neutral-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {track.weeks} weeks
                      </span>
                      <span className="text-xs text-neutral-500">{track.difficulty}</span>
                      <span className="text-xs text-tertiary-400 font-semibold">{track.demand}</span>
                    </div>
                    <p className="text-neutral-400 text-xs leading-relaxed font-body mb-4 flex-1">{track.description}</p>

                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <div>
                        <div className="text-xs text-neutral-500">{track.enrolled.toLocaleString()} enrolled</div>
                        <div className="text-xs text-green-400 font-semibold">Starts: {track.starts}</div>
                      </div>
                      <Link
                        href="/signup"
                        className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-all duration-150 cursor-pointer ${
                          track.starts === 'Request Access'
                            ? 'bg-white/10 text-neutral-300 hover:bg-white/20'
                            : 'bg-tertiary-500 text-white hover:bg-tertiary-600'
                        }`}
                      >
                        {track.starts === 'Request Access' ? 'Request Access' : 'Enroll Track'}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <div className="text-neutral-400 font-body mb-4">No tracks match your current filters.</div>
                <button onClick={() => { setSelectedIndustries([]); setSelectedLevels([]); setSearch(''); }} className="btn-secondary text-sm">
                  Clear filters
                </button>
              </div>
            )}

            {filtered.length > 0 && (
              <div className="mt-8 text-center">
                <button className="btn-secondary text-sm">
                  View All Tracks <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
