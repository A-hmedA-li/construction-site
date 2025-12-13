"use client"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import Link from "next/link"

export function ProjectCard({
  title,
  location,
  image,
  status,
  category,
  units,
  href = "/projects/12"
}) {
  return (
    <Link href={href}>
      <Card className="group overflow-hidden border-0 bg-transparent cursor-pointer">
        <div className="relative overflow-hidden rounded-lg aspect-4/3">
          <img
            src={image || "/projects/placeholder.png"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <Badge
              variant={status === "completed" ? "default" : "secondary"}
              className="bg-primary text-primary-foreground font-semibold"
            >
              {status}
            </Badge>
          </div>

          {/* Content */}
          <CardContent className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-start gap-2 mb-2">
              <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <p className="text-sm text-gray-300">{location}</p>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            {units && <p className="text-sm text-gray-400">{units}</p>}
          </CardContent>
        </div>
      </Card>
    </Link>
  )
}
