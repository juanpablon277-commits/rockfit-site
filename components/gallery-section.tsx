"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const images = [
  { src: "/images/gym-1.jpg", alt: "Area de musculação" },
  { src: "/images/gym-2.jpg", alt: "Area cardio" },
  { src: "/images/gym-3.jpg", alt: "Area de treino funcional" },
  { src: "/images/gym-4.jpg", alt: "Equipamentos" },
  { src: "/images/gym-5.jpg", alt: "Recepção" },
  { src: "/images/gym-6.jpg", alt: "Treino" },
]

export function GallerySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="galeria"
      ref={sectionRef}
      className="bg-secondary py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="font-serif text-3xl font-bold uppercase tracking-wider text-foreground sm:text-4xl">
            Nossa <span className="text-primary">Estrutura</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Conheca o ambiente que vai transformar seu treino
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={image.src}
              className={`group relative aspect-[4/3] overflow-hidden rounded-lg transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-serif text-sm font-semibold uppercase tracking-wider text-foreground">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
