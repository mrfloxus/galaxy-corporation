"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, Lock, Mail, User, Building, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [modo, setModo] = useState("login"); // 'login' ou 'registro'
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState({ tipo: "", texto: "" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    department: "Departamento Médico",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMensagem({ tipo: "", texto: "" });

    const endpoint = modo === "login" ? "/api/auth/login" : "/api/auth/register";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Ocorreu um erro no servidor.");
      }

      if (modo === "login") {
        setMensagem({ tipo: "sucesso", texto: "Acesso concedido! Redirecionando para a Intranet..." });
        setTimeout(() => {
          router.push("/dashboard");
        }, 1200);
      } else {
        setMensagem({ tipo: "sucesso", texto: data.message });
        setModo("login");
      }
    } catch (err) {
      setMensagem({ tipo: "erro", texto: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-galaxy-bg text-galaxy-text flex items-center justify-center p-4 relative overflow-hidden">
      {/* Luzes de Fundo Futuristas */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md bg-galaxy-surface border border-galaxy-border rounded-2xl p-8 shadow-2xl relative z-10 backdrop-blur-sm">
        {/* Cabeçalho */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            {modo === "login" ? "Terminal da Intranet" : "Solicitar Credencial"}
          </h1>
          <p className="text-xs font-mono text-galaxy-muted mt-1 uppercase tracking-widest">
            Galaxy Corporation // Rede Privada
          </p>
        </div>

        {/* Notificações */}
        {mensagem.texto && (
          <div
            className={`p-3.5 rounded-lg mb-6 flex items-start gap-3 text-xs font-mono border ${
              mensagem.tipo === "erro"
                ? "bg-brand-red/10 border-brand-red/40 text-brand-red"
                : "bg-brand-emerald/10 border-brand-emerald/40 text-brand-emerald"
            }`}
          >
            {mensagem.tipo === "erro" ? (
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            ) : (
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
            )}
            <span>{mensagem.texto}</span>
          </div>
        )}

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {modo === "registro" && (
            <>
              <div>
                <label className="block text-xs font-mono text-galaxy-muted mb-1.5 uppercase">
                  Nome Completo
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-galaxy-muted" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ex: Agente Alex Mercer"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-black/40 border border-galaxy-border focus:border-brand-cyan focus:outline-none text-sm text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-galaxy-muted mb-1.5 uppercase">
                  Departamento
                </label>
                <div className="relative">
                  <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-galaxy-muted" />
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-black/40 border border-galaxy-border focus:border-brand-cyan focus:outline-none text-sm text-white"
                  >
                    <option value="Departamento Científico">Departamento Científico</option>
                    <option value="Departamento Médico">Departamento Médico</option>
                    <option value="Departamento Logístico">Departamento Logístico</option>
                    <option value="Departamento de Inteligência">Departamento Logístico</option>
                    <option value="Departamento de Segurança">Departamento de Segurança</option>
                    <option value="Departamento Administrativo">Departamento Administrativo</option>
                    <option value="PCGC">PCGC</option>
                    <option value="ECGC">ECGC</option>
                  </select>
                </div>
              </div>
            </>
          )}

          <div>
            <label className="block text-xs font-mono text-galaxy-muted mb-1.5 uppercase">
              E-mail
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-galaxy-muted" />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="usuario@galaxycorp.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-black/40 border border-galaxy-border focus:border-brand-cyan focus:outline-none text-sm text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-galaxy-muted mb-1.5 uppercase">
              Chave de Acesso (Senha)
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-galaxy-muted" />
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-black/40 border border-galaxy-border focus:border-brand-cyan focus:outline-none text-sm text-white"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-lg bg-brand-cyan text-black font-mono font-bold text-sm uppercase tracking-wider hover:bg-brand-cyan/90 transition-all flex items-center justify-center gap-2 mt-6 disabled:opacity-50"
          >
            {loading ? (
              <span>Processando...</span>
            ) : (
              <>
                <span>{modo === "login" ? "Entrar no Terminal" : "Enviar Cadastramento"}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Alternar entre Login e Registro */}
        <div className="mt-6 pt-6 border-t border-galaxy-border/50 text-center">
          {modo === "login" ? (
            <p className="text-xs text-galaxy-muted">
              Ainda não possui autorização?{" "}
              <button
                type="button"
                onClick={() => setModo("registro")}
                className="text-brand-cyan font-bold hover:underline"
              >
                Cadastrar-se
              </button>
            </p>
          ) : (
            <p className="text-xs text-galaxy-muted">
              Já possui registro ativo?{" "}
              <button
                type="button"
                onClick={() => setModo("login")}
                className="text-brand-cyan font-bold hover:underline"
              >
                Fazer Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
        }
      
