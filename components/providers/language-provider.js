"use client"
import * as React from "react"

const initialState = {
  language: "en",
  setLanguage: () => null
}

const LanguageContext = React.createContext(initialState)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = React.useState("en")

  React.useEffect(() => {
    if (language === "ar") {
      document.documentElement.dir = "rtl"
      document.documentElement.lang = "ar"
    } else {
      document.documentElement.dir = "ltr"
      document.documentElement.lang = "en"
    }
  }, [language])

  const value = {
    language,
    setLanguage
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = React.useContext(LanguageContext)

  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider")

  return context
}
