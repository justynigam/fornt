"use client"
import React, { useState } from "react"
import SectionTitle from "../SectionTitle"
import { skills, skillCategories } from "@/data/Common/data"

const Skills = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof skillCategories)[number]>("All")

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory)

  return (
    <section id="skills" className="flex flex-col gap-2.5 scroll-mt-16">
      <SectionTitle title="Skills & Tools" />
      <div className="flex flex-wrap gap-1.5">
        {skillCategories.map((category) => {
          const isActive = selectedCategory === category
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`text-xs px-2.5 py-1 rounded-md border transition-colors duration-100 select-none ${
                isActive
                  ? "bg-mainWhite text-mainBlack border-mainWhite font-medium"
                  : "bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-mainWhite"
              }`}
            >
              {category}
            </button>
          )
        })}
      </div>
      <div className="flex flex-wrap gap-1.5 mt-0.5">
        {filteredSkills.map((skill) => (
          <span key={skill.id} className="skills-card text-sm">
            <skill.icon className="shrink-0" />
            {skill.text}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills
