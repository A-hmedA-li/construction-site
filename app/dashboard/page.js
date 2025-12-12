"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  Home,
  Star,
  Calendar,
  FileText,
  Settings,
  Users,
  BarChart3,
  MessageSquare
} from "lucide-react"
import Link from "next/link"
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

export default function DashboardPage() {
  const router = useRouter()
  const { user, isLoading } = useAuth()
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/sign-in")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return <div className="min-h-screen bg-background" />
  }

  if (!user) {
    return null
  }

  const userMenuItems = [
    {
      icon: Home,
      label: t.myProperties,
      href: "/dashboard/properties",
      count: 2
    },
    { icon: Star, label: t.myReviews, href: "/dashboard/my-reviews", count: 3 },
    {
      icon: Calendar,
      label: t.myBookings,
      href: "/dashboard/bookings",
      count: 1
    },
    {
      icon: MessageSquare,
      label: t.messages,
      href: "/dashboard/messages",
      count: 5
    },
    { icon: Settings, label: t.settings, href: "/dashboard/settings" }
  ]

  const adminMenuItems = [
    { icon: BarChart3, label: t.analytics, href: "/dashboard/analytics" },
    { icon: Users, label: t.manageUsers, href: "/dashboard/users" },
    {
      icon: FileText,
      label: t.manageProjects,
      href: "/dashboard/manage-projects"
    },
    { icon: MessageSquare, label: t.allReviews, href: "/dashboard/all-reviews" }
  ]

  const menuItems =
    user.role === "admin"
      ? [...userMenuItems, ...adminMenuItems]
      : userMenuItems

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2">
              {t.welcome}, {user.name}
            </h1>
            <p className="text-muted-foreground">{t.dashboardDesc}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {menuItems.map(item => (
              <Link key={item.href} href={item.href}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary/50">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {item.label}
                    </CardTitle>
                    <item.icon className="h-5 w-5 text-primary" />
                  </CardHeader>
                  <CardContent>
                    {item.count !== undefined && (
                      <div className="text-2xl font-bold">{item.count}</div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">{t.quickStats}</h2>
            <div className="grid gap-6 md:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {t.totalBookings}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">12</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {t.activeProperties}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">2</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {t.reviewsGiven}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">8</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {t.messages}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">5</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
