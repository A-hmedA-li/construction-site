"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Mail, Phone, MapPin, Calendar, Edit2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/styles"
import { Header } from "@/components/header"
function useAuth(){
  return {
    user: {
      name:"Ahmad", 
      email: "email@email.com"
    }, 
    signOut: 'cl'
  }
}
export default function ProfilePage() {
  const router = useRouter()
  const { user, isLoading } = useAuth()
  const { language } = useLanguage()
  const t = translations[language]

  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/sign-in")
    }
    if (user) {
      setName(user.name)
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return <div className="min-h-screen bg-background" />
  }

  if (!user) {
    return null
  }

  const handleSave = () => {
    // Save profile changes
    setIsEditing(false)
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2">
              {t.myProfile}
            </h1>
            <p className="text-muted-foreground">{t.manageProfileInfo}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Profile Card */}
            <Card className="md:col-span-1">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mb-4">
                    <span className="text-primary-foreground font-bold text-3xl">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-1">{user.name}</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    {user.role}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditing(!isEditing)}
                    className="w-full"
                  >
                    <Edit2 className="mr-2 h-4 w-4" />
                    {isEditing ? t.cancel : t.editProfile}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Details Card */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>{t.profileDetails}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t.fullName}
                    </label>
                    {isEditing ? (
                      <Input
                        value={name}
                        onChange={e => setName(e.target.value)}
                      />
                    ) : (
                      <div className="flex items-center gap-2 text-secondary">
                        <span>{user.name}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t.email}
                    </label>
                    <div className="flex items-center gap-2 text-secondary">
                      <Mail className="h-4 w-4" />
                      <span>{user.email}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t.telephone}
                    </label>
                    {isEditing ? (
                      <Input
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder={t.enterPhone}
                      />
                    ) : (
                      <div className="flex items-center gap-2 text-secondary">
                        <Phone className="h-4 w-4" />
                        <span>{phone || t.notProvided}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t.address}
                    </label>
                    {isEditing ? (
                      <Input
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        placeholder={t.streetAddress}
                      />
                    ) : (
                      <div className="flex items-center gap-2 text-secondary">
                        <MapPin className="h-4 w-4" />
                        <span>{address || t.notProvided}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t.memberSince}
                    </label>
                    <div className="flex items-center gap-2 text-secondary">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date().toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                {isEditing && (
                  <Button onClick={handleSave} className="w-full">
                    {t.saveChanges}
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
