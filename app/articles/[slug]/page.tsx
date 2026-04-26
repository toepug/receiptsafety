import { getArticleBySlug, getAllArticles } from "@/lib/articles";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  return { title: `${article.title} — ReceiptSafety.com`, description: article.description };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex gap-12">

        {/* Main content */}
        <article className="flex-1 min-w-0">

          {/* Article header */}
          <header className="mb-8">
            <div className="inline-flex items-center gap-1.5 bg-[#2E9E6B]/10 text-[#2E9E6B] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              2026 Guide
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
              {article.title}
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-4">
              {article.description}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <time dateTime={article.date}>{formattedDate}</time>
              <span>·</span>
              <span>15 min read</span>
            </div>
            <hr className="mt-6 border-gray-200" />
          </header>

          {/* Article body */}
          <div
            className="article-body text-gray-700 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
          />

          {/* Bottom CTA */}
          <div className="mt-16 bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Was this guide helpful?</h2>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              Share it with a coworker who handles receipts, or download the Manager Memo to bring to your supervisor.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={undefined}
                className="inline-flex items-center justify-center gap-2 bg-[#1E6FCC] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#1457a3] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share This Guide
              </button>
              <a
                href="/manager-memo"
                className="inline-flex items-center justify-center gap-2 border border-[#2E9E6B] text-[#2E9E6B] font-semibold px-6 py-3 rounded-lg hover:bg-[#2E9E6B]/5 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Manager Memo
              </a>
            </div>
          </div>

        </article>

        {/* Sticky sidebar */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-24">
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm mb-4">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
                Quick Actions
              </h3>
              <nav className="space-y-2">
                <a
                  href="#scratch-test"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#1E6FCC] transition-colors py-1"
                >
                  <span className="w-5 h-5 bg-[#1E6FCC]/10 rounded flex items-center justify-center shrink-0 text-xs font-bold text-[#1E6FCC]">1</span>
                  The Scratch Test
                </a>
                <a
                  href="#sanitizer-strike"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#1E6FCC] transition-colors py-1"
                >
                  <span className="w-5 h-5 bg-orange-100 rounded flex items-center justify-center shrink-0 text-xs font-bold text-orange-600">2</span>
                  The Sanitizer Strike
                </a>
                <a
                  href="#manager-memo"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#1E6FCC] transition-colors py-1"
                >
                  <span className="w-5 h-5 bg-[#2E9E6B]/10 rounded flex items-center justify-center shrink-0 text-xs font-bold text-[#2E9E6B]">3</span>
                  The Manager Memo
                </a>
              </nav>
            </div>
            <a
              href="/manager-memo"
              className="flex items-center justify-center gap-2 w-full bg-[#2E9E6B] text-white font-semibold text-sm px-4 py-3 rounded-lg hover:bg-[#268a5c] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Manager Memo
            </a>
            <div className="mt-4 bg-blue-50 border border-blue-100 rounded-xl p-4">
              <p className="text-xs text-[#1E6FCC] font-semibold mb-1">2026 WA State Ban</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Washington State now bans bisphenols in thermal receipt paper. Ask your manager if your store has complied.
              </p>
            </div>
          </div>
        </aside>

      </div>

      {/* Back link */}
      <div className="mt-8">
        <Link href="/articles" className="text-sm text-gray-400 hover:text-[#1E6FCC] transition-colors">
          ← All articles
        </Link>
      </div>
    </div>
  );
}
