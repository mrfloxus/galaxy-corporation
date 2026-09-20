import { getLatestNews } from "@/lib/markdown";
import NoticiasClient from "./NoticiasClient";

export const metadata = {
  title: "Portal de Notícias & Comunicados | Galaxy Corporation",
  description: "Fique por dentro das últimas atualizações, comunicados oficiais e relatórios de progresso da Galaxy Corp.",
};

export default function NoticiasPage() {
  // Carrega todas as notícias (passamos um limite alto para trazer todas)
  const noticias = getLatestNews(100);

  return <NoticiasClient noticiasIniciais={noticias} />;
}

