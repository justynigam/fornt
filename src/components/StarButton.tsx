"use client"
import React from "react"
import { FaGithub } from "react-icons/fa6"
import { HiOutlineDocumentText } from "react-icons/hi2"
import { nigamProfile, resumePdfPath } from "@/data/NigamData/data"

const StarButton = () => {
  return (
    <div className="flex items-center gap-2">
      <a
        className="px-3 py-1 border border-zinc-700 flex items-center gap-1.5 rounded-[8px] bg-zinc-900 hover:bg-zinc-800 transition-all duration-200 text-sm"
        target="_blank"
        rel="noopener noreferrer"
        href={resumePdfPath}
      >
        <HiOutlineDocumentText className="size-[16px]" />
        <span>Resume</span>
      </a>
      <a
        className="px-3 py-1 border border-zinc-700 hidden md:flex items-center gap-1.5 rounded-[8px] bg-zinc-900 hover:bg-zinc-800 transition-all duration-200 text-sm"
        target="_blank"
        rel="noopener noreferrer"
        href={nigamProfile.github}
      >
        <FaGithub className="size-[15px]" />
        <span>@{nigamProfile.githubHandle}</span>
      </a>
    </div>
  )
}

export default StarButton
