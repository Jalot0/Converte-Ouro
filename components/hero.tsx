import styles from "./hero.module.css"

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}></div>
      <div className={styles.heroVisual} aria-hidden="true">
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="180" stroke="rgba(201,168,76,0.06)" strokeWidth="1" />
          <circle cx="250" cy="250" r="210" stroke="rgba(201,168,76,0.04)" strokeWidth="1" />
          <g className={styles.ringAnim}>
            <circle cx="250" cy="250" r="155" stroke="rgba(201,168,76,0.12)" strokeWidth="1" strokeDasharray="8 12" />
          </g>
          <g className={styles.ringAnim2}>
            <circle cx="250" cy="250" r="200" stroke="rgba(201,168,76,0.07)" strokeWidth="1" strokeDasharray="4 20" />
          </g>
          <polygon points="250,80 340,250 250,420 160,250" fill="none" stroke="rgba(201,168,76,0.14)" strokeWidth="1" />
          <polygon points="250,140 310,250 250,360 190,250" fill="rgba(201,168,76,0.03)" stroke="rgba(201,168,76,0.18)" strokeWidth="1" />
          <circle cx="250" cy="250" r="32" fill="rgba(201,168,76,0.08)" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
          <circle cx="250" cy="95" r="3" fill="rgba(201,168,76,0.6)" />
          <circle cx="405" cy="250" r="3" fill="rgba(201,168,76,0.6)" />
          <circle cx="250" cy="405" r="3" fill="rgba(201,168,76,0.6)" />
          <circle cx="95" cy="250" r="3" fill="rgba(201,168,76,0.6)" />
        </svg>
      </div>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot}></span>
            Avaliacao gratuita e sem compromisso
          </div>
          <h1 className={styles.heroTitle}>
            Transforme suas<br />
            <em>joias em dinheiro</em><br />
            hoje.
          </h1>
          <p className={styles.heroSub}>
            Avaliacao gratuita, pagamento imediato e atendimento seguro.
          </p>
          <ul className={styles.heroChecks}>
            <li className={styles.heroCheck}>
              <span className={styles.heroCheckIcon}>{"✓"}</span>
              Avaliacao justa e transparente
            </li>
            <li className={styles.heroCheck}>
              <span className={styles.heroCheckIcon}>{"✓"}</span>
              Pagamento na hora
            </li>
            <li className={styles.heroCheck}>
              <span className={styles.heroCheckIcon}>{"✓"}</span>
              Atendimento seguro e sigiloso
            </li>
          </ul>
          <div className={`btn-group ${styles.heroCta}`}>
            <a
              href="https://v0-biosite-com-links.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Avaliar Minha Joia
            </a>
            <a
              href="https://v0-biosite-com-links.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Encontrar Loja Mais Proxima
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
