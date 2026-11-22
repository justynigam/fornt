"use client"
import SectionTitle from "../SectionTitle"
import { useSwitch } from "../Context/SwitchContext"
import { nigamProfile, builderProfile } from "@/data/NigamData/data"

const AboutMe = () => {
  const { isSwitchOn } = useSwitch()
  const paragraphs = isSwitchOn ? builderProfile.about : nigamProfile.about

  return (
    <section className="flex flex-col gap-1.5">
      <SectionTitle title="About Me" />
      <div className="flex flex-col gap-2 text-mainWhite/90 leading-relaxed">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}

export default AboutMe
