"use client"
import SectionTitle from "../SectionTitle"
import { PiSuitcaseSimpleBold } from "react-icons/pi"
import { HiOutlineDocumentText } from "react-icons/hi2"
import { emailLink, hireText } from "@/data/Common/data"
import { resumePdfPath } from "@/data/NigamData/data"

const HireMe = () => {
  return (
    <section className="flex flex-col gap-1">
      <SectionTitle title="Hire Me" />
      <div className="flex flex-col gap-2.5">
        <p className="text-mainWhite/85 leading-relaxed">{hireText}</p>
        <div className="flex flex-wrap items-center gap-2">
          <a className="btn" href={emailLink}>
            <PiSuitcaseSimpleBold />
            Hire Me
          </a>
          <a
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
            href={resumePdfPath}
          >
            <HiOutlineDocumentText />
            View Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default HireMe
