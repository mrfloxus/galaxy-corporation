import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  title: "Galaxy Corporation | Excelência, Ordem e Inovação",
  description:
    "Portal oficial da Galaxy Corporation. Liderando a evolução humana, biociências avançadas e infraestrutura de segurança integrada.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-galaxy-bg text-galaxy-text antialiased selection:bg-brand-cyan selection:text-black flex flex-col">
        {/* Efeito visual de tela de monitor */}
        <div className="fixed inset-0 pointer-events-none bg-scanlines opacity-40 z-50" />
        
        {/* Cabeçalho */}
        <Navbar />

        {/* Conteúdo dinâmico das páginas */}
        <main className="flex-1 relative z-10">{children}</main>

        {/* Rodapé */}
        <Footer />
      </body>
    </html>
  );
}
