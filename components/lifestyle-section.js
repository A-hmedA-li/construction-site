"use client"

import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/styles"
import { ProjectCard } from "@/components/project-card"

export function LifestyleSection() {
  const { language } = useLanguage()
  const t = translations[language]

const placeholder = "/projects/placeholder.png";
  const projects = [
    {
      title: "Riviera Tower",
      location: "Dubai - MBR City",
      image: placeholder,
      status: t.completed,
      category: "residential",
      units: "350+ Units"
    },
    {
      title: "Venice Gardens",
      location: "Dubai - Al Furjan",
      image: placeholder,
      status: t.underConstruction,
      category: "residential",
      units: "500+ Units"
    },
    {
      title: "Royal Bay",
      location: "Dubai - Palm Jumeirah",
      image: placeholder,
      status: t.launching,
      category: "residential",
      units: "200+ Units"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.featuredProjects}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.featuredProjectsDesc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
