"use client"

import Link from "next/link"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/styles"

export function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex flex-col items-center">
                <div className="flex gap-0.5">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-1 h-4 bg-white" />
                  ))}
                </div>
              </div>
              <span className="text-xl font-bold tracking-wider">RoNar</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Building world-class communities
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t.about}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t.projects}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Residential
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Commercial
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Hospitality
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t.contactUs}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>{t.phone}: Num-- (RoNar) --ber</li>
              <li>Email: info@Email.com</li>
              <li>City, Conutry</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 RoNar Developments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
