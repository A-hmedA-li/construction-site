"use client"

import { useLanguage } from "@/components/providers/language-provider"
import { translations, styles } from "@/lib/styles"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Lightbulb, Shield, Leaf } from "lucide-react"

export function AboutValues() {
  const { language } = useLanguage()
  const t = translations[language]

  const values = [
    {
      icon: Award,
      title: t.excellence,
      description: t.excellenceDesc
    },
    {
      icon: Lightbulb,
      title: t.innovation,
      description: t.innovationDesc
    },
    {
      icon: Shield,
      title: t.integrity,
      description: t.integrityDesc
    },
    {
      icon: Leaf,
      title: t.sustainability,
      description: t.sustainabilityDesc
    }
  ]

  return (
      <section className={`${styles.section} bg-[#525252`}>
      <div className={styles.container}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.coreValues}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map(value => {
            const Icon = value.icon
            return (
              <Card
                key={value.title}
                className="border-primary/20 hover:border-primary/40 transition-colors bg-card"
              >
                <CardContent className="pt-8 pb-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
