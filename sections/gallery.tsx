"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function Gallery() {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    const images = [
        "/assets/galleryImage1.png", "/assets/galleryImage2.png", "/assets/galleryImage3.png", "/assets/galleryImage4.png",
        "/assets/galleryImage1.png", "/assets/galleryImage2.png", "/assets/galleryImage3.png", "/assets/galleryImage4.png"
    ];

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

                <div className="px-4 md:px-16 lg:px-24 xl:px-32 mb-8">
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

                {/* Horizontal scroll track */}
                <div ref={trackRef} className="flex gap-5 px-4 md:px-16 lg:px-24 xl:px-32 py-6 will-change-transform transition-transform duration-300 ease-out">
                    {images.map((src, index) => (
                        <Image key={index} src={src} alt={`BendingRocks selected work ${index + 1}`} width={364} height={457} className="object-cover shrink-0 pointer-events-none" />
                    ))}
                </div>

            </div>
        </section>
    );
}