"use client"
import React, { useState } from "react"
import { FiGithub } from "react-icons/fi"
import { GoDotFill } from "react-icons/go"
import { LuLink, LuShare } from "react-icons/lu"
import { InfoTipProjects } from "./InfoTipProjects"
import { AnimatePresence, motion } from "motion/react"
import { toast } from "react-hot-toast"
import {
  Scale,
  ShieldCheck,
  ShieldAlert,
  Bot,
  Camera,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

type ProjectAccent = "emerald" | "sky" | "amber" | "violet" | "rose"

interface ProjectBoxProps {
  year?: string
  badge: string
  accent: ProjectAccent
  status: boolean
  title: string
  content: string
  highlights: string[]
  metrics: string[]
  url?: string
  github: string
  skill: string[]
}

const accentStyles: Record<
  ProjectAccent,
  { bg: string; icon: string; pill: string }
> = {
  emerald: {
    bg: "from-emerald-500/15 via-zinc-900 to-zinc-950 border-emerald-500/25",
    icon: "text-emerald-400",
    pill: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
  },
  sky: {
    bg: "from-sky-500/15 via-zinc-900 to-zinc-950 border-sky-500/25",
    icon: "text-sky-400",
    pill: "bg-sky-400/10 text-sky-300 border-sky-400/20",
  },
  amber: {
    bg: "from-amber-500/15 via-zinc-900 to-zinc-950 border-amber-500/25",
    icon: "text-amber-400",
    pill: "bg-amber-400/10 text-amber-300 border-amber-400/20",
  },
  violet: {
    bg: "from-violet-500/15 via-zinc-900 to-zinc-950 border-violet-500/25",
    icon: "text-violet-400",
    pill: "bg-violet-400/10 text-violet-300 border-violet-400/20",
  },
  rose: {
    bg: "from-rose-500/15 via-zinc-900 to-zinc-950 border-rose-500/25",
    icon: "text-rose-400",
    pill: "bg-rose-400/10 text-rose-300 border-rose-400/20",
  },
}

const ProjectIcon = ({ accent }: { accent: ProjectAccent }) => {
  const iconClass = `w-8 h-8 ${accentStyles[accent].icon}`
  if (accent === "emerald") return <Scale className={iconClass} />
  if (accent === "sky") return <ShieldCheck className={iconClass} />
  if (accent === "violet") return <ShieldAlert className={iconClass} />
  if (accent === "rose") return <Camera className={iconClass} />
  return <Bot className={iconClass} />
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
  year,
  badge,
  accent,
  status,
  title,
  content,
  highlights,
  metrics,
  url,
  github,
  skill,
}) => {
  const [open, setOpen] = useState(true)

  const handleShare = async (shareUrl: string) => {
    const shareData = {
      title: `${title} — Nigam Prasad Lenka`,
      url: shareUrl,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        await navigator.clipboard.writeText(shareData.url)
        toast.success("Link copied to clipboard")
      }
    } catch {
      await navigator.clipboard.writeText(shareData.url)
      toast.success("Link copied to clipboard")
    }
  }

  return (
    <div className="project-box bg-zinc-900 hover:bg-zinc-800/60 transition-colors duration-100 border border-zinc-700 rounded-md">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex md:flex-row flex-col gap-3.5 p-3 cursor-pointer"
      >
        <div
          className={`md:w-[156px] w-full shrink-0 rounded-md border bg-gradient-to-br ${accentStyles[accent].bg} p-3 flex md:flex-col flex-row md:justify-between justify-between items-center md:items-start select-none md:min-h-[124px]`}
        >
          <div className="flex items-center gap-2.5 md:flex-col md:items-start">
            <ProjectIcon accent={accent} />
            <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-300 leading-tight">
              {badge}
            </span>
          </div>
          {year && (
            <span className="text-xs font-mono text-zinc-400 bg-zinc-950/70 border border-zinc-800 px-2 py-0.5 rounded">
              {year}
            </span>
          )}
        </div>

        <div className="flex-1 flex flex-col gap-1.5 min-w-0">
          <div className="flex justify-between items-start gap-2">
            <div className="flex flex-wrap gap-2 items-center">
              <h2 className="text-xl font-semibold leading-snug">{title}</h2>
              {status && (
                <div className="select-none font-medium text-xs w-fit px-1.5 py-0.5 gap-0.5 rounded-md flex items-center bg-green-400/10 text-green-400">
                  <span className="animate-pulse">
                    <GoDotFill />
                  </span>
                  Shipped
                </div>
              )}
            </div>
            <div className="select-none flex items-center gap-2.5 px-1 text-base shrink-0">
              {url && (
                <InfoTipProjects text="Live">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-zinc-400 transition-colors duration-100"
                    href={url}
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Live demo for ${title}`}
                  >
                    <LuLink />
                  </a>
                </InfoTipProjects>
              )}
              {github && (
                <InfoTipProjects text="GitHub">
                  <a
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-zinc-400 transition-colors duration-100"
                    href={github}
                    aria-label={`GitHub repository for ${title}`}
                  >
                    <FiGithub />
                  </a>
                </InfoTipProjects>
              )}
              <button
                type="button"
                aria-label={open ? "Collapse project details" : "Expand project details"}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                {open ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          <p className="text-sm text-mainWhite/80 leading-relaxed">{content}</p>

          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {metrics.map((metric) => (
              <span
                key={metric}
                className={`text-xs font-medium px-2 py-0.5 rounded-md border ${accentStyles[accent].pill}`}
              >
                {metric}
              </span>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ ease: "easeInOut", duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="border-t border-zinc-800 mx-3" />
            <div className="px-3.5 py-3 flex flex-col gap-3">
              <ul className="flex flex-col gap-1.5 text-sm text-mainWhite/80 list-disc list-outside ml-4">
                {highlights.map((bullet, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex justify-between items-center gap-3 pt-1">
                <div className="flex flex-wrap gap-1.5 select-none">
                  {skill.map((tech, index) => (
                    <span
                      key={index}
                      className="border border-zinc-700 bg-zinc-950/60 px-2 py-0.5 rounded-md text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  aria-label={`Share ${title}`}
                  className="cursor-pointer select-none hover:text-zinc-400 transition-colors duration-100 p-1 shrink-0"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleShare(url || github)
                  }}
                >
                  <LuShare />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProjectBox
