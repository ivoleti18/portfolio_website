"use client"

import { Cpu, Code, Lightbulb, Rocket } from "lucide-react"

const highlights = [
  {
    icon: Rocket,
    title: "Autonomous Robotics",
    description: "ROS 2 navigation, SLAM, and sensor integration",
  },
  {
    icon: Lightbulb,
    title: "Firmware Engineering",
    description: "Microcontroller programming with Rust, C/C++, and RTOS",
  },
  {
    icon: Cpu,
    title: "Digital Design & Verification",
    description: "ASIC design, SystemVerilog, and hardware architecture testing",
  },
  {
    icon: Code,
    title: "Research & Perception",
    description: "3D reconstruction, SLAM-adjacent pipelines, and computer vision for autonomous systems",
  },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Biography */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Growing up, I was always the kid who took apart gadgets just to see how they worked. That curiosity led me to Georgia Tech, where I&apos;m pursuing Computer Engineering with a focus on embedded systems and robotics.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              My journey spans from late-night firmware debugging sessions to pitching startup ideas at hackathons. I believe the most impactful solutions emerge at the intersection of hardware and software, where lines of code translate directly into physical movement and real-world impact.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
               Beyond the technical realm, I&apos;m driven by entrepreneurship. I&apos;ve co-founded projects, led engineering teams, and constantly seek opportunities where technology can create meaningful change. Whether it&apos;s building autonomous marine vehicles, developing firmware for competitive robots, or building 3D-reconstruction pipelines for autonomous mapping research, I approach every challenge with the same passion and determination.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
