import Link from 'next/link'
import Image from 'next/image'
// import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AnimatedBudgetCard from '@/components/AnimatedBudgetCard'
import AnimatedStats from '@/components/AnimatedStats'
import PageAnimations from '@/components/PageAnimations'

export default function Home() {
  return (
    <>
      {/* <Nav /> */}
      <PageAnimations />

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-app-icon">
            <Image src="/icon-logo.png" alt="Construindo" width={96} height={96} priority />
          </div>
          <h1 className="hero-h1">
            Sua obra.<br /><span className="grad">Sob controle.</span>
          </h1>
          <p className="hero-sub">
            Do canteiro ao escritório — cronograma, orçamento, equipes e documentos em um único app. Chega de planilha, chega de WhatsApp.
          </p>
          <div className="hero-actions">
            <Link href="#" className="btn-primary">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
              Baixar na App Store
            </Link>
            <Link href="#" className="btn-secondary">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.28.15.6.2.94.1l12.5-7.13-2.67-2.67-10.77 9.7zM.5 1.3C.18 1.62 0 2.1 0 2.72v18.56c0 .62.18 1.1.5 1.42l.08.07 10.4-10.4v-.25L.57 1.24l-.07.06zM20.33 10.52l-2.67-1.52-2.96 2.96 2.96 2.96 2.68-1.53c.77-.44.77-1.44-.01-1.87zM4.12.24L16.62 7.4l-2.67 2.67L3.18.24c.35-.1.67-.04.94.1v-.1z" fillRule="evenodd" /></svg>
              Baixar no Google Play
            </Link>
          </div>
          <p className="hero-free">Grátis para começar · Sem cartão de crédito</p>
        </div>

        {/* Phone + floating cards */}
        <div className="hero-stage">
          <div className="hf hf-left">
            <div className="hf-label">Custo total da obra</div>
            <div className="hf-val">R$ 2,4M</div>
            <div className="hf-sub">↓ 8% abaixo do orçado</div>
          </div>
          <div className="hf hf-right-top">
            <div className="hf-label">Equipe no campo hoje</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
              <div className="hf-avatars">
                <div className="hf-av">R</div>
                <div className="hf-av">C</div>
                <div className="hf-av">A</div>
                <div className="hf-av">+8</div>
              </div>
              <div style={{ fontSize: '11px', color: 'var(--dark-muted)' }}>24 ativos</div>
            </div>
          </div>
          <div className="hf hf-right-bot">
            <div className="hf-label">Progresso geral</div>
            <div className="hf-val">68%</div>
            <div className="hf-sub warn">Entrega: 15 Ago</div>
          </div>
          <div className="hero-phone-center">
            <div className="h-phone">
              <div className="h-phone-status"><span>9:41</span><span>▲ ◀ ■</span></div>
              <div className="h-phone-pill"><span><i></i></span></div>
              <div className="h-phone-body">
                <div className="hp-top">
                  <div>
                    <div className="hp-greeting">Bom dia, Rafael 👋</div>
                    <div className="hp-title">Minhas Obras</div>
                  </div>
                  <div className="hp-av">R</div>
                </div>
                <div className="hp-card">
                  <div className="hp-card-label">Residencial Jardins</div>
                  <div className="hp-card-val">68% concluído</div>
                  <div className="hp-card-sub">Entrega: 15 de agosto</div>
                  <div className="hp-bar"><div className="hp-bar-fill"></div></div>
                </div>
                <div className="hp-tasks-label">Tarefas de hoje</div>
                <div className="hp-task">
                  <div className="hp-task-dot" style={{ background: '#f59e0b' }}></div>
                  <div className="hp-task-name">Concretagem — Bloco B</div>
                  <div className="hp-task-tag" style={{ background: 'rgba(245,158,11,.15)', color: '#f59e0b' }}>Em curso</div>
                </div>
                <div className="hp-task">
                  <div className="hp-task-dot" style={{ background: '#4ade80' }}></div>
                  <div className="hp-task-name">Entrega de aço — 12t</div>
                  <div className="hp-task-tag" style={{ background: 'rgba(74,222,128,.15)', color: '#4ade80' }}>OK</div>
                </div>
                <div className="hp-task">
                  <div className="hp-task-dot" style={{ background: 'var(--orange)' }}></div>
                  <div className="hp-task-name">Visita do Engenheiro</div>
                  <div className="hp-task-tag" style={{ background: 'rgba(222,99,51,.15)', color: 'var(--orange)' }}>Hoje</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="sec why" id="por-que">
        <div className="sec-inner">
          <div className="why-header">
            <div className="eyebrow" data-anim="fade-up">Por que Construindo?</div>
            <h2 className="sec-h2" data-anim="fade-up" data-delay="1">Tudo que sua obra precisa,<br /><span className="grad">num único lugar</span></h2>
          </div>
          <div className="why-steps">
            <div className="why-step" data-anim="fade-up">
              <div className="why-step-body">
                <div className="why-step-num">01 <span>/ 03</span></div>
                <h3>Cronograma em tempo real</h3>
                <p>Visualize cada etapa, defina dependências e receba alertas de atraso antes que o problema escale.</p>
              </div>
              <div className="why-step-visual why-step-visual--1">📅</div>
            </div>
            <div className="why-step" data-anim="fade-up" data-delay="1">
              <div className="why-step-body">
                <div className="why-step-num">02 <span>/ 03</span></div>
                <h3>Orçado vs. realizado</h3>
                <p>Compare custos planejados e executados em tempo real. Identifique desvios no segundo em que acontecem.</p>
              </div>
              <div className="why-step-visual why-step-visual--2">💰</div>
            </div>
            <div className="why-step" data-anim="fade-up" data-delay="2">
              <div className="why-step-body">
                <div className="why-step-num">03 <span>/ 03</span></div>
                <h3>Equipes e fornecedores</h3>
                <p>Gerencie presença, produtividade e pagamentos de subempreiteiros direto do app.</p>
              </div>
              <div className="why-step-visual why-step-visual--3">👷</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE DARK */}
      <section className="sec feat-dark">
        <div className="feat-dark-inner">
          <div data-anim="fade-left">
            <div className="eyebrow">Acompanhamento de tarefas</div>
            <h2 className="sec-h2">Cada equipe sabe<br />exatamente o que fazer</h2>
            <p className="sec-sub" style={{ color: 'var(--dark-muted)' }}>Distribua tarefas por etapa, perfil e data. Cada profissional vê só o que lhe compete — sem ruído, sem confusão.</p>
            <div className="feat-list">
              <div className="feat-item">
                <div className="feat-check">✓</div>
                <div>
                  <div className="feat-item-title">Atribuição por perfil</div>
                  <div className="feat-item-desc">Construtores, engenheiros, mestres e subempreiteiros com acessos distintos e notificações sob medida.</div>
                </div>
              </div>
              <div className="feat-item">
                <div className="feat-check">✓</div>
                <div>
                  <div className="feat-item-title">Status em tempo real</div>
                  <div className="feat-item-desc">Pendente, em andamento, concluído — atualizado no campo pelo celular, visível no escritório na hora.</div>
                </div>
              </div>
              <div className="feat-item">
                <div className="feat-check">✓</div>
                <div>
                  <div className="feat-item-title">Alertas inteligentes</div>
                  <div className="feat-item-desc">O sistema identifica gargalos e avisa com antecedência antes que o atraso afete o prazo de entrega.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="dark-phone" data-anim="fade-right">
            <div className="dp-title">Tarefas da Semana — Bloco A</div>
            <div className="dp-task">
              <div className="dp-dot" style={{ background: '#4ade80' }}></div>
              <div className="dp-name">Concretagem laje — Pav. 3</div>
              <div className="dp-badge" style={{ background: 'rgba(74,222,128,.15)', color: '#4ade80' }}>Concluído</div>
            </div>
            <div className="dp-task">
              <div className="dp-dot" style={{ background: '#f59e0b' }}></div>
              <div className="dp-name">Instalação hidráulica</div>
              <div className="dp-badge" style={{ background: 'rgba(245,158,11,.15)', color: '#f59e0b' }}>Em curso</div>
              <div className="dp-pct">72%</div>
            </div>
            <div className="dp-task">
              <div className="dp-dot" style={{ background: 'var(--orange)' }}></div>
              <div className="dp-name">Fiação elétrica — Pav. 3</div>
              <div className="dp-badge" style={{ background: 'rgba(222,99,51,.15)', color: 'var(--orange)' }}>Hoje</div>
            </div>
            <div className="dp-task">
              <div className="dp-dot" style={{ background: '#6B7280' }}></div>
              <div className="dp-name">Reboco externo</div>
              <div className="dp-badge" style={{ background: 'rgba(107,114,128,.15)', color: '#6B7280' }}>Aguardando</div>
            </div>
            <div className="dp-task">
              <div className="dp-dot" style={{ background: '#3B82F6' }}></div>
              <div className="dp-name">Acabamento interno</div>
              <div className="dp-badge" style={{ background: 'rgba(59,130,246,.15)', color: '#3B82F6' }}>Planejado</div>
              <div className="dp-pct">0%</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE LIGHT */}
      <section className="sec feat-light">
        <div className="feat-light-inner">
          <AnimatedBudgetCard />
          <div data-anim="fade-right">
            <div className="eyebrow">Controle financeiro</div>
            <h2 className="sec-h2">Orçamento e custos em tempo real</h2>
            <p className="sec-sub">Registre notas fiscais, aprovações e pagamentos. Veja orçado vs. realizado por categoria em tempo real, antes que o desvio vire problema.</p>
            <div className="feat-list" style={{ marginTop: '28px' }}>
              <div className="feat-item">
                <div className="feat-check" style={{ background: 'var(--orange-lt)' }}>✓</div>
                <div>
                  <div className="feat-item-title" style={{ color: 'var(--text)' }}>Notas fiscais digitais</div>
                  <div className="feat-item-desc" style={{ color: 'var(--muted)' }}>Importe NF-e com um toque. Categorização automática por tipo de custo e obra.</div>
                </div>
              </div>
              <div className="feat-item">
                <div className="feat-check" style={{ background: 'var(--orange-lt)' }}>✓</div>
                <div>
                  <div className="feat-item-title" style={{ color: 'var(--text)' }}>Aprovação de pagamentos</div>
                  <div className="feat-item-desc" style={{ color: 'var(--muted)' }}>Fluxo de aprovação com alçadas por valor. Histórico auditável de cada liberação.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-sec">
        <AnimatedStats />
      </section>

      {/* CLIENT PORTAL */}
      <section className="sec client-feat" id="como-funciona">
        <div className="sec-inner">
          <div className="cf-header">
            <div className="eyebrow" data-anim="fade-up">Portal do cliente</div>
            <h2 className="sec-h2" data-anim="fade-up" data-delay="1">Transparência total<br /><span className="grad">na palma da mão</span></h2>
            <p className="sec-sub cf-sub" data-anim="fade-up" data-delay="2">Seus clientes acompanham a obra em tempo real — sem telefonemas, sem WhatsApp. Tudo num portal dedicado, simples e seguro.</p>
          </div>
          <div className="cf-grid">

            {/* Card 1: Diário de obra */}
            <div className="cf-card" data-anim="scale-up" data-delay="1">
              <div className="cf-snap cf-snap-diary">
                <div className="diary-scene">
                  <svg className="diary-svg" viewBox="0 0 430 292" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 27 131 C 60 95 85 65 110 65 C 150 65 200 135 242 145 C 285 155 340 210 362 216 C 370 240 350 258 321 258" stroke="#C8BFB0" strokeWidth="1.5" strokeDasharray="6 5" strokeLinecap="round"/>
                  </svg>
                  <Image src="/diary/icon-orange.png" alt="" width={46} height={46} className="dicon dicon-orange" style={{width:46,height:46}} />
                  <Image src="/diary/photo1.png" alt="" width={197} height={183} className="dphoto dphoto-1" style={{width:120,height:'auto'}} />
                  <Image src="/diary/photo2.png" alt="" width={197} height={183} className="dphoto dphoto-2" style={{width:120,height:'auto'}} />
                  <Image src="/diary/photo3.png" alt="" width={197} height={183} className="dphoto dphoto-3" style={{width:120,height:'auto'}} />
                  <Image src="/diary/icon-green.png" alt="" width={46} height={46} className="dicon dicon-green" style={{width:46,height:46}} />
                </div>
              </div>
              <div className="cf-content">
                <h3>Diário de obra</h3>
                <p>Registros diários com fotos, vídeos e anotações. O cliente acompanha o avanço real sem precisar visitar o canteiro.</p>
              </div>
            </div>

            {/* Card 2: Gestão de pagamentos */}
            <div className="cf-card" data-anim="scale-up" data-delay="2">
              <div className="cf-snap cf-snap-pay">
                <div className="cfs-profile">
                  <div className="cfs-avatar">M</div>
                  <div>
                    <div className="cfs-name">Marcos Antônio Frederico</div>
                    <div className="cfs-role">Comprador</div>
                  </div>
                </div>
                <div className="cfs-table">
                  <div className="cfs-tr"><span>Valor total</span><span>R$300.000,00</span></div>
                  <div className="cfs-tr"><span>Entrada</span><span>R$60.000,00</span></div>
                  <div className="cfs-tr"><span>Sinal</span><span>R$1.271,38</span></div>
                </div>
                <div className="cfs-pay-title">Pagamentos 3/12</div>
                <div className="cfs-prog"><div className="cfs-prog-fill"></div></div>
                <div className="cfs-plist">
                  <div className="cfs-prow">
                    <div className="cfs-pcheck green">✓</div>
                    <div className="cfs-pinfo"><div className="cfs-pdate">5 Out 2025</div><div className="cfs-psub">Parcela 2</div></div>
                    <div className="cfs-pamt">R$10.000</div>
                  </div>
                  <div className="cfs-prow">
                    <div className="cfs-pcheck amber">⏱</div>
                    <div className="cfs-pinfo"><div className="cfs-pdate">5 Nov 2025</div><div className="cfs-psub">Parcela 3</div></div>
                    <div className="cfs-pamt">R$1.271</div>
                  </div>
                  <div className="cfs-prow muted">
                    <div className="cfs-pcheck grey"></div>
                    <div className="cfs-pinfo"><div className="cfs-pdate">5 Dez 2025</div><div className="cfs-psub">Parcela 4</div></div>
                    <div className="cfs-pamt">R$7.500</div>
                  </div>
                </div>
              </div>
              <div className="cf-content">
                <h3>Gestão de pagamentos</h3>
                <p>Cronograma financeiro, boletos e comprovantes organizados. Histórico completo de cada parcela, acessível a qualquer hora.</p>
              </div>
            </div>

            {/* Card 3: Gestão de documentos */}
            <div className="cf-card" data-anim="scale-up" data-delay="3">
              <div className="cf-snap cf-snap-docs">
                <div className="cfs-app-header">
                  <span className="cfs-back">←</span>
                  <span className="cfs-app-icon">🏠</span>
                  <span className="cfs-app-title">Casa JF</span>
                </div>
                <div className="cfs-doc-title">Documentos da Obra</div>
                <div className="cfs-tabs">
                  <div className="cfs-tab active">Compartilhados</div>
                  <div className="cfs-tab">Outros</div>
                </div>
                <div className="cfs-drow">
                  <div className="cfs-dicon"></div>
                  <div className="cfs-dinfo"><div className="cfs-dname">Contrato de Compra</div><div className="cfs-ddate">Adicionado 24/08/2023</div></div>
                  <div className="cfs-toggle off"><span /></div>
                </div>
                <div className="cfs-drow">
                  <div className="cfs-dicon"></div>
                  <div className="cfs-dinfo"><div className="cfs-dname">Projeto Arquitetônico</div><div className="cfs-ddate">Adicionado 24/08/2023</div></div>
                  <div className="cfs-toggle off"><span /></div>
                </div>
                <div className="cfs-drow">
                  <div className="cfs-dicon"></div>
                  <div className="cfs-dinfo"><div className="cfs-dname">Matrícula da Imóvel</div><div className="cfs-ddate">Adicionado 24/08/2023</div></div>
                  <div className="cfs-toggle on"><span /></div>
                </div>
                <div className="cfs-drow">
                  <div className="cfs-dicon"></div>
                  <div className="cfs-dinfo"><div className="cfs-dname">Projeto Arq. Prefeitura</div><div className="cfs-ddate">Adicionado 24/08/2023</div></div>
                  <div className="cfs-toggle on"><span /></div>
                </div>
              </div>
              <div className="cf-content">
                <h3>Gestão de documentos</h3>
                <p>Contratos, plantas, alvarás e relatórios técnicos sempre disponíveis. Sem e-mail perdido, sem pasta física.</p>
              </div>
            </div>

            {/* Card 4: Suporte técnico */}
            <div className="cf-card" data-anim="scale-up" data-delay="4">
              <div className="cf-snap cf-snap-chat">
                <div className="cfs-chat-header">
                  <div className="cfs-avatar orange">B</div>
                  <div>
                    <div className="cfs-name">Bella Morada Construtora</div>
                    <div className="cfs-online">● Online agora</div>
                  </div>
                </div>
                <div className="cfs-messages">
                  <div className="cfs-msg recv">Olá! Como posso ajudar?</div>
                  <div className="cfs-msg sent">Qual a previsão para a laje?</div>
                  <div className="cfs-msg recv">Previsto para 15 de agosto. Já está no cronograma da obra.</div>
                  <div className="cfs-msg sent">Ótimo, obrigado! 👍</div>
                  <div className="cfs-msg recv">Qualquer dúvida, estamos aqui!</div>
                </div>
                <div className="cfs-chat-input">
                  <div className="cfs-input-placeholder">Enviar mensagem...</div>
                  <div className="cfs-send">→</div>
                </div>
              </div>
              <div className="cf-content">
                <h3>Suporte técnico</h3>
                <p>Canal direto com a equipe da construtora. Dúvidas e ocorrências registradas com histórico e resolução rastreável.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testi-sec" id="depoimentos">
        <div className="testi-header">
          <div>
            <div className="eyebrow" data-anim="fade-up">Depoimentos</div>
            <h2 className="sec-h2" data-anim="fade-up" data-delay="1">Quem usa,<br /><span className="grad">não volta atrás</span></h2>
          </div>
          <p data-anim="fade-up" data-delay="2" style={{ fontSize: '16px', color: 'var(--muted)', maxWidth: '340px', lineHeight: '1.6' }}>Construtoras de todo o Brasil entregando obras no prazo e no orçamento.</p>
        </div>
        <div className="testi-grid">
          <div className="testi-card" data-anim="scale-up" data-delay="1">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-quote">&ldquo;Antes usávamos planilhas e e-mail para tudo. Hoje qualquer sócio acessa o andamento de qualquer obra pelo celular. A visibilidade é impressionante.&rdquo;</p>
            <div className="testi-author">
              <div className="testi-av" style={{ background: 'var(--orange)' }}>C</div>
              <div>
                <div className="testi-name">Carlos Mendonça</div>
                <div className="testi-role">Diretor, Construtora Mendonça</div>
              </div>
            </div>
          </div>
          <div className="testi-card" data-anim="scale-up" data-delay="2">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-quote">&ldquo;Reduzimos desvios de orçamento em 28% no primeiro trimestre. O alerta de desvio em tempo real mudou nossa forma de gerir contratos para sempre.&rdquo;</p>
            <div className="testi-author">
              <div className="testi-av" style={{ background: '#10B981' }}>A</div>
              <div>
                <div className="testi-name">Ana Lima</div>
                <div className="testi-role">Engenheira de Custos, Tenda</div>
              </div>
            </div>
          </div>
          <div className="testi-card" data-anim="scale-up" data-delay="3">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-quote">&ldquo;O diário de obra digital resolveu brigas históricas sobre o que foi ou não executado. Foto, data e responsável registrados para cada evento da obra.&rdquo;</p>
            <div className="testi-author">
              <div className="testi-av" style={{ background: '#8B5CF6' }}>M</div>
              <div>
                <div className="testi-name">Marcelo Ramos</div>
                <div className="testi-role">Engenheiro de Campo, EZTec</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <svg className="final-cta-house" viewBox="0 0 500 460" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          {/* Main walls + roof */}
          <path className="h-outline" pathLength="1" d="M 55 420 L 445 420 L 445 228 L 250 62 L 55 228 Z" />
          {/* Chimney */}
          <path className="h-chimney" pathLength="1" d="M 315 122 L 315 74 L 362 74 L 362 150" />
          {/* Door */}
          <path className="h-door" pathLength="1" d="M 198 420 L 198 308 L 302 308 L 302 420" />
          {/* Left window */}
          <path className="h-win-l" pathLength="1" d="M 88 262 L 88 332 L 172 332 L 172 262 Z" />
          {/* Right window */}
          <path className="h-win-r" pathLength="1" d="M 328 262 L 328 332 L 412 332 L 412 262 Z" />
        </svg>
        <div className="final-cta-inner" data-anim="fade-up">
          <h2>Comece a gerir suas obras<br /><span className="grad">do jeito certo.</span></h2>
          <p>Chega de planilha. Sua obra organizada ainda hoje, de graça.</p>
          <div className="final-btns">
            <Link href="#" className="btn-primary" style={{ fontSize: '16px', padding: '16px 36px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
              Baixar na App Store
            </Link>
            <Link href="#" className="btn-secondary" style={{ fontSize: '16px', padding: '16px 36px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.28.15.6.2.94.1l12.5-7.13-2.67-2.67-10.77 9.7zM.5 1.3C.18 1.62 0 2.1 0 2.72v18.56c0 .62.18 1.1.5 1.42l.08.07 10.4-10.4v-.25L.57 1.24l-.07.06zM20.33 10.52l-2.67-1.52-2.96 2.96 2.96 2.96 2.68-1.53c.77-.44.77-1.44-.01-1.87zM4.12.24L16.62 7.4l-2.67 2.67L3.18.24c.35-.1.67-.04.94.1v-.1z" fillRule="evenodd" /></svg>
              Baixar no Google Play
            </Link>
          </div>
        </div>
      </section>

      <Footer variant="main" />
    </>
  )
}
