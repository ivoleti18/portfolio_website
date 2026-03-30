"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

/** Modal gallery fit: `contain` shows the full image (good for diagrams); `cover` fills the frame (may crop). */
type GalleryObjectFit = "contain" | "cover"

interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  image: string
  gallery: string[]
  /** Omit for default `contain`. Set `cover` if you want a photo-style cropped fill in the modal. */
  galleryObjectFit?: GalleryObjectFit
  videoUrl?: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    id: "stinger-tug",
    title: "Autonomous Marine Vehicle (Stinger Tug)",
    shortDescription: "Fully autonomous surface vehicle featuring custom power distribution and LiDAR navigation",
    fullDescription: `I am actively engineering a fully autonomous surface vehicle as part of the Marine Robotics Group. Building an autonomous system for a water environment introduces unique physics and navigation challenges compared to ground robots.

The software backbone of the vessel relies on ROS 2. I developed and integrated custom navigation nodes using Python and C++ to control the vehicle's movement. By tuning these systems, we achieved a cross-track navigation error of less than 10 centimeters, meaning the boat can follow a strict plotted path with incredible accuracy despite water resistance. I also integrated an RPLIDAR sensor and wrote obstacle avoidance algorithms that allow the vessel to identify and navigate through goal gates with a 95 percent success rate.

On the hardware side, I designed and fabricated a custom Printed Circuit Board (PCB) using KiCad to manage the physical components. The board handles 5V and 12V power distribution across the entire system. It also serves as the central hub for our sensor array, directly interfacing the Inertial Measurement Unit (IMU) and GPS sensors to the main Raspberry Pi compute unit via I2C and UART protocols.`,
    image: "/projects/stinger-tug.png",
    gallery: ["/projects/stinger-tug.png"],
    // gallery: ["/projects/robojackets.jpg", "/projects/robojackets-2.jpg", "/projects/robojackets-3.jpg"],
    tags: ["ROS 2", "Python", "PCB Design", "Sensor Fusion"],
    githubUrl: "https://github.com/ivoleti18/stinger-software",
  },
  {
    id: "siliconjackets",
    title: "ASIC Design & Verification (SiliconJackets)",
    shortDescription: "64-bit hardware calculator design and comprehensive modular verification environment",
    fullDescription: `Hardware is only as good as the tests that prove it works. In this project with SiliconJackets, I focused on both the Register-Transfer Level (RTL) design and the rigorous verification of an Application-Specific Integrated Circuit (ASIC).

I started by designing a 64-bit calculator using SystemVerilog. To handle complex operations, I implemented a custom Finite State Machine (FSM). This FSM sequences multi-cycle additions, allowing the hardware to break down and process large mathematical operations systematically over several clock cycles.

Once the design was complete, the main challenge was proving its reliability. I constructed a highly modular verification environment from scratch. This environment included a custom Driver, Monitor, and Scoreboard to independently inject data, observe the outputs, and check them against expected results to validate functional correctness.

To ensure the calculator would not fail under edge cases, I utilized constrained random testing alongside SystemVerilog Assertions. This automated testing approach hammered the design with thousands of unique scenarios, ultimately allowing us to achieve a 98 percent functional coverage score and proving the architecture was sound.`,
    image: "/projects/silicon.png",
    gallery: ["/projects/silicon.png", "/projects/silicon-2.png", "/projects/silicon-3.jpg", "/projects/silicon-4.png", "/projects/silicon-5.png"],
    // videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["SystemVerilog", "RTL Design", "ASIC Verification", "FSM"],
    githubUrl: "https://github.com/ivoleti18/",
  },
  {
    id: "loop",
    title: "Loop (1st Place, Solana Track @ UGAHacks XI)",
    shortDescription: "Trustless scavenger hunt platform using Solana smart contracts and AI-generated quests",
    fullDescription: `Loop is an award-winning project built during the UGAHacks XI hackathon, where my team won first place in the Solana development track. We wanted to build a real-world, location-based game that was entirely decentralized and automated.

We architected a trustless scavenger hunt application on the Solana blockchain. I wrote the smart contracts using Anchor (a Rust framework) and utilized Program Derived Addresses (PDAs) to manage the automated distribution of prizes once a user completed a hunt.

To bridge the blockchain with the physical world, we had to verify a user's actual location. I integrated Haversine logic into the application to calculate the spherical distance between coordinates, allowing us to validate GPS locations within a 100-meter accuracy. As players move around the real world, their positions are synced in real-time across the platform using a Supabase backend.

Finally, we wanted the game to be infinitely replayable. I developed an AI route generator using the Google Gemini API. This integration takes a user's starting location and automatically creates dynamic, localized quests with customized difficulty levels, ensuring no two games are ever exactly the same.`,
    image: "/projects/loop-1.jpg",
    videoUrl: "https://www.youtube.com/embed/rKCG-HJhy4Y",
    gallery: ["/projects/loop-1.jpg", "/projects/loop-2.jpg", "projects/loop-3.jpg", "projects/loop-4.jpg", "projects/loop-5.jpg", "projects/loop-6.jpg"],
    tags: ["Rust", "Solana", "Next.js", "AI", "Blockchain"],
    liveUrl: "https://uga-hacks-xi-mu3f.vercel.app/",
    githubUrl: "https://github.com/vingupta22/Loop---On-Chain-Location-Bounties",
  },
  {
    id: "rag-dashboard",
    title: "RAG-Powered Recruitment Dashboard",
    shortDescription: "Full-stack platform using LLMs and semantic search to match organization members with mentors",
    fullDescription: `Managing a large organization requires efficient ways to connect people with the right resources. I developed a RAG-powered (Retrieval-Augmented Generation) recruitment dashboard to solve this problem for a network of over 150 members and mentors.

The core of the application is a full-stack platform built with Next.js on the frontend and Express.js on the backend. This system acts as a central repository, managing and storing over 100 individual interview insights and member profiles.

To make this data actually useful, I implemented a vector database using PostgreSQL and the pgvector extension. By utilizing LangChain and Google Gemini Embeddings, the system converts text data from resumes and profiles into numerical vectors. This allows the dashboard to perform semantic searches, matching mentees with the ideal mentors based on the actual context and meaning of their experience, rather than just matching simple keywords.

To make the user experience seamless, I optimized the search architecture using Hierarchical Navigable Small World (HNSW) indexing. This advanced database structure keeps the semantic search latency under 100 milliseconds, providing instant results even when querying through hundreds of complex resumes.`,
    image: "/projects/resume-dashboard.jpg",
    gallery: ["/projects/resume-dashboard.jpg"],
    tags: ["Next.js", "LangChain", "PostgreSQL", "Vector Search"],
    githubUrl: "https://github.com/ivoleti18/resume_app/tree/main",
  },
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openProject = (project: Project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    document.body.style.overflow = "hidden"
  }

  const closeProject = () => {
    setSelectedProject(null)
    document.body.style.overflow = "auto"
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      )
    }
  }

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Projects
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects across firmware, autonomous robotics, and digital design, as well as full-stack and AI integration.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProject(project)}
              className="group cursor-pointer rounded-xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-foreground font-medium">View Details</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={closeProject}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeProject}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 text-foreground hover:bg-background transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Image Gallery */}
            <div className="relative aspect-video bg-muted/40">
              <Image
                src={selectedProject.gallery[currentImageIndex]}
                alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                fill
                className={
                  (selectedProject.galleryObjectFit ?? "contain") === "cover"
                    ? "object-cover"
                    : "object-contain"
                }
              />
              {selectedProject.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 text-foreground hover:bg-background transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 text-foreground hover:bg-background transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProject.gallery.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? "bg-primary" : "bg-foreground/50"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {selectedProject.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="prose prose-invert max-w-none mb-8">
                {selectedProject.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Video Section */}
              {selectedProject.videoUrl && (
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Play size={20} className="text-primary" />
                    Project Demo
                  </h4>
                  <div className="aspect-video rounded-xl overflow-hidden bg-background">
                    <iframe
                      src={selectedProject.videoUrl}
                      title={`${selectedProject.title} Demo`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                {selectedProject.githubUrl && (
                  <Button variant="outline" asChild className="gap-2">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                  </Button>
                )}
                {selectedProject.liveUrl && (
                  <Button asChild className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
