"use client"
import React, { useState } from "react"
import Image from "next/image"
import { InfoTip } from "../InfoTip"
import Available from "../Available"
import { useSwitch } from "../Context/SwitchContext"
import {
  nigamProfile,
  builderProfile,
  nigamSocialLinks,
  builderSocialLinks,
  resumePdfPath,
  profileImagePath,
} from "@/data/NigamData/data"
import { AnimatePresence, motion } from "motion/react"
import { X, FileText, Mail, Phone, GraduationCap } from "lucide-react"

const InfoCard: React.FC = () => {
  const { isSwitchOn } = useSwitch()
  const [isOpen, setIsOpen] = useState(false)

  const profile = isSwitchOn ? builderProfile : nigamProfile
  const socialLinks = isSwitchOn ? builderSocialLinks : nigamSocialLinks

  return (
    <section>
      <div className="flex flex-col gap-2">
        <div className="block md:hidden">
          <Available text={profile.availabilityText} />
        </div>

        <div className="flex gap-4 items-center">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open full profile photo and summary"
            className="cursor-pointer hover:brightness-90 transition duration-200 select-none shrink-0 md:size-[130px] size-[96px] rounded-md border border-zinc-700 overflow-hidden relative bg-zinc-900"
          >
            <Image
              src={profileImagePath}
              alt="Nigam Prasad Lenka profile picture"
              fill
              sizes="(max-width: 768px) 96px, 130px"
              priority
              referrerPolicy="no-referrer"
              className="object-cover object-[50%_20%]"
            />
          </button>

          <div className="flex flex-col gap-1.5 min-w-0">
            <div className="flex flex-wrap gap-3 items-center">
              <h1 className="head-name leading-tight">{profile.fullName}</h1>
              <div className="md:block hidden">
                <Available text={profile.availabilityText} />
              </div>
            </div>
            <p className="text-mainWhite/90 font-medium text-sm md:text-base">
              {profile.role}
            </p>
            <p className="text-zinc-400 text-xs md:text-sm">
              {profile.subtitle}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {socialLinks.map((link) => (
                <InfoTip key={link.id} text={link.name}>
                  <a
                    className="social-card"
                    href={link.link}
                    target={
                      link.link.startsWith("http") || link.link.endsWith(".pdf")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      link.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={link.name}
                  >
                    <link.icon />
                  </a>
                </InfoTip>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              aria-label="Close modal"
              className="absolute top-4 right-4 text-white hover:text-zinc-300 p-2"
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-sm rounded-lg bg-zinc-900 border border-zinc-700 overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-[4/4] bg-zinc-950">
                <Image
                  src={profileImagePath}
                  alt="Nigam Prasad Lenka"
                  fill
                  sizes="(max-width: 768px) 90vw, 384px"
                  referrerPolicy="no-referrer"
                  className="object-cover object-[50%_20%]"
                />
              </div>

              <div className="p-5 flex flex-col gap-3">
                <div>
                  <h2 className="text-xl font-bold">{nigamProfile.fullName}</h2>
                  <p className="text-sm text-zinc-400">{nigamProfile.role}</p>
                </div>

                <div className="border-t border-zinc-800 pt-3 flex flex-col gap-2 text-sm text-mainWhite/85">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-zinc-400 shrink-0" />
                    <span>VIT Bhopal · B.Tech CSE (2023–2027) · CGPA 8.71</span>
                  </div>
                  <a
                    href={`mailto:${nigamProfile.email}`}
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 text-zinc-400 shrink-0" />
                    <span>{nigamProfile.email}</span>
                  </a>
                  <a
                    href={nigamProfile.phoneHref}
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 text-zinc-400 shrink-0" />
                    <span>{nigamProfile.phone}</span>
                  </a>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  <a
                    href={resumePdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn text-sm"
                  >
                    <FileText className="w-4 h-4" />
                    View Resume PDF
                  </a>
                  <a
                    href={nigamProfile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn text-sm"
                  >
                    GitHub (@justynigam)
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default InfoCard
