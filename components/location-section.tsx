"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin } from "lucide-react"

export function LocationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
    <section ref={sectionRef} className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="font-serif text-3xl font-bold uppercase tracking-wider text-foreground sm:text-4xl">
            Nossa <span className="text-primary">Localizacao</span>
          </h2>
        </div>

        <div
          className={`mt-12 grid gap-8 lg:grid-cols-2 lg:items-center transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mt-6 font-serif text-xl font-semibold uppercase tracking-wide text-foreground">
              Endereco
            </h3>
            <p className="mt-2 text-lg text-muted-foreground">
              Rua das Andorinhas, 8
            </p>
            <p className="text-lg text-muted-foreground">Goianesia - PA</p>
            <a
              href="https://maps.google.com/?q=Rua+das+Andorinhas+8+Goianesia+PA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Ver no Google Maps
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="aspect-video overflow-hidden rounded-lg border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15960.12345!2d-49.123456!3d-3.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDcnMjQuNCJTIDQ5wrAwNyczMy4yIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localizacao Rock Fit Academia"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
