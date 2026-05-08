import type { Metadata } from 'next'
import LegalNav from '@/components/LegalNav'
import Footer from '@/components/Footer'
import LgpdForm from './LgpdForm'

export const metadata: Metadata = {
  title: 'Exclusão de Dados — Construindo',
  description: 'Solicite a exclusão dos seus dados pessoais e conta no Construindo, conforme seus direitos previstos na LGPD.',
}

export default function LgpdPage() {
  return (
    <>
      <LegalNav />

      <div className="page-header">
        <div className="page-header-inner">
          <div className="page-badge">🔒 Seus Direitos · LGPD</div>
          <h1>Exclusão de Dados Pessoais</h1>
          <p>Conforme a Lei Geral de Proteção de Dados (Lei n.º 13.709/2018)</p>
        </div>
      </div>

      <div className="lgpd-wrap">
        <div className="lgpd-info">
          <h2>O que acontece quando você solicita a exclusão?</h2>
          <ul>
            <li>Sua conta será desativada imediatamente após a confirmação</li>
            <li>Todos os seus dados pessoais serão removidos de nossa base</li>
            <li>Dados financeiros obrigatórios por lei serão mantidos apenas pelo prazo legal exigido</li>
            <li>Você receberá uma confirmação por e-mail em até 15 dias úteis</li>
          </ul>
          <div className="lgpd-note">
            Dúvidas? Entre em contato pelo e-mail{' '}
            <a href="mailto:privacidade@construindo.com.br">privacidade@construindo.com.br</a>
          </div>
        </div>

        <div className="lgpd-card">
          <h2>Solicitar exclusão</h2>
          <p>Preencha o formulário abaixo para iniciar o processo de exclusão da sua conta e dados pessoais.</p>
          <LgpdForm />
        </div>
      </div>

      <Footer variant="legal" />
    </>
  )
}
