"use client"

import { useEffect, useState } from "react"
import { Award, Trophy, Zap, Star } from "lucide-react"
import AnimatedSection from "./animated-section"

interface Achievement {
  id: number
  title: string
  description: string
  date: string
  icon: "award" | "trophy" | "zap" | "star"
  category: string
  image?: string
  isFeatured?: boolean
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Employee of the Year",
    description: "Recognized for exceptional contributions, leadership, and technical excellence in 2024",
    date: "2024",
    icon: "trophy",
    category: "Recognition",
    isFeatured: true,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/employe_of_the_year-w6G4vorU2cF4s8rWooxcR7xen9UO12.jpeg",
  },
  {
    id: 2,
    title: "Promotion",
    description: "Promoted to Senior Full Stack Developer role in recognition of outstanding performance and expertise",
    date: "2025",
    icon: "star",
    category: "Career Milestone",
    isFeatured: true,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/promotion_image-BR9sLnKvmVsyCcUDGwNHsYfQvkXi5y.jpeg",
  },
  {
    id: 3,
    title: "Backend Mastery",
    description: "Built 5+ production-level applications from concept to deployment",
    date: "2024",
    icon: "trophy",
    category: "Development",
  },
  // {
  //   id: 4,
  //   title: "ERP Architecture Expert",
  //   description: "Designed and implemented comprehensive ERP systems for enterprises",
  //   date: "2024",
  //   icon: "star",
  //   category: "Architecture",
  // },
  // {
  //   id: 5,
  //   title: "Laravel Specialist",
  //   description: "Deep expertise in Laravel framework with 500+ commits across projects",
  //   date: "2023",
  //   icon: "zap",
  //   category: "Backend",
  // },
  // {
  //   id: 6,
  //   title: "CMS Platform Creator",
  //   description: "Developed custom CMS solutions for dynamic content management",
  //   date: "2023",
  //   icon: "award",
  //   category: "Innovation",
  // },
]

const AchievementCard = ({
  achievement,
  index,
}: {
  achievement: Achievement
  index: number
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const getIcon = () => {
    switch (achievement.icon) {
      case "award":
        return <Award className="w-8 h-8" />
      case "trophy":
        return <Trophy className="w-8 h-8" />
      case "zap":
        return <Zap className="w-8 h-8" />
      case "star":
        return <Star className="w-8 h-8" />
      default:
        return <Award className="w-8 h-8" />
    }
  }

  if (achievement.isFeatured && achievement.image) {
    return (
      <AnimatedSection delay={index * 150}>
        <div
          className="group relative overflow-hidden rounded-xl transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl lg:col-span-2"
          style={{
            background: `linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)`,
            border: "2px solid rgba(59, 130, 246, 0.3)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 items-center">
            {/* Image Section */}
            <div className="relative overflow-hidden rounded-lg">
              <div
                className="absolute inset-0 rounded-lg z-0"
                style={{
                  background: `linear-gradient(45deg, #3b82f6, #8b5cf6, #3b82f6)`,
                  backgroundSize: "200% 200%",
                  animation: "gradient 3s ease infinite",
                  opacity: 0.1,
                }}
              />
              <img
                src={achievement.image}
                alt={achievement.title}
                className="relative z-10 w-full h-auto rounded-lg border border-blue-400/20 shadow-lg"
                loading="lazy"
              />
            </div>

            {/* Content Section */}
            <div className="relative z-10 flex flex-col justify-start">
              {/* Icon and Category */}
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 rounded-lg bg-gradient-to-br from-blue-500/30 to-purple-500/30 text-blue-300 group-hover:text-purple-300 transition-colors duration-300">
                  {getIcon()}
                </div>
                <span className="text-xs font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/50 to-purple-600/50 text-blue-300 uppercase tracking-wider">
                  {achievement.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-transparent bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text mb-2 group-hover:from-blue-200 group-hover:to-purple-200 transition-colors">
                {achievement.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                {achievement.description}
              </p>

              {/* Date and progress bar */}
              <div className="space-y-3 mt-auto">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-400">{achievement.date}</span>
                  <div className="h-2 flex-grow mx-3 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
                      style={{
                        width: isVisible ? "100%" : "0%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-30 pointer-events-none transition-opacity duration-300">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-blue-400"
                style={{
                  width: Math.random() * 6 + 2,
                  height: Math.random() * 6 + 2,
                  left: Math.random() * 100 + "%",
                  top: Math.random() * 100 + "%",
                  animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
                  opacity: 0.5,
                }}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>
    )
  }

  return (
    <AnimatedSection delay={index * 150}>
      <div
        className="group relative overflow-hidden rounded-xl p-6 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
        style={{
          background: `linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)`,
          border: "1px solid rgba(59, 130, 246, 0.2)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Animated gradient border */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div
            className="absolute inset-0 rounded-xl"
            style={{
              background: `linear-gradient(45deg, #3b82f6, #8b5cf6, #3b82f6)`,
              backgroundSize: "200% 200%",
              animation: "gradient 3s ease infinite",
            }}
          />
        </div>

        {/* Content wrapper */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Icon and Category */}
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400 group-hover:text-purple-400 transition-colors duration-300">
              {getIcon()}
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800/50 text-blue-400 uppercase tracking-wider">
              {achievement.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
            {achievement.title}
          </h3>

          {/* Description */}
          <p className="text-slate-400 text-sm mb-4 flex-grow">
            {achievement.description}
          </p>

          {/* Date and progress bar */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">{achievement.date}</span>
              <div className="h-1 flex-grow mx-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
                  style={{
                    width: isVisible ? "100%" : "0%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-50 pointer-events-none transition-opacity duration-300">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-400"
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                opacity: 0.6,
              }}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="px-4 py-16 tech-grid relative overflow-hidden">
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>

      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            Achievements & Milestones
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Showcasing expertise, innovation, and professional growth across full-stack development, backend architecture,
            and enterprise solutions
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: "Projects Completed", value: "5+" },
            { label: "Years Experience", value: "3+" },
            { label: "Platforms Built", value: "3+" },
            { label: "Achievements", value: "2" },
          ].map((stat, idx) => (
            <AnimatedSection key={idx} delay={idx * 100}>
              <div
                className="rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
                style={{
                  background: `linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)`,
                  border: "1px solid rgba(59, 130, 246, 0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-slate-400 text-sm mt-2">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 auto-rows-max">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>

        {/* Timeline or Summary */}
        <div className="mt-16">
          <div
            className="rounded-xl p-8 md:p-12"
            style={{
              background: `linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)`,
              border: "1px solid rgba(59, 130, 246, 0.15)",
              backdropFilter: "blur(10px)",
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Professional Journey</h3>
            <div className="space-y-4 text-slate-300">
              <p>
               Backend & Platform Engineer with 2.5+ years of experience building scalable, high-performance systems in startup environments.
              </p>
              <p>
               With hands-on experience in database design (MySQL,) and multithreaded application development, I specialize in developing efficient
               backend systems and integrating them seamlessly with frontend technologies. I have successfully contributed to projects involving ERP systems, CRM solutions, automation bots, and data extraction tools, improving operational efficiency and user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
