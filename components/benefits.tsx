"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import styles from "./benefits.module.css"

const benefits = [
  {
    title: "Pagamento imediato",
    description: "Receba o valor acordado no ato da venda, sem esperas nem parcelas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    title: "Avaliacao gratuita",
    description: "Nenhum custo para voce avaliar sua joia. Sem compromisso algum.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: "Sem compromisso",
    description: "Voce avalia e decide. Nao e obrigado a vender se nao gostar da proposta.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    title: "Atendimento sigiloso",
    description: "Privacidade total. Suas informacoes e transacoes sao mantidas em sigilo.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
  {
    title: "Empresa confiavel",
    description: "Anos de mercado e milhares de clientes satisfeitos em todo o Brasil.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Equipe especializada",
    description: "Profissionais treinados para oferecer a avaliacao mais justa e precisa.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
]

export function Benefits() {
  const revealRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section id="beneficios" className={`section ${styles.section}`}>
      <div className="container">
        <div ref={revealRef} className="center reveal">
          <span className="section-label">Por que escolher a Converte Ouro</span>
          <h2 className="section-title">Nossos <em className="gold italic">beneficios</em></h2>
          <div className="divider"></div>
        </div>

        <div ref={gridRef} className={`reveal-stagger ${styles.benefitsGrid}`}>
          {benefits.map((benefit, i) => (
            <div key={i} className={styles.benefit}>
              <div className={styles.benefitIcon}>{benefit.icon}</div>
              <div className={styles.benefitText}>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
