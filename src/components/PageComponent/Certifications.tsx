"use client"
import React from "react"
import SectionTitle from "../SectionTitle"
import { certifications } from "@/data/Common/data"
import { BadgeCheck } from "lucide-react"

const Certifications = () => {
  return (
    <section id="certifications" className="flex flex-col gap-3 scroll-mt-16">
      <SectionTitle title="Certifications" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-zinc-900 border border-zinc-700 hover:bg-zinc-800/75 transition-colors duration-100 rounded-md p-3.5 flex items-start gap-3"
          >
            <div className="p-2 rounded-md bg-zinc-950 border border-zinc-700 text-green-400 shrink-0 mt-0.5">
              <BadgeCheck className="w-4 h-4" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                {cert.issuer}
              </span>
              <h2 className="text-base font-semibold leading-snug">
                {cert.title}
              </h2>
              <p className="text-sm text-mainWhite/75 leading-relaxed">
                {cert.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications
