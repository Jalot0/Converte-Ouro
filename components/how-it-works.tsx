"use client"

import { useEffect, useRef, useState } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import styles from "./how-it-works.module.css"

const steps = [
  {
    number: "01",
    title: "Entre em contato",
    description: "Fale conosco pelo WhatsApp ou visite uma de nossas lojas. Atendemos com hora marcada ou imediatamente.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Avaliacao na sua frente",
    description: "Nossa equipe especializada avalia a sua joia com total transparencia. Voce acompanha todo o processo.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Pagamento imediato",
    description: "Aceite a proposta e receba o pagamento na hora. Sem espera, sem cheque, sem promessa.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
]

export function HowItWorks() {
  const revealRef = useScrollReveal()
  const carouselRef = useScrollReveal()
  const trackRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const startXRef = useRef(0)
  const autoTimerRef = useRef<NodeJS.Timeout | null>(null)

  const goTo = (index: number) => {
    const newIndex = (index + steps.length) % steps.length
    setCurrent(newIndex)
  }

  const startAuto = () => {
    if (autoTimerRef.current) clearInterval(autoTimerRef.current)
    autoTimerRef.current = setInterval(() => goTo(current + 1), 3200)
  }

  useEffect(() => {
    startAuto()
    return () => {
      if (autoTimerRef.current) clearInterval(autoTimerRef.current)
    }
  }, [current])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const cards = track.querySelectorAll(`.${styles.step}`)
    if (!cards.length) return

    const cardWidth = (cards[0] as HTMLElement).offsetWidth + 24
    const containerW = track.parentElement?.offsetWidth || 0
    const offset = cardWidth * current - (containerW / 2 - (cards[0] as HTMLElement).offsetWidth / 2)
    track.style.transition = "transform 0.55s cubic-bezier(0.4,0,0.2,1)"
    track.style.transform = `translateX(${-Math.max(0, offset)}px)`
  }, [current])

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true)
    startXRef.current = e.clientX
    trackRef.current!.style.transition = "none"
    if (autoTimerRef.current) clearInterval(autoTimerRef.current)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !trackRef.current) return
    const diff = e.clientX - startXRef.current
    const cards = trackRef.current.querySelectorAll(`.${styles.step}`)
    const cardWidth = (cards[0] as HTMLElement).offsetWidth + 24
    const containerW = trackRef.current.parentElement?.offsetWidth || 0
    const offset = cardWidth * current - (containerW / 2 - (cards[0] as HTMLElement).offsetWidth / 2)
    trackRef.current.style.transform = `translateX(${-Math.max(0, offset) + diff}px)`
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return
    setIsDragging(false)
    const diff = e.clientX - startXRef.current
    if (diff < -40) goTo(current + 1)
    else if (diff > 40) goTo(current - 1)
    else goTo(current)
    startAuto()
  }

  return (
    <section id="como-funciona" className={`section ${styles.section}`}>
      <div className="container">
        <div ref={revealRef} className="center reveal">
          <span className="section-label">Processo Simples</span>
          <h2 className="section-title">Como <em className="gold italic">funciona</em></h2>
          <div className="divider"></div>
          <p className="section-sub">Em poucos passos, sua joia vira dinheiro no bolso. Rapido, seguro e sem burocracia.</p>
        </div>

        <div ref={carouselRef} className={`reveal ${styles.carouselWrapper}`}>
          <div
            ref={trackRef}
            className={styles.stepsTrack}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onMouseEnter={() => autoTimerRef.current && clearInterval(autoTimerRef.current)}
            onMouseLeave={startAuto}
          >
            {steps.map((step, i) => (
              <div key={i} className={`${styles.step} ${i === current ? styles.active : ""}`}>
                <span className={styles.stepNumber}>{step.number}</span>
                <div className={styles.stepIcon}>{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.stepsDots}>
            {steps.map((_, i) => (
              <button
                key={i}
                className={`${styles.stepsDot} ${i === current ? styles.active : ""}`}
                onClick={() => { goTo(i); startAuto(); }}
                aria-label={`Passo ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
