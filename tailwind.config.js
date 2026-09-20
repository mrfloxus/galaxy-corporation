/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores base da interface corporativa (Dark Theme)
        galaxy: {
          bg: "#080a0f",        // Fundo principal (quase preto azulado)
          surface: "#0f131c",   // Cards e contêineres
          border: "#1f293d",    // Bordas e divisores
          text: "#e2e8f0",      // Texto principal
          muted: "#64748b",     // Texto secundário/subtítulo
        },
        // Identidade dos Departamentos e Ramificações
        brand: {
          cyan: "#00f0ff",     // Setor Científico / Tecnologia / Destaques
          blue: "#0066ff",     // Setor Administrativo / Logística
          red: "#ff003c",      // Segurança / Alertas da PCGC e ECGC
          gold: "#f59e0b",     // Galaxy Bank / Área Financeira
          emerald: "#10b981",  // Setor Médico / Biomedicina
        },
      },
      fontFamily: {
        // Fontes monoespaçadas para um ar mais militar/técnico de ARG
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        // Efeitos de brilho (glow) para elementos interativos do ARG
        "glow-cyan": "0 0 20px rgba(0, 240, 255, 0.25)",
        "glow-red": "0 0 20px rgba(255, 0, 60, 0.25)",
        "glow-gold": "0 0 20px rgba(245, 158, 11, 0.25)",
      },
    },
  },
  plugins: [],
};

