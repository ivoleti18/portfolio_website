"use client"

import { Download, FileText, Briefcase, GraduationCap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

const experience = [
  {
    title: "Firmware Engineer Intern",
    company: "Robotics Startup",
    period: "Summer 2025",
    description: "Developed embedded firmware for autonomous navigation systems.",
  },
  {
    title: "RoboJackets Member",
    company: "Georgia Tech",
    period: "2023 - Present",
    description: "Contributing to firmware development for competitive robots.",
  },
]

const education = [
  {
    degree: "B.S. Computer Engineering",
    institution: "Georgia Institute of Technology",
    period: "2022 - 2026",
    details: "Focus: Embedded Systems & Robotics",
  },
]

const skills = [
  "C/C++",
  "Python",
  "Embedded Systems",
  "PCB Design",
  "ROS",
  "Git",
  "RTOS",
  "ARM Cortex",
]

export function ResumeSection() {
  return (
    <section
      id="resume"
      className="py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Resume
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Experience</h3>
            </div>
            {experience.map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-lg bg-card border border-border"
              >
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <p className="text-sm text-primary">{item.company}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.period}</p>
                <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Education</h3>
            </div>
            {education.map((item) => (
              <div
                key={item.degree}
                className="p-4 rounded-lg bg-card border border-border"
              >
                <h4 className="font-semibold text-foreground">{item.degree}</h4>
                <p className="text-sm text-primary">{item.institution}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.period}</p>
                <p className="text-sm text-muted-foreground mt-2">{item.details}</p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Resume Preview & Download */}
        <div className="mt-16 p-8 rounded-2xl bg-card border border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Full Resume
                </h3>
                <p className="text-muted-foreground">
                  Download my complete 1-page ECE Career Fair resume
                </p>
              </div>
            </div>
            <Button
              size="lg"
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105"
              asChild
            >
              <a href="/resume.pdf" download>
                <Download size={20} />
                Download PDF
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
