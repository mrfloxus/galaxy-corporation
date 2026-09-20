import { 
  Building2, 
  ShieldCheck, 
  Cpu, 
  Activity, 
  Briefcase, 
  Eye, 
  Lock, 
  Award,
  Zap,
  CheckCircle2
} from "lucide-react";

export const metadata = {
  title: "Quem Somos | Galaxy Corporation",
  description: "Conheça a história, a soberania institucional e a estrutura estratégica da Galaxy Corporation.",
};

export default function QuemSomosPage() {
  const departments = [
    {
      icon: Briefcase,
      title: "Departamento Administrativo",
      subtitle: "A mente financeira e estratégica",
      description:
        "Responsável pela governança legal, contratos de mercado, folha de pagamento, gestão global e pela manutenção da nossa impecável imagem institucional.",
      color: "border-brand-blue/40 bg-brand-blue/5 text-brand-blue",
    },
    {
      icon: Zap,
      title: "Departamento Logístico",
      subtitle: "A espinha dorsal da cadeia de suprimentos",
      description:
        "Coordena o tráfego de frotas, armazenamento de recursos, distribuição de insumos laboratoriais e o planejamento seguro de comboios corporativos.",
      color: "border-brand-gold/40 bg-brand-gold/5 text-brand-gold",
    },
    {
      icon: Cpu,
      title: "Departamento Científico",
      subtitle: "O motor da inovação humana",
      description:
        "Especializado em Biotecnologia, Bioquímica, Biomedicina, Biologia e Bioinformática. Atua no mapeamento genético e em tecnologias que ditam os rumos da ciência global.",
      color: "border-brand-cyan/40 bg-brand-cyan/5 text-brand-cyan",
    },
    {
      icon: Activity,
      title: "Departamento Médico",
      subtitle: "A linha de frente no cuidado e resgate",
      description:
        "Opera nossa infraestrutura hospitalar privada e gerencia os exclusivos Planos de Saúde Táticos, oferecendo desde atendimento clínico até resgates blindados.",
      color: "border-brand-emerald/40 bg-brand-emerald/5 text-brand-emerald",
    },
    {
      icon: Eye,
      title: "Departamento de Inteligência",
      subtitle: "Os olhos e ouvidos da corporação",
      description:
        "Atua na proteção de dados, segurança cibernética, contraespionagem e análise estratégica para mitigar ameaças antes mesmo que se manifestem.",
      color: "border-indigo-500/40 bg-indigo-500/5 text-indigo-400",
    },
    {
      icon: Lock,
      title: "Departamento de Segurança",
      subtitle: "Integridade física e controle de acesso",
      description:
        "Garante a proteção das instalações da Galaxy Corp e o controle de perímetro restrito, assegurando que apenas pessoal autorizado circule em áreas sigilosas.",
      color: "border-brand-red/40 bg-brand-red/5 text-brand-red",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      
      {/* 1. CABEÇALHO DA PÁGINA */}
      <section className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-cyan/30 bg-brand-cyan/5 text-brand-cyan text-xs font-mono uppercase tracking-widest">
          <Building2 size={14} />
          Visão Institucional
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Liderando a Evolução Humana e Protegendo o Amanhã.
        </h1>
        <p className="text-galaxy-muted text-base sm:text-lg leading-relaxed">
          A <strong className="text-galaxy-text">Galaxy Corporation</strong> é um conglomerado multinacional e soberano de alta tecnologia, biociências e segurança integrada. Atuamos como a principal força econômica, científica e de estabilidade em nossa jurisdição.
        </p>
      </section>

      {/* 2. O MANIFESTO INSTITUCIONAL */}
      <section className="p-8 sm:p-12 rounded-2xl border border-galaxy-border bg-galaxy-surface/50 space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
          <Award className="text-brand-cyan" size={24} />
          Nossa Missão & Fundamentos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-galaxy-muted leading-relaxed">
          <p>
            Não somos apenas uma empresa; somos a fundação sobre a qual o amanhã é construído. Através de uma rede interconectada de instalações de última geração, a Galaxy Corporation financia, desenvolve e protege as inovações que movem a sociedade, mantendo um padrão absoluto de eficiência, ordem e disciplina.
          </p>
          <p>
            Operamos sob o princípio de que o progresso científico e a segurança são inegociáveis. Seja curando enfermidades através da biomedicina avançada, protegendo vidas com nossos planos de resposta médica rápida, ou imponendo a ordem com nossas forças táticas, nós moldamos o futuro com firmeza e excelência.
          </p>
        </div>
      </section>

      {/* 3. OS 6 DEPARTAMENTOS ESTRATÉGICOS */}
      <section className="space-y-8">
        <div className="border-b border-galaxy-border pb-4">
          <h2 className="text-2xl font-bold text-white">
            Departamentos Estratégicos
          </h2>
          <p className="text-xs font-mono text-galaxy-muted mt-1 uppercase tracking-wider">
            Estrutura organizacional integrada para autonomia operacional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => {
            const IconComponent = dept.icon;
            return (
              <div
                key={dept.title}
                className="p-6 rounded-xl border border-galaxy-border bg-galaxy-surface/40 hover:border-galaxy-border/80 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className={`w-10 h-10 rounded-lg border flex items-center justify-center ${dept.color}`}>
                    <IconComponent size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{dept.title}</h3>
                    <span className="text-[11px] font-mono text-galaxy-muted block mt-0.5">
                      {dept.subtitle}
                    </span>
                  </div>
                  <p className="text-xs text-galaxy-muted leading-relaxed">
                    {dept.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. RAMIFICAÇÕES ARMADAS (PCGC & ECGC) */}
      <section className="space-y-8">
        <div className="border-b border-galaxy-border pb-4">
          <div className="flex items-center gap-2 text-xs font-mono text-brand-red uppercase tracking-wider">
            <ShieldCheck size={16} />
            Defesa & Jurisdição
          </div>
          <h2 className="text-2xl font-bold text-white mt-1">
            Ramificações Armadas Especializadas
          </h2>
          <p className="text-xs font-mono text-galaxy-muted mt-1">
            Forças dedicadas à garantia da ordem pública e proteção de ativos estratégicos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* PCGC */}
          <div className="p-8 rounded-2xl border border-brand-blue/30 bg-gradient-to-b from-brand-blue/5 to-galaxy-surface space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded font-mono text-xs font-bold bg-brand-blue/20 border border-brand-blue text-brand-blue uppercase">
                PCGC
              </span>
              <span className="text-xs font-mono text-galaxy-muted">Ordem Pública</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Polícia Corporativa da Galaxy Corp
            </h3>
            <p className="text-xs sm:text-sm text-galaxy-muted leading-relaxed">
              A nossa força de manutenção da ordem pública e patrulhamento urbano. A PCGC atua diretamente nas ruas, combatendo a criminalidade comum, efetuando prisões e garantindo um ambiente seguro para os cidadãos e ativos da empresa.
            </p>
            <ul className="space-y-2 pt-2 text-xs font-mono text-galaxy-text">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-brand-blue" />
                Patrulhamento ostensivo comunitário
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-brand-blue" />
                Resolução de conflitos e detenções
              </li>
            </ul>
          </div>

          {/* ECGC */}
          <div className="p-8 rounded-2xl border border-brand-red/30 bg-gradient-to-b from-brand-red/5 to-galaxy-surface space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded font-mono text-xs font-bold bg-brand-red/20 border border-brand-red text-brand-red uppercase">
                ECGC
              </span>
              <span className="text-xs font-mono text-galaxy-muted">Defesa Tática</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Exército Corporativo da Galaxy Corp
            </h3>
            <p className="text-xs sm:text-sm text-galaxy-muted leading-relaxed">
              A nossa força paramilitar de elite e defesa pesada. O ECGC é acionado para missões críticas de alta intensidade, incluindo a escolta armada de cargas de alto valor, defesa tática de instalações e operações de contenção máxima.
            </p>
            <ul className="space-y-2 pt-2 text-xs font-mono text-galaxy-text">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-brand-red" />
                Escolta de insumos sensíveis e cargas de alto valor
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-brand-red" />
                Defesa perimetral e contenção de ameaças críticas
              </li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
      }
      
