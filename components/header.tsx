"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import styles from "./header.module.css"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.headerInner}>
        <Link href="#" className={styles.logo}>
          CONVERTE <span>OURO</span>
        </Link>
        <nav className={styles.nav}>
          <a
            href="https://v0-biosite-com-links.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Avaliar Joia
          </a>
          <a
            href="https://v0-biosite-com-links.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Encontrar Loja
          </a>
        </nav>
      </div>
    </header>
  )
}
