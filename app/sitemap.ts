import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://google-ads-specialist-o29qi8yji-kerbzs-projects-9972489a.vercel.app'

  // Core pages
  const corePages = [
    '',
    '/services',
    '/case-studies',
    '/about',
    '/contact',
    '/resources',
  ]

  // Industry pillar pages
  const industryPages = [
    '/google-ads-for-hvac',
    '/google-ads-for-plumbing',
  ]

  // Supporting articles
  const supportingArticles = [
    '/resources/hvac/hvac-lead-generation-strategies',
  ]

  // Combine all pages
  const allPages = [...corePages, ...industryPages, ...supportingArticles]

  return allPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : route.includes('/resources/') ? 'monthly' : 'weekly',
    priority: route === '' ? 1.0 : route.includes('/resources/') ? 0.7 : 0.8,
  }))
}
