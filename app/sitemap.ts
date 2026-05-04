import { getAllArticles } from '@/lib/articles'

export default async function sitemap() {
  const articles = getAllArticles()

  const articleUrls = articles.map((article) => ({
    url: `https://www.receiptsafety.com/articles/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const staticPages = [
    {
      url: 'https://www.receiptsafety.com',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: 'https://www.receiptsafety.com/articles',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: 'https://www.receiptsafety.com/resources',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://www.receiptsafety.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: 'https://www.receiptsafety.com/manager-memo',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  return [...staticPages, ...articleUrls]
}
