"use client"
import React from "react"
import SectionTitle from "../SectionTitle"
import { achievements } from "@/data/Common/data"
import { Trophy, ExternalLink } from "lucide-react"

const Achievements = () => {
  return (
    <section id="achievements" className="flex flex-col gap-3 scroll-mt-16">
      <SectionTitle title="Achievements" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {achievements.map((item) => (
          <div
            key={item.id}
            className="bg-zinc-900 border border-zinc-700 hover:bg-zinc-800/75 transition-colors duration-100 rounded-md p-3.5 flex flex-col gap-1.5"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
                <h2 className="text-base font-semibold leading-snug">
                  {item.event}
                </h2>
              </div>
              {"link" in item && item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-mainWhite transition-colors shrink-0"
                >
                  {"handle" in item && item.handle ? item.handle : "Profile"}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
            <span className="w-fit text-xs font-medium px-2 py-0.5 rounded-md bg-amber-400/10 text-amber-300 border border-amber-400/20">
              {item.rank}
            </span>
            <p className="text-sm text-mainWhite/80 leading-relaxed">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Achievements
