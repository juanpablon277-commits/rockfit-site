"use client"

import { useEffect, useRef, useState } from "react"
import { Dumbbell, Users, Clock, Trophy } from "lucide-react"

const features = [
  {
    icon: Dumbbell,
    title: "Equipamentos Modernos",
    description: "Aparelhos de ultima geracao para treinos eficientes",
  },
  {
    icon: Users,
    title: "Profissionais Qualificados",
    description: "Equipe pronta para orientar seu treino",
  },
  {
    icon: Clock,
    title: "Horarios Flexiveis",
    description: "Funcionamento amplo para sua conveniencia",
  },
  {
    icon: Trophy,
    title: "Resultados Reais",
    description: "Metodologia focada em conquistas",
  },
]

export function AboutSection() {
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
    <section
      id="sobre"
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
            Sobre a <span className="text-primary">Academia</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Na Rock Fit Academia voce encontra estrutura moderna, ambiente
            motivador e treinos focados em resultados reais. Aqui, cada dia e
            uma oportunidade de superar seus limites.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group rounded-lg border border-border bg-card p-6 text-center transition-all duration-700 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold uppercase tracking-wide text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
