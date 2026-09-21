import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PublicLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Cabeçalho Público */}
      <Navbar />

      {/* Conteúdo Dinâmico das Páginas Públicas */}
      <main className="flex-1 relative z-10">{children}</main>

      {/* Rodapé Público */}
      <Footer />
    </div>
  );
}

