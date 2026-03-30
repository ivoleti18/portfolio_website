"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  image: string
  gallery: string[]
  videoUrl?: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    id: "robojackets",
    title: "RoboJackets Firmware",
    shortDescription: "Firmware development for competitive robotics platform",
    fullDescription: `As a member of RoboJackets at Georgia Tech, I've been instrumental in developing and maintaining the firmware that powers our competitive robots. This project involves working with embedded systems, real-time operating systems, and sensor integration.

My contributions include implementing motor control algorithms, developing communication protocols between subsystems, and optimizing code for performance on resource-constrained microcontrollers. The firmware handles everything from sensor data processing to actuator control, ensuring precise and reliable robot operation during competition.

Working on this project has deepened my understanding of real-time systems, taught me valuable lessons about code reliability in safety-critical applications, and given me hands-on experience with team-based embedded development using version control and code review processes.

Key technical challenges included debugging hardware-software integration issues, implementing fault-tolerant systems, and achieving microsecond-level timing precision for motor control loops.`,
    image: "/projects/robojackets.jpg",
    gallery: ["/projects/robojackets.jpg", "/projects/robojackets-2.jpg", "/projects/robojackets-3.jpg"],
    tags: ["C++", "Embedded", "RTOS", "Motor Control"],
    githubUrl: "https://github.com/",
  },
  {
    id: "stinger-tug",
    title: "Marine Robotics Stinger Tug",
    shortDescription: "Autonomous surface vessel for marine operations",
    fullDescription: `The Stinger Tug is an autonomous surface vessel developed as part of Georgia Tech's Marine Robotics program. This project focuses on creating a reliable, autonomous tugboat capable of performing various marine operations.

My role involved developing the navigation and control systems, including GPS-based waypoint navigation, obstacle avoidance using sonar and lidar sensors, and automated docking procedures. The system integrates multiple sensor inputs to create a robust perception pipeline.

The vessel uses a custom-designed propulsion system with differential steering, allowing for precise maneuvering in tight spaces. I implemented a state machine architecture for mission management, enabling the boat to handle complex multi-step operations autonomously.

Testing was conducted in controlled water environments, iterating on control parameters and sensor fusion algorithms to achieve reliable performance in varying conditions including waves and wind.`,
    image: "/projects/stinger-tug.jpg",
    gallery: ["/projects/stinger-tug.jpg", "/projects/stinger-tug-2.jpg", "/projects/stinger-tug-3.jpg"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["Python", "ROS", "Navigation", "Sensors"],
    githubUrl: "https://github.com/",
  },
  {
    id: "spindl",
    title: "Spindl",
    shortDescription: "Hardware startup for smart textile manufacturing",
    fullDescription: `Spindl is an entrepreneurial venture aimed at revolutionizing textile manufacturing through smart automation. As a co-founder and lead engineer, I developed the embedded systems that power our intelligent spinning machines.

The project combines IoT connectivity, machine learning for quality control, and advanced motor control systems. Our platform enables real-time monitoring of production metrics, predictive maintenance scheduling, and automated quality assurance.

I designed the hardware architecture from the ground up, including custom PCBs for motor drives and sensor interfaces. The software stack includes embedded C firmware, a Python-based backend for data processing, and a React dashboard for visualization.

This venture has taught me invaluable lessons about taking a technical concept from prototype to product, managing hardware supply chains, and balancing engineering decisions with business constraints.`,
    image: "/projects/spindl.jpg",
    gallery: ["/projects/spindl.jpg", "/projects/spindl-2.jpg", "/projects/spindl-3.jpg"],
    tags: ["IoT", "PCB Design", "Startup", "ML"],
    liveUrl: "https://spindl.com/",
  },
  {
    id: "ugahacks-loop",
    title: "UGAHacks Loop",
    shortDescription: "Award-winning hackathon project for transit optimization",
    fullDescription: `Loop is a transit optimization platform developed during UGAHacks, where it won recognition for innovation and technical execution. The project addresses inefficiencies in campus transportation systems.

Using real-time GPS data from campus buses, machine learning prediction models, and a user-friendly mobile interface, Loop provides students with accurate arrival time predictions and suggests optimal routes based on current conditions.

I led the backend development, implementing a RESTful API for data ingestion and processing, training ML models for arrival time prediction, and designing the database schema for efficient query performance. The system processes thousands of data points per minute to maintain prediction accuracy.

The 36-hour development sprint taught me rapid prototyping techniques, effective team collaboration under pressure, and how to scope features appropriately for time-constrained development.`,
    image: "/projects/loop.jpg",
    gallery: ["/projects/loop.jpg", "/projects/loop-2.jpg", "/projects/loop-3.jpg"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["React", "Python", "ML", "API"],
    githubUrl: "https://github.com/",
    liveUrl: "https://loop.dev/",
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
            A collection of projects showcasing my work in robotics, embedded systems, and software development
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
            <div className="relative aspect-video">
              <Image
                src={selectedProject.gallery[currentImageIndex]}
                alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
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
