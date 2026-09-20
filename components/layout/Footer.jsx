import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Cpu, Globe, Lock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-galaxy-border bg-galaxy-surface/80 pt-12 pb-8 text-galaxy-muted text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-galaxy-border/60">
          
          {/* Coluna 1: Logo e Visão Corporativa */}
          <div className="space-y-4 md:col-span-1">
            <div className="relative h-10 w-44">
              <Image
                src="/logo.png"
                alt="Galaxy Corporation Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs leading-relaxed text-galaxy-muted">
              Fundada para liderar a evolução humana e proteger a infraestrutura urbana. Inovação, estabilidade e disciplina técnica em um só propósito.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              SISTEMAS OPERACIONAIS: 100% ONLINE
            </div>
          </div>

          {/* Coluna 2: Navegação Institucional */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-galaxy-text mb-4">
              Institucional
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/quem-somos" className="hover:text-brand-cyan transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="hover:text-brand-cyan transition-colors">
                  Serviços & Soluções
                </Link>
              </li>
              <li>
                <Link href="/carreiras" className="hover:text-brand-cyan transition-colors">
                  Carreiras Corporativas
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="hover:text-brand-cyan transition-colors">
                  Comunicados Oficiais
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Departamentos & Segurança */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-galaxy-text mb-4">
              Jurisdição & Divisões
            </h3>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-1.5">
                <Cpu size={14} className="text-brand-cyan" />
                <span>Biotecnologia & Pesquisa</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-brand-blue" />
                <span>Polícia Corporativa (PCGC)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Lock size={14} className="text-brand-red" />
                <span>Exército Corporativo (ECGC)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Globe size={14} className="text-brand-emerald" />
                <span>Rede Médica Tática</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Legal & Segurança de Dados */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-galaxy-text mb-4">
              Conformidade & Acesso
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/termos" className="hover:text-brand-cyan transition-colors">
                  Termos de Jurisdição
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="hover:text-brand-cyan transition-colors">
                  Protocolo de Dados Privados
                </Link>
              </li>
              <li>
                <Link href="/banco-de-dados" className="hover:text-brand-cyan transition-colors text-brand-cyan font-mono">
                  [ BANCO DE DADOS ]
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Rodapé Inferior */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-galaxy-muted">
          <p>© {new Date().getFullYear()} Galaxy Corporation. Todos os direitos reservados.</p>
          <p className="text-[10px] text-galaxy-muted/70">
            JURISDIÇÃO SOBERANA DE SEGURANÇA E ALTA TECNOLOGIA
          </p>
        </div>
      </div>
    </footer>
  );
      }
          
