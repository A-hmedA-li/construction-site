"use client"
import { useState } from "react"
import { Star, Trash2, EyeOff } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/styles"

export function ReviewManagementSection() {
  const { language } = useLanguage()
  const t = translations[language]
  const [reviews, setReviews] = useState([
    {
      id: "1",
      name: "Ahmed Al-Rashid",
      rating: 5,
      review:
        "Exceptional quality and service. The team was professional throughout the entire process.",
      project: "Azure Heights",
      date: "2024-01-15",
      published: true
    },
    {
      id: "2",
      name: "Fatima Al-Zahra",
      rating: 4,
      review:
        "Great project with modern amenities. Highly recommended for families.",
      project: "Riviera Tower",
      date: "2024-01-14",
      published: true
    },
    {
      id: "3",
      name: "Omar Khalil",
      rating: 5,
      review:
        "Outstanding development in a prime location. The attention to detail is remarkable.",
      project: "Marina Bay Residences",
      date: "2024-01-13",
      published: true
    },
    {
      id: "4",
      name: "Layla Hassan",
      rating: 3,
      review:
        "Good project but the delivery was delayed. Overall satisfied with the final product.",
      project: "Garden Oasis",
      date: "2024-01-12",
      published: false
    }
  ])

  const handleDelete = id => {
    setReviews(reviews.filter(review => review.id !== id))
  }

  const handleTogglePublish = id => {
    setReviews(
      reviews.map(review =>
        review.id === id ? { ...review, published: !review.published } : review
      )
    )
  }

  const renderStars = rating => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map(star => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating
                ? "fill-primary text-primary"
                : "text-muted-foreground"
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-primary">
          {t.reviewManagement}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.length === 0 ? (
            <p className="col-span-full text-center text-muted-foreground py-8">
              {t.noReviewsYet}
            </p>
          ) : (
            reviews.map(review => (
              <Card
                key={review.id}
                className={`${!review.published ? "opacity-60" : ""}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{review.name}</h3>
                      {renderStars(review.rating)}
                    </div>
                    <Badge
                      variant={review.published ? "default" : "secondary"}
                      className="ml-2"
                    >
                      {review.published ? t.published : t.unpublished}
                    </Badge>
                  </div>
                  {review.project && (
                    <p className="text-xs text-muted-foreground mt-2">
                      {review.project}
                    </p>
                  )}
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {review.review}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(review.date).toLocaleDateString()}
                  </p>

                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleTogglePublish(review.id)}
                      className="flex-1"
                    >
                      <EyeOff className="h-4 w-4 mr-1" />
                      {review.published ? t.unpublish : t.publish}
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(review.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
