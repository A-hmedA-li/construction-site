"use client"

import { useLanguage } from "@/components/providers/language-provider"
import { translations, styles } from "@/lib/styles"

export function AboutAchievements() {
  const { language } = useLanguage()
  const t = translations[language]

  const stats = [
    {
      number: "150+",
      label: t.projectsDelivered
    },
    {
      number: "50,000+",
      label: t.happyFamilies
    },
    {
      number: "25M+",
      label: t.sqftDeveloped
    },
    {
      number: "75+",
      label: t.awards
    }
  ]

  return (
    <section className={`${styles.section} bg-secondary`}>
      <div className={styles.container}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.achievements}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map(stat => (
            <div
              key={stat.label}
              className="text-center space-y-4 p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="text-5xl md:text-6xl font-bold text-primary">
                {stat.number}
              </div>
              <div className="text-lg text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
