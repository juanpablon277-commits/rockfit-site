"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const whatsappNumber = "5594984161277"

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
    <section ref={sectionRef} className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="font-serif text-3xl font-bold uppercase leading-tight tracking-wider text-foreground sm:text-4xl md:text-5xl">
            Seu resultado começa com o{" "}
            <span className="text-primary">primeiro passo</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Não deixe para amanhã o treino que pode mudar sua vida hoje
          </p>

          <Button
            asChild
            size="lg"
            className="mt-10 rounded-none px-12 py-6 font-serif text-lg font-semibold uppercase tracking-wider transition-transform hover:scale-105"
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=Olá! Quero fazer minha inscrição na Rock Fit Academia.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Faça sua inscrição
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
