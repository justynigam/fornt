"use client"
import React, { useState } from "react"
import SectionTitle from "../SectionTitle"
import { experiences } from "@/data/Common/data"
import { Briefcase, MapPin, Calendar, ChevronDown, ChevronUp } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

const Experience = () => {
  const [expandedIds, setExpandedIds] = useState<number[]>(
    experiences.map((exp) => exp.id)
  )

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <section id="experience" className="flex flex-col gap-3 scroll-mt-16">
      <SectionTitle title="Experience" />
      <div className="flex flex-col gap-3">
        {experiences.map((exp) => {
          const isExpanded = expandedIds.includes(exp.id)
          return (
            <div
              key={exp.id}
              className="bg-zinc-900 border border-zinc-700 hover:bg-zinc-800/60 transition-colors duration-100 rounded-md p-3.5"
            >
              <div
                onClick={() => toggleExpand(exp.id)}
                className="cursor-pointer flex flex-col gap-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5">
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Briefcase className="w-4 h-4 text-zinc-400 shrink-0" />
                      <h2 className="text-lg font-semibold leading-tight">
                        {exp.role}
                      </h2>
                      <span className="text-zinc-500">·</span>
                      <span className="font-medium text-zinc-200">
                        {exp.organization}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-400 pl-6">
                      {exp.projectOrDomain}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-zinc-400 pl-6 sm:pl-0 shrink-0">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-zinc-800 border border-zinc-700 px-2 py-0.5 rounded-md text-zinc-200 font-medium">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <button
                      type="button"
                      aria-label={isExpanded ? "Collapse details" : "Expand details"}
                      className="text-zinc-400 hover:text-white transition-colors"
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pl-6">
                  {exp.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="text-xs font-medium px-2 py-0.5 rounded-md bg-green-400/10 text-green-400 border border-green-400/20"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-3 pl-6 flex flex-col gap-1.5 text-sm text-mainWhite/85 list-disc list-outside ml-4">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 pt-2.5 border-t border-zinc-800 flex flex-wrap gap-1.5 pl-6">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-zinc-700 bg-zinc-950/60 px-2 py-0.5 rounded-md text-xs text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Experience
