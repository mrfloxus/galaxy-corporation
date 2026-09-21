import IntranetNavbar from "./components/IntranetNavbar";

export const metadata = {
  title: "Terminal Intranet | Galaxy Corporation",
  description: "Rede privada e painel corporativo dos funcionários da Galaxy Corp.",
};

export default function IntranetLayout({ children }) {
  return (
    <div className="min-h-screen bg-galaxy-bg text-galaxy-text flex flex-col selection:bg-brand-cyan/30 selection:text-brand-cyan">
      {/* Componente Navbar */}
      <IntranetNavbar />

      {/* Conteúdo das Páginas da Intranet */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Rodapé Discreto da Intranet */}
      <footer className="border-t border-galaxy-border/40 py-6 text-center text-xs font-mono text-galaxy-muted bg-black/20">
        <p>GALAXY CORPORATION © 2026 — TODOS OS DIREITOS RESERVADOS // USO EXCLUSIVO INTERNO</p>
      </footer>
    </div>
  );
}

