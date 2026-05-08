'use client'

import { useRef, useState, useTransition } from 'react'
import { submitDeletionRequest } from './actions'

export default function LgpdForm() {
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<{ error?: string; success?: boolean } | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    startTransition(async () => {
      const res = await submitDeletionRequest(data)
      setResult(res)
      if (res.success) formRef.current?.reset()
    })
  }

  if (result?.success) {
    return (
      <div className="lgpd-success">
        <div className="lgpd-success-icon">✓</div>
        <h2>Solicitação recebida</h2>
        <p>Recebemos seu pedido de exclusão de dados. Entraremos em contato pelo e-mail informado em até <strong>15 dias úteis</strong> para confirmar a exclusão da sua conta e dados pessoais, conforme exigido pela LGPD.</p>
      </div>
    )
  }

  return (
    <form className="lgpd-form" ref={formRef} onSubmit={handleSubmit}>
      <div className="lgpd-field">
        <label htmlFor="full_name">Nome completo</label>
        <input
          id="full_name"
          name="full_name"
          type="text"
          placeholder="Seu nome completo"
          required
          disabled={isPending}
        />
      </div>

      <div className="lgpd-field">
        <label htmlFor="email">E-mail da conta</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="email@exemplo.com"
          required
          disabled={isPending}
        />
      </div>

      <label className="lgpd-checkbox">
        <input name="confirmed" type="checkbox" required disabled={isPending} />
        <span>
          Entendo que ao solicitar a exclusão, <strong>todos os meus dados e minha conta serão permanentemente removidos</strong> do Construindo e essa ação não poderá ser desfeita.
        </span>
      </label>

      {result?.error && (
        <div className="lgpd-error">{result.error}</div>
      )}

      <button type="submit" className="lgpd-submit" disabled={isPending}>
        {isPending ? 'Enviando...' : 'Solicitar exclusão de dados'}
      </button>
    </form>
  )
}
