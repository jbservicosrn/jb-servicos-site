// Ilustrações da página "Como funciona o JB Gestão", montadas em HTML no
// visual do painel. Os dados são fictícios de propósito: nada de print do
// sistema real, para não expor moradores nem ocorrências de verdade.

function Balao({ de, children }: { de: "porteiro" | "sistema" | "sindico"; children: React.ReactNode }) {
  const enviado = de !== "sistema";
  return (
    <div className={`flex ${enviado ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-xl px-3 py-2 text-[13px] leading-snug shadow-sm ${
          enviado ? "rounded-tr-sm bg-[#d9fdd3] text-jb-ink" : "rounded-tl-sm bg-white text-jb-ink"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function Celular({ titulo, subtitulo, children }: { titulo: string; subtitulo: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[1.75rem] border-[6px] border-jb-navy-950 bg-[#efeae2] shadow-jb">
      <div className="flex items-center gap-3 bg-jb-navy px-4 py-3 text-white">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-jb-orange font-display text-xs font-extrabold">
          JB
        </div>
        <div>
          <p className="text-sm font-semibold">{titulo}</p>
          <p className="text-[11px] text-white/60">{subtitulo}</p>
        </div>
      </div>
      <div className="space-y-2.5 p-3">{children}</div>
    </div>
  );
}

export function ConversaPortaria() {
  return (
    <Celular titulo="JB Gestão Condominial" subtitulo="Portaria · Turno diurno">
      <Balao de="porteiro">
        <div className="mb-1.5 flex h-20 items-center justify-center rounded-lg bg-jb-navy-100 text-[11px] text-jb-ink-soft">
          📷 foto do portão
        </div>
        O portão da garagem travou aberto, os carros não conseguem sair
      </Balao>
      <Balao de="sistema">
        ✅ Ocorrência registrada
        <br />
        <strong className="font-mono text-[12px]">OC-20261002-0012</strong>
        <br />
        Garagem · Prioridade <strong>alta</strong> · foto anexada
      </Balao>
    </Celular>
  );
}

// Mesma encomenda do vídeo da página (etiqueta fictícia, Condomínio Demonstração).
export function ConversaEncomenda() {
  return (
    <Celular titulo="JB Gestão Condominial" subtitulo="Portaria · Turno diurno">
      <Balao de="porteiro">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/etiqueta-encomenda-exemplo.jpg"
          alt="Foto da etiqueta da encomenda (fictícia)"
          className="w-44 rounded-lg"
          loading="lazy"
        />
      </Balao>
      <Balao de="sistema">
        📦 Li a etiqueta:
        <br />
        Destinatário: <strong>Sofia Martins</strong>
        <br />
        Unidade: Quadra B - Casa 5
        <br />
        Remetente: Livraria Página Nova
        <br />
        Rastreio: <strong className="font-mono text-[12px]">QH548322698BR</strong>
        <br />
        <br />
        Registrar?
        <br />
        <strong>1</strong> Sim, registrar · <strong>2</strong> Corrigir · <strong>0</strong> Cancelar
      </Balao>
      <Balao de="porteiro">1</Balao>
      <Balao de="sistema">
        ✅ Encomenda registrada
        <br />
        <strong className="font-mono text-[12px]">EN-20261004-0075</strong>
        <br />
        📲 Aviso enviado para Sofia Martins (destinatária)
      </Balao>
    </Celular>
  );
}

export function AvisoMorador() {
  return (
    <Celular titulo="JB Gestão Condominial" subtitulo="Mensagem para a moradora">
      <Balao de="sistema">
        Olá, Sofia! 📦
        <br />
        Chegou uma encomenda para você (Quadra B · Casa 5).
        <br />
        Ela está na portaria e pode ser retirada quando for melhor para você.
        <br />
        <span className="text-[11px] text-jb-ink-soft">Código: EN-20261004-0075</span>
      </Balao>
      <Balao de="sindico">Obrigada! Passo aí à noite 🙏</Balao>
    </Celular>
  );
}

export function ConversaSindico() {
  return (
    <Celular titulo="JB Gestão Condominial" subtitulo="Síndica">
      <Balao de="sindico">Me mostre as ocorrências da garagem desta semana</Balao>
      <Balao de="sistema">
        Encontrei 3 ocorrências na garagem desta semana:
        <br />
        <span className="font-mono text-[12px]">• OC-20261002-0012</span> portão travado (alta)
        <br />
        <span className="font-mono text-[12px]">• OC-20260930-0009</span> lâmpada queimada
        <br />
        <span className="font-mono text-[12px]">• OC-20260929-0004</span> vaga ocupada
        <br />
        <span className="text-jb-navy-700 underline">Ver fotos e detalhes</span>
      </Balao>
    </Celular>
  );
}

export function CartaoOcorrencia() {
  return (
    <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-jb-line bg-white shadow-jb">
      <div className="h-1.5 bg-gradient-to-r from-jb-navy via-jb-navy to-jb-orange" />
      <div className="p-5">
        <div className="flex items-center justify-between">
          <p className="font-mono text-sm font-medium text-jb-navy">OC-20261002-0012</p>
          <span className="rounded-full bg-[#fbe1dd] px-2.5 py-0.5 text-xs font-semibold text-[#c8422f]">
            Alta
          </span>
        </div>
        <p className="mt-3 font-display font-bold text-jb-ink">Portão da garagem travado aberto</p>
        <dl className="mt-4 grid grid-cols-2 gap-3 text-xs">
          {[
            ["Categoria", "Manutenção"],
            ["Local", "Garagem"],
            ["Registrado", "02/10 · 09:14"],
            ["Prazo", "até 03/10 · 09:14"],
          ].map(([rotulo, valor]) => (
            <div key={rotulo}>
              <dt className="text-jb-ink-soft">{rotulo}</dt>
              <dd className="font-semibold text-jb-ink">{valor}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-4 flex gap-2">
          <div className="flex h-12 w-16 items-center justify-center rounded-md bg-jb-navy-100 text-[10px] text-jb-ink-soft">
            📷 foto
          </div>
          <div className="flex-1 rounded-md bg-jb-ground p-2 text-[11px] text-jb-ink-soft">
            <strong className="text-jb-navy">Sugestão da IA:</strong> acionar a empresa de manutenção do portão e
            registrar na agenda.
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs">
          <span className="rounded-full bg-[#fbedd2] px-2.5 py-0.5 font-semibold text-[#b4780a]">Em andamento</span>
          <span className="text-jb-ink-soft">· histórico completo de alterações</span>
        </div>
      </div>
    </div>
  );
}

export function PainelInicio() {
  const barras = [35, 55, 40, 70, 50, 85, 60];
  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-jb-line bg-jb-ground shadow-jb">
      <div className="flex items-center gap-1.5 border-b border-jb-line bg-white px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-jb-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-jb-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-jb-line" />
        <span className="ml-3 truncate text-[11px] text-jb-ink-soft">jb-gestao-cond.jbservicosrn.com.br</span>
      </div>
      <div className="p-4">
        <p className="font-display text-sm font-bold text-jb-navy">Bom dia, síndica!</p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            ["Ocorrências abertas", "5", "text-jb-navy"],
            ["Prazo estourado", "1", "text-[#c8422f]"],
            ["Encomendas aguardando", "12", "text-jb-orange-600"],
          ].map(([rotulo, valor, cor]) => (
            <div key={rotulo} className="rounded-lg bg-white p-2.5 shadow-sm">
              <p className={`font-display text-xl font-extrabold ${cor}`}>{valor}</p>
              <p className="text-[10px] leading-tight text-jb-ink-soft">{rotulo}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg bg-white p-3 shadow-sm">
          <p className="text-[11px] font-semibold text-jb-ink-soft">Ocorrências — últimos 7 dias</p>
          <div className="mt-2 flex h-20 items-end gap-2">
            {barras.map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t ${i === barras.length - 2 ? "bg-jb-orange" : "bg-jb-navy-700"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="mt-3 rounded-lg bg-jb-navy p-3 text-[11px] text-white/90">
          <strong className="text-jb-orange">Assistente JB:</strong> esta semana a garagem concentrou 3 das 8
          ocorrências. Vale revisar a manutenção do portão.
        </div>
      </div>
    </div>
  );
}
