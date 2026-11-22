"use client"
import React, { useState } from "react"
import { evaluateRoleFit, type RoleFitResult } from "@/utils/roleFitEvaluator"
import { Target, CheckCircle2, RotateCcw } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

const QUICK_ROLES = ["AI Engineer", "Backend Dev", "Full Stack"]

const getScoreColors = (score: number) => {
  if (score >= 88) {
    return {
      text: "text-emerald-400",
      bar: "bg-emerald-400",
      badge: "bg-emerald-400/10 text-emerald-300 border-emerald-400/25",
    }
  }
  if (score >= 74) {
    return {
      text: "text-sky-400",
      bar: "bg-sky-400",
      badge: "bg-sky-400/10 text-sky-300 border-sky-400/25",
    }
  }
  if (score >= 55) {
    return {
      text: "text-amber-400",
      bar: "bg-amber-400",
      badge: "bg-amber-400/10 text-amber-300 border-amber-400/25",
    }
  }
  return {
    text: "text-rose-400",
    bar: "bg-rose-400",
    badge: "bg-rose-400/10 text-rose-300 border-rose-400/25",
  }
}

const RoleFitWidget: React.FC = () => {
  const [roleInput, setRoleInput] = useState("")
  const [result, setResult] = useState<RoleFitResult | null>(null)

  const handleValidate = (e?: React.FormEvent, presetRole?: string) => {
    if (e) e.preventDefault()
    const query = (presetRole ?? roleInput).trim()
    if (!query) return
    if (presetRole) setRoleInput(presetRole)
    setResult(evaluateRoleFit(query))
  }

  const handleReset = () => {
    setRoleInput("")
    setResult(null)
  }

  const colors = result ? getScoreColors(result.percentage) : null

  return (
    <aside
      aria-label="Role fit validator"
      className="w-full sm:w-[300px] xl:fixed xl:left-4 2xl:left-7 xl:top-16 xl:w-[218px] 2xl:w-[244px] z-30 mb-4 xl:mb-0"
    >
      <div className="bg-zinc-900/95 backdrop-blur-sm border border-zinc-700 rounded-md p-3 flex flex-col gap-2.5 shadow-lg shadow-black/40">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5 text-green-400 shrink-0" />
            <h2 className="text-xs font-semibold tracking-wide uppercase text-mainWhite">
              Role Fit Check
            </h2>
          </div>
          {result && (
            <button
              type="button"
              onClick={handleReset}
              aria-label="Reset role fit check"
              className="text-zinc-400 hover:text-mainWhite transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          )}
        </div>

        <form onSubmit={handleValidate} className="flex flex-col gap-1.5">
          <input
            type="text"
            value={roleInput}
            onChange={(e) => setRoleInput(e.target.value)}
            placeholder="Enter role (e.g. AI Engineer)"
            aria-label="Role name"
            className="w-full text-xs px-2.5 py-1.5 rounded-md bg-mainBlack border border-zinc-700 text-mainWhite placeholder:text-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors"
          />
          <button
            type="submit"
            disabled={!roleInput.trim()}
            className="w-full text-xs font-medium py-1.5 px-2.5 rounded-md bg-mainWhite text-mainBlack hover:bg-white/85 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-150 cursor-pointer"
          >
            Validate
          </button>
        </form>

        {!result && (
          <div className="flex flex-wrap gap-1">
            {QUICK_ROLES.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => handleValidate(undefined, preset)}
                className="text-[11px] px-1.5 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-mainWhite hover:border-zinc-600 transition-colors"
              >
                {preset}
              </button>
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          {result && colors && (
            <motion.div
              key={`${result.role}-${result.percentage}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="border-t border-zinc-800 pt-2.5 flex flex-col gap-2"
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className={`text-2xl font-bold font-mono ${colors.text}`}>
                  {result.percentage}%
                </span>
                <span
                  className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${colors.badge}`}
                >
                  {result.verdict}
                </span>
              </div>

              <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${result.percentage}%` }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className={`h-full rounded-full ${colors.bar}`}
                />
              </div>

              <p className="text-[11px] text-zinc-300 leading-relaxed">
                {result.summary}
              </p>

              <div className="flex flex-wrap gap-1">
                {result.matchedSkills.slice(0, 4).map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-950 border border-zinc-700 text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-1 pt-0.5">
                {result.evidence.slice(0, 1).map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-1 text-[10px] text-zinc-400 leading-snug"
                  >
                    <CheckCircle2 className="w-3 h-3 text-green-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </aside>
  )
}

export default RoleFitWidget
