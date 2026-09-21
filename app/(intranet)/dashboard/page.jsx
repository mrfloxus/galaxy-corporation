"use client";

import { useState, useEffect } from "react";
import { 
  User, 
  Building, 
  ShieldCheck, 
  Trophy, 
  Wallet, 
  Coins, 
  TrendingUp, 
  RefreshCw,
  Award,
  Loader2
} from "lucide-react";

export default function DashboardPage() {
  const [usuario, setUsuario] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  const [leaderboard, setLeaderboard] = useState([]);
  const [loadingEconomy, setLoadingEconomy] = useState(true);

  // 1. Carrega dados do usuário autenticado no banco
  const carregarUsuario = async () => {
    try {
      const res = await fetch("/api/auth/me");
      if (res.ok) {
        const data = await res.json();
        if (data.authenticated) {
          setUsuario(data.user);
        }
      }
    } catch (error) {
      console.error("Erro ao carregar dados do usuário:", error);
    } finally {
      setLoadingUser(false);
    }
  };

  // 2. Carrega ranking global direto da API do UnbelievaBoat
  const carregarLeaderboard = async () => {
    setLoadingEconomy(true);
    try {
      const res = await fetch("/api/economy/balance?limit=5");
      if (res.ok) {
        const data = await res.json();
        setLeaderboard(Array.isArray(data) ? data : []);
      } else {
        setLeaderboard([]);
      }
    } catch (error) {
      console.error("Erro ao carregar leaderboard:", error);
      setLeaderboard([]);
    } finally {
      setLoadingEconomy(false);
    }
  };

  useEffect(() => {
    carregarUsuario();
    carregarLeaderboard();
  }, []);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Boas-vindas Topo */}
      <div className="bg-gradient-to-r from-galaxy-surface via-galaxy-surface to-brand-cyan/10 border border-galaxy-border rounded-2xl p-6 md:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan font-mono text-xs uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Sessão Ativa // Criptografada</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
              Bem-vindo,{" "}
              <span className="text-brand-cyan">
                {loadingUser ? "Carregando..." : usuario?.name || "Operador"}
              </span>
            </h1>
            <p className="text-galaxy-muted text-xs md:text-sm font-mono mt-1">
              Terminal de Operações Central — Galaxy Corporation
            </p>
          </div>

          <div className="flex items-center gap-3 bg-black/40 border border-galaxy-border/80 px-4 py-2.5 rounded-xl font-mono text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-emerald animate-pulse" />
            <span className="text-galaxy-muted">STATUS:</span>
            <span className="text-white font-bold">AUTORIZADO</span>
          </div>
        </div>
      </div>

      {/* 2. Informações do Perfil do Usuário */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-galaxy-surface border border-galaxy-border rounded-xl p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan shrink-0">
            <User className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-mono text-galaxy-muted uppercase tracking-wider block">Agente / Operador</span>
            <h3 className="text-base font-bold text-white mt-0.5">
              {loadingUser ? "---" : usuario?.name || "Não informado"}
            </h3>
          </div>
        </div>

        <div className="bg-galaxy-surface border border-galaxy-border rounded-xl p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue shrink-0">
            <Building className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-mono text-galaxy-muted uppercase tracking-wider block">Setor / Departamento</span>
            <h3 className="text-base font-bold text-white mt-0.5">
              {loadingUser ? "---" : usuario?.department || "Operações Gerais"}
            </h3>
          </div>
        </div>

        <div className="bg-galaxy-surface border border-galaxy-border rounded-xl p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-mono text-galaxy-muted uppercase tracking-wider block">Nível de Acesso</span>
            <h3 className="text-base font-bold text-brand-gold mt-0.5 font-mono uppercase">
              {loadingUser ? "---" : usuario?.role || "RECRUTA"}
            </h3>
          </div>
        </div>
      </div>

      {/* 3. Leaderboard Global de Economia (UnbelievaBoat) */}
      <div className="bg-galaxy-surface border border-galaxy-border rounded-2xl p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-galaxy-border/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/40 flex items-center justify-center text-brand-gold">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                Leaderboard Global de Economia
              </h2>
              <p className="text-xs font-mono text-galaxy-muted">Sincronizado via API UnbelievaBoat</p>
            </div>
          </div>

          <button
            type="button"
            onClick={carregarLeaderboard}
            disabled={loadingEconomy}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-black/40 hover:bg-black/60 border border-galaxy-border text-xs font-mono text-galaxy-text hover:text-brand-cyan transition-all disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loadingEconomy ? "animate-spin" : ""}`} />
            <span>Atualizar Ranking</span>
          </button>
        </div>

        {/* Tabela do Ranking */}
        {loadingEconomy ? (
          <div className="py-12 text-center text-xs font-mono text-galaxy-muted flex flex-col items-center gap-3">
            <Loader2 className="w-6 h-6 animate-spin text-brand-cyan" />
            <span>Consultando dados na API do UnbelievaBoat...</span>
          </div>
        ) : leaderboard.length === 0 ? (
          <div className="py-8 text-center text-xs font-mono text-galaxy-muted">
            Nenhum registro de economia encontrado no momento. Verifique as variáveis MONGODB_URI e UNBELIEVABOAT_TOKEN na Vercel.
          </div>
        ) : (
          <div className="space-y-3">
            {leaderboard.map((item, index) => {
              const posicao = index + 1;
              let destaqueCor = "text-galaxy-text border-galaxy-border";
              let badgeBg = "bg-galaxy-border/30 text-galaxy-muted";

              if (posicao === 1) {
                destaqueCor = "border-brand-gold/50 bg-brand-gold/5";
                badgeBg = "bg-brand-gold text-black font-bold";
              } else if (posicao === 2) {
                destaqueCor = "border-slate-400/40 bg-slate-400/5";
                badgeBg = "bg-slate-300 text-black font-bold";
              } else if (posicao === 3) {
                destaqueCor = "border-amber-700/40 bg-amber-700/5";
                badgeBg = "bg-amber-700 text-white font-bold";
              }

              return (
                <div
                  key={item.user_id || index}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border ${destaqueCor} transition-all hover:scale-[1.01] gap-4`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs ${badgeBg}`}>
                      #{posicao}
                    </span>
                    <div>
                      <span className="text-sm font-bold text-white block font-mono">
                        ID: {item.user_id}
                      </span>
                      <span className="text-[11px] font-mono text-galaxy-muted">
                        Membro do Servidor
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 font-mono text-xs border-t sm:border-t-0 border-galaxy-border/40 pt-3 sm:pt-0">
                    <div className="flex items-center gap-1.5 text-galaxy-muted">
                      <Wallet className="w-3.5 h-3.5 text-brand-cyan" />
                      <span>Carteira: <strong className="text-white">${item.cash?.toLocaleString() || 0}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5 text-galaxy-muted">
                      <Coins className="w-3.5 h-3.5 text-brand-gold" />
                      <span>Banco: <strong className="text-white">${item.bank?.toLocaleString() || 0}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5 text-brand-cyan font-bold bg-brand-cyan/10 px-3 py-1 rounded-lg border border-brand-cyan/30">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Total: ${item.total?.toLocaleString() || 0}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
      }
              
