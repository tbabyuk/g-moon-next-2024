export default function sitemap() {
  const baseUrl = 'https://www.g-moon-wellness.ca'
  
  // Main pages
  const mainPages = [
    '',
    '/about',
    '/contact',
    '/team',
    '/gift-cards',
    '/pricing',
  ]

  // Service category pages
  const servicePages = [
    '/healing-touch-treasures',
    '/ladies-retreat',
    '/scalp-and-foot-care',
    '/essence-of-body-wellness',
    '/curated-luxe-additions',
  ]

  // Individual service pages
  const individualServices = [
    '/massages',
    '/massages/thai-massage',
    '/massages/swedish-massage',
    '/massages/deep-tissue-massage',
    '/massages/shiatsu-massage',
    '/massages/face-massage',
    '/massages/scalp-massage',
    '/massages/couples-massage',
    '/massages/prenatal-massage',
    '/massages/postnatal-massage',
    '/body-scrubs',
    '/body-scrubs/coffee-scrub',
    '/body-scrubs/sugar-scrub',
    '/body-scrubs/sea-salt-scrub',
    '/reflexology',
    '/aromatherapy',
    '/hot-stone-therapy',
    '/table-shower',
  ]

  const allPages = [...mainPages, ...servicePages, ...individualServices]

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.includes('/massages/') || path.includes('/body-scrubs/') ? 0.6 : 0.8,
  }))
}

