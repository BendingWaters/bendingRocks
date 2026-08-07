"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CallToAction } from "@/sections/call-to-action";
import { workProjects } from "@/data/work";

const filterLabels = ["All", "Residential", "Hospitality", "Commercial", "Destinations", "Branding", "Campaigns", "CGI", "Digital"];

export default function WorkPage() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = activeFilter === "All"
        ? workProjects
        : workProjects.filter((project) => project.filters.includes(activeFilter));

    return (
        <main>
            <PageHero
                eyebrow="SELECTED WORK"
                headline="Proof, Not Moodboards."
                copy="Real-estate brands, campaigns and experiences built to give developments a distinctive place in the market."
            />

            <section className="px-4 md:px-16 lg:px-24 xl:px-32 w-full">
                <p className="text-zinc-500 text-sm md:text-base max-w-2xl">
                    Every project begins with a different commercial problem. Some need to command a premium. Some need to escape category sameness. Some need to sell an unbuilt future. Some need a complete reset. Our job is to identify the real problem before producing the visible work.
                </p>

                <div className="flex flex-wrap gap-2 mt-10">
                    {filterLabels.map((label) => (
                        <button key={label} onClick={() => setActiveFilter(label)}
                            className={`px-4 py-2 rounded-full text-xs transition cursor-pointer ${activeFilter === label ? "bg-zinc-950 text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {filteredProjects.length === 0 ? (
                    <p className="text-zinc-400 text-sm mt-16 mb-16">Nothing on this plot yet. Try another filter.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-10">
                        {filteredProjects.map((project, index) => (
                            <motion.div key={project.slug}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: (index % 2) * 0.1, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                            >
                                <Link href={`/work/${project.slug}`} className="group flex flex-col">
                                    <div className="relative w-full h-80 rounded-xl overflow-hidden bg-zinc-100">
                                        <Image src={project.image} alt={project.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="mt-5 flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-xl text-zinc-900">{project.name}</h3>
                                            <p className="text-xs text-zinc-500 mt-1">{project.location} · {project.category}</p>
                                            <p className="text-sm text-zinc-600 mt-3 max-w-md">{project.microcopy}</p>
                                        </div>
                                        <span className="shrink-0 mt-1 inline-flex items-center gap-1.5 text-sm text-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            View Case Study <MoveRight size={14} />
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                )}
            </section>

            <CallToAction
                headline="Your Project Could Live Here Next."
                copy="Tell us what you are building, where it is located and what the market needs to understand."
                buttonLabel="Brief BendingRocks"
                buttonHref="/contact"
                microcopy=""
            />
        </main>
    );
}
