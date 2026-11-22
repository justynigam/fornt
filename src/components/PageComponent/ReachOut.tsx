"use client"
import SectionTitle from "../SectionTitle"
import { useSwitch } from "../Context/SwitchContext"
import {
  nigamProfile,
  builderProfile,
  nigamContactLinks,
} from "@/data/NigamData/data"
import toast from "react-hot-toast"
import { Copy } from "lucide-react"

const ReachOut = () => {
  const { isSwitchOn } = useSwitch()
  const contactText = isSwitchOn
    ? builderProfile.contactText
    : nigamProfile.contactText

  const handleCopy = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value)
      toast.success(`${label} copied to clipboard`)
    } catch {
      toast.error("Could not copy to clipboard")
    }
  }

  return (
    <section id="contact" className="flex flex-col gap-1 scroll-mt-16">
      <SectionTitle title="Reach out to me" />
      <div className="flex flex-col gap-2.5">
        <p className="text-mainWhite/85 leading-relaxed">{contactText}</p>
        <div className="flex flex-wrap items-center gap-2">
          {nigamContactLinks.map((link) => (
            <div key={link.id} className="inline-flex items-center">
              <a
                className={`btn text-sm ${link.copyValue ? "rounded-r-none border-r-0" : ""}`}
                target={link.link.startsWith("http") ? "_blank" : undefined}
                rel={link.link.startsWith("http") ? "noopener noreferrer" : undefined}
                href={link.link}
              >
                <link.icon />
                {link.name}
              </a>
              {link.copyValue && (
                <button
                  type="button"
                  onClick={() => handleCopy(link.copyValue!, link.name)}
                  aria-label={`Copy ${link.name}`}
                  className="cursor-pointer select-none transition-colors duration-100 bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 px-2 py-1.5 rounded-r-md text-zinc-400 hover:text-mainWhite"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReachOut
