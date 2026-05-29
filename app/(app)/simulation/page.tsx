'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, Clock, Send, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react'

const tasks = [
  { id: 1, title: 'Onboarding Brief Review', status: 'completed' },
  { id: 2, title: 'Team Diagnostic Report', status: 'active' },
  { id: 3, title: 'Stakeholder Email', status: 'pending' },
  { id: 4, title: 'Resource Allocation Plan', status: 'pending' },
  { id: 5, title: 'Final Strategy Memo', status: 'pending' },
]

export default function SimulationPage() {
  const [content, setContent] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const activeTask = tasks.find(t => t.status === 'active')

  return (
    <div className="p-6 lg:p-8 max-w-5xl">
      {/* Header */}
      <div className="flex items-center gap-2 text-sm text-neutral-400 mb-6">
        <Link href="/library" className="hover:text-white transition-colors duration-150">Library</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-white">Management Trainee</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-tertiary-400">Week 1, Day 2</span>
      </div>

      {/* Simulation header */}
      <div className="card-dark p-5 mb-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs text-neutral-500 font-label uppercase tracking-wider mb-1">Acme Corp · Management Trainee</div>
            <div className="text-white font-headline font-bold text-lg">Week 1, Day 2</div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <div className="text-xs text-neutral-500 font-label mb-1">Progress</div>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary-500 rounded-full" style={{ width: '40%' }} />
                </div>
                <span className="text-xs text-white font-semibold">2/5 tasks</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-yellow-400">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-semibold">2:45:00</span>
            </div>
          </div>
        </div>

        {/* Task progress bar */}
        <div className="flex gap-2 mt-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`flex-1 h-1.5 rounded-full ${
                task.status === 'completed' ? 'bg-green-400' :
                task.status === 'active' ? 'bg-tertiary-500' :
                'bg-white/10'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Manager Brief */}
      <div className="card-dark p-6 mb-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-secondary-500 border border-white/20 flex items-center justify-center text-white text-sm font-bold font-headline shrink-0">
            SM
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-white font-semibold text-sm">Sarah Mitchell</div>
                <div className="text-neutral-500 text-xs font-label">VP of Operations, Acme Corp</div>
              </div>
              <div className="text-xs text-neutral-500 font-label">Today, 09:14 AM</div>
            </div>
            <div className="text-neutral-300 text-sm font-body leading-relaxed space-y-3">
              <p><strong className="text-white">Re: Q3 Team Diagnostic — Your Report Due EOD</strong></p>
              <p>Jordan — welcome to your second day on the team. Based on our initial onboarding conversation, I'd like you to take a hard look at the department performance data I've attached and produce a written diagnostic report.</p>
              <p>Specifically, I need you to identify the top 2 performance gaps, propose one intervention for each, and estimate expected impact. This will inform our Q3 planning session tomorrow morning.</p>
              <p>Data file attached below. Report due by 5PM today. Keep it tight — two pages max.</p>
              <p className="text-neutral-500">— Sarah</p>
            </div>

            <div className="mt-4 p-3 bg-white/5 border border-white/10 rounded-lg flex items-center gap-3 cursor-pointer hover:bg-white/10 transition-colors duration-150">
              <div className="w-8 h-8 rounded-lg bg-tertiary-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-tertiary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <div className="text-white text-xs font-semibold">Q3_Team_Performance_Data.csv</div>
                <div className="text-neutral-500 text-xs">24.3 KB · Click to view</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Task Interface */}
      {!submitted ? (
        <div className="card-dark p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="section-label mb-1">Task 2 of 5</div>
              <h2 className="text-xl font-headline font-semibold text-white">{activeTask?.title}</h2>
            </div>
            <div className="flex items-center gap-1.5 text-yellow-400 text-sm">
              <Clock className="w-4 h-4" />
              <span className="font-semibold">Due in 2:45:00</span>
            </div>
          </div>

          {/* Rich text editor area */}
          <div className="mb-4">
            <div className="flex items-center gap-1 p-2 bg-white/5 border border-white/10 rounded-t-xl border-b-0">
              {['Bold', 'Italic', 'H1', 'H2', 'List', 'Link'].map((tool) => (
                <button key={tool} className="px-2.5 py-1 text-xs text-neutral-400 hover:text-white hover:bg-white/10 rounded cursor-pointer transition-colors duration-150">
                  {tool}
                </button>
              ))}
            </div>
            <textarea
              value={content}
              onChange={e => setContent(e.target.value)}
              placeholder="Begin your team diagnostic report here...

Start with an executive summary, then identify the 2 key performance gaps with supporting evidence from the data file. Propose one concrete intervention per gap, and estimate the expected impact on Q3 metrics.

Professional tone required. Maximum 2 pages."
              className="w-full h-64 bg-white/5 border border-white/10 rounded-b-xl px-4 py-4 text-neutral-300 text-sm font-body leading-relaxed placeholder-neutral-600 focus:outline-none focus:border-tertiary-500/40 resize-none transition-colors duration-150"
            />
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-neutral-600">{content.length} characters</span>
              <span className="text-xs text-neutral-600">Autosaved 30s ago</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button className="btn-secondary text-sm py-2.5">Save Draft</button>
            <button
              onClick={() => setSubmitted(true)}
              disabled={content.length < 50}
              className="btn-primary text-sm py-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Report <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="card-dark p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
          <h2 className="text-2xl font-headline font-bold text-white mb-2">Submitted!</h2>
          <p className="text-neutral-400 font-body mb-6">AI evaluation in progress — results in under 10 seconds.</p>

          <div className="card-dark p-6 text-left mb-6">
            <div className="section-label mb-3">AI Feedback — Task 2</div>
            <div className="space-y-4">
              {[
                { dim: 'Accuracy', score: 88, feedback: 'Strong grasp of the performance data. Correctly identified both efficiency and velocity as primary gap areas, with well-cited evidence.' },
                { dim: 'Logical Reasoning', score: 79, feedback: 'Intervention logic is sound. Consider quantifying expected impact more precisely — numbers increase executive credibility.' },
                { dim: 'Communication', score: 91, feedback: 'Exceptionally clear and professional. The executive summary structure is exactly right for this audience level.' },
              ].map((item) => (
                <div key={item.dim}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-semibold text-white">{item.dim}</span>
                    <span className="text-sm font-bold text-tertiary-400">{item.score}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden mb-1.5">
                    <div className="h-full bg-tertiary-500 rounded-full" style={{ width: `${item.score}%` }} />
                  </div>
                  <p className="text-neutral-400 text-xs font-body">{item.feedback}</p>
                </div>
              ))}
            </div>
          </div>

          <Link href="/simulation" className="btn-primary" onClick={() => setSubmitted(false)}>
            Continue to Task 3 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  )
}
