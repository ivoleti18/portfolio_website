"use client"

import { Check, Circle } from "lucide-react"

const milestones = [
  {
    year: "Current",
    title: "Foundation Building",
    description: "Mastering embedded systems and autonomous navigation through my coursework and hands-on engineering in on-campus organizations.",
    status: "current",
  },
  {
    year: "2026",
    title: "Industry Experience",
    description: "Secure a summer internship in firmware development, digital design, or embedded software to build scalable physical systems.",
    status: "upcoming",
  },
  {
    year: "2028",
    title: "Graduation & Full-Time Role",
    description: "Graduating from Georgia Tech to build complex architecture as a full-time Firmware, Hardware, or Robotics Engineer.",
    status: "upcoming",
  },
  {
    year: "2030",
    title: "Technical Leadership",
    description: "Advance to a senior engineering position, leading teams and driving innovation in autonomous systems or hardware development.",
    status: "upcoming",
  },
  {
    year: "2031+",
    title: "Entrepreneurial Venture",
    description: "Leverage technical expertise and industry connections to co-found a robotics or deep-tech startup solving meaningful problems.",
    status: "upcoming",
  },
]

export function CareerGoalsSection() {
  return (
    <section
      id="goals"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Career Goals
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My roadmap to becoming a leader in robotics and autonomous systems
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div
                    className={`p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 ${
                      milestone.status === "current" ? "border-primary shadow-lg shadow-primary/10" : ""
                    }`}
                  >
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-3">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      milestone.status === "completed"
                        ? "bg-primary text-primary-foreground"
                        : milestone.status === "current"
                        ? "bg-primary/20 border-2 border-primary"
                        : "bg-card border-2 border-border"
                    }`}
                  >
                    {milestone.status === "completed" ? (
                      <Check size={16} />
                    ) : (
                      <Circle size={8} className={milestone.status === "current" ? "fill-primary text-primary" : "fill-muted-foreground text-muted-foreground"} />
                    )}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
