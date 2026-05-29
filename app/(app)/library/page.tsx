'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Star, Clock, ChevronRight, Search, ArrowRight } from 'lucide-react'

const tracks = [
  { id: 1, title: 'Senior Product Analyst', category: 'Technology', weeks: 12, rating: 4.9, difficulty: 'Senior', label: 'HOT TRACK', demand: 96, description: 'Master the art of data-driven decision making. This...', color: 'from-blue-700 to-tertiary-700', enrolled: true },
  { id: 2, title: 'Management Trainee', category: 'Leadership', weeks: 8, rating: 4.7, difficulty: 'Junior', label: '', demand: 62, description: 'Foundational executive skills including resource allocation and conflict resolution within an agile environment.', color: 'from-secondary-600 to-primary-700', enrolled: false, featured: true },
  { id: 3, title: 'FinOps Director', category: 'Finance & Ops', weeks: 10, rating: 4.8, difficulty: 'Senior', label: 'CERTIFIED', demand: 88, description: 'Advance your career in cloud economics and organizational financial agility.', color: 'from-emerald-700 to-teal-800', enrolled: false },
  { id: 4, title: 'Strategy Consultant', category: 'Strategy', weeks: 5, rating: 4.6, difficulty: 'Senior', label: '', demand: 74, description: 'Solve macro-economic puzzles for Fortune 500 conglomerates in a risk-free lab.', color: 'from-purple-800 to-secondary-700', enrolled: false },
  { id: 5, title: 'AI Operations Lead', category: 'AI & Data', weeks: 8, rating: 4.9, difficulty: 'Senior', label: 'NEXT GEN', demand: 99, description: 'Learn to integrate generative AI workflows into existing enterprise pipelines.', color: 'from-tertiary-700 to-purple-700', enrolled: false, requestAccess: true },
  { id: 6, title: 'UX Research Lead', category: 'Design', weeks: 6, rating: 4.7, difficulty: 'Junior', label: '', demand: 71, description: 'Master user research methodologies, usability testing, and research-to-design handoff.', color: 'from-pink-700 to-rose-800', enrolled: false },
]

const industries = ['Technology', 'Finance & Ops', 'Leadership', 'Data Science', 'Marketing']
const levels = ['Junior', 'Senior', 'Executive']

export default function LibraryPage() {
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([])
  const [selectedLevels, setSelectedLevels] = useState<string[]>(['Junior', 'Senior'])
  const [search, setSearch] = useState('')

  const toggleIndustry = (ind: string) => {
    setSelectedIndustries(prev => prev.includes(ind) ? prev.filter(i => i !== ind) : [...prev, ind])
  }
  const toggleLevel = (level: string) => {
    setSelectedLevels(prev => prev.includes(level) ? prev.filter(l => l !== level) : [...prev, level])
  }

  const filtered = tracks.filter(t => {
    const matchIndustry = selectedIndustries.length === 0 || selectedIndustries.includes(t.category)
    const matchLevel = selectedLevels.length === 0 || selectedLevels.includes(t.difficulty)
    const matchSearch = !search || t.title.toLowerCase().includes(search.toLowerCase())
    return matchIndustry && matchLevel && matchSearch
  })

  return (
    <div className="flex h-full">
      {/* Filter sidebar */}
      <aside className="w-52 shrink-0 border-r border-white/10 p-5 space-y-6 bg-primary-600/20">
        <div>
          <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider font-label mb-3">Industry</h3>
          <div className="space-y-2">
            {industries.map((ind) => (
              <label key={ind} className="flex items-center gap-2.5 cursor-pointer group">
                <div
                  className={`w-4 h-4 rounded border transition-all duration-150 flex items-center justify-center cursor-pointer shrink-0 ${
                    selectedIndustries.includes(ind)
                      ? 'bg-tertiary-500 border-tertiary-500'
                      : 'border-white/20 group-hover:border-white/50'
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
                <span className={`text-xs transition-colors duration-150 ${selectedIndustries.includes(ind) ? 'text-white' : 'text-neutral-400 group-hover:text-white'}`}>
                  {ind}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider font-label mb-3">Level</h3>
          <div className="flex flex-wrap gap-2">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => toggleLevel(level)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all duration-150 ${
                  selectedLevels.includes(level)
                    ? 'bg-tertiary-500 text-white'
                    : 'bg-white/10 text-neutral-400 hover:bg-white/15 hover:text-white'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto app-scroll p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-headline font-bold text-white mb-1">Available Tracks</h1>
          <p className="text-neutral-400 text-sm font-body">
            Select a simulation to begin your earned progression. Each track consists of 12 real-world modules designed to mirror executive-level challenges.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((track) => (
            <div key={track.id} className={`card-dark overflow-hidden hover:border-white/25 hover:shadow-card-hover transition-all duration-300 cursor-pointer group flex flex-col ${track.featured ? 'ring-1 ring-tertiary-500/40' : ''}`}>
              {/* Image */}
              <div className={`h-28 bg-gradient-to-br ${track.color} relative`}>
                {track.label && (
                  <span className={`absolute top-2.5 left-2.5 px-1.5 py-0.5 text-white text-[10px] font-bold uppercase tracking-wider rounded-md ${
                    track.label === 'HOT TRACK' ? 'bg-red-500' :
                    track.label === 'CERTIFIED' ? 'bg-green-600' : 'bg-tertiary-500'
                  }`}>
                    {track.label}
                  </span>
                )}
                <div className="absolute top-2.5 right-2.5 flex items-center gap-0.5 bg-black/40 rounded px-1.5 py-0.5">
                  <Star className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />
                  <span className="text-white text-xs font-semibold">{track.rating}</span>
                </div>
                {track.enrolled && (
                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 bg-tertiary-500/80 backdrop-blur-sm rounded text-xs text-white font-semibold">
                    Enrolled
                  </div>
                )}
              </div>

              <div className="p-4 flex flex-col flex-1">
                <div className="text-[10px] text-tertiary-400 font-label uppercase tracking-wider mb-1">
                  {track.category} · {track.weeks} weeks
                </div>
                <h3 className="text-white font-headline font-semibold text-base mb-1.5 group-hover:text-tertiary-300 transition-colors duration-150 leading-tight">
                  {track.title}
                </h3>
                <p className="text-neutral-400 text-xs leading-relaxed font-body mb-3 flex-1">{track.description}</p>

                {/* Demand bar */}
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-neutral-500 font-label">Demand</span>
                    <span className="text-[10px] text-tertiary-400 font-semibold">{track.demand}%</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary-500 rounded-full" style={{ width: `${track.demand}%` }} />
                  </div>
                </div>

                {track.featured ? (
                  <div className="grid grid-cols-2 gap-2">
                    <Link href="/simulation" className="btn-primary text-xs py-2 justify-center">
                      Enroll Track
                    </Link>
                    <Link href="/careers" className="btn-secondary text-xs py-2 justify-center">
                      View Details
                    </Link>
                  </div>
                ) : track.requestAccess ? (
                  <button className="w-full py-2 text-xs bg-white/10 text-neutral-300 hover:bg-white/15 rounded-lg font-semibold transition-all duration-150 cursor-pointer">
                    Request Access
                  </button>
                ) : (
                  <Link href="/simulation" className="btn-primary text-xs py-2 justify-center w-full">
                    Enroll Track
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/careers" className="btn-secondary text-sm">
            View All Tracks <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  )
}
