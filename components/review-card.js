"use client"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/providers/language-provider"

export function ReviewCard({ name, rating, comment, date, project }) {
  const { language } = useLanguage()

  return (
    <Card className="bg-black/40 border-primary/20 hover:border-primary/40 transition-colors">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-white">{name}</h3>
            {project && <p className="text-sm text-gray-400">{project}</p>}
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating
                    ? "fill-primary text-primary"
                    : "fill-gray-600 text-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
        <p className="text-gray-300 mb-4 leading-relaxed">{comment}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </CardContent>
    </Card>
  )
}
