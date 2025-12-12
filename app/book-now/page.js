import { BookingForm } from "@/components/booking-form"
import { translations } from "@/lib/styles"
import { Header } from "@/components/header"

export default function BookNowPage() {
  return (
    <div className="min-h-screen pt-20  bg-black">
       <Header />
      <div className="relative h-[20vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[url('/assests/bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">{translations.en.bookNow}</h1>
          <p className="text-xl text-gray-300">Start your journey to luxury living</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <BookingForm />
      </div>
    </div>
  )
}
