import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { VisionSection } from "@/components/vision-section"
import { LifestyleSection } from "@/components/lifestyle-section"
import { AmenitiesSection } from "@/components/amenities-section"
import { Footer } from "@/components/footer"
import { ReviewsSection } from "@/components/reviews-section"


export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <div className="bg-[url('/assests/bg.jpg')] bg-cover  border-secondary border-t-5"> 
          <VisionSection   />
        </div>
        <LifestyleSection />

        <AmenitiesSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  )
}
