"use client"
import { projects } from "@/data/Common/data"
import ProjectBox from "../ProjectBox"
import SectionTitle from "../SectionTitle"
import AnimatedWrapper from "@/utils/AnimatedWrapper"

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col gap-3 scroll-mt-16">
      <SectionTitle title="Projects" />
      <div className="flex flex-col md:gap-2.5 gap-3.5">
        {projects.map((project, index) => (
          <AnimatedWrapper key={project.id} delay={index * 0.075}>
            <ProjectBox
              year={project.year}
              badge={project.badge}
              accent={project.accent}
              title={project.title}
              content={project.content}
              highlights={project.highlights}
              metrics={project.metrics}
              status={project.status}
              skill={project.skill}
              url={project.url}
              github={project.github}
            />
          </AnimatedWrapper>
        ))}
      </div>
    </section>
  )
}

export default Projects
