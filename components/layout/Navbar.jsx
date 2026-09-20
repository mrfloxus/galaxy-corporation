"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShieldAlert, User, LogIn } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Simulador de autenticação (depois conectamos ao NextAuth/MongoDB)
  const isLoggedIn = false; 

  const navLinks = [
    { name: "Quem Somos", href: "/quem-somos" },
    { name: "Serviços", href: "/servicos" },
    { name: "Carreiras", href: "/carreiras" },
    { name: "Notícias", href: "/noticias" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-galaxy-border bg-galaxy-bg/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Corporativa */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-36 sm:w-44 transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Galaxy Corporation Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Links para Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-galaxy-muted hover:text-brand-cyan transition-colors uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Botão de Acesso / Intranet (Desktop) */}
          <div className="hidden md:flex items-center">
            {isLoggedIn ? (
              <Link
                href="/intranet/dashboard"
                className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider text-black bg-brand-cyan hover:bg-cyan-400 rounded transition-all shadow-glow-cyan"
              >
                <User size={16} />
                Intranet
              </Link>
            ) : (
              <Link
                href="/login"
                className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider text-brand-cyan border border-brand-cyan/40 hover:border-brand-cyan hover:bg-brand-cyan/10 rounded transition-all"
              >
                <LogIn size={16} />
                Acessar Portal
              </Link>
            )}
          </div>

          {/* Botão Hambúrguer (Mobile) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md text-galaxy-muted hover:text-brand-cyan hover:bg-galaxy-surface focus:outline-none"
              aria-label="Abrir Menu de Navegação"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Hambúrguer Dropdown (Mobile) */}
      {isOpen && (
        <div className="md:hidden border-b border-galaxy-border bg-galaxy-surface/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-galaxy-text hover:text-brand-cyan hover:bg-galaxy-bg transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-4 border-t border-galaxy-border/50">
            {isLoggedIn ? (
              <Link
                href="/intranet/dashboard"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-mono font-bold uppercase text-black bg-brand-cyan rounded shadow-glow-cyan"
              >
                <User size={18} />
                Painel da Intranet
              </Link>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-mono font-bold uppercase text-brand-cyan border border-brand-cyan/40 bg-brand-cyan/10 rounded"
              >
                <LogIn size={18} />
                Acessar Portal / Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
  }

