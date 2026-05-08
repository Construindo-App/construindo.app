import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="main-nav">
      <Link href="/" className="nav-logo">
        Constru<span>indo</span>
      </Link>
      <ul className="nav-links">
        <li><Link href="/#por-que">Por que Construindo?</Link></li>
        <li><Link href="/#como-funciona">Como funciona</Link></li>
        <li><Link href="/#depoimentos">Clientes</Link></li>
        <li><Link href="/#precos">Preços</Link></li>
      </ul>
      <div className="nav-right">
        <Link href="#" className="nav-login">Entrar</Link>
        <Link href="#" className="nav-cta">Baixar grátis</Link>
      </div>
    </nav>
  )
}
