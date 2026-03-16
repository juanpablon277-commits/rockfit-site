"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const whatsappNumber = "5594984161277"
  const phoneDisplay = "(94) 98416-1277"

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contato" ref={sectionRef} className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="font-serif text-3xl font-bold uppercase tracking-wider text-foreground sm:text-4xl">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tire suas duvidas ou agende uma visita
          </p>
        </div>

        <div
          className={`mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-6 py-4">
            <Phone className="h-5 w-5 text-primary" />
            <span className="font-medium text-foreground">{phoneDisplay}</span>
          </div>

          <Button
            asChild
            size="lg"
            className="rounded-none px-8 font-serif uppercase tracking-wider transition-transform hover:scale-105"
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de mais informações sobre a Rock Fit Academia.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
