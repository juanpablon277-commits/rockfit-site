"use client"

import { useEffect, useState } from "react"
import { MessageCircle } from "lucide-react"

export function WhatsAppFab() {
  const [isVisible, setIsVisible] = useState(false)

  const whatsappNumber = "5594984161277"

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de mais informações sobre a Rock Fit Academia.`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      aria-label="Contato pelo WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
