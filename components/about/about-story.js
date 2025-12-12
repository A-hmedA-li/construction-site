"use client"

import { useLanguage } from "@/components/providers/language-provider"
import { translations, styles } from "@/lib/styles"

export function AboutStory() {
  const { language } = useLanguage()
  const t = translations[language]

  const sections = [
    {
      title: t.ourStory,
      description: t.ourStoryDesc,
      image: "/bg.jpg"
    },
    {
      title: t.ourVision,
      description: t.ourVisionDesc,
      image: "/bg1.jpg"
    },
    {
      title: t.ourMission,
      description: t.ourMissionDesc,
      image: "/assests/bg.jpg"
    }
  ]

  return (
    <section className={`${styles.section} bg-secondary`}>
      <div className={styles.container}>
        <div className="space-y-16">
          {sections.map((section, index) => (
            <div
              key={section.title}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-12 items-center`}
            >
              <div className="flex-1">
                <img
                  src={section.image || "/placeholder.svg"}
                  alt={section.title}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-primary">
                  {section.title}
                </h2>
                <div className="w-16 h-1 bg-primary" />
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
