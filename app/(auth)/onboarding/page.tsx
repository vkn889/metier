'use client'

import { useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import Link from 'next/link'
import { ChevronLeft, ArrowRight } from 'lucide-react'
import { saveOnboarding, type AuthState } from '@/lib/actions/auth'
import { motion, AnimatePresence } from 'framer-motion'

const steps = [
  {
    id: 'goal',
    title: "What's your career goal?",
    subtitle: "We'll personalize your simulation library based on your answer.",
    field: 'careerGoal',
    options: [
      { id: 'land-first', label: 'Land my first job', desc: 'Entering the workforce for the first time' },
      { id: 'switch', label: 'Switch careers', desc: 'Moving into a new industry or function' },
      { id: 'advance', label: 'Advance in my field', desc: 'Get promoted or take on senior roles' },
      { id: 'explore', label: 'Explore options', desc: "Figuring out what path fits me best" },
    ],
  },
  {
    id: 'experience',
    title: "What's your experience level?",
    subtitle: 'This helps us calibrate difficulty for your first simulation.',
    field: 'experienceLevel',
    options: [
      { id: 'none', label: 'No work experience', desc: 'Student or recent grad with no full-time roles' },
      { id: 'junior', label: '1–3 years', desc: 'Early career — some internships or entry-level roles' },
      { id: 'mid', label: '4–7 years', desc: 'Mid-career professional with a track record' },
      { id: 'senior', label: '8+ years', desc: 'Senior professional or manager' },
    ],
  },
]

const recommended = {
  title: 'Management Trainee',
  category: 'Leadership',
  weeks: 8,
  description: 'Foundational executive skills for rising professionals. The ideal first simulation for any career goal.',
}

const initialState: AuthState = {}

function StartButton() {
  const { pending } = useFormStatus()
  return (
    <button type="submit" disabled={pending}
      className="btn-primary justify-center w-full text-base py-4"
    >
      {pending ? 'Saving…' : <>Start My First Simulation <ArrowRight className="w-5 h-5" /></>}
    </button>
  )
}

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selections, setSelections] = useState<Record<string, string>>({})
  const [state, action] = useFormState(saveOnboarding, initialState)

  const step = steps[currentStep]
  const isSelectPhase = currentStep < steps.length
  const progress = isSelectPhase ? (currentStep / steps.length) * 85 : 100

  const handleSelect = (optionId: string) => {
    const newSelections = { ...selections, [step.field]: optionId }
    setSelections(newSelections)
    if (currentStep < steps.length - 1) {
      setTimeout(() => setCurrentStep(s => s + 1), 220)
    } else {
      setTimeout(() => setCurrentStep(steps.length), 220)
    }
  }

  return (
    <div className="min-h-screen bg-[#080812] flex items-center justify-center px-6">
      <div className="w-full max-w-lg">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 mb-12">
          <div className="w-8 h-8 bg-tertiary-500 rounded-lg flex items-center justify-center font-headline font-black text-white text-xs shadow-glow-sm">M/</div>
          <span className="text-white font-headline font-black tracking-wider text-sm uppercase">MÉTIER</span>
        </Link>

        {/* Progress */}
        <div className="mb-10">
          <div className="flex justify-between mb-2">
            <span className="text-xs text-neutral-600 font-label">
              {isSelectPhase ? `Step ${currentStep + 1} of ${steps.length}` : 'Complete'}
            </span>
            <span className="text-xs text-neutral-600 font-label">{Math.round(progress)}%</span>
          </div>
          <div className="h-0.5 bg-white/8 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-tertiary-500 rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isSelectPhase ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-headline font-black text-white text-3xl mb-2 tracking-tight">{step.title}</h2>
              <p className="text-neutral-500 font-body text-sm mb-8">{step.subtitle}</p>

              <div className="space-y-3">
                {step.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleSelect(option.id)}
                    className={`w-full text-left p-4 rounded-xl border cursor-pointer transition-all duration-150 group ${
                      selections[step.field] === option.id
                        ? 'bg-tertiary-500/15 border-tertiary-500/50 text-white'
                        : 'bg-white/[0.03] border-white/8 text-neutral-300 hover:border-white/20 hover:bg-white/[0.05]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-sm">{option.label}</p>
                        <p className="text-xs text-neutral-500 mt-0.5 font-body">{option.desc}</p>
                      </div>
                      <div className={`w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center transition-all ${
                        selections[step.field] === option.id ? 'border-tertiary-500 bg-tertiary-500' : 'border-white/20'
                      }`}>
                        {selections[step.field] === option.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {currentStep > 0 && (
                <button onClick={() => setCurrentStep(s => s - 1)}
                  className="mt-6 flex items-center gap-1 text-neutral-600 hover:text-neutral-400 text-sm cursor-pointer transition-colors">
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="complete"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="font-headline font-black text-white text-3xl mb-2 tracking-tight">You're ready to simulate.</h2>
              <p className="text-neutral-500 font-body text-sm mb-8">Based on your goals, we've curated your first track. Start whenever you're ready.</p>

              <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 mb-6">
                <p className="section-label mb-2">Recommended First Track</p>
                <p className="font-headline font-black text-white text-2xl tracking-tight mb-1">{recommended.title}</p>
                <p className="text-tertiary-400 text-sm font-label mb-3">{recommended.category} · {recommended.weeks} weeks</p>
                <p className="text-neutral-500 text-sm font-body">{recommended.description}</p>
              </div>

              {state.error && (
                <div role="alert" className="mb-4 p-3 bg-red-500/15 border border-red-500/30 rounded-xl text-red-300 text-sm">{state.error}</div>
              )}

              <form action={action}>
                <input type="hidden" name="careerGoal" value={selections.careerGoal || 'explore'} />
                <input type="hidden" name="experienceLevel" value={selections.experienceLevel || 'none'} />
                <StartButton />
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
