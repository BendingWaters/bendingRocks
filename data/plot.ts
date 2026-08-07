export interface PlotArticle {
    slug: string;
    category: string;
    headline: string;
    excerpt: string;
    featured?: boolean;
}

export const plotArticles: PlotArticle[] = [
    {
        slug: "the-beige-luxury-problem",
        category: "Brand Strategy",
        headline: "The Beige Luxury Problem",
        excerpt: "Why so many premium property brands look identical — and why marble, gold typography and drone footage are not a positioning strategy.",
        featured: true,
    },
    {
        slug: "a-brochure-is-not-a-go-to-market-strategy",
        category: "Property Marketing",
        headline: "A Brochure Is Not a Go-to-Market Strategy",
        excerpt: "The missing systems between attractive collateral and actual demand.",
    },
    {
        slug: "brand-before-billboard",
        category: "Brand Strategy",
        headline: "Brand Before Billboard",
        excerpt: "Why property marketing should begin long before the media booking.",
    },
    {
        slug: "selling-off-plan-without-selling-fantasy",
        category: "Property Marketing",
        headline: "Selling Off-Plan Without Selling Fantasy",
        excerpt: "How to build belief while remaining commercially and ethically credible.",
    },
    {
        slug: "lagos-is-not-one-market",
        category: "African Cities",
        headline: "Lagos Is Not One Market",
        excerpt: "What Ikoyi, Victoria Island, Lekki and emerging corridors require from different property narratives.",
    },
    {
        slug: "the-new-high-value-buyer-is-design-literate",
        category: "Buyer Behaviour",
        headline: "The New High-Value Buyer Is Design-Literate",
        excerpt: "Why outdated luxury language is losing influence.",
    },
    {
        slug: "your-location-needs-a-story",
        category: "Brand Strategy",
        headline: "Your Location Needs a Story",
        excerpt: "Travel times and nearby landmarks are information. Place positioning creates meaning.",
    },
    {
        slug: "cgi-that-looks-expensive-but-sells-nothing",
        category: "Visualisation",
        headline: "CGI That Looks Expensive but Sells Nothing",
        excerpt: "The difference between visual accuracy and commercial imagination.",
    },
    {
        slug: "after-the-launch-party",
        category: "Brand Lifecycle",
        headline: "After the Launch Party",
        excerpt: "Why property brands need lifecycle communication throughout construction and handover.",
    },
];

export function getPlotArticleBySlug(slug: string): PlotArticle | undefined {
    return plotArticles.find((article) => article.slug === slug);
}
