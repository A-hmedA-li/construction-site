"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/styles"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const { language } = useLanguage()
  const t = translations[language]

  const navItems = [
    { label: t.about, href: "#about" },
    { label: t.communities, href: "#communities" },
    { label: t.projects, href: "#projects" },
    { label: t.retail, href: "#retail" },
    { label: t.media, href: "#media" },
    { label: t.events, href: "#events" }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 ml-3">
            <div className="flex flex-col items-center">
              <div className="flex gap-0.5">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1 h-4 bg-white" />
                ))}
              </div>
            </div>
            <span className="text-primary text-xl md:text-2xl font-bold tracking-wider">
              RoNar
            </span>
          </Link>

          <div className="flex gap-14">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-primary text-sm font-medium hover:text-gray-300 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

    

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 border-primary md:border-l-2 border-dashed pl-5">
              <div className="hidden md:flex items-center gap-2 ">

                <LanguageSwitcher />


                <Button
                  variant="outline"
                  className="border-primary text-white hover:bg-primary hover:text-black bg-transparent"
                >
                  {t.bookNow}
                </Button>
          
                {/* <span className="text-white text-sm">Num-- (RoNar) --ber</span> */}
              </div>
            </div>
            {/* <ThemeToggle /> */}

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-black text-white border-gray-800"
              >
                <nav className="flex flex-col gap-6 mt-8">
                  {navItems.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium hover:text-gray-300 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button
                    variant="outline"
                    className="border-primary text-white hover:bg-primary hover:text-black w-full bg-transparent"
                  >
                    {t.bookNow}
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
