"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Database,
  Server,
  Globe,
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  Layers,
  Zap,
  Settings,
  FileText,
  Download,
  Cpu,
  HardDrive,
  Terminal,
} from "lucide-react"
import Link from "next/link"
import Navbar from "./components/navbar"
import AnimatedBackground from "./components/animated-background"
import TypingEffect from "./components/typing-effect"
import AnimatedSection from "./components/animated-section"
import DataVisualization from "./components/data-visualization"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const projects = [
    {
      title: "sscoindia.com",
      description: "Corporate website built with Laravel, featuring modern design and robust backend architecture.",
      tech: ["Laravel", "PHP", "MySQL"],
      link: "https://sscoindia.com",
    },
    {
      title: "tradeimex.in",
      description: "Scalable Laravel platform with custom CMS for dynamic data upload and management.",
      tech: ["Laravel", "CMS", "MySQL", "PHP"],
      link: "https://tradeimex.in",
    },
    {
      title: "usimportdata.com",
      description: "Laravel-based platform with integrated CMS for seamless content management.",
      tech: ["Laravel", "CMS", "PHP", "MySQL"],
      link: "https://usimportdata.com",
    },
    {
      title: "vietnamexportdata.com",
      description: "Complete backend API development with robust data handling and export functionality.",
      tech: ["Laravel", "REST API", "Backend"],
      link: "https://vietnamexportdata.com",
    },
    {
      title: "Offline ERP for Tradeimex",
      description:
        "Full-featured ERP system built with React frontend and Node.js backend for comprehensive business management.",
      tech: ["React", "Node.js", "ERP", "Full Stack"],
      link: null,
    },
  ]

  const skills = [
    { name: "Laravel", icon: Code2 },
    { name: "PHP", icon: Code2 },
    { name: "Node.js", icon: Server },
    { name: "React", icon: Layers },
    { name: "MySQL", icon: Database },
    { name: "CMS Development", icon: Settings },
    { name: "ERP Development", icon: Zap },
    { name: "REST APIs", icon: Globe },
    { name: "Backend Architecture", icon: Server },
    { name: "Git", icon: Code2 },
    { name: "Docker", icon: Settings },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <AnimatedBackground />
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative px-4 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto max-w-4xl text-center relative">
          <div className="absolute inset-0 -z-10">
            <DataVisualization />
          </div>
          <div className="glass-effect rounded-xl p-8 md:p-12 mb-8 relative overflow-hidden">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Hi, I'm Nitesh Chauhan
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-slate-300">
                <TypingEffect
                  texts={[
                    "Full Stack Developer",
                    "Backend Specialist",
                    "Laravel Expert",
                    "ERP Developer",
                    "API Architect",
                  ]}
                />
              </h2>
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Crafting scalable backend systems, dynamic CMS platforms, and full-featured ERP tools.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
              >
                <Link
                  href="#projects"
                  className="flex items-center gap-2"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  View Projects
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-500 text-slate-300 hover:bg-slate-700/50"
                onClick={() => window.open("/Nitesh Chauhan(Associate Software Engineer).pdf", "_blank")}
              >
                <span className="flex items-center gap-2">
                  Download Resume
                  <Download className="w-4 h-4" />
                </span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card rounded-lg p-4 flex items-center justify-center gap-3 animate-float">
              <Cpu className="w-6 h-6 text-blue-400" />
              <span className="text-slate-300">AI Integration</span>
            </div>
            <div
              className="glass-card rounded-lg p-4 flex items-center justify-center gap-3 animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <Database className="w-6 h-6 text-purple-400" />
              <span className="text-slate-300">Database Architecture</span>
            </div>
            <div
              className="glass-card rounded-lg p-4 flex items-center justify-center gap-3 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <Server className="w-6 h-6 text-blue-400" />
              <span className="text-slate-300">Backend Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <AnimatedSection>
        <section id="about" className="px-4 py-16 relative">
          <div className="container mx-auto max-w-4xl">
            <div className="glass-card rounded-xl p-8 md:p-12 relative overflow-hidden">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="text-lg text-slate-300 leading-relaxed space-y-4">
                <p>
                  I'm a passionate full stack engineer specializing in Laravel, React, Node.js, and backend development.
                  With extensive hands-on experience building large-scale platforms and comprehensive ERP systems, I
                  bring both technical expertise and practical problem-solving skills to every project.
                </p>
                <p>
                  My expertise spans from creating robust backend architectures and RESTful APIs to developing dynamic
                  CMS platforms and full-featured enterprise solutions. I thrive on building scalable, efficient systems
                  that drive business growth and enhance user experiences.
                </p>
                <div className="mt-8 flex justify-center">
                  <Button
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                    onClick={() => window.open("/Nitesh Chauhan(Associate Software Engineer).pdf", "_blank")}
                  >
                    <span className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      View Full Resume
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection>
        <section id="projects" className="px-4 py-16 tech-grid">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <Card className="glass-card hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center justify-between">
                        {project.title}
                        {project.link && (
                          <Link href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 text-blue-400 hover:text-blue-300" />
                          </Link>
                        )}
                      </CardTitle>
                      <CardDescription className="text-slate-400">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-slate-800/80 text-slate-300 border border-slate-700"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection>
        <section id="skills" className="px-4 py-16 relative">
          <div className="container mx-auto max-w-6xl">
            <div className="glass-card rounded-xl p-8 md:p-12 relative overflow-hidden">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Tech Stack & Skills
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon
                  return (
                    <AnimatedSection key={index} delay={index * 50}>
                      <div className="glass-card rounded-lg flex items-center gap-3 p-4 hover:bg-slate-800/80 transition-colors transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 duration-300">
                        <IconComponent className="w-6 h-6 text-blue-400" />
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                      </div>
                    </AnimatedSection>
                  )
                })}
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <AnimatedSection delay={100}>
                  <div className="glass-card rounded-lg p-6 text-center">
                    <HardDrive className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-white">Database Expertise</h3>
                    <p className="text-slate-400">
                      Designing optimized database schemas and implementing efficient query patterns
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={200}>
                  <div className="glass-card rounded-lg p-6 text-center">
                    <Terminal className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-white">Backend Systems</h3>
                    <p className="text-slate-400">
                      Building robust, scalable backend architectures with modern technologies
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={300}>
                  <div className="glass-card rounded-lg p-6 text-center">
                    <Cpu className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-white">AI Integration</h3>
                    <p className="text-slate-400">
                      Implementing AI-powered features to enhance application capabilities
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection>
        <section id="contact" className="px-4 py-16 tech-grid">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <AnimatedSection delay={100}>
                <div className="glass-card rounded-lg flex items-center justify-center gap-3 p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="text-slate-400 text-sm">Phone</p>
                    <p className="text-white font-medium">8298426919</p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <div className="glass-card rounded-lg flex items-center justify-center gap-3 p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <p className="text-white font-medium">niteshchauhan8285@gmail.com</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            <div className="flex justify-center gap-6">
              <Link
                href="https://www.linkedin.com/in/nitesh-chauhan-5689a9193/"
                className="glass-card rounded-lg p-4 flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
                <span>GitHub</span>
              </Link>
              <Link
                href="https://github.com/Nitesh121-maker"
                className="glass-card rounded-lg p-4 flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <footer className="px-4 py-8 glass-nav">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-slate-400">© 2025 Nitesh Chauhan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
