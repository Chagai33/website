import { Helmet } from 'react-helmet-async';
import rawSiteContent from '../data/site-content.json';

const siteContent = rawSiteContent as any;

// TypeScript types
type Language = 'he' | 'en';

interface SEOProps {
  lang: Language;
}

// OG image - absolute URL required for social platforms
const SITE_URL = 'https://chagai-portfolio.netlify.app'; // Update with your actual URL
const OG_IMAGE_URL = `${SITE_URL}/profile.jpg`;

export const SEO = ({ lang }: SEOProps) => {
  // Extract unique keywords from all projects' techStack
  const allTechStack: string[] = siteContent.projects?.items?.flatMap(
    (project: any) => project.techStack || []
  ) || [];
  const uniqueKeywords = [...new Set(allTechStack)].join(', ');

  // Build meta content
  const title = `${siteContent.meta.author} | ${siteContent.meta.role}`;
  const description = siteContent.hero.subtitle[lang] || siteContent.hero.subtitle.en;
  const dir = lang === 'he' ? 'rtl' : 'ltr';

  return (
    <Helmet>
      {/* HTML attributes */}
      <html lang={lang} dir={dir} />

      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={uniqueKeywords} />
      <meta name="author" content={siteContent.meta.author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE_URL} />
      <meta property="og:locale" content={lang === 'he' ? 'he_IL' : 'en_US'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={SITE_URL} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE_URL} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={SITE_URL} />
    </Helmet>
  );
};
