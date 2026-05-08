'use client'

import { useEffect, useRef, useState } from 'react'

function useCountUp(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(eased * target))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, target, duration])
  return value
}

const rows = [
  { label: 'Mão de obra',  color: 'var(--orange)', pct: 42, val: 524 },
  { label: 'Materiais',    color: '#3B82F6',        pct: 35, val: 437 },
  { label: 'Equipamentos', color: '#10B981',         pct: 15, val: 187 },
  { label: 'Outros',       color: '#8B5CF6',         pct: 8,  val: 100 },
]

function BudgetRow({
  row, active, delay,
}: {
  row: (typeof rows)[0]
  active: boolean
  delay: number
}) {
  const pct = useCountUp(row.pct, 1100 + delay, active)
  const val = useCountUp(row.val, 1300 + delay, active)

  return (
    <div
      className="bc-row bc-row-anim"
      style={{ animationDelay: `${delay}ms` } as React.CSSProperties}
    >
      <div className="bc-row-label">
        <div className="bc-dot" style={{ background: row.color }} />
        {row.label}
      </div>
      <div className="bc-row-right">
        <div className="bc-bar-wrap">
          <div
            className="bc-bar-fill"
            style={{
              background: row.color,
              width: active ? `${row.pct * 2}%` : '0%',
              transitionDelay: `${delay}ms`,
            }}
          />
        </div>
        <div className="bc-row-pct">{pct}%</div>
        <div className="bc-row-val">R$ {val}k</div>
      </div>
    </div>
  )
}

export default function AnimatedBudgetCard() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setActive(true); observer.disconnect() }
      },
      { threshold: 0.35 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const total = useCountUp(1248000, 1600, active)

  return (
    <div ref={ref} className={`budget-card-wrap${active ? ' bc-visible' : ''}`}>
      <div className="bc-header">
        <div className="bc-title">Resumo Financeiro</div>
        <div className="bc-badge">Atualizado agora</div>
      </div>
      <div className="bc-total">
        R$ {total.toLocaleString('pt-BR')}
      </div>
      <div className="bc-sub">Custo total realizado · Orçado: R$ 1.300.000</div>
      {rows.map((row, i) => (
        <BudgetRow key={row.label} row={row} active={active} delay={i * 100} />
      ))}
    </div>
  )
}
