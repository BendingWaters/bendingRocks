import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Eyebrow } from "@/components/eyebrow";
import { CallToAction } from "@/sections/call-to-action";
import { workProjects, getWorkProjectBySlug } from "@/data/work";

export function generateStaticParams() {
    return workProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getWorkProjectBySlug(slug);
    if (!project) return {};
    return {
        title: `${project.name} | BendingRocks Case Study`,
        description: project.microcopy,
    };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getWorkProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const currentIndex = workProjects.findIndex((p) => p.slug === project.slug);
    const nextProject = workProjects[(currentIndex + 1) % workProjects.length];

    return (
        <main>
            {/* Project Hero */}
            <section className="pt-36 pb-16 md:pt-44 md:pb-20 px-4 md:px-16 lg:px-24 xl:px-32 w-full">
                <div className="max-w-4xl">
                    <span className="text-xs text-zinc-500 uppercase tracking-wide">{project.location}</span>
                    <h1 className="text-4xl md:text-6xl text-zinc-900 mt-3 leading-tight">{project.name}</h1>
                    <p className="text-lg md:text-xl text-zinc-600 mt-4 max-w-2xl">{project.microcopy}</p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 max-w-2xl">
                        <div>
                            <span className="text-xs text-zinc-400">Client</span>
                            <p className="text-sm text-zinc-800 mt-1">{project.client}</p>
                        </div>
                        <div>
                            <span className="text-xs text-zinc-400">Year</span>
                            <p className="text-sm text-zinc-800 mt-1">{project.year}</p>
                        </div>
                        <div>
                            <span className="text-xs text-zinc-400">Sector</span>
                            <p className="text-sm text-zinc-800 mt-1">{project.sector}</p>
                        </div>
                        <div>
                            <span className="text-xs text-zinc-400">Status</span>
                            <p className="text-sm text-zinc-800 mt-1">{project.status}</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <span className="text-xs text-zinc-400">What We Did</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.services.map((service) => (
                                <span key={service} className="text-xs bg-zinc-100 text-zinc-700 px-3 py-1.5 rounded-full">{service}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="relative w-full h-[70vh] max-h-[560px] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-zinc-100">
                    <Image src={project.image} alt={project.name} fill className="object-cover" priority />
                </div>
            </div>

            {/* Assignment */}
            <section className="py-20 px-4 md:px-16 lg:px-24 xl:px-32 w-full max-w-4xl mx-auto">
                <Eyebrow label="THE ASSIGNMENT" />
                <p className="text-zinc-600 text-base md:text-lg leading-relaxed mt-6">{project.assignment}</p>
            </section>

            {/* Challenge */}
            <section className="py-4 px-4 md:px-16 lg:px-24 xl:px-32 w-full max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl text-zinc-900 leading-tight">{project.challengeHeadline}</h2>
                <p className="text-zinc-600 text-base leading-relaxed mt-5">{project.challenge}</p>
            </section>

            {/* Strategic Idea */}
            <section className="py-20 px-4 md:px-16 lg:px-24 xl:px-32 w-full max-w-4xl mx-auto">
                <Eyebrow label="BRAND STRATEGY" />
                <h2 className="text-2xl md:text-3xl text-zinc-900 leading-tight mt-6">{project.strategicIdea}</h2>
                <p className="text-zinc-600 text-base leading-relaxed mt-5">{project.strategy}</p>
            </section>

            {/* Audience */}
            <section className="py-4 px-4 md:px-16 lg:px-24 xl:px-32 w-full max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl text-zinc-900 leading-tight">Built for People Who Expect More From an Address.</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
                    <div>
                        <span className="text-xs text-zinc-400 uppercase tracking-wide">Primary Audience</span>
                        <p className="text-sm text-zinc-600 mt-2 leading-relaxed">{project.audiencePrimary}</p>
                    </div>
                    <div>
                        <span className="text-xs text-zinc-400 uppercase tracking-wide">Secondary Audience</span>
                        <p className="text-sm text-zinc-600 mt-2 leading-relaxed">{project.audienceSecondary}</p>
                    </div>
                    <div>
                        <span className="text-xs text-zinc-400 uppercase tracking-wide">Investor Audience</span>
                        <p className="text-sm text-zinc-600 mt-2 leading-relaxed">{project.audienceInvestor}</p>
                    </div>
                </div>
            </section>

            {/* Identity */}
            <section className="py-20 px-4 md:px-16 lg:px-24 xl:px-32 w-full max-w-4xl mx-auto">
                <Eyebrow label="THE IDENTITY" />
                <h2 className="text-2xl md:text-3xl text-zinc-900 leading-tight mt-6">A Brand System Built Like the Property.</h2>
                <p className="text-zinc-600 text-base leading-relaxed mt-5">{project.identity}</p>
            </section>

            {/* Brand Voice */}
            <section className="py-4 px-4 md:px-16 lg:px-24 xl:px-32 w-full max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl text-zinc-900 leading-tight">How the Property Speaks.</h2>
                <p className="text-zinc-600 text-base leading-relaxed mt-5">{project.voice}</p>
                <div className="flex flex-col gap-3 mt-6">
                    {project.campaignLines.map((line) => (
                        <p key={line} className="text-lg md:text-xl text-zinc-900">&ldquo;{line}&rdquo;</p>
                    ))}
                </div>
            </section>

            {/* CGI */}
            <section className="py-20 px-4 md:px-16 lg:px-24 xl:px-32 w-full max-w-4xl mx-auto">
                <Eyebrow label="VISUALISING THE WORLD" />
                <h2 className="text-2xl md:text-3xl text-zinc-900 leading-tight mt-6">Before It Was Built, It Had to Be Believed.</h2>
                <p className="text-zinc-600 text-base leading-relaxed mt-5">{project.cgi}</p>
            </section>

            <div className="grid grid-cols-2 gap-5 px-4 md:px-16 lg:px-24 xl:px-32 mb-4">
                <div className="relative h-64 md:h-96 rounded-xl overflow-hidden bg-zinc-100">
                    <Image src={project.image} alt={`${project.name} visualisation`} fill className="object-cover" />
                </div>
                <div className="relative h-64 md:h-96 rounded-xl overflow-hidden bg-zinc-100">
                    <Image src="/assets/house.png" alt={`${project.name} lifestyle visualisation`} fill className="object-cover" />
                </div>
            </div>

            {/* Applications */}
            <section className="py-20 px-4 md:px-16 lg:px-24 xl:px-32 w-full max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl text-zinc-900 leading-tight">One Idea. Every Touchpoint.</h2>
                <div className="flex flex-wrap gap-2 mt-6">
                    {project.applications.map((application) => (
                        <span key={application} className="text-xs bg-zinc-100 text-zinc-700 px-3 py-1.5 rounded-full">{application}</span>
                    ))}
                </div>
            </section>

            {/* Go-to-Market */}
            <section className="py-4 px-4 md:px-16 lg:px-24 xl:px-32 w-full max-w-4xl mx-auto">
                <Eyebrow label="LAUNCH" />
                <h2 className="text-2xl md:text-3xl text-zinc-900 leading-tight mt-6">From Brand System to Market Moment.</h2>
                <p className="text-zinc-600 text-base leading-relaxed mt-5">{project.goToMarket}</p>
            </section>

            {/* Results */}
            <section className="py-20 px-4 md:px-16 lg:px-24 xl:px-32 w-full max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl text-zinc-900 leading-tight">What Moved.</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                    {project.results.map((result) => (
                        <p key={result} className="text-sm text-zinc-700 bg-zinc-50 rounded-lg p-5 leading-relaxed">{result}</p>
                    ))}
                </div>
                <p className="text-zinc-900 text-lg mt-10">Design made the project visible. Strategy made it valuable.</p>
            </section>

            {/* Next Case Study */}
            <section className="px-4 md:px-16 lg:px-24 xl:px-32 w-full pb-10">
                <Link href={`/work/${nextProject.slug}`} className="group flex items-center justify-between border-t border-zinc-200 pt-10 pb-16">
                    <div>
                        <span className="text-xs text-zinc-400 uppercase tracking-wide">Next Case Study</span>
                        <h3 className="text-2xl md:text-4xl text-zinc-900 mt-2 group-hover:opacity-70 transition-opacity">{nextProject.name}</h3>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-2 border border-zinc-200 text-zinc-800 px-6 py-3 rounded-full text-sm group-hover:bg-zinc-50 transition">
                        Keep Exploring <MoveRight size={16} />
                    </span>
                </Link>
            </section>

            <CallToAction />
        </main>
    );
}
