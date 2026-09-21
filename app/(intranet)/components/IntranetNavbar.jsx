"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ShieldCheck, 
  LayoutDashboard, 
  Wallet, 
  Users, 
  FileText, 
  LogOut, 
  Menu, 
  X, 
  ChevronRight,
  Terminal
} from "lucide-react";

export default function IntranetNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Links de navegação da Intranet
  const navLinks = [
    { name: "Painel Central", href: "/dashboard", icon: LayoutDashboard },
    { name: "Economia & Saldo", href: "/bank", icon: Wallet },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-galaxy-bg/80 backdrop-blur-md border-b border-galaxy-border/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand / Logo Intranet */}
          <Link href="/dashboard" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-brand-cyan/10 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan/20 group-hover:scale-105 transition-all">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white tracking-wide group-hover:text-brand-cyan transition-colors">
                GALAXY <span className="text-brand-cyan font-mono">CORP</span>
              </span>
              <span className="text-[10px] font-mono text-galaxy-muted tracking-widest uppercase -mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse" /> Terminal Restrito
              </span>
            </div>
          </Link>

          {/* Links Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all relative ${
                    isActive
                      ? "text-brand-cyan bg-brand-cyan/10 font-bold border border-brand-cyan/30"
                      : "text-galaxy-text/70 hover:text-white hover:bg-galaxy-surface"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-brand-cyan rounded-full shadow-[0_0_8px_#00f0ff]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Ações / Status à Direita (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-black/40 border border-galaxy-border font-mono text-xs text-galaxy-muted">
              <Terminal className="w-3.5 h-3.5 text-brand-cyan" />
              <span>SYS_ONLINE</span>
            </div>

            <Link
              href="/login"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-brand-red/40 bg-brand-red/10 text-brand-red hover:bg-brand-red/20 font-mono text-xs uppercase tracking-wider transition-all hover:scale-105"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sair</span>
            </Link>
          </div>

          {/* Botão Hambúrguer Mobile */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={toggleMenu}
              aria-label="Abrir Menu de Navegação"
              className="p-2 rounded-lg bg-galaxy-surface border border-galaxy-border text-galaxy-text hover:text-brand-cyan focus:outline-none transition-transform active:scale-95"
            >
              {isOpen ? <X className="w-6 h-6 text-brand-cyan" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Retrátil com Transição Suave */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-galaxy-surface/95 backdrop-blur-xl border-b border-galaxy-border ${
          isOpen ? "max-h-96 opacity-100 py-4 px-4" : "max-h-0 opacity-0 py-0 px-4"
        }`}
      >
        <div className="space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between p-3 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                  isActive
                    ? "bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/40 font-bold"
                    : "text-galaxy-text hover:bg-black/30 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4" />
                  <span>{link.name}</span>
                </div>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </Link>
            );
          })}

          <div className="pt-4 mt-2 border-t border-galaxy-border/50 flex items-center justify-between">
            <span className="text-[11px] font-mono text-galaxy-muted uppercase">Conexão Criptografada</span>
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-brand-red/10 border border-brand-red/30 text-brand-red font-mono text-xs uppercase"
            >
              <LogOut className="w-3.5 h-3.5" /> Sair
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

