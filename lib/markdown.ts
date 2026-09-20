import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/noticias");
const careersDirectory = path.join(process.cwd(), "content/vagas");

export interface PostData {
  slug: string;
  title: string;
  date: string;
  department: string;
  summary: string;
  badgeColor?: string;
  content: string;
}

export interface CareerData {
  slug: string;
  title: string;
  department: string;
  description: string;
  requirements?: string[];
  location?: string;
  type?: string;
  badgeColor?: string;
  content: string;
}

export function getLatestNews(limit = 3): PostData[] {
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

  return allPostsData
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, limit);
}

export function getAllCareers(): CareerData[] {
  if (!fs.existsSync(careersDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(careersDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const fullPath = path.join(careersDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matter(fileContents);

      let badgeColor = "border-brand-cyan text-brand-cyan bg-brand-cyan/10";
      if (data.department?.includes("Médico") || data.department?.includes("Biomedicina")) {
        badgeColor = "border-brand-emerald text-brand-emerald bg-brand-emerald/10";
      } else if (data.department?.includes("PCGC") || data.department?.includes("ECGC") || data.department?.includes("Segurança")) {
        badgeColor = "border-brand-red text-brand-red bg-brand-red/10";
      } else if (data.department?.includes("Financeiro") || data.department?.includes("Bank")) {
        badgeColor = "border-brand-gold text-brand-gold bg-brand-gold/10";
      }

      return {
        slug,
        title: data.title || "Cargo Não Especificado",
        department: data.department || "Geral",
        description: data.description || "",
        requirements: data.requirements || [],
        location: data.location || "Local: depende",
        type: data.type || "Tempo: depende",
        badgeColor,
        content,
      };
    });
          }

// Adicione esta função ao final do arquivo lib/markdown.ts

export function getCareerBySlug(slug: string): CareerData | null {
  if (!fs.existsSync(careersDirectory)) {
    return null;
  }

  // Tenta encontrar o arquivo .md ou .mdx
  const realSlug = slug.replace(/\.mdx?$/, "");
  const fullPathMd = path.join(careersDirectory, `${realSlug}.md`);
  const fullPathMdx = path.join(careersDirectory, `${realSlug}.mdx`);

  let fullPath = "";
  if (fs.existsSync(fullPathMd)) {
    fullPath = fullPathMd;
  } else if (fs.existsSync(fullPathMdx)) {
    fullPath = fullPathMdx;
  } else {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  let badgeColor = "border-brand-cyan text-brand-cyan bg-brand-cyan/10";
  if (data.department?.includes("Médico") || data.department?.includes("Biomedicina")) {
    badgeColor = "border-brand-emerald text-brand-emerald bg-brand-emerald/10";
  } else if (data.department?.includes("PCGC") || data.department?.includes("ECGC") || data.department?.includes("Segurança")) {
    badgeColor = "border-brand-red text-brand-red bg-brand-red/10";
  } else if (data.department?.includes("Financeiro") || data.department?.includes("Bank")) {
    badgeColor = "border-brand-gold text-brand-gold bg-brand-gold/10";
  }

  return {
    slug: realSlug,
    title: data.title || "Cargo Não Especificado",
    department: data.department || "Geral",
    description: data.description || "",
    requirements: data.requirements || [],
    location: data.location || "Local: depende",
    type: data.type || "Tempo: depende",
    badgeColor,
    content,
  };
}

// Adicione esta função ao final do arquivo lib/markdown.ts

export function getPostBySlug(slug: string): PostData | null {
  if (!fs.existsSync(postsDirectory)) {
    return null;
  }

  const realSlug = slug.replace(/\.mdx?$/, "");
  const fullPathMd = path.join(postsDirectory, `${realSlug}.md`);
  const fullPathMdx = path.join(postsDirectory, `${realSlug}.mdx`);

  let fullPath = "";
  if (fs.existsSync(fullPathMd)) {
    fullPath = fullPathMd;
  } else if (fs.existsSync(fullPathMdx)) {
    fullPath = fullPathMdx;
  } else {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  let badgeColor = "border-brand-cyan text-brand-cyan bg-brand-cyan/10";
  if (data.department?.includes("Médico") || data.department?.includes("Científico")) {
    badgeColor = "border-brand-emerald text-brand-emerald bg-brand-emerald/10";
  } else if (data.department?.includes("PCGC") || data.department?.includes("ECGC") || data.department?.includes("Segurança")) {
    badgeColor = "border-brand-red text-brand-red bg-brand-red/10";
  }

  return {
    slug: realSlug,
    title: data.title || "Comunicado Sem Título",
    date: data.date || "",
    department: data.department || "Geral",
    summary: data.summary || "",
    badgeColor,
    content,
  };
}
