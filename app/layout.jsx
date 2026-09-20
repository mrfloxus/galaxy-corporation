import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono)",
  display: "swap",
});

export const metadata = {
  title: "Galaxy Corporation | Excelência, Ordem e Inovação",
  description:
    "Portal oficial da Galaxy Corporation. Liderando a evolução humana, biociências avançadas e infraestrutura de segurança integrada.",
  keywords: [
    "Galaxy Corp",
    "Tecnologia",
    "Biomedicina",
    "Segurança Corporativa",
    "PCGC",
    "ECGC",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-galaxy-bg text-galaxy-text antialiased selection:bg-brand-cyan selection:text-black">
        {/* Camada sutil para efeito visual de monitor corporativo */}
        <div className="fixed inset-0 pointer-events-none bg-scanlines opacity-40 z-50" />
        
        {/* Conteúdo principal renderizado pelas rotas */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}

