"use client"

import { use } from "react"
import { Header } from "@/components/header"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/styles"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Building2, Home, Calendar, CheckCircle2 } from "lucide-react"
import Link from "next/link"

// Mock project data - in production this would come from a database
const projects = [
  {
    id: "1",
    titleEn: "Riviera Towers",
    titleAr: "أبراج ريفييرا",
    locationEn: "Dubai Marina",
    locationAr: "دبي مارينا",
    descriptionEn:
      "Experience waterfront luxury living with breathtaking views of the marina. This iconic development features world-class amenities and sophisticated design throughout.",
    descriptionAr:
      "استمتع بحياة فاخرة على الواجهة البحرية مع إطلالات خلابة على المارينا. يتميز هذا التطوير المميز بوسائل راحة عالمية المستوى وتصميم متطور في كل مكان.",
    category: "residential",
    status: "completed",
    units: "250 Units",
    completionDate: "2023",
    image: "/luxury-tower-waterfront.jpg",
    amenitiesEn: [
      "Infinity Pool",
      "State-of-the-art Gym",
      "Private Beach Access",
      "24/7 Concierge",
      "Spa & Wellness Center",
      "Kids Play Area"
    ],
    amenitiesAr: [
      "مسبح لا متناهي",
      "صالة رياضية حديثة",
      "وصول خاص إلى الشاطئ",
      "خدمة الكونسيرج على مدار الساعة",
      "سبا ومركز صحي",
      "منطقة لعب للأطفال"
    ],
    galleryImages: [
      "/luxury-tower-waterfront.jpg",
      "/modern-luxury-architecture-aerial-view-cityscape.jpg"
    ]
  }
]

export default function ProjectDetailPage({ params }) {
  const resolvedParams = use(params)
  const { language } = useLanguage()
  const t = translations[language]
  const isRTL = language === "ar"

  // Find project by ID
  const project = projects.find(p => p.id === resolvedParams.id) || projects[0]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={isRTL ? project.titleAr : project.titleEn}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-12">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-primary text-primary-foreground">
                {t[project.status]}
              </Badge>
              <Badge
                variant="outline"
                className="bg-background/20 backdrop-blur-sm text-white border-white/30"
              >
                {t[project.category]}
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {isRTL ? project.titleAr : project.titleEn}
            </h1>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="w-5 h-5 text-primary" />
              <p className="text-xl">
                {isRTL ? project.locationAr : project.locationEn}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    {t.aboutUs}
                  </h2>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {isRTL ? project.descriptionAr : project.descriptionEn}
                  </p>
                </CardContent>
              </Card>

              {/* Amenities */}
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-primary mb-6">
                    {t.worldClass}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {(isRTL ? project.amenitiesAr : project.amenitiesEn).map(
                      (amenity, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground/80">{amenity}</span>
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Gallery */}
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-primary mb-6">
                    {t.media}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.galleryImages.map((img, index) => (
                      <div
                        key={index}
                        className="aspect-video rounded-lg overflow-hidden"
                      >
                        <img
                          src={img || "/placeholder.svg"}
                          alt={`Gallery ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {t.interestedProject}
                      </p>
                      <p className="font-semibold">
                        {isRTL ? project.titleAr : project.titleEn}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Home className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {t.activeProperties}
                      </p>
                      <p className="font-semibold">{project.units}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {t.completed}
                      </p>
                      <p className="font-semibold">{project.completionDate}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground">
                    {t.bookAppointment}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {t.fillFormBelow}
                  </p>
                  <Link href="/book-now">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      {t.bookNow}
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {t.contactUs}
                  </h3>
                  <div className="space-y-3">
                    <p className="text-sm">
                      <span className="font-semibold">{t.phone}:</span> +971 4
                      XXX XXXX
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">{t.email}:</span>{" "}
                      info@development.com
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
