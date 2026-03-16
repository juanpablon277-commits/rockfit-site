import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PlansSection } from "@/components/plans-section"
import { GallerySection } from "@/components/gallery-section"
import { HoursSection } from "@/components/hours-section"
import { LocationSection } from "@/components/location-section"
import { ContactSection } from "@/components/contact-section"
import { InstagramSection } from "@/components/instagram-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppFab } from "@/components/whatsapp-fab"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <PlansSection />
        <GallerySection />
        <HoursSection />
        <LocationSection />
        <ContactSection />
        <InstagramSection />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
