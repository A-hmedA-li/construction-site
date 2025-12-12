"use client"

import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/styles"
import { ReviewCard } from "@/components/review-card"
import { ReviewForm } from "@/components/review-form"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const recentReviews = [
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
  }
]

export function ReviewsSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-black">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.clientReviews}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.reviewsDesc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {recentReviews.map(review => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>

        <div className="text-center mb-12">
          <Link href="/reviews">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-black bg-transparent"
            >
              {t.viewAllReviews}
            </Button>
          </Link>
        </div>

        <div className="max-w-2xl mx-auto">
          <ReviewForm />
        </div>
      </div>
    </section>
  )
}
