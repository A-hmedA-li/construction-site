"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/styles"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SlidersHorizontal } from "lucide-react"

const placeholder = "/projects/placeholder.png";
const allProjects = [
  {
    title: "Riviera Tower",
    location: "Dubai - MBR City",
    image: placeholder,
    status: "completed",
    category: "residential",
    units: "350+ Units"
  },
  {
    title: "Venice Gardens",
    location: "Dubai - Al Furjan",
    image: placeholder,
    status: "under-construction",
    category: "residential",
    units: "500+ Units"
  },
  {
    title: "Royal Bay",
    location: "Dubai - Palm Jumeirah",
    image: placeholder,
    status: "launching",
    category: "residential",
    units: "200+ Units"
  },
  {
    title: "Central Plaza",
    location: "Dubai - Downtown",
    image: placeholder,
    status: "completed",
    category: "commercial",
    units: "50+ Retail Units"
  },
  {
    title: "Marina Heights",
    location: "Dubai - Dubai Marina",
    image: placeholder,
    status: "under-construction",
    category: "residential",
    units: "600+ Units"
  },
  {
    title: "Sunset Residences",
    location: "Dubai - JVC",
    image: placeholder,
    status: "launching",
    category: "residential",
    units: "400+ Units"
  },
  {
    title: "Business Hub",
    location: "Dubai - DIFC",
    image: placeholder,
    status: "completed",
    category: "commercial",
    units: "100+ Office Spaces"
  },
  {
    title: "Green Valley",
    location: "Dubai - Dubailand",
    image: placeholder,
    status: "launching",
    category: "residential",
    units: "700+ Units"
  }
]

export default function ProjectsPage() {
  const { language } = useLanguage()
  const t = translations[language]

  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const categories = [
    { value: "all", label: t.allCategories },
    { value: "residential", label: t.residential },
    { value: "commercial", label: t.commercial }
  ]

  const statuses = [
    { value: "all", label: t.allStatuses },
    { value: "completed", label: t.completed },
    { value: "under-construction", label: t.underConstruction },
    { value: "launching", label: t.launching }
  ]

  const filteredProjects = allProjects.filter(project => {
    const categoryMatch =
      selectedCategory === "all" || project.category === selectedCategory
    const statusMatch =
      selectedStatus === "all" || project.status === selectedStatus
    return categoryMatch && statusMatch
  })

  return (
    <div className="min-h-screen flex flex-col ">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/bg1.jpg"
            alt="Projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t.ourProjects}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            {t.ourProjectsDesc}
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <SlidersHorizontal className="w-5 h-5" />
              <span className="font-medium">{t.filterBy}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button
                    key={category.value}
                    variant={
                      selectedCategory === category.value
                        ? "default"
                        : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedCategory(category.value)}
                    className={
                      selectedCategory === category.value
                        ? "bg-primary text-primary-foreground"
                        : ""
                    }
                  >
                    {category.label}
                  </Button>
                ))}
              </div>

              {/* Status Filter */}
              <div className="flex flex-wrap gap-2">
                {statuses.map(status => (
                  <Button
                    key={status.value}
                    variant={
                      selectedStatus === status.value ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedStatus(status.value)}
                    className={
                      selectedStatus === status.value
                        ? "bg-primary text-primary-foreground"
                        : ""
                    }
                  >
                    {status.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-white">
            <Badge variant="secondary" className="text-sm">
              {filteredProjects.length} {t.projectsFound}
            </Badge>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 flex-1">
        <div className="container mx-auto px-4">
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  {...project}
                  status={t[project.status.replace("-", "")]}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                {t.noProjectsFound}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
