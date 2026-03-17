"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Basico",
    frequency: "3x por semana",
    prices: [
      { period: "Mensal", value: "R$ 110" },
      { period: "Trimestral", value: "R$ 270" },
      { period: "Semestral", value: "R$ 540" },
    ],
    features: [
      "Acesso a area de musculação",
      "Avaliação física inicial",
      "Acesso ao app de treinos",
    ],
  },
  {
    name: "Essencial",
    frequency: "4x por semana",
    popular: true,
    prices: [
      { period: "Mensal", value: "R$ 120" },
      { period: "Trimestral", value: "R$ 300" },
      { period: "Semestral", value: "R$ 600" },
    ],
    features: [
      "Acesso a area de musculação",
      "Avaliação física mensal",
      "Acesso ao app de treinos",
      "Aulas coletivas",
    ],
  },
  {
    name: "Premium",
    frequency: "7x por semana",
    prices: [
      { period: "Mensal", value: "R$ 130" },
      { period: "Trimestral", value: "R$ 330" },
      { period: "Semestral", value: "R$ 650" },
    ],
    features: [
      "Acesso ilimitado",
      "Avaliação física quinzenal",
      "Acesso ao app de treinos",
      "Todas as aulas coletivas",
      "Acompanhamento nutricional",
    ],
  },

  {
  name: "Família",
  frequency: "Para toda a família",
  prices: [
    { period: "Mensal", value: "Consulte" },
    { period: "Trimestral", value: "Consulte" },
    { period: "Semestral", value: "Consulte" },
  ],
  features: [
    "Plano válido para todos os membros da família",
    "Desconto especial para grupos familiares",
    "Acesso à área de musculação",
    "Acesso ao app de treinos",
  ],
}
  
]

export function PlansSection() {
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

  const whatsappNumber = "5594984161277"

  return (
    <section id="planos" ref={sectionRef} className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="font-serif text-3xl font-bold uppercase tracking-wider text-foreground sm:text-4xl">
            Nossos <span className="text-primary">Planos</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Escolha o plano ideal para seus objetivos
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`group relative overflow-hidden rounded-lg border transition-all duration-700 hover:shadow-xl hover:shadow-primary/10 ${
                plan.popular
                  ? "border-primary bg-card"
                  : "border-border bg-card hover:border-primary/50"
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute right-0 top-0 bg-primary px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                  Popular
                </div>
              )}

              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold uppercase tracking-wide text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {plan.frequency}
                </p>

                <div className="mt-6 space-y-3">
                  {plan.prices.map((price) => (
                    <div
                      key={price.period}
                      className="flex items-center justify-between border-b border-border/50 pb-2"
                    >
                      <span className="text-sm text-muted-foreground">
                        {price.period}
                      </span>
                      <span className="font-serif text-lg font-semibold text-foreground">
                        {price.value}
                      </span>
                    </div>
                  ))}
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`mt-6 w-full rounded-none font-serif uppercase tracking-wider transition-transform hover:scale-[1.02] ${
                    plan.popular ? "" : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                  variant={plan.popular ? "default" : "secondary"}
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Olá! Tenho interesse no plano ${plan.name} da Rock Fit Academia.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Escolher Plano
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
