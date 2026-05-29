import Link from 'next/link'
import { BookOpen, Clock, Star, ArrowRight, TrendingUp } from 'lucide-react'

const modules = [
  { id: 1, title: 'Difficult Conversations 101', category: 'Leadership', duration: '45 min', rating: 4.8, desc: 'Master the art of direct, honest communication in high-stakes professional environments.', recommended: true },
  { id: 2, title: 'Data Storytelling for Executives', category: 'Communication', duration: '60 min', rating: 4.9, desc: 'Turn raw data into compelling narratives that drive executive decisions.', recommended: false },
  { id: 3, title: 'Radical Transparency Practice', category: 'Leadership', duration: '30 min', rating: 4.7, desc: 'Build trust and accountability through structured transparency exercises.', recommended: true },
  { id: 4, title: 'Crisis Management Fundamentals', category: 'Operations', duration: '90 min', rating: 4.6, desc: 'Navigate organizational crises with calm, decisive leadership.', recommended: false },
  { id: 5, title: 'Cross-functional Team Dynamics', category: 'Operations', duration: '75 min', rating: 4.8, desc: 'Lead effectively across department boundaries and competing priorities.', recommended: false },
  { id: 6, title: 'Strategic Delegation Mastery', category: 'Leadership', duration: '50 min', rating: 4.7, desc: 'Delegate effectively while maintaining oversight and quality standards.', recommended: false },
]

export default function SkillLabPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-headline font-bold text-white mb-2">Skill Lab</h1>
        <p className="text-neutral-400 text-sm font-body">
          Targeted micro-modules to improve specific dimensions of your Career Readiness Score.
        </p>
      </div>

      {/* Recommended */}
      <div className="mb-8">
        <div className="section-label mb-4">Recommended for You</div>
        <div className="grid sm:grid-cols-2 gap-4">
          {modules.filter(m => m.recommended).map((mod) => (
            <div key={mod.id} className="card-dark p-6 border-tertiary-500/30 hover:border-tertiary-500/50 transition-all duration-300 cursor-pointer group">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-tertiary-500/20 border border-tertiary-500/30 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-tertiary-400" />
                </div>
                <div className="flex items-center gap-1 text-xs text-neutral-500">
                  <Clock className="w-3 h-3" />
                  {mod.duration}
                </div>
              </div>
              <div className="text-xs text-tertiary-400 font-label uppercase tracking-wider mb-1.5">{mod.category}</div>
              <h3 className="text-white font-headline font-semibold mb-2 group-hover:text-tertiary-300 transition-colors duration-150">{mod.title}</h3>
              <p className="text-neutral-400 text-sm font-body leading-relaxed mb-4">{mod.desc}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  <span className="text-xs text-neutral-400">{mod.rating}</span>
                </div>
                <button className="btn-primary text-xs py-1.5 px-4">Start Module</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All modules */}
      <div>
        <div className="section-label mb-4">All Modules</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.filter(m => !m.recommended).map((mod) => (
            <div key={mod.id} className="card-dark p-5 hover:border-white/20 transition-all duration-200 cursor-pointer group">
              <div className="text-xs text-tertiary-400 font-label uppercase tracking-wider mb-1.5">{mod.category}</div>
              <h3 className="text-white font-semibold text-sm mb-1.5 group-hover:text-tertiary-300 transition-colors duration-150">{mod.title}</h3>
              <p className="text-neutral-400 text-xs font-body leading-relaxed mb-3">{mod.desc}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <Clock className="w-3 h-3" />
                  {mod.duration}
                </div>
                <button className="text-xs text-tertiary-400 hover:text-tertiary-300 cursor-pointer transition-colors duration-150 font-medium flex items-center gap-1">
                  Start <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
