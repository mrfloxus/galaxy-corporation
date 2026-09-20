import Link from "next/link";
import { notFound } from "next/navigation";
import { getCareerBySlug } from "@/lib/markdown";
import { ArrowLeft, MapPin, Building, ShieldCheck, ExternalLink, MessageSquareCode } from "lucide-react";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const vaga = getCareerBySlug(resolvedParams.slug);

  if (!vaga) {
    return { title: "Vaga Não Encontrada | Galaxy Corporation" };
  }

  return {
    title: `${vaga.title} | Portal de Carreiras`,
    description: vaga.description,
  };
}

export default async function VagaDetailPage({ params }) {
  const resolvedParams = await params;
  const vaga = getCareerBySlug(resolvedParams.slug);

  if (!vaga) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Botão de Voltar */}
      <Link
        href="/carreiras"
        className="inline-flex items-center gap-2 text-xs font-mono text-galaxy-muted hover:text-brand-cyan transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" /> Voltar para lista de vagas
      </Link>

      {/* Cartão de Detalhes */}
      <div className="bg-galaxy-surface border border-galaxy-border rounded-xl p-6 md:p-10 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <span className={`px-3 py-1 rounded border text-xs font-mono font-semibold ${vaga.badgeColor}`}>
            {vaga.department}
          </span>
          <div className="flex items-center gap-4 text-xs font-mono text-galaxy-muted">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {vaga.location}
            </span>
            <span className="flex items-center gap-1">
              <Building className="w-3.5 h-3.5" />
              {vaga.type}
            </span>
          </div>
        </div>

        <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
          {vaga.title}
        </h1>

        <p className="text-base text-galaxy-text/90 leading-relaxed mb-8 pb-6 border-b border-galaxy-border/50">
          {vaga.description}
        </p>

        {/* Requisitos */}
        {vaga.requirements && vaga.requirements.length > 0 && (
          <div className="mb-8">
            <h2 className="text-sm font-mono uppercase tracking-wider text-brand-cyan mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Requisitos Mínimos Obrigatórios
            </h2>
            <ul className="space-y-2">
              {vaga.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-galaxy-text/80">
                  <span className="text-brand-cyan font-mono">•</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Conteúdo adicional em texto simples */}
        {vaga.content && (
          <div className="pt-6 border-t border-galaxy-border/50 text-sm text-galaxy-text/80 leading-relaxed whitespace-pre-line font-sans">
            {vaga.content}
          </div>
        )}
      </div>

      {/* Banner de Candidatura no Discord */}
      <div className="bg-gradient-to-r from-galaxy-surface to-brand-blue/10 border border-brand-blue/40 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-brand-cyan text-xs font-mono uppercase font-bold mb-1">
            <MessageSquareCode className="w-4 h-4" /> Triagem de Candidatos
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            Pronto para prestar a entrevista corporativa?
          </h3>
          <p className="text-xs md:text-sm text-galaxy-muted max-w-xl">
            Todas as entrevistas e análises de perfil ocorrem diretamente no servidor central de comunicações no Discord.
          </p>
        </div>

        <a
          href="https://discord.gg/HEHH6r7Zuj"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-blue hover:bg-blue-600 text-white font-mono text-xs uppercase font-bold tracking-wider shadow-lg shadow-brand-blue/20 transition-all hover:scale-105"
        >
          Acessar Discord <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
          }
        
