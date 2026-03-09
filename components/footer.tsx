import styles from "./footer.module.css"

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        CONVERTE <span>OURO</span>
      </div>
      <p>© 2024 Converte Ouro. Todos os direitos reservados.</p>
    </footer>
  )
}
