"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"

export function InstagramSection() {
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
    <section ref={sectionRef} className="bg-secondary py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Instagram className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 font-serif text-2xl font-bold uppercase tracking-wider text-foreground sm:text-3xl">
            Siga nosso Instagram
          </h2>
          <p className="mt-3 text-muted-foreground">
            Acompanhe nosso dia a dia, dicas e muito mais
          </p>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="mt-6 rounded-none border-primary font-serif uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <a
              href="https://instagram.com/rockfit_gopa"
              target="_blank"
              rel="noopener noreferrer"
            >
              @rockfit_gopa
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
