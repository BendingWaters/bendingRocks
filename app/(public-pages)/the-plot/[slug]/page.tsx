import { notFound } from "next/navigation";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { plotArticles, getPlotArticleBySlug } from "@/data/plot";

export function generateStaticParams() {
    return plotArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = getPlotArticleBySlug(slug);
    if (!article) return {};
    return {
        title: `${article.headline} | The Plot — BendingRocks`,
        description: article.excerpt,
    };
}

export default async function PlotArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = getPlotArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    const related = plotArticles.filter((item) => item.slug !== article.slug).slice(0, 3);

    return (
        <main>
            <section className="pt-36 pb-16 md:pt-44 md:pb-20 px-4 md:px-16 lg:px-24 xl:px-32 w-full max-w-3xl">
                <span className="text-xs text-zinc-400 uppercase tracking-wide">{article.category}</span>
                <h1 className="text-3xl md:text-5xl text-zinc-900 mt-4 leading-tight">{article.headline}</h1>
                <p className="text-lg text-zinc-600 mt-6 leading-relaxed">{article.excerpt}</p>
                <p className="text-zinc-500 text-sm mt-10 border-t border-zinc-200 pt-6">
                    This piece is part of an ongoing series from BendingRocks on property brands, buyer behaviour and African cities. The full write-up is being prepared — reach out if you would like to talk through the thinking before it publishes.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm text-zinc-900 mt-6 group">
                    <span className="border-b border-zinc-300 group-hover:border-zinc-900 transition-colors">Talk to Us About It</span>
                    <MoveRight size={14} />
                </Link>
            </section>

            <section className="px-4 md:px-16 lg:px-24 xl:px-32 w-full pb-20">
                <div className="border-t border-zinc-200 pt-10">
                    <span className="text-xs text-zinc-400 uppercase tracking-wide">More From the Plot</span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                        {related.map((item) => (
                            <Link key={item.slug} href={`/the-plot/${item.slug}`} className="group flex flex-col border border-zinc-100 rounded-xl p-6 hover:border-zinc-200 transition-colors">
                                <span className="text-xs text-zinc-400 uppercase tracking-wide">{item.category}</span>
                                <h3 className="text-base text-zinc-900 mt-3 leading-snug group-hover:opacity-70 transition-opacity">{item.headline}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
