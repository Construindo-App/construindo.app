import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Termos de Uso — Construindo',
}

export default function TermosDeUso() {
  return (
    <>
      <Nav />

      <div className="page-header">
        <div className="page-header-inner">
          <div className="page-badge">📄 Documento Legal</div>
          <h1>Termos de Uso</h1>
          <p>Versão 1.0 — 17 de março de 2026</p>
        </div>
      </div>

      <div className="doc-wrap">
        <div className="toc">
          <h2>Índice</h2>
          <ol>
            <li><Link href="#s1">Aceitação dos Termos</Link></li>
            <li><Link href="#s2">Definições</Link></li>
            <li><Link href="#s3">Cadastro e Acesso</Link></li>
            <li><Link href="#s4">Uso da Plataforma</Link></li>
            <li><Link href="#s5">Responsabilidades</Link></li>
            <li><Link href="#s6">Pagamentos e Planos</Link></li>
            <li><Link href="#s7">Propriedade Intelectual</Link></li>
            <li><Link href="#s8">Sigilo e Confidencialidade</Link></li>
            <li><Link href="#s9">Suspensão e Cancelamento</Link></li>
            <li><Link href="#s10">Alterações nos Termos</Link></li>
            <li><Link href="#s11">Legislação Aplicável e Foro</Link></li>
            <li><Link href="#s12">Contato</Link></li>
          </ol>
        </div>

        <div className="doc-section" id="s1">
          <h2>1. ACEITAÇÃO DOS TERMOS</h2>
          <p>Estes Termos de Uso (&ldquo;Termos&rdquo;) regulam o acesso e a utilização do aplicativo e plataforma web <strong>Construindo</strong> (&ldquo;Plataforma&rdquo;), desenvolvida e operada por Nobre Construtora LTDA, inscrita no CNPJ sob o n.º 54.768.794/0001-67 (&ldquo;Empresa&rdquo;).</p>
          <p>Ao realizar o cadastro, acessar ou utilizar a Plataforma, o usuário declara expressamente que leu, compreendeu e concorda com todas as condições estabelecidas nestes Termos, bem como com a Política de Privacidade da Empresa, que integra este instrumento por referência.</p>
          <div className="warning-box">
            <p>CASO NÃO CONCORDE COM QUALQUER DISPOSIÇÃO DESTES TERMOS, O USUÁRIO DEVERÁ ABSTER-SE DE UTILIZAR A PLATAFORMA.</p>
          </div>
        </div>

        <div className="doc-section" id="s2">
          <h2>2. DEFINIÇÕES</h2>
          <p>Para os fins destes Termos, os termos a seguir terão os seguintes significados:</p>
          <ul>
            <li><strong>&ldquo;Plataforma&rdquo;:</strong> sistema de gerenciamento de obras disponível em formato de aplicativo mobile (iOS e Android) e interface web, denominado <strong>Construindo</strong>;</li>
            <li><strong>&ldquo;Usuário&rdquo;:</strong> qualquer pessoa física ou jurídica que acesse e/ou utilize a Plataforma, podendo ser Construtor, Cliente ou Corretor de Imóvel, conforme definido abaixo;</li>
            <li><strong>&ldquo;Construtor&rdquo;:</strong> usuário pessoa física ou jurídica que cadastra e gerencia obras, lança informações financeiras, registra notas fiscais, cadastra vendas, acompanha pagamentos de parcelas e compartilha documentos;</li>
            <li><strong>&ldquo;Cliente&rdquo;:</strong> usuário pessoa física ou jurídica que adquiriu um imóvel junto ao Construtor e utiliza a Plataforma para acessar documentos compartilhados e acompanhar ou lançar pagamentos de parcelas;</li>
            <li><strong>&ldquo;Corretor de Imóvel&rdquo;:</strong> usuário pessoa física ou jurídica, habilitado como profissional do mercado imobiliário, que acessa informações de obras por ele comercializadas, cadastra imóveis para venda e agenda visitas;</li>
            <li><strong>&ldquo;Dados Pessoais&rdquo;:</strong> qualquer informação relacionada à pessoa natural identificada ou identificável, nos termos da Lei n.º 13.709/2018 (LGPD);</li>
            <li><strong>&ldquo;Conteúdo&rdquo;:</strong> informações, documentos, dados financeiros, imagens e demais materiais inseridos na Plataforma pelos Usuários.</li>
          </ul>
        </div>

        <div className="doc-section" id="s3">
          <h2>3. CADASTRO E ACESSO</h2>
          <h3>3.1 Elegibilidade</h3>
          <p>A utilização da Plataforma é permitida apenas para pessoas físicas maiores de 18 (dezoito) anos e pessoas jurídicas regularmente constituídas, representadas por seus legítimos responsáveis.</p>
          <h3>3.2 Dados de Cadastro</h3>
          <p>Para utilizar a Plataforma, o Usuário deverá se cadastrar fornecendo informações verdadeiras, precisas, atuais e completas. O Usuário é o único responsável pela veracidade e atualização dos dados fornecidos.</p>
          <h3>3.3 Credenciais de Acesso</h3>
          <p>O Usuário é responsável pela confidencialidade de suas credenciais de acesso (login e senha). A Empresa não solicita, em nenhuma hipótese, senhas por e-mail, telefone ou mensagens. O Usuário deve notificar imediatamente a Empresa em caso de suspeita de acesso não autorizado.</p>
          <h3>3.4 Perfis de Acesso</h3>
          <p>A Plataforma conta com três perfis distintos de acesso, com funcionalidades e permissões específicas:</p>
          <ul>
            <li><strong>Construtor:</strong> acesso completo ao gerenciamento de obras, lançamento financeiro (notas fiscais, orçamentos), cadastro de vendas, acompanhamento de parcelas e compartilhamento de documentos;</li>
            <li><strong>Cliente:</strong> acesso restrito aos documentos a ele disponibilizados pelo Construtor e ao acompanhamento e lançamento de pagamentos de parcelas de seus contratos;</li>
            <li><strong>Corretor de Imóvel:</strong> acesso ao painel de imóveis disponíveis para venda, agendamento de visitas, acompanhamento de parcelas dos clientes por ele atendidos e detalhes das obras por ele comercializadas, vedado o acesso a notas fiscais e informações financeiras detalhadas da obra.</li>
          </ul>
        </div>

        <div className="doc-section" id="s4">
          <h2>4. USO DA PLATAFORMA</h2>
          <h3>4.1 Licença de Uso</h3>
          <p>A Empresa concede ao Usuário uma licença pessoal, não exclusiva, não transferível e revogável para utilizar a Plataforma exclusivamente para os fins previstos nestes Termos.</p>
          <h3>4.2 Obrigações do Usuário</h3>
          <p>O Usuário compromete-se a:</p>
          <ul>
            <li>Utilizar a Plataforma em conformidade com a legislação vigente, incluindo a LGPD (Lei n.º 13.709/2018), o Código de Defesa do Consumidor (Lei n.º 8.078/1990) e demais normas aplicáveis;</li>
            <li>Não praticar atos que comprometam a segurança, integridade ou disponibilidade da Plataforma;</li>
            <li>Não utilizar a Plataforma para fins ilícitos, fraudulentos ou que violem direitos de terceiros;</li>
            <li>Não reproduzir, modificar, distribuir ou comercializar qualquer parte da Plataforma sem autorização prévia e expressa da Empresa;</li>
            <li>Manter atualizadas as informações de cadastro e notificar a Empresa sobre qualquer alteração relevante;</li>
            <li>Inserir apenas Conteúdo sobre o qual possui os devidos direitos ou autorizações.</li>
          </ul>
          <h3>4.3 Condutas Proibidas</h3>
          <p>Sem prejuízo do disposto na cláusula 4.2, é expressamente proibido:</p>
          <ul>
            <li>Compartilhar credenciais de acesso com terceiros não autorizados;</li>
            <li>Realizar tentativas de acesso não autorizado a recursos ou perfis distintos do seu;</li>
            <li>Inserir conteúdo falso, difamatório, ofensivo ou que viole direitos de personalidade;</li>
            <li>Utilizar mecanismos automatizados (bots, scrapers) para extração de dados da Plataforma;</li>
            <li>Interferir no funcionamento normal da Plataforma, incluindo ataques de negação de serviço.</li>
          </ul>
        </div>

        <div className="doc-section" id="s5">
          <h2>5. RESPONSABILIDADES</h2>
          <h3>5.1 Responsabilidade da Empresa</h3>
          <p>A Empresa responsabiliza-se por:</p>
          <ul>
            <li>Disponibilizar a Plataforma em condições adequadas de funcionamento, adotando medidas técnicas e organizacionais razoáveis de segurança;</li>
            <li>Tratar os Dados Pessoais dos Usuários em conformidade com a LGPD e a <Link href="/politica-de-privacidade" style={{ color: 'var(--orange)', fontWeight: 600 }}>Política de Privacidade</Link>;</li>
            <li>Notificar os Usuários sobre interrupções planejadas sempre que possível.</li>
          </ul>
          <div className="info-box">
            <p>A Empresa <strong>NÃO garante</strong> disponibilidade ininterrupta da Plataforma, sendo isenta de responsabilidade por interrupções decorrentes de casos fortuitos, força maior, falhas em redes de terceiros ou manutenção programada.</p>
          </div>
          <h3>5.2 Responsabilidade do Usuário</h3>
          <p>O Usuário é o único responsável pelo Conteúdo inserido na Plataforma, respondendo civil e penalmente por eventuais danos causados a terceiros ou à Empresa em decorrência de seu uso.</p>
          <h3>5.3 Responsabilidade por Informações Financeiras</h3>
          <p>As informações financeiras inseridas pelos Usuários Construtores são de sua exclusiva responsabilidade. A Empresa não valida, audita ou certifica dados contábeis ou fiscais inseridos na Plataforma.</p>
        </div>

        <div className="doc-section" id="s6">
          <h2>6. PAGAMENTOS E PLANOS</h2>
          <p>O acesso à Plataforma pode estar sujeito ao pagamento de assinatura ou à contratação de planos específicos, conforme condições comerciais vigentes disponibilizadas pela Empresa. Em caso de inadimplência, a Empresa poderá suspender ou cancelar o acesso do Usuário, após notificação prévia.</p>
          <p>O Usuário reconhece que as transações financeiras entre Construtor e Cliente, incluindo o registro e acompanhamento de parcelas, são operações entre as partes, não constituindo a Empresa interveniente, garantidora ou responsável por tais obrigações.</p>
        </div>

        <div className="doc-section" id="s7">
          <h2>7. PROPRIEDADE INTELECTUAL</h2>
          <p>A marca <strong>Construindo</strong>, o software, a interface, os algoritmos, os textos, as imagens e demais elementos da Plataforma são de titularidade exclusiva da Empresa e protegidos pelas leis de propriedade intelectual aplicáveis (Lei n.º 9.279/1996, Lei n.º 9.610/1998 e Lei n.º 9.609/1998).</p>
          <p>O Usuário não adquire, pelo uso da Plataforma, nenhum direito de propriedade intelectual sobre qualquer elemento da Plataforma. É vedado qualquer uso não autorizado da propriedade intelectual da Empresa.</p>
          <p>O Conteúdo inserido pelos Usuários permanece de titularidade dos respectivos Usuários, que concedem à Empresa licença não exclusiva para armazená-lo e processá-lo conforme necessário para a prestação dos serviços.</p>
        </div>

        <div className="doc-section" id="s8">
          <h2>8. SIGILO E CONFIDENCIALIDADE</h2>
          <p>As informações financeiras, documentais e contratuais acessadas por meio da Plataforma são confidenciais. O Usuário compromete-se a não divulgar, compartilhar ou utilizar tais informações para fins alheios à finalidade da Plataforma.</p>
          <p>O Corretor de Imóvel, em especial, compromete-se a utilizar as informações acessadas exclusivamente para as finalidades previstas no seu perfil, abstendo-se de divulgar dados financeiros ou contratuais do Construtor ou dos Clientes.</p>
        </div>

        <div className="doc-section" id="s9">
          <h2>9. SUSPENSÃO E CANCELAMENTO</h2>
          <p>A Empresa poderá, a seu critério, suspender ou cancelar o acesso de qualquer Usuário que viole estes Termos, sem prejuízo das medidas legais cabíveis, mediante notificação prévia sempre que possível.</p>
          <p>O Usuário poderá solicitar o cancelamento de sua conta a qualquer momento, mediante solicitação ao suporte da Empresa. Após o cancelamento, os Dados Pessoais serão tratados conforme disposto na <Link href="/politica-de-privacidade" style={{ color: 'var(--orange)', fontWeight: 600 }}>Política de Privacidade</Link>.</p>
        </div>

        <div className="doc-section" id="s10">
          <h2>10. ALTERAÇÕES NOS TERMOS</h2>
          <p>A Empresa reserva-se o direito de alterar estes Termos a qualquer momento, comprometendo-se a notificar os Usuários com antecedência mínima de 30 (trinta) dias, por e-mail ou por aviso na Plataforma, sempre que as alterações impactarem direitos dos Usuários.</p>
          <p>O uso continuado da Plataforma após a entrada em vigor das alterações implicará a aceitação dos novos Termos. Caso o Usuário discorde das alterações, deverá encerrar sua conta antes da data de vigência.</p>
        </div>

        <div className="doc-section" id="s11">
          <h2>11. LEGISLAÇÃO APLICÁVEL E FORO</h2>
          <p>Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de Cascavel/PR para dirimir quaisquer controvérsias decorrentes destes Termos, com exclusão de qualquer outro, por mais privilegiado que seja.</p>
        </div>

        <div className="doc-section" id="s12">
          <h2>12. CONTATO</h2>
          <p>Para dúvidas, solicitações ou reclamações relacionadas a estes Termos, o Usuário poderá entrar em contato com a Empresa por meio dos canais abaixo:</p>
          <div className="contact-card">
            <p>📧 <strong>E-mail:</strong> <a href="mailto:privacidade@construindo.com.br">privacidade@construindo.com.br</a></p>
            <p>📍 <strong>Endereço:</strong> Rua Maranhão 1665, Centro - Cascavel, PR</p>
            <p>📞 <strong>Telefone/WhatsApp:</strong> (45) 99147-0711</p>
          </div>
          <p style={{ marginTop: '28px', fontSize: '14px', color: 'var(--muted)' }}><strong>Construindo</strong> — Última atualização: 17 de março de 2026</p>
        </div>
      </div>

      <Footer variant="legal" />
    </>
  )
}
