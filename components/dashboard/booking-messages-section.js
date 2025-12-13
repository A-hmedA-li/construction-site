"use client"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Trash2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/styles"

export function BookingMessagesSection() {
  const { language } = useLanguage()
  const t = translations[language]
  const [messages, setMessages] = useState([
    {
      id: "1",
      name: "Ahmed Hassan",
      email: "ahmed@example.com",
      phone: "+971 50 123 4567",
      address: "123 Sheikh Zayed Road",
      city: "Dubai",
      postalCode: "00000",
      project: "Azure Heights",
      comments: "Interested in a 2-bedroom apartment with sea view",
      date: "2024-01-15",
      status: "new"
    },
    {
      id: "2",
      name: "Sarah Al-Mansoori",
      email: "sarah@example.com",
      phone: "+971 55 234 5678",
      address: "456 Business Bay",
      city: "Dubai",
      postalCode: "00000",
      project: "Riviera Tower",
      comments: "Looking for investment opportunities in commercial units",
      date: "2024-01-14",
      status: "contacted"
    },
    {
      id: "3",
      name: "Mohammed Rahman",
      email: "mohammed@example.com",
      phone: "+971 52 345 6789",
      address: "789 Palm Jumeirah",
      city: "Dubai",
      postalCode: "00000",
      project: "Marina Bay Residences",
      comments: "Need more information about payment plans",
      date: "2024-01-13",
      status: "new"
    }
  ])

  const handleDelete = id => {
    setMessages(messages.filter(msg => msg.id !== id))
  }

  const getStatusColor = status => {
    switch (status) {
      case "new":
        return "bg-primary/20 text-primary"
      case "contacted":
        return "bg-blue-500/20 text-blue-500"
      case "completed":
        return "bg-green-500/20 text-green-500"
      default:
        return ""
    }
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">
          {t.bookingMessages}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {messages.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              {t.noMessagesYet}
            </p>
          ) : (
            messages.map(message => (
              <div
                key={message.id}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg">{message.name}</h3>
                      <Badge className={getStatusColor(message.status)}>
                        {message.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      <strong>{t.interestedProject}:</strong> {message.project}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(message.id)}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-3 mb-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>{message.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>{message.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>
                      {message.address}, {message.city} {message.postalCode}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{new Date(message.date).toLocaleDateString()}</span>
                  </div>
                </div>

                {message.comments && (
                  <div className="bg-muted/50 rounded p-3 mt-3">
                    <p className="text-sm font-medium mb-1">{t.comments}:</p>
                    <p className="text-sm text-muted-foreground">
                      {message.comments}
                    </p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
