"use client"
import { useSwitch } from "../Context/SwitchContext"
import {
  nigamProfile,
  builderProfile,
  nigamFooterLinks,
} from "@/data/NigamData/data"

const Footer = () => {
  const { isSwitchOn } = useSwitch()
  const displayName = isSwitchOn
    ? builderProfile.fullName
    : nigamProfile.fullName

  return (
    <footer className="md:mb-12 mb-16">
      <div className="border-t border-zinc-700 my-6" />
      <div className="flex flex-col gap-2.5 items-center">
        <div className="flex flex-wrap justify-center gap-4 items-center md:text-base text-sm">
          {nigamFooterLinks.map((link) => (
            <a
              key={link.id}
              className="select-none md:text-base text-xl hover:opacity-75 flex gap-1.5 items-center transition duration-100"
              target={link.link.startsWith("http") || link.link.endsWith(".pdf") ? "_blank" : undefined}
              rel={link.link.startsWith("http") ? "noopener noreferrer" : undefined}
              href={link.link}
              aria-label={link.name}
            >
              <link.icon /> <span className="hidden md:block">{link.name}</span>
            </a>
          ))}
        </div>
        <p className="text-sm text-zinc-400">
          © 2026 {displayName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
