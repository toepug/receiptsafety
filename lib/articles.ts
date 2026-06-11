import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
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

  const processed = await remark().use(remarkGfm).use(html).process(content);
  let contentHtml = processed.toString();

  // Remove leading <h1> — the page header already renders the title from frontmatter
  contentHtml = contentHtml.replace(/<h1[^>]*>[\s\S]*?<\/h1>/i, '');

  // Remove any text before the first <h2> (duplicate intro paragraph from markdown body)
  const h2Index = contentHtml.search(/<h2/i);
  if (h2Index > 0) {
    contentHtml = contentHtml.slice(h2Index);
  }

  // Open all external links in a new tab
  contentHtml = contentHtml.replace(
    /<a href="(https?:\/\/[^"]+)"/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer"'
  );

  contentHtml = injectAnchors(contentHtml);

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
