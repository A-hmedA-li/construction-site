"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ReviewCard } from "@/components/review-card"
import { ReviewForm } from "@/components/review-form"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/styles"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

const allReviews = [
  {
    id: 1,
    name: "Ahmed Al Mansouri",
    rating: 5,
    comment:
      "Outstanding development with exceptional attention to detail. The amenities exceed expectations and the location is perfect. Highly recommend!",
    date: "2024-01-15",
    project: "Ronar Venice"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    rating: 5,
    comment:
      "Beautiful modern architecture and luxurious finishes throughout. The community is well-maintained and the staff is incredibly professional.",
    date: "2024-01-12",
    project: "Ronar Riviera"
  },
  {
    id: 3,
    name: "Mohammed Hassan",
    rating: 4,
    comment:
      "Great investment opportunity with excellent ROI potential. The construction quality is top-notch and the design is contemporary.",
    date: "2024-01-10",
    project: "Ronar Grand"
  },
  {
    id: 4,
    name: "Emily Chen",
    rating: 5,
    comment:
      "The waterfront views are breathtaking and the facilities are world-class. Living here has been an absolute pleasure!",
    date: "2024-01-08",
    project: "Ronar Mina"
  },
  {
    id: 5,
    name: "Omar Abdullah",
    rating: 5,
    comment:
      "Exceptional service from the sales team and smooth handover process. The property quality exceeded our expectations.",
    date: "2024-01-05",
    project: "Ronar Venice"
  },
  {
    id: 6,
    name: "Lisa Anderson",
    rating: 4,
    comment:
      "Well-designed spaces with modern amenities. The community vibe is fantastic and neighbors are friendly.",
    date: "2024-01-03",
    project: "Ronar Riviera"
  },
  {
    id: 7,
    name: "Khalid Ibrahim",
    rating: 5,
    comment:
      "Premium location with excellent connectivity to all major areas. The smart home features are impressive.",
    date: "2024-01-01",
    project: "Ronar Creek Views"
  },
  {
    id: 8,
    name: "Jennifer White",
    rating: 5,
    comment:
      "Luxurious lifestyle at an affordable price point. The gym and pool facilities are outstanding!",
    date: "2023-12-28",
    project: "Ronar Star"
  },
  {
    id: 9,
    name: "Fatima Al Zaabi",
    rating: 5,
    comment:
      "From start to finish, the entire process was seamless. The team was responsive and helpful at every step.",
    date: "2023-12-25",
    project: "Ronar Berton"
  },
  {
    id: 10,
    name: "David Brown",
    rating: 4,
    comment:
      "Excellent value for money with premium finishes. The payment plan made it easy to invest in this property.",
    date: "2023-12-20",
    project: "Ronar Grand"
  },
  {
    id: 11,
    name: "Aisha Mohammed",
    rating: 5,
    comment:
      "The kids play areas and family-friendly environment make this an ideal place to raise a family.",
    date: "2023-12-18",
    project: "Ronar Riviera"
  },
  {
    id: 12,
    name: "Robert Taylor",
    rating: 5,
    comment:
      "Smart investment choice with great rental yields. The property management is professional and responsive.",
    date: "2023-12-15",
    project: "Ronar Plaza"
  }
]

export default function ReviewsPage() {
  const { language } = useLanguage()
  const t = translations[language]
  const [ratingFilter, setRatingFilter] = useState("all")

  const filteredReviews = allReviews.filter(review => {
    if (ratingFilter === "all") return true
    return review.rating === Number.parseInt(ratingFilter)
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="py-12 bg-gradient-to-b from-black to-background">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {t.clientReviews}
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl">{t.reviewsDesc}</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-8">
              <div>
                <p className="text-white text-lg">
                  <span className="text-primary font-bold">
                    {filteredReviews.length}
                  </span>{" "}
                  {t.reviewsFound}
                </p>
              </div>

              <div className="flex gap-4">
                <Select value={ratingFilter} onValueChange={setRatingFilter}>
                  <SelectTrigger className="w-[180px] bg-black/60 border-primary/20 text-white">
                    <SelectValue placeholder={t.filterByRating} />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-primary/20 text-white">
                    <SelectItem value="all">{t.allRatings}</SelectItem>
                    <SelectItem value="5">5 {t.stars}</SelectItem>
                    <SelectItem value="4">4 {t.stars}</SelectItem>
                    <SelectItem value="3">3 {t.stars}</SelectItem>
                    <SelectItem value="2">2 {t.stars}</SelectItem>
                    <SelectItem value="1">1 {t.star}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredReviews.map(review => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </div>

            {filteredReviews.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">{t.noReviewsFound}</p>
              </div>
            )}
          </div>
        </section>

        <section className="py-12 bg-black/20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-2xl">
            <ReviewForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
