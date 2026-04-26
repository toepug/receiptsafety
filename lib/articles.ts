import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const articlesDir = path.join(process.cwd(), "content/articles");

export interface ArticleMeta {
  title: string;
  date: string;
  description: string;
  slug: string;
  featured?: boolean;
}

export interface Article extends ArticleMeta {
  contentHtml: string;
}

const ANCHOR_MAP: Record<string, string> = {
  "Step 1: The Scratch Test": "scratch-test",
  "Step 2: The Sanitizer Strike": "sanitizer-strike",
  "Step 3: The Manager Memo": "manager-memo",
};

function injectAnchors(rawHtml: string): string {
  let result = rawHtml;
  for (const [text, id] of Object.entries(ANCHOR_MAP)) {
    result = result.replace(
      new RegExp(`(<h3>)(${text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})(<\/h3>)`, "g"),
      `<h3 id="${id}">$2</h3>`
    );
  }
  return result;
}

export async function getArticleBySlug(slug: string): Promise<Article> {
  const filePath = path.join(articlesDir, `${slug}.md`);
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  const processed = await remark().use(html).process(content);
  const contentHtml = injectAnchors(processed.toString());

  return {
    title: data.title as string,
    date: data.date as string,
    description: data.description as string,
    slug: data.slug as string,
    featured: data.featured as boolean | undefined,
    contentHtml,
  };
}

export function getAllArticles(): ArticleMeta[] {
  const files = fs.readdirSync(articlesDir).filter((f) => f.endsWith(".md"));

  const articles = files.map((filename) => {
    const filePath = path.join(articlesDir, filename);
    const source = fs.readFileSync(filePath, "utf8");
    const { data } = matter(source);
    return {
      title: data.title as string,
      date: data.date as string,
      description: data.description as string,
      slug: data.slug as string,
      featured: data.featured as boolean | undefined,
    };
  });

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
