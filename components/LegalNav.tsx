import Link from 'next/link'

export default function LegalNav() {
  return (
    <nav className="legal-nav">
      <Link href="/" className="legal-logo">Construindo</Link>
      <div className="nav-pill-group">
        <Link href="/">Início</Link>
        <Link href="/#sobre">Sobre Nós</Link>
        <Link href="/#por-que">Recursos</Link>
        <Link href="/#depoimentos">Contato</Link>
      </div>
      <Link href="#" className="nav-download">Baixar App</Link>
    </nav>
  )
}
