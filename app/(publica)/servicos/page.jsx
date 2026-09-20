import { Shield, ShieldAlert, ShieldCheck, HeartPulse, AlertTriangle, Crosshair } from "lucide-react";

export const metadata = {
  title: "Serviços & Proteção Médica | Galaxy Corporation",
  description: "Planos de saúde táticos, resposta médica integrada e protocolos de resgate em área de operações.",
};

const PLANOS = [
  {
    id: "cobre",
    nome: "Plano Cobre",
    nivel: "Nível 01 — Cobertura Básica",
    corBorda: "border-amber-700/40",
    corGlow: "hover:border-amber-600/70",
    corBadge: "bg-amber-950/50 text-amber-500 border-amber-800/50",
    icone: Shield,
    escopo: "Garante atendimento clínico geral, curativos avançados e primeiros socorros diretamente nos postos avançados e nos hospitais da corporação.",
    resgate: "Esta categoria não cobre o envio de unidades móveis ao campo. O paciente deve se deslocar por meios próprios até uma instalação médica oficial da Galaxy Corp. para receber os cuidados.",
  },
  {
    id: "prata",
    nome: "Plano Prata",
    nivel: "Nível 02 — Resposta Intermediária",
    corBorda: "border-slate-400/40",
    corGlow: "hover:border-slate-300/70",
    corBadge: "bg-slate-900/60 text-slate-300 border-slate-700/50",
    icone: ShieldCheck,
    escopo: "Acesso prioritário a leitos de UTI, procedimentos cirúrgicos de urgência e tratamentos biomédicos padrão para recuperação acelerada.",
    resgate: "Despacho imediato de Ambulâncias Blindadas com suporte médico sob escolta da PCGC em caso de emergência em vias públicas (perímetros considerados zonas de perigo não estão cobertos nesta modalidade).",
  },
  {
    id: "ouro",
    nome: "Plano Ouro",
    nivel: "Nível 03 — Extração Tática Total",
    destaque: true,
    corBorda: "border-brand-gold/50",
    corGlow: "hover:border-brand-gold shadow-glow-gold",
    corBadge: "bg-amber-500/10 text-brand-gold border-brand-gold/40",
    icone: Crosshair,
    escopo: "Acesso irrestrito a todas as tecnologias proprietárias da corporação, tratamentos avançados de regeneração celular e prioridade absoluta em qualquer procedimento complexo.",
    resgate: "Acionamento de Resgate Aeromédico Tático de Emergência. Uma equipe de médicos de combate e soldados do ECGC será despachada via Helicóptero ou Blindado Pesado até a localização exata do sinal em minutos. A equipe possui autorização corporativa para abrir fogo e neutralizar qualquer ameaça para extrair o contratante em total segurança.",
  },
];

export default function ServicosPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Cabeçalho da Página */}
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald font-mono text-xs uppercase tracking-wider mb-4">
          <HeartPulse className="w-3.5 h-3.5" />
          <span>Departamento Médico & Suporte Operacional</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-galaxy-text mb-4">
          Planos de Saúde Táticos
        </h1>
        <p className="text-galaxy-muted text-base md:text-lg">
          A Galaxy Corporation disponibiliza três níveis de proteção e resposta médica integrada. Garanta a sua assinatura para ter direito ao suporte de nossas unidades no perímetro.
        </p>
      </div>

      {/* Grid de Planos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {PLANOS.map((plano) => {
          const IconeComp = plano.icone;
          return (
            <div
              key={plano.id}
              className={`relative bg-galaxy-surface border rounded-xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 ${plano.corBorda} ${plano.corGlow}`}
            >
              {plano.destaque && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-brand-gold text-black font-mono text-xs font-bold uppercase tracking-widest">
                  Mais Recomendado
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-block px-2.5 py-1 rounded border text-xs font-mono font-semibold ${plano.corBadge}`}>
                    {plano.nivel}
                  </span>
                  <IconeComp className="w-6 h-6 text-galaxy-muted" />
                </div>

                <h2 className="text-2xl font-bold text-white mb-6">{plano.nome}</h2>

                {/* Escopo de Serviço */}
                <div className="mb-6">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-galaxy-muted mb-2">
                    Escopo de Serviço
                  </h3>
                  <p className="text-sm text-galaxy-text/90 leading-relaxed">
                    {plano.escopo}
                  </p>
                </div>

                {/* Protocolo de Resgate */}
                <div className="pt-4 border-t border-galaxy-border/50">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-galaxy-muted mb-2">
                    Protocolo de Resgate
                  </h3>
                  <p className="text-sm text-galaxy-text/80 leading-relaxed">
                    {plano.resgate}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Seção Informativa: Para Não-Contratantes */}
      <div className="bg-galaxy-surface border border-brand-red/30 rounded-xl p-6 md:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex items-center gap-3 mb-4 text-brand-red">
          <AlertTriangle className="w-6 h-6 shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold font-mono uppercase tracking-wide">
            Diretrizes para Não-Contratantes
          </h2>
        </div>

        <p className="text-sm md:text-base text-galaxy-text/80 mb-6 leading-relaxed">
          A assistência médica regular da Galaxy Corporation é de natureza estritamente privada. Cidadãos que não possuam um plano ativo ou fundos para custeio imediato estão sujeitos às seguintes diretrizes de campo:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black/30 border border-galaxy-border p-5 rounded-lg">
            <h3 className="text-sm font-mono font-bold text-brand-red mb-2 uppercase">
              Diretriz de Omissão Padrão
            </h3>
            <p className="text-xs md:text-sm text-galaxy-muted leading-relaxed">
              As equipes de campo da PCGC, ECGC e do Departamento Médico não possuem a obrigação de realizar o resgate, triagem ou estabilização de indivíduos sem cobertura ativa.
            </p>
          </div>

          <div className="bg-black/30 border border-galaxy-border p-5 rounded-lg">
            <h3 className="text-sm font-mono font-bold text-amber-400 mb-2 uppercase">
              Cláusula de Exceção Operacional
            </h3>
            <p className="text-xs md:text-sm text-galaxy-muted leading-relaxed">
              Em situações específicas, caso uma unidade médica de combate esteja operando no perímetro e disponha de espaço vago em seus veículos ou aeronaves, o comando médico poderá, a seu exclusivo critério, recolher o indivíduo ferido e transportá-lo até a unidade hospitalar mais próxima. Caso contrário, o indivíduo será mantido no local sob a sua própria responsabilidade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

