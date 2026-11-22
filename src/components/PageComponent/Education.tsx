"use client"
import React from "react"
import SectionTitle from "../SectionTitle"
import { education } from "@/data/Common/data"
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react"

const Education = () => {
  return (
    <section id="education" className="flex flex-col gap-3 scroll-mt-16">
      <SectionTitle title="Education" />
      <div className="flex flex-col gap-2.5">
        {education.map((item) => (
          <div
            key={item.id}
            className="bg-zinc-900 border border-zinc-700 rounded-md p-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-md bg-zinc-950 border border-zinc-700 text-zinc-200 shrink-0 mt-0.5">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-0.5">
                <h2 className="text-lg font-semibold leading-snug">
                  {item.institution}
                </h2>
                <p className="text-sm text-mainWhite/85">{item.degree}</p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 mt-1">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center sm:self-center pl-11 sm:pl-0">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-700 text-sm font-semibold text-mainWhite whitespace-nowrap">
                <Award className="w-4 h-4 text-green-400" />
                {item.grade}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
