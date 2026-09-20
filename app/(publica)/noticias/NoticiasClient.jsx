"use client";

import { useState } from "react";
import Link from "next/link";
import { Newspaper, Search, Calendar, Building, ChevronRight, AlertCircle } from "lucide-react";

export default function NoticiasClient({ noticiasIniciais }) {
  const [busca, setBusca] = useState("");

  // Filtra as notícias pelo título, resumo ou departamento
  const noticiasFiltradas = noticiasIniciais.filter((noticia) => {
    const termo = busca.toLowerCase();
    return (
      noticia.title.toLowerCase().includes(termo) ||
      noticia.summary.toLowerCase().includes(termo) ||
      noticia.department.toLowerCase().includes(termo)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Cabeçalho */}
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan font-mono text-xs uppercase tracking-wider mb-4">
          <Newspaper className="w-3.5 h-3.5" />
          <span>Informativo Corporativo Oficial</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-galaxy-text mb-4">
          Portal de Notícias
        </h1>
        <p className="text-galaxy-muted text-base md:text-lg">
          Acompanhe os anúncios, comunicados de segurança e relatórios operacionais atualizados em tempo real pela diretoria.
        </p>
      </div>

      {/* Barra de Pesquisa */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-galaxy-muted" />
          <input
            type="text"
            placeholder="Pesquisar boletins, departamentos ou termos..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-galaxy-surface border border-galaxy-border focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan text-galaxy-text placeholder:text-galaxy-muted text-sm transition-all"
          />
        </div>
      </div>

      {/* Listagem de Notícias */}
      {noticiasFiltradas.length === 0 ? (
        <div className="bg-galaxy-surface border border-galaxy-border rounded-xl p-12 text-center max-w-xl mx-auto">
          <AlertCircle className="w-12 h-12 text-galaxy-muted mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">Nenhum comunicado encontrado</h2>
          <p className="text-sm text-galaxy-muted">
            Não foram encontrados registros correspondentes ao termo informado na barra de pesquisa.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {noticiasFiltradas.map((noticia) => (
            <article
              key={noticia.slug}
              className="bg-galaxy-surface border border-galaxy-border hover:border-brand-cyan/50 transition-all duration-300 rounded-xl p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`px-2.5 py-1 rounded border text-xs font-mono font-semibold ${noticia.badgeColor}`}>
                    {noticia.department}
                  </span>
                  {noticia.date && (
                    <span className="flex items-center gap-1 text-xs font-mono text-galaxy-muted">
                      <Calendar className="w-3 h-3" />
                      {noticia.date}
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors mb-3 line-clamp-2">
                  {noticia.title}
                </h2>

                <p className="text-sm text-galaxy-text/80 leading-relaxed mb-6 line-clamp-3">
                  {noticia.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-galaxy-border/50 flex justify-end">
                <Link
                  href={`/noticias/${noticia.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase font-bold text-brand-cyan group-hover:translate-x-1 transition-transform"
                >
                  Ler Comunicado <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
      }
