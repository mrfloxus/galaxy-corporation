import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/markdown";
import { ArrowLeft, Calendar, ShieldAlert, FileText, Radio, Share2 } from "lucide-react";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const noticia = getPostBySlug(resolvedParams.slug);

  if (!noticia) {
    return { title: "Comunicado Não Encontrado | Galaxy Corporation" };
  }

  return {
    title: `${noticia.title} | Portal de Notícias`,
    description: noticia.summary,
  };
}

export default async function NoticiaDetailPage({ params }) {
  const resolvedParams = await params;
  const noticia = getPostBySlug(resolvedParams.slug);

  if (!noticia) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Botão de Voltar */}
      <Link
        href="/noticias"
        className="inline-flex items-center gap-2 text-xs font-mono text-galaxy-muted hover:text-brand-cyan transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" /> Voltar para o Portal de Notícias
      </Link>

      {/* Container Principal Estilo Terminal Corporativo */}
      <article className="bg-galaxy-surface border border-galaxy-border rounded-xl overflow-hidden shadow-2xl relative">
        {/* Barra Superior Decorativa estilo Terminal */}
        <div className="bg-black/60 border-b border-galaxy-border px-6 py-3 flex items-center justify-between font-mono text-xs text-galaxy-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span className="uppercase tracking-widest text-brand-cyan">Transmissão Oficial // Doc #{noticia.slug.toUpperCase()}</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span>Acesso público</span>
            <span>Criptografia de ponta a ponta</span>
          </div>
        </div>

        <div className="p-6 md:p-10">
          {/* Cabeçalho da Notícia */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <span className={`px-3 py-1 rounded border text-xs font-mono font-semibold ${noticia.badgeColor}`}>
              {noticia.department}
            </span>
            {noticia.date && (
              <span className="flex items-center gap-1.5 text-xs font-mono text-galaxy-muted">
                <Calendar className="w-4 h-4 text-brand-cyan" />
                {noticia.date}
              </span>
            )}
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
            {noticia.title}
          </h1>

          {/* Resumo/Destaque em Caixa Holográfica */}
          {noticia.summary && (
            <div className="bg-brand-cyan/5 border-l-4 border-brand-cyan p-4 rounded-r-lg mb-8 text-sm md:text-base text-galaxy-text/90 italic font-sans">
              "{noticia.summary}"
            </div>
          )}

          {/* Conteúdo em Markdown */}
          <div className="prose prose-invert max-w-none text-galaxy-text/80 leading-relaxed font-sans text-sm md:text-base whitespace-pre-line border-t border-galaxy-border/50 pt-6">
            {noticia.content}
          </div>

          {/* Carimbo de Autenticidade Corporativa */}
          <div className="mt-12 pt-6 border-t border-galaxy-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 bg-black/30 p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <ShieldAlert className="w-6 h-6 text-brand-cyan shrink-0" />
              <div className="text-xs font-mono">
                <div className="text-white font-bold uppercase">Portal de Notícias da Galaxy Corporation</div>
                <div className="text-galaxy-muted">Postagem Oficial.</div>
              </div>
            </div>
            <div className="text-xs font-mono text-brand-cyan uppercase tracking-widest font-bold border border-brand-cyan/30 px-3 py-1 rounded bg-brand-cyan/5">
              postagem original
            </div>
          </div>
        </div>
      </article>
    </div>
  );
      }

