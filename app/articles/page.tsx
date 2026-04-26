import { getAllArticles } from "@/lib/articles";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles — ReceiptSafety.com",
  description: "Science-backed guides for retail workers and business owners on BPA, BPS, and thermal paper receipt safety.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Articles &amp; Guides</h1>
        <p className="text-gray-500 text-lg">
          Fact-first resources for retail workers navigating BPA, BPS, and the 2026 receipt chemical regulations.
        </p>
      </header>

      <div className="grid gap-6">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                {article.featured && (
                  <div className="inline-flex items-center bg-[#2E9E6B]/10 text-[#2E9E6B] text-xs font-bold px-2.5 py-0.5 rounded-full mb-3 uppercase tracking-wide">
                    Featured
                  </div>
                )}
                <h2 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
                  {article.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">{article.description}</p>
                <div className="flex items-center gap-4">
                  <time
                    dateTime={article.date}
                    className="text-sm text-gray-400"
                  >
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      timeZone: "UTC",
                    })}
                  </time>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link
                href={`/articles/${article.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E6FCC] hover:text-[#1457a3] transition-colors"
              >
                Read Guide
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
