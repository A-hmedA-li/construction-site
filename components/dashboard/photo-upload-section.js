"use client"
import { useState } from "react"
import { Upload, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/styles"
import Image from "next/image"

export function PhotoUploadSection() {
  const { language } = useLanguage()
  const t = translations[language]
  const [photos, setPhotos] = useState([
    { id: "1", url: undefined, name: "tower-1.jpg" },
    { id: "2", url: undefined, name: "garden-2.jpg" },
    { id: "3", url: undefined, name: "beach-3.jpg" }
  ])

  const handleFileUpload = e => {
    const files = e.target.files
    if (files) {
      // In a real app, upload to server and get URL
      const newPhotos = Array.from(files).map((file, index) => ({
        id: `new-${Date.now()}-${index}`,
        url: URL.createObjectURL(file),
        name: file.name
      }))
      setPhotos([...photos, ...newPhotos])
    }
  }

  const handleDelete = id => {
    setPhotos(photos.filter(photo => photo.id !== id))
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">{t.photoUpload}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: Upload Section */}
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-muted rounded-lg p-8 hover:border-primary/50 transition-colors">
            <Upload className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">{t.uploadPhotos}</h3>
            <p className="text-sm text-muted-foreground mb-4 text-center">
              {t.uploadPhotosDesc}
            </p>
            <label htmlFor="photo-upload">
              <Button asChild>
                <span>{t.selectFiles}</span>
              </Button>
            </label>
            <input
              id="photo-upload"
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />
          </div>

          {/* Right: Uploaded Photos */}
          <div className="border rounded-lg p-4 max-h-[400px] overflow-y-auto">
            <h3 className="font-semibold mb-4">{t.uploadedPhotos}</h3>
            {photos.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-8">
                {t.noPhotosYet}
              </p>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {photos.map(photo => (
                  <div key={photo.id} className="relative group">
                    <div className="aspect-square relative rounded-lg overflow-hidden border">
                      <Image
                        src={photo.url || "/projects/placeholder.png"}
                        alt={photo.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <button
                      onClick={() => handleDelete(photo.id)}
                      className="absolute top-2 right-2 bg-destructive text-destructive-foreground rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Delete photo"
                    >
                      <X className="h-4 w-4" />
                    </button>
                    <p className="text-xs text-muted-foreground mt-1 truncate">
                      {photo.name}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
