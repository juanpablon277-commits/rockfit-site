"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-gym.jpg"
          alt="Rock Fit Academia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="font-serif text-5xl font-bold uppercase tracking-wider text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Rock Fit
            <span className="mt-2 block text-primary">Academia</span>
          </h1>
        </div>

        <div
          className={`mt-6 transition-all delay-300 duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-lg text-foreground/80 sm:text-xl md:text-2xl">
            Força, disciplina e evolucao todos os dias.
          </p>
        </div>

        <div
          className={`mt-10 transition-all delay-500 duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Button
            asChild
            size="lg"
            className="rounded-none px-10 py-6 font-serif text-lg font-semibold uppercase tracking-wider transition-transform hover:scale-105"
          >
            <a href="#planos">Comece Agora</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-foreground/60 transition-colors hover:text-primary"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  )
}
