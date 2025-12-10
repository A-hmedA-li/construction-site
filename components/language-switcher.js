"use client"

import { useLanguage } from "@/components/providers/language-provider"
import { Button } from "@/components/ui/button"
import { translations } from "@/lib/styles"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  return (
    <Button
      variant="ghost"
      onClick={() => setLanguage(language === "en" ? "ar" : "en")}
      className="text-white hover:bg-primary"
    >
      {t.language}
    </Button>
  )
}
