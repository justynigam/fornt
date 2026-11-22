"use client"
import { useSwitch } from "../Context/SwitchContext"
import { navLinks } from "@/data/Common/data"
import { profileImagePath } from "@/data/NigamData/data"
import { InfoTipNav } from "../InfoTipNav"
import { useState } from "react"
import Image from "next/image"

const Nav = () => {
  const { isSwitchOn, toggleSwitch } = useSwitch()
  const [isArrowVisible, setIsArrowVisible] = useState(true)

  const handleArrowVisibility = () => {
    setIsArrowVisible(false)
  }

  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center items-center z-40 pointer-events-none">
      <div className="relative pointer-events-auto bg-mainBlack/95 backdrop-blur-sm border border-zinc-700 px-3.5 py-2 rounded-xl flex items-center gap-3 shadow-lg shadow-black/50">
        <div className="flex gap-4 items-center text-lg">
          {navLinks.map((nav) => (
            <InfoTipNav key={nav.id} text={nav.name}>
              <a
                className="text-mainWhite/85 hover:text-white transition-colors"
                href={nav.link}
                target={nav.external ? "_blank" : undefined}
                rel={nav.external ? "noopener noreferrer" : undefined}
                aria-label={nav.name}
              >
                <nav.icon />
              </a>
            </InfoTipNav>
          ))}
        </div>
        <div className="h-7 w-[1px] bg-zinc-700" />
        <InfoTipNav text={isSwitchOn ? "Engineer Mode" : "Builder Mode"}>
          <button
            type="button"
            className="relative size-8 rounded-md overflow-hidden bg-zinc-900 border border-zinc-600 hover:brightness-90 hover:border-zinc-400 transition duration-200 cursor-pointer flex items-center justify-center font-mono text-xs font-bold text-mainWhite"
            onClick={toggleSwitch}
            onMouseEnter={handleArrowVisibility}
            aria-label="Switch portfolio mode"
          >
            {isSwitchOn ? (
              <Image
                src={profileImagePath}
                alt="Nigam Prasad Lenka"
                fill
                sizes="32px"
                referrerPolicy="no-referrer"
                className="object-cover object-[50%_20%]"
              />
            ) : (
              "JN"
            )}
          </button>
        </InfoTipNav>
        {isArrowVisible && (
          <div
            id="arrow"
            className="absolute -rotate-90 bottom-6 -right-9 pointer-events-none"
          >
            <Image
              src="/assets/Images/gif/arrow.gif"
              alt="Switch mode hint arrow"
              className="size-12"
              width={48}
              height={48}
              referrerPolicy="no-referrer"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Nav
