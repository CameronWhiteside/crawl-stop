// import type { Route } from "./+types/home";

export function meta() {
  return [
    { title: "CrawlStop.com - Anti-Crawling Test Site" },
    {
      name: "description",
      content: "CrawlStop.com is designed to test web crawlers' compliance with anti-scraping measures and crawling restrictions. Features various deterrents and access controls.",
    },
    { name: "robots", content: "noindex, nofollow, noarchive, nosnippet" },
    { name: "author", content: "CrawlStop.com" },
    { name: "keywords", content: "anti-crawling, web scraping protection, crawler blocking, access controls, rate limiting, crawling deterrents" },
    { property: "og:title", content: "CrawlStop.com - Anti-Crawling Test Site" },
    { property: "og:description", content: "Test your web crawler's compliance with anti-scraping measures and crawling restrictions." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://crawlstop.com" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: "CrawlStop.com - Anti-Crawling Test Site" },
    { name: "twitter:description", content: "Test your web crawler's compliance with anti-scraping measures and crawling restrictions." },
    { rel: "canonical", href: "https://crawlstop.com" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    { href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap", rel: "stylesheet" },
  ];
}

export function loader() {
  return {
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  };
}

export default function Home({ loaderData }: { loaderData: { timestamp: string; version: string } }) {
  return (
    <div className="min-h-screen bg-gray-950 font-['Inter']">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Human-readable content */}
        <main>
          <header className="text-center mb-12">
            <div className="flex items-center justify-center mb-4 flex-col sm:flex-row">
              <img src="/assets/crawl-stop.svg" alt="CrawlStop Logo" className="w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-0 sm:mr-4" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight text-center">CrawlStop.com</h1>
            </div>
          </header>

          <section className="mb-10 text-center">
            <div className="prose max-w-none text-gray-300">
              <p className="mb-3">
                CrawlStop.com is designed to test web crawlers' ability to respect crawling controls and anti-scraping measures. This site implements various deterrents and access controls to
                discourage automated access.
              </p>
            </div>
          </section>

          <div className="grid lg:grid-cols-2 gap-8 mb-10 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Anti-Crawling Features</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center justify-center">
                  <span className="text-red-600 mr-3 text-lg">•</span>
                  <span>Restrictive robots.txt directives</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-red-600 mr-3 text-lg">•</span>
                  <span>Rate limiting and access controls</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-red-600 mr-3 text-lg">•</span>
                  <span>No-index meta tags</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-red-600 mr-3 text-lg">•</span>
                  <span>Crawling deterrents</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Test Your Crawler</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center justify-center">
                  <span className="text-blue-600 mr-3 text-lg">•</span>
                  <span>Respect robots.txt restrictions</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-blue-600 mr-3 text-lg">•</span>
                  <span>Handle rate limiting gracefully</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-blue-600 mr-3 text-lg">•</span>
                  <span>Comply with no-index directives</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-blue-600 mr-3 text-lg">•</span>
                  <span>Recognize access controls</span>
                </li>
              </ul>
            </div>
          </div>
        </main>

        {/* Copyright Footer */}
        <footer className="border-t border-gray-700 pt-8 mt-12">
          <div className="text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} CrawlStop.com. Built for testing crawler compliance.</p>
            <p className="mt-1">
              Open source and available on{" "}
              <a
                href="https://github.com/CameronWhiteside/crawl-stop"
                className="text-blue-400 hover:text-blue-300 underline hover:no-underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          </div>
        </footer>

        {/* Machine-readable structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "CrawlStop.com",
              description: "CrawlStop.com is designed to test web crawlers' compliance with anti-scraping measures and crawling restrictions. Features various deterrents and access controls.",
              url: "https://crawlstop.com",
              author: {
                "@type": "Organization",
                name: "CrawlStop.com",
              },
              publisher: {
                "@type": "Organization",
                name: "CrawlStop.com",
              },
              datePublished: "2024-01-01",
              dateModified: new Date().toISOString().split("T")[0],
              mainEntity: {
                "@type": "TechArticle",
                headline: "CrawlStop.com - Anti-Crawling Test Site",
                description: "Test your web crawler's compliance with anti-scraping measures and crawling restrictions.",
                articleBody:
                  "CrawlStop.com serves as a testing environment for web crawlers to validate their compliance with anti-scraping measures and crawling restrictions. The site implements various deterrents and access controls to discourage automated access.",
                keywords: ["anti-crawling", "web scraping protection", "crawler blocking", "access controls", "rate limiting", "crawling deterrents"],
                author: {
                  "@type": "Organization",
                  name: "CrawlStop.com",
                },
                about: {
                  "@type": "SoftwareApplication",
                  applicationCategory: "Testing Environment",
                  operatingSystem: "Web-based",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                  },
                },
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              additionalType: "TestingEnvironment",
              sitePurpose: "Test crawler compliance with restrictions",
              targetAudience: "Developers & researchers",
              contentFeatures: [
                "Restrictive robots.txt directives",
                "Rate limiting and access controls",
                "No-index meta tags",
                "Crawling deterrents",
                "Anti-scraping measures",
                "Access control testing",
              ],
            }),
          }}
        />

        <div style={{ display: "none" }}>
          <div id="crawler-metadata">
            <meta name="site-purpose" content="Test crawler compliance with restrictions" />
            <meta name="content-type" content="Anti-crawling test environment" />
            <meta name="target-audience" content="Developers & researchers" />
            <meta name="test-features" content="robots-txt-restrictions,rate-limiting,access-controls,no-index-tags,crawling-deterrents" />
            <meta name="expected-behavior" content="respect-restrictions,handle-rate-limiting,comply-with-directives,recognize-controls" />
            <meta name="site-version" content={loaderData.version} />
            <meta name="last-updated" content={loaderData.timestamp} />
          </div>
        </div>
      </div>
    </div>
  );
}
