"use client"

import { useEffect, useRef, useState } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import styles from "./stats.module.css"

const stats = [
  { target: 10, suffix: "", label: "Anos de experiencia" },
  { target: 15000, suffix: "+", label: "Clientes atendidos" },
  { target: 100, suffix: "%", label: "Avaliacao transparente" },
  { target: 5, suffix: "★", label: "Nota dos clientes" },
]

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            const duration = 1800
            const start = performance.now()
            const isLarge = target > 999

            const step = (now: number) => {
              const progress = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              const current = Math.floor(eased * target)
              setValue(current)
              if (progress < 1) requestAnimationFrame(step)
            }
            requestAnimationFrame(step)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [target])

  const formatted = target > 999 ? value.toLocaleString("pt-BR") : value.toString()

  return (
    <span ref={ref} className={styles.statNumber}>
      {formatted}{suffix}
    </span>
  )
}

export function Stats() {
  const revealRef = useScrollReveal()
  const statsRef = useScrollReveal()
  const noteRef = useScrollReveal()

  return (
    <section id="confianca" className={`section ${styles.section}`}>
      <div className="container">
        <div ref={revealRef} className="center reveal">
          <span className="section-label">Nossa historia</span>
          <h2 className="section-title">Numeros que <em className="gold italic">falam por nos</em></h2>
          <div className="divider"></div>
        </div>

        <div ref={statsRef} className={`reveal-stagger ${styles.stats}`}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.stat}>
              <AnimatedNumber target={stat.target} suffix={stat.suffix} />
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        <p ref={noteRef} className={`reveal ${styles.confiancaNote}`}>
          Milhares de clientes ja venderam suas joias com seguranca na Converte Ouro.
        </p>
      </div>
    </section>
  )
}
