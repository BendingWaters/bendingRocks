"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { workProjects } from "@/data/work";

export function Gallery() {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    const cards = [...workProjects, ...workProjects];

    useEffect(() => {
        const container = containerRef.current;
        const track = trackRef.current;
        if (!container || !track) return;

        const handleScroll = () => {
            const rect = container.getBoundingClientRect();
            const viewHeight = window.innerHeight;
            const totalHeight = rect.height;
            const scrolled = -rect.top;
            const maxScroll = totalHeight - viewHeight;

            if (maxScroll <= 0) return;

            // Clamped scroll progress (0 to 1)
            const progress = Math.max(0, Math.min(1, scrolled / maxScroll));
            
            // Calculate limit (total scrollable horizontal width)
            const limit = Math.max(0, track.scrollWidth - window.innerWidth);
            
            // Apply horizontal transform on the track
            track.style.transform = `translateX(-${progress * limit}px)`;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);
        
        // Timeout to ensure elements are measured after paint/images loaded
        const timer = setTimeout(handleScroll, 100);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
            clearTimeout(timer);
        };
    }, []);

    return (
        <section ref={containerRef} className="relative h-[200vh] w-full">
            {/* Sticky view wrapper */}
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">

                <div className="px-4 md:px-16 lg:px-24 xl:px-32 mb-8 flex items-end justify-between gap-6 flex-wrap">
                    <div>
                        <div className="flex items-center gap-1.5">
                            <span className="size-1.5 bg-zinc-900"></span>
                            <span className="text-sm text-zinc-900">SELECTED WORK</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl text-zinc-900 mt-4 leading-tight max-w-2xl">
                            Built to Sell. Designed to Stick.
                        </h2>
                        <p className="text-zinc-500 text-sm md:text-base mt-3 max-w-xl">
                            Brand worlds, campaigns, visuals and launch systems created for the places shaping tomorrow.
                        </p>
                    </div>
                    <Link href="/work" className="hidden md:inline-flex items-center gap-2 border border-zinc-200 text-zinc-800 hover:bg-zinc-50 px-6 py-3 rounded-full text-sm transition shrink-0">
                        <span>Explore All Work</span>
                        <MoveRight size={16} />
                    </Link>
                </div>

                {/* Horizontal scroll track */}
                <div ref={trackRef} className="flex gap-5 px-4 md:px-16 lg:px-24 xl:px-32 py-6 will-change-transform transition-transform duration-300 ease-out">
                    {cards.map((project, index) => (
                        <Link key={`${project.slug}-${index}`} href={`/work/${project.slug}`} className="relative shrink-0 w-91 h-114.25 rounded-xl overflow-hidden group">
                            <Image src={project.image} alt={project.name} width={364} height={457} className="object-cover w-full h-full pointer-events-none group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/0 to-black/0" />
                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <span className="text-xs text-white/70 uppercase tracking-wide">{project.location}</span>
                                <h3 className="text-lg mt-1">{project.name}</h3>
                                <p className="text-sm text-white/80 mt-1 max-w-xs">{project.microcopy}</p>
                                <span className="inline-flex items-center gap-1.5 text-xs mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    View Project <MoveRight size={14} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="px-4 md:px-16 lg:px-24 xl:px-32 mt-6 md:hidden">
                    <Link href="/work" className="inline-flex items-center gap-2 border border-zinc-200 text-zinc-800 px-6 py-3 rounded-full text-sm">
                        <span>Explore All Work</span>
                        <MoveRight size={16} />
                    </Link>
                </div>

            </div>
        </section>
    );
}