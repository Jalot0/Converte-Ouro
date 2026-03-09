"use client"

import { useState } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import styles from "./faq.module.css"

const faqs = [
  {
    question: "Preciso agendar a avaliacao?",
    answer: "Nao e necessario agendamento. Voce pode visitar nossa loja no horario de funcionamento sem aviso previo. Mas se preferir, pode entrar em contato pelo WhatsApp para agendar um horario especifico.",
  },
  {
    question: "A avaliacao e gratuita?",
    answer: "Sim, 100% gratuita! Nossa avaliacao nao tem nenhum custo para voce. Levamos sua joia, avaliamos e apresentamos uma proposta — sem cobrar nada por isso.",
  },
  {
    question: "Voces compram ouro quebrado?",
    answer: "Sim! Compramos ouro em qualquer estado: quebrado, dobrado, sem par, fora de moda. O que importa e o teor do ouro, nao a aparencia da peca.",
  },
  {
    question: "O pagamento e feito na hora?",
    answer: "Sim! Se voce aceitar nossa proposta, o pagamento e realizado imediatamente. Sem espera, sem promessas futuras.",
  },
  {
    question: "Sou obrigado a vender apos a avaliacao?",
    answer: "Nao. A avaliacao nao gera nenhuma obrigacao de venda. Voce pode recusar a proposta e levar sua joia de volta sem nenhum problema.",
  },
  {
    question: "Como saber se minha joia e ouro?",
    answer: 'Geralmente as joias de ouro tem marcacoes como "750" (18k), "585" (14k) ou "375" (9k) gravadas. Mas se voce tiver duvida, traga a peca — nossa equipe faz a verificacao na hora e sem custo.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const revealRef = useScrollReveal()
  const listRef = useScrollReveal()

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section">
      <div className="container">
        <div ref={revealRef} className="center reveal">
          <span className="section-label">Duvidas frequentes</span>
          <h2 className="section-title">Perguntas <em className="gold italic">frequentes</em></h2>
          <div className="divider"></div>
        </div>

        <div ref={listRef} className={`reveal ${styles.faqList}`}>
          {faqs.map((faq, i) => (
            <div key={i} className={`${styles.faqItem} ${openIndex === i ? styles.open : ""}`}>
              <button
                className={styles.faqQuestion}
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                {faq.question}
                <span className={styles.faqIcon}>+</span>
              </button>
              <div className={styles.faqAnswer}>
                <div className={styles.faqAnswerInner}>{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
