import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ati.wacren.net';
  const locales = ['en', 'fr', 'pt'];
  const routes = ['', '/about', '/training', '/facilitators', '/netsec', '/blog', '/contact'];
  
  const entries: MetadataRoute.Sitemap = [];
  
  routes.forEach((route) => {
    locales.forEach((locale) => {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : 0.8,
      });
    });
  });
  
  return entries;
}
