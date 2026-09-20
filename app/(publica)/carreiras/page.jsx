import { getAllCareers } from "@/lib/markdown";
import { Briefcase, MapPin, Building, ShieldCheck, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Portal de Carreiras | Galaxy Corporation",
  description: "Faça parte do futuro da ordem e da tecnologia. Confira as oportunidades abertas na Galaxy Corp.",
};

export default function CarreirasPage() {
  const vagas = getAllCareers();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Cabeçalho */}
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan font-mono text-xs uppercase tracking-wider mb-4">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Recrutamento e Seleção Corporativa</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-galaxy-text mb-4">
          Construa o Amanhã Conosco
        </h1>
        <p className="text-galaxy-muted text-base md:text-lg">
          Buscamos mentes excepcionais, especialistas técnicos e operadores disciplinares dedicados a manter a excelência e a ordem em todos os territórios sob nossa gestão.
        </p>
      </div>

      {/* Lista de Vagas */}
      {vagas.length === 0 ? (
        <div className="bg-galaxy-surface border border-galaxy-border rounded-xl p-12 text-center max-w-xl mx-auto">
          <ShieldCheck className="w-12 h-12 text-galaxy-muted mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">Sem vagas abertas no momento</h2>
          <p className="text-sm text-galaxy-muted">
            Todas as posições corporativas estão devidamente preenchidas. Novas seleções são publicadas conforme expansão de setor.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {vagas.map((vaga) => (
            <div
              key={vaga.slug}
              className="bg-galaxy-surface border border-galaxy-border hover:border-brand-cyan/50 transition-all duration-300 rounded-xl p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className={`px-2.5 py-1 rounded border text-xs font-mono font-semibold ${vaga.badgeColor}`}>
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

                <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {vaga.title}
                </h2>

                <p className="text-sm text-galaxy-text/80 leading-relaxed mb-6">
                  {vaga.description}
                </p>

                {vaga.requirements && vaga.requirements.length > 0 && (
                  <div className="mb-6 pt-4 border-t border-galaxy-border/50">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-galaxy-muted mb-3">
                      Requisitos Mínimos
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-xs md:text-sm text-galaxy-text/70">
                      {vaga.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-galaxy-border/50 flex justify-end">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded bg-brand-cyan/10 hover:bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40 text-xs font-mono uppercase font-bold tracking-wider transition-colors"
                >
                  Submeter Credenciais <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
