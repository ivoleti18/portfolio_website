"use client"

import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/ishan-voleti/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/ivoleti18",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "mailto:ivoleti18@gmail.com",
    icon: Mail,
    label: "Email",
  },
]

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Profile Picture */}
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/10">
              <Image
                src="/profile.png"
                alt="Ishan Voleti - Computer Engineering Student"
                width={256}
                height={256}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="absolute -inset-2 rounded-full bg-primary/10 blur-xl -z-10" />
          </div>

          {/* Welcome Content */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-primary font-medium mb-2 tracking-wide">Welcome</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Hi, I&apos;m <span className="text-primary">Ishan Voleti</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
              A Computer Engineering student at Georgia Tech, concentrating in Computing Hardware & Emerging Architecture and Distributed Systems & Software Design.
              <br />
              <br />
              I'm super interested in full-stack robotics, embedded firmware, and digital design, including ASIC and FPGA work. I've genuinely enjoyed every experience I've had in these spaces, and I think it's because they let me build things that matter, not just prototypes, but systems that can actually sense, think, and move on their own. That mix of innovation and real potential is what keeps me hooked!
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-4">
              {socialLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="default"
                  size="lg"
                  asChild
                  className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <link.icon size={20} />
                    <span className="hidden sm:inline">{link.label}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
