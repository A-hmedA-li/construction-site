"use client"
import { useState } from "react"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/styles"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Phone, Mail, MapPin, Building2 } from "lucide-react"

const projects = [
  "Azizi Riviera",
  "Azizi Venice",
  "Azizi Mina",
  "Azizi Farhad",
  "Azizi Plaza",
  "Other"
]

export function BookingForm() {
  const { language } = useLanguage()
  const t = translations[language]
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="max-w-4xl mx-auto ">
      <Card className="border-primary/20 bg-black">
        <CardHeader className="space-y-2">
          <CardTitle className="text-3xl font-bold text-primary">
            {t.bookAppointment}
          </CardTitle>
          <CardDescription className="text-lg text-gray-400">
            {t.fillFormBelow}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium flex items-center gap-2"
              >
                <Building2 className="h-4 w-4 text-primary" />
                {t.fullName}
              </label>
              <Input
                id="name"
                name="name"
                placeholder={t.enterFullName}
                required
                className="border-primary/30 focus:border-primary"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium flex items-center gap-2"
              >
                <Mail className="h-4 w-4 text-primary" />
                {t.email}
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t.enterEmail}
                required
                className="border-primary/30 focus:border-primary"
              />
            </div>

            {/* Telephone Field */}
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium flex items-center gap-2"
              >
                <Phone className="h-4 w-4 text-primary" />
                {t.telephone}
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder={t.enterPhone}
                required
                className="border-primary/30 focus:border-primary"
              />
            </div>

            {/* Address Fields */}
            <div className="space-y-4">
              <label className="text-sm font-medium flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                {t.address}
              </label>

              {/* Main Address Line */}
              <Input
                name="address-line"
                placeholder={t.streetAddress}
                required
                className="border-primary/30 focus:border-primary"
              />

              {/* City and Postal Code */}
              <div className="grid grid-cols-2 gap-4">
                <Input
                  name="city"
                  placeholder={t.city}
                  required
                  className="border-primary/30 focus:border-primary"
                />
                <Input
                  name="postal"
                  placeholder={t.postalCode}
                  required
                  className="border-primary/30 focus:border-primary"
                />
              </div>
            </div>

            {/* Project Selection Dropdown */}
            <div className="space-y-2">
              <label
                htmlFor="project"
                className="text-sm font-medium flex items-center gap-2"
              >
                <Building2 className="h-4 w-4 text-primary" />
                {t.interestedProject}
              </label>
              <Select name="project" required>
                <SelectTrigger className="border-primary/30 focus:border-primary">
                  <SelectValue placeholder={t.selectProject} />
                </SelectTrigger>
                <SelectContent>
                  {projects.map(project => (
                    <SelectItem
                      key={project}
                      value={project.toLowerCase().replace(/\s+/g, "-")}
                    >
                      {project}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Comments Field */}
            <div className="space-y-2">
              <label htmlFor="comments" className="text-sm font-medium">
                {t.comments}
              </label>
              <Textarea
                id="comments"
                name="comments"
                placeholder={t.additionalComments}
                rows={5}
                className="border-primary/30 focus:border-primary resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              {submitted ? t.thankYouMessage : t.submitBooking}
            </Button>

            {submitted && (
              <p className="text-center text-primary font-medium animate-fade-in">
                {t.bookingConfirmation}
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
