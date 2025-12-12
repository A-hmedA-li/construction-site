"use client"
import { useState } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/styles"

export function ReviewForm() {
  const { language } = useLanguage()
  const t = translations[language]
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    // Handle form submission
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <Card className="bg-black/40 border-primary/20">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">
          {t.leaveReview}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              {t.yourName}
            </label>
            <Input
              type="text"
              placeholder={t.enterName}
              required
              className="bg-black/60 border-primary/20 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              {t.projectName}
            </label>
            <Input
              type="text"
              placeholder={t.enterProject}
              className="bg-black/60 border-primary/20 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              {t.rating}
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= (hoveredRating || rating)
                        ? "fill-primary text-primary"
                        : "fill-gray-600 text-gray-600"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              {t.yourReview}
            </label>
            <Textarea
              placeholder={t.writeReview}
              required
              rows={5}
              className="bg-black/60 border-primary/20 text-white resize-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary text-black hover:bg-primary/90 font-semibold"
          >
            {submitted ? t.thankYou : t.submitReview}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
