"use client"

import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/styles"

export function AmenitiesSection() {
  const { language } = useLanguage()
  const t = translations[language]

  const amenities = [
    {
      title: t.worldClass,
      description: "State-of-the-art facilities designed for modern living",
      icon: "🏊"
    },
    {
      title: t.sustainableFuture,
      description: "Eco-friendly developments for a better tomorrow",
      icon: "🌱"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {amenities.map((amenity, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl mb-6">{amenity.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {amenity.title}
              </h3>
              <p className="text-muted-foreground text-lg max-w-md mx-auto">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
