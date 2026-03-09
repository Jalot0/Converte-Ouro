"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import styles from "./testimonials.module.css"

const testimonials = [
  {
    text: "Fui muito bem atendida e recebi o pagamento na hora. Levei minhas aliancas antigas e fiquei super satisfeita com o valor oferecido. Recomendo!",
    name: "Mariana S.",
    city: "Petropolis, RJ",
    initial: "M",
  },
  {
    text: "Levei algumas joias antigas que estavam guardadas ha anos e fiquei surpreso com o valor. Atendimento muito profissional e transparente do inicio ao fim.",
    name: "Roberto M.",
    city: "Volta Redonda, RJ",
    initial: "R",
  },
  {
    text: "Avaliacao rapida e atendimento muito profissional. Me senti segura durante todo o processo. O dinheiro caiu na hora. Com certeza voltarei!",
    name: "Ana P.",
    city: "Resende, RJ",
    initial: "A",
  },
  {
    text: "Tinha um ouro quebrado guardado e achei que nao valia nada. A equipe avaliou e ofereceu um otimo preco. Sai de la muito feliz e com o dinheiro em maos.",
    name: "Carlos F.",
    city: "Angra dos Reis, RJ",
    initial: "C",
  },
  {
    text: "Super recomendo! Fui sem saber o que esperar e a equipe me explicou tudo com paciencia. Proposta justa e transparente. Otima empresa!",
    name: "Luciana T.",
    city: "Barra Mansa, RJ",
    initial: "L",
  },
  {
    text: "Processo rapido, sem burocracia e o pessoal muito simpatico. Ja indiquei para minha familia. A melhor opcao quando voce precisa de dinheiro rapido.",
    name: "Joao V.",
    city: "Teresopolis, RJ",
    initial: "J",
  },
]

export function Testimonials() {
  const revealRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section id="depoimentos" className="section">
      <div className="container">
        <div ref={revealRef} className="center reveal">
          <span className="section-label">Quem ja vendeu</span>
          <h2 className="section-title">O que nossos <em className="gold italic">clientes dizem</em></h2>
          <div className="divider"></div>
        </div>

        <div ref={gridRef} className={`reveal-stagger ${styles.testimonials}`}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.testimonial}>
              <div className={styles.stars}>{"★★★★★"}</div>
              <p className={styles.testimonialText}>{t.text}</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>{t.initial}</div>
                <div>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorCity}>{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
