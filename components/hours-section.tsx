"use client"

import { useEffect, useRef, useState } from "react"
import { Clock } from "lucide-react"

const hours = [
  { day: "Segunda a Sexta", time: "05:00 - 21:00" },
  { day: "Sabado", time: "08:00 - 11:00" },
  { day: "Domingo", time: "09:00 - 12:00" },
]

export function HoursSection() {
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
    <section id="horarios" ref={sectionRef} className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="font-serif text-3xl font-bold uppercase tracking-wider text-foreground sm:text-4xl">
            Horário de <span className="text-primary">Funcionamento</span>
          </h2>
        </div>

        <div
          className={`mt-12 rounded-lg border border-border bg-card p-8 transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-6">
            {hours.map((item, index) => (
              <div
                key={item.day}
                className={`flex items-center gap-4 transition-all duration-500 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div className="flex flex-1 items-center justify-between border-b border-border/50 pb-4">
                  <span className="font-medium text-foreground">{item.day}</span>
                  <span className="font-serif text-lg font-semibold text-primary">
                    {item.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
