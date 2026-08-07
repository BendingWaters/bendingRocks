"use client";

import { useState } from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Eyebrow } from "@/components/eyebrow";
import { plotArticles } from "@/data/plot";

export default function ThePlotPage() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const featured = plotArticles.find((article) => article.featured) ?? plotArticles[0];
    const suggested = plotArticles.filter((article) => article.slug !== featured.slug);

    return (
        <main>
            <PageHero
                eyebrow="IDEAS FROM BENDINGROCKS"
                headline="Here's the Plot."
                copy="Sharp thinking on property brands, buyer behaviour, African cities, marketing, technology and the future of real estate. No recycled trend reports. No motivational LinkedIn filler. Just useful ideas for people building and selling places."
            />

            {/* Featured Article */}
            <section className="px-4 md:px-16 lg:px-24 xl:px-32 w-full pb-10">
                <Link href={`/the-plot/${featured.slug}`} className="group block bg-zinc-950 rounded-2xl p-8 md:p-14 max-w-4xl">
                    <span className="text-xs text-zinc-400 uppercase tracking-wide">{featured.category}</span>
                    <h2 className="text-3xl md:text-5xl text-white mt-4 leading-tight max-w-2xl">{featured.headline}</h2>
                    <p className="text-zinc-400 text-sm md:text-base mt-4 max-w-xl">{featured.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-sm text-white mt-8 border-b border-white/30 pb-1 group-hover:border-white transition-colors">
                        Read the Story <MoveRight size={14} />
                    </span>
                </Link>
            </section>

            {/* Suggested Articles */}
            <section className="px-4 md:px-16 lg:px-24 xl:px-32 w-full pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {suggested.map((article) => (
                        <Link key={article.slug} href={`/the-plot/${article.slug}`} className="group flex flex-col border border-zinc-100 rounded-xl p-6 hover:border-zinc-200 transition-colors">
                            <span className="text-xs text-zinc-400 uppercase tracking-wide">{article.category}</span>
                            <h3 className="text-lg text-zinc-900 mt-3 leading-snug group-hover:opacity-70 transition-opacity">{article.headline}</h3>
                            <p className="text-sm text-zinc-500 mt-3 leading-relaxed">{article.excerpt}</p>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Newsletter */}
            <section className="px-4 md:px-16 lg:px-24 xl:px-32 w-full py-20 bg-gray-50 flex flex-col items-start">
                <Eyebrow label="STAY IN THE LOOP" />
                <h2 className="text-3xl md:text-5xl text-zinc-900 mt-6 leading-tight max-w-xl">Get The Plot Before Everyone Else.</h2>
                <p className="text-zinc-500 text-sm md:text-base mt-4 max-w-md">
                    Occasional observations on property, branding, culture and growth. No daily noise. No inbox occupation.
                </p>

                {subscribed ? (
                    <p className="text-zinc-900 text-base mt-8">You are officially in the plot.</p>
                ) : (
                    <form className="flex flex-col sm:flex-row gap-3 mt-8 w-full max-w-md" onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}>
                        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="flex-1 border border-zinc-200 rounded-full px-5 py-3 text-sm text-zinc-800 placeholder-zinc-400 bg-white focus:outline-none focus:border-zinc-300 transition-colors" />
                        <button type="submit" className="bg-zinc-950 hover:bg-zinc-900 text-white text-sm px-6 py-3 rounded-full transition-colors cursor-pointer shrink-0">
                            Keep Me in the Loop
                        </button>
                    </form>
                )}
            </section>
        </main>
    );
}
