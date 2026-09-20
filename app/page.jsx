import Link from "next/link";
import { 
  Building2, 
  Briefcase, 
  Newspaper, 
  MessageSquare, 
  ShieldCheck, 
  ArrowRight, 
  Cpu, 
  Activity, 
  Users 
} from "lucide-react";

export default function HomePage() {
  // Simulação de últimas notícias da pasta /content/noticias/
  const latestNews = [
    {
      slug: "expansao-infraestrutura-medica",
      title: "Expansão do Complexo Hospitalar de Biomedicina",
      date: "18 de Setembro, 2026",
      department: "Científico & Médico",
      summary: "Inauguração da nova ala de terapia genômica e resposta médica tática para associados.",
      badgeColor: "border-brand-emerald text-brand-emerald bg-brand-emerald/10",
    },
    {
      slug: "diretriz-seguranca-perimetral",
      title: "Atualização no Protocolo de Patrulhamento Urbano",
      date: "12 de Setembro, 2026",
      department: "PCGC & ECGC",
      summary: "Novas unidades autônomas de monitoramento foram implantadas nos perímetros estratégicos.",
      badgeColor: "border-brand-red text-brand-red bg-brand-red/10",
    },
    {
      slug: "balanco-trimestral-recursos",
      title: "Relatório de Eficiência Operacional e Inovação",
      date: "05 de Setembro, 2026",
      department: "Administrativo",
      summary: "Galaxy Corporation atinge recorde de autonomia de suprimentos e estabilidade institucional.",
      badgeColor: "border-brand-cyan text-brand-cyan bg-brand-cyan/10",
    },
  ];

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. SEÇÃO HERO / APRESENTAÇÃO */}
      <section className="relative overflow-hidden border-b border-galaxy-border bg-gradient-to-b from-galaxy-surface via-galaxy-bg to-galaxy-bg pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-cyan/30 bg-brand-cyan/5 text-brand-cyan text-xs font-mono uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              Galaxy Corporation
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Construindo a Fundação do <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-500">Amanhã.</span>
            </h1>

            <p className="text-base sm:text-lg text-galaxy-muted leading-relaxed">
              A <strong className="text-galaxy-text">Galaxy Corporation</strong> é um conglomerado autônomo de alta tecnologia, biociências e segurança integrada. Garantimos estabilidade, progresso científico e ordem absoluta em toda a nossa jurisdição.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/quem-somos"
                className="flex items-center gap-2 px-6 py-3 text-sm font-mono font-bold uppercase tracking-wider text-black bg-brand-cyan hover:bg-cyan-400 rounded transition-all shadow-glow-cyan"
              >
                Conheça a Corporação
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/servicos"
                className="flex items-center gap-2 px-6 py-3 text-sm font-mono font-semibold uppercase tracking-wider text-galaxy-text border border-galaxy-border hover:border-brand-cyan hover:bg-galaxy-surface rounded transition-all"
              >
                Serviços & Soluções
              </Link>
            </div>

          </div>
        </div>

        {/* Efeito decorativo de grid sci-fi no fundo */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d15_1px,transparent_1px),linear-gradient(to_bottom,#1f293d15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      </section>

      {/* 2. QUEM SOMOS (RESUMIDO) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl border border-galaxy-border bg-galaxy-surface/50 backdrop-blur-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-brand-cyan font-mono text-xs uppercase tracking-widest">
              <Building2 size={16} />
              Soberania & Inovação
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Mais do que uma empresa: a estrutura da evolução urbana.
            </h2>
            <p className="text-galaxy-muted text-sm sm:text-base leading-relaxed">
              Atuamos de forma autônoma através de seis departamentos estratégicos e duas forças de segurança dedicada — a <strong>Polícia Corporativa (PCGC)</strong> e o <strong>Exército Corporativo (ECGC)</strong>. Nosso compromisso é financiar a pesquisa biotecnológica de ponta e proteger a infraestrutura social com máxima disciplina.
            </p>
            <div className="pt-2">
              <Link
                href="/quem-somos"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-cyan hover:underline uppercase tracking-wider"
              >
                Ler manifesto institucional completo →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4 font-mono text-xs">
            <div className="p-4 rounded-lg border border-galaxy-border bg-galaxy-bg/60 space-y-1">
              <Cpu className="text-brand-cyan mb-2" size={20} />
              <div className="text-white font-bold text-lg">06</div>
              <div className="text-galaxy-muted">Departamentos</div>
            </div>
            <div className="p-4 rounded-lg border border-galaxy-border bg-galaxy-bg/60 space-y-1">
              <ShieldCheck className="text-brand-red mb-2" size={20} />
              <div className="text-white font-bold text-lg">02</div>
              <div className="text-galaxy-muted">Forças Armadas</div>
            </div>
            <div className="p-4 rounded-lg border border-galaxy-border bg-galaxy-bg/60 space-y-1">
              <Activity className="text-brand-emerald mb-2" size={20} />
              <div className="text-white font-bold text-lg">24/7</div>
              <div className="text-galaxy-muted">Suporte Tático</div>
            </div>
            <div className="p-4 rounded-lg border border-galaxy-border bg-galaxy-bg/60 space-y-1">
              <Users className="text-brand-gold mb-2" size={20} />
              <div className="text-white font-bold text-lg">100%</div>
              <div className="text-galaxy-muted">Autonomia</div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. PORTAL DE CARREIRAS (CHAMADO) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-brand-cyan/30 bg-gradient-to-r from-galaxy-surface via-galaxy-surface/90 to-brand-cyan/10 p-8 sm:p-12">
          <div className="max-w-2xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-cyan uppercase tracking-wider">
              <Briefcase size={16} />
              Recrutamento Corporativo
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Faça Parte da Elite que Molda o Futuro.
            </h2>
            <p className="text-galaxy-muted text-sm sm:text-base leading-relaxed">
              Buscamos mentes brilhantes para nossos laboratórios de biotecnologia, estrategistas de inteligência, médicos táticos e operadores treinados para a PCGC e ECGC.
            </p>
            <div className="pt-2">
              <Link
                href="/carreiras"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-black bg-brand-cyan hover:bg-cyan-400 rounded transition-all shadow-glow-cyan"
              >
                Ver Vagas Abertas
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NOTÍCIAS & COMUNICADOS OFICIAIS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-galaxy-border pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan uppercase tracking-wider">
              <Newspaper size={16} />
              Notícias
            </div>
            <h2 className="text-2xl font-bold text-white mt-1">
              Últimas postagens
            </h2>
          </div>
          <Link
            href="/noticias"
            className="text-xs font-mono text-galaxy-muted hover:text-brand-cyan transition-colors uppercase tracking-wider"
          >
            Ver Todas as Notícias →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestNews.map((news) => (
            <article
              key={news.slug}
              className="flex flex-col justify-between p-6 rounded-xl border border-galaxy-border bg-galaxy-surface/40 hover:border-brand-cyan/50 hover:bg-galaxy-surface/80 transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className={`px-2 py-0.5 rounded border ${news.badgeColor}`}>
                    {news.department}
                  </span>
                  <span className="text-galaxy-muted">{news.date}</span>
                </div>
                <h3 className="text-base font-semibold text-white group-hover:text-brand-cyan transition-colors">
                  {news.title}
                </h3>
                <p className="text-xs text-galaxy-muted leading-relaxed">
                  {news.summary}
                </p>
              </div>
              <div className="pt-6">
                <Link
                  href={`/noticias/${news.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-mono text-brand-cyan hover:underline"
                >
                  Ler postagem
                  <ArrowRight size={12} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. ÁREA DO DISCORD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl border border-indigo-500/30 bg-gradient-to-b from-indigo-950/20 to-galaxy-surface flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider">
              <MessageSquare size={16} />
              Comunidade & Comunicação
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Conecte-se ao Servidor da Galaxy Corporation no Discord
            </h2>
            <p className="text-xs sm:text-sm text-galaxy-muted max-w-xl">
              Acesse o canal de comunicação para interagir com a comunidade e acompanhar as atualizações da nossa empresa em tempo real.
            </p>
          </div>
          <a
            href="https://discord.gg/HEHH6r7Zuj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 px-6 py-3 text-sm font-mono font-bold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-all shadow-lg shadow-indigo-600/20"
          >
            Entrar no Discord
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

    </div>
  );
      }
              
