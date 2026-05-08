'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Nav() {
  const [visible, setVisible] = useState(true)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (y < 80) {
        setVisible(true)
      } else {
        setVisible(y < lastY.current)
      }
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`main-nav${visible ? '' : ' nav-hidden'}`}>
      <Link href="/" className="nav-logo">
        Constru<span>indo</span>
      </Link>
      <div className="nav-pill-group">
        <Link href="/#por-que">Por que Construindo?</Link>
        <Link href="/#como-funciona">Como funciona</Link>
        <Link href="/#depoimentos">Clientes</Link>
        <Link href="/#precos">Preços</Link>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link href="/" className="nav-cta">Baixar App</Link>
      </div>
    </nav>
  )
}
