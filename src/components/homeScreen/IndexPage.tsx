"use client"
import Screen from "@/layout/Screen"
import AboutMe from "../PageComponent/AboutMe"
import Footer from "../PageComponent/Footer"
import InfoCard from "../PageComponent/InfoCard"
import Experience from "../PageComponent/Experience"
import Projects from "../PageComponent/Projects"
import Skills from "../PageComponent/Skills"
import Education from "../PageComponent/Education"
import Certifications from "../PageComponent/Certifications"
import Achievements from "../PageComponent/Achievements"
import ReachOut from "../PageComponent/ReachOut"
import HireMe from "../PageComponent/HireMe"
import AnimatedWrapper from "@/utils/AnimatedWrapper"
import { useSwitch } from "../Context/SwitchContext"
import Nav from "../PageComponent/Nav"

const IndexPage = () => {
  const { isSwitchOn } = useSwitch()

  return (
    <Screen>
      <div className="flex flex-col gap-6">
        <AnimatedWrapper delay={0.08}>
          <InfoCard />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.14}>
          <AboutMe />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.2}>
          <Experience />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.26}>
          <Projects />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.32}>
          <Skills />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.38}>
          <Education />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.44}>
          <Certifications />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.5}>
          <Achievements />
        </AnimatedWrapper>
        {!isSwitchOn && (
          <AnimatedWrapper delay={0.54}>
            <HireMe />
          </AnimatedWrapper>
        )}
        <AnimatedWrapper delay={0.58}>
          <ReachOut />
        </AnimatedWrapper>
      </div>
      <AnimatedWrapper delay={0.62}>
        <Footer />
      </AnimatedWrapper>
      <Nav />
    </Screen>
  )
}

export default IndexPage
