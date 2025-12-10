"use client"

import { useLanguage } from "@/components/providers/language-provider"
import { translations, styles } from "@/lib/styles"

export function VisionSection() {
  const { language } = useLanguage()
  const t = translations[language]


    const lifestyleItems = [
    {
      title: t.luxuryLiving,
      image: "/luxury-interior-modern-apartment.png"
    },
    {
      title: t.exploreCommunities,
      image: "/happy-couple-modern-home.png"
    }
  ]


  return (
    <section
      className={`${styles.section} bg-muted/50  dark:from-background dark:to-card`}
    >
      <div className={styles.container}>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8  ">
            <div className="leading-tight">{t.visionaryCity}</div>

          </h2>



          
              <div className="grid md:grid-cols-2 gap-8">
                {lifestyleItems.map((item, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg aspect-4/3"
                  >
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
        </div>
      </div>
    </section>
  )
}
