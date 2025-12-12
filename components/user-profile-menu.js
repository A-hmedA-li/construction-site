"use client"

import { User, LogOut, Settings, Sigma } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/styles"
import { useRouter } from "next/navigation"


function useAuth(){
  return {
    user: {
      name:"Ahmad", 
      email: "email@email.com"
    }, 
    signOut: 'cl'
  }
}
export function UserProfileMenu() {
  const { user, signOut } = useAuth()
  const { language } = useLanguage()
  const t = translations[language]
  const router = useRouter()

  if (!user) {
    return (
      <div className="flex items-center gap-2">

         <Link href="/sign-in">
                  <Button
                    variant="outline"
                    className="border-primary text-white hover:bg-primary hover:text-black bg-transparent"
                  >
                     {t.signIn}
                  </Button>
          </Link>
      </div>
    )
  }

  const handleSignOut = () => {
    signOut()
    router.push("/")
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative rounded-full">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-medium text-sm">
              {user.name.charAt(0).toUpperCase()}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="px-2 py-2 ">
          <p className="text-sm font-medium">{user.name}</p>
          <p className="text-xs text-muted-foreground">{user.email}</p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/profile" className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            {t.profile}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/dashboard" className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            {t.dashboard}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleSignOut}
          className="cursor-pointer text-red-500"
        >
          <LogOut className="mr-2 h-4 w-4" />
          {t.signOut}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
