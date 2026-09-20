import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/noticias");

export interface PostData {
  slug: string;
  title: string;
  date: string;
  department: string;
  summary: string;
  badgeColor?: string;
  content: string;
}

export function getLatestNews(limit = 3): PostData[] {
  // Cria a pasta se ela ainda não existir
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matter(fileContents);

      // Mapeamento dinâmico de cores por departamento
      let badgeColor = "border-brand-cyan text-brand-cyan bg-brand-cyan/10";
      if (data.department?.includes("Médico") || data.department?.includes("Científico")) {
        badgeColor = "border-brand-emerald text-brand-emerald bg-brand-emerald/10";
      } else if (data.department?.includes("PCGC") || data.department?.includes("ECGC") || data.department?.includes("Segurança")) {
        badgeColor = "border-brand-red text-brand-red bg-brand-red/10";
      }

      return {
        slug,
        title: data.title || "Comunicado Sem Título",
        date: data.date || "",
        department: data.department || "Geral",
        summary: data.summary || "",
        badgeColor,
        content,
      };
    });

  // Ordena pelas datas mais recentes
  return allPostsData
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, limit);
        }

