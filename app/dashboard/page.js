"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/styles"
import { Header } from "@/components/header"
import { PhotoUploadSection } from "@/components/dashboard/photo-upload-section"
import { BookingMessagesSection } from "@/components/dashboard/booking-messages-section"
import { ReviewManagementSection } from "@/components/dashboard/review-management-section"
import { ProjectManagementSection } from "@/components/dashboard/project-management-section"


function useAuth(){
  return {
    user: {
      name:"Ahmad", 
      email: "email@email.com"
    }, 
    signOut: 'cl',
    signUp :"asa", 
    isLoading: undefined
  }
}
export default function DashboardPage() {
  const router = useRouter()
  const { user, isLoading } = useAuth()
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/sign-in")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return <div className="min-h-screen bg-background" />
  }

  if (!user) {
    return null
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2">
              {t.welcome}, {user.name}
            </h1>
            <p className="text-muted-foreground">{t.dashboardDesc}</p>
          </div>

          {/* Section 1: Photo Upload */}
          <PhotoUploadSection />

          {/* Section 2: Booking Messages */}
          <BookingMessagesSection />

          {/* Section 3: Review Management */}
          <ReviewManagementSection />

          <ProjectManagementSection />
        </div>
      </div>
    </>
  )
}
