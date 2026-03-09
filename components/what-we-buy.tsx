"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import styles from "./what-we-buy.module.css"

const items = [
  {
    label: "Aliancas antigas",
    icon: (
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7" /><circle cx="12" cy="12" r="4" strokeOpacity="0.4" /></svg>
    ),
  },
  {
    label: "Correntes de ouro",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" /></svg>
    ),
  },
  {
    label: "Pulseiras",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /><path d="M12 6v6l4 2" strokeOpacity="0.5" /></svg>
    ),
  },
  {
    label: "Brincos",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 2l2 6h6l-5 3.5 2 6L12 14l-5 3.5 2-6L4 8h6z" /></svg>
    ),
  },
  {
    label: "Moedas de ouro",
    icon: (
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v10M9.5 9.5C9.5 8.1 10.6 7 12 7s2.5 1.1 2.5 2.5S13.4 12 12 12s-2.5 1.1-2.5 2.5S10.6 17 12 17" /></svg>
    ),
  },
  {
    label: "Ouro quebrado",
    icon: (
      <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
    ),
  },
  {
    label: "Joias usadas",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
    ),
  },
]

export function WhatWeBuy() {
  const revealRef = useScrollReveal()
  const gridRef = useScrollReveal()
  const noteRef = useScrollReveal()

  return (
    <section id="o-que-compramos" className="section">
      <div className="container">
        <div ref={revealRef} className="center reveal">
          <span className="section-label">Nosso Interesse</span>
          <h2 className="section-title">O que <em className="gold italic">compramos</em></h2>
          <div className="divider"></div>
          <p className="section-sub">Compramos todo tipo de joia e ouro, em qualquer estado. Nao importa se esta quebrado, antigo ou fora de moda.</p>
        </div>

        <div ref={gridRef} className={`reveal-stagger ${styles.itemsGrid}`}>
          {items.map((item, i) => (
            <div key={i} className={styles.itemCard}>
              <div className={styles.itemIconWrap}>{item.icon}</div>
              <span className={styles.itemLabel}>{item.label}</span>
            </div>
          ))}
        </div>

        <p ref={noteRef} className={`reveal ${styles.itemsNote}`}>{"✦"} Mesmo pecas antigas ou quebradas podem valer dinheiro. {"✦"}</p>
      </div>
    </section>
  )
}
