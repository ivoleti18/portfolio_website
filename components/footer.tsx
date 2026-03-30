"use client"

import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { href: "https://linkedin.com/in/ishan-voleti/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/ivoleti18", icon: Github, label: "GitHub" },
  { href: "mailto:ivoleti18@gmail.com", icon: Mail, label: "Email" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-foreground font-semibold">Ishan Voleti</p>
            <p className="text-sm text-muted-foreground">
              Computer Engineering @ Georgia Tech
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Ishan Voleti. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
