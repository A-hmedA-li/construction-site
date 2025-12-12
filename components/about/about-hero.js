"use client"

import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/styles"

export function AboutHero() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/bg2.jpg"
          alt="About us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          {t.aboutUs}
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto" />
      </div>
    </section>
  )
}
