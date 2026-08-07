"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PageHero } from "@/components/page-hero";
import { Eyebrow } from "@/components/eyebrow";
import { CallToAction } from "@/sections/call-to-action";

const categories = ["All", "Exteriors", "Interiors", "Aerials", "Amenities", "Living Rooms", "Bedrooms", "Kitchens", "Bathrooms", "Pools", "Landscapes", "Animation", "Film"];

const visualImages = [
    { src: "/assets/galleryImage1.png", category: "Exteriors" },
    { src: "/assets/galleryImage2.png", category: "Interiors" },
    { src: "/assets/galleryImage3.png", category: "Aerials" },
    { src: "/assets/galleryImage4.png", category: "Amenities" },
    { src: "/assets/house.png", category: "Living Rooms" },
    { src: "/assets/galleryImage1.png", category: "Landscapes" },
    { src: "/assets/galleryImage2.png", category: "Pools" },
    { src: "/assets/galleryImage3.png", category: "Bedrooms" },
];

const visualServices = [
    { title: "Architectural CGI", description: "Photoreal exterior and interior imagery developed from architectural drawings, material schedules and design references." },
    { title: "Lifestyle Visualisation", description: "Human-centred scenes that communicate the social and emotional experience of the development." },
    { title: "Animation", description: "Cinematic property journeys designed for launches, presentations, paid media and sales environments." },
    { title: "Property Film", description: "Live action, CGI and motion combined into a complete project narrative." },
    { title: "Social Visual Content", description: "Vertical edits, motion loops, reveal films and campaign assets designed for contemporary digital platforms." },
    { title: "Interactive Experience", description: "Virtual tours and interactive environments that allow prospective buyers to explore remotely." },
];

const guidingQuestions = [
    "What time is it?",
    "Who lives here?",
    "What has just happened?",
    "What does the city feel like outside?",
    "What should the buyer feel before noticing the finishes?",
];

export default function VisualsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredImages = activeCategory === "All"
        ? visualImages
        : visualImages.filter((image) => image.category === activeCategory);

    return (
        <main>
            <PageHero
                eyebrow="BENDINGROCKS VISUALS"
                headline="Not Just Renders. Selling Worlds."
                copy="Cinematic architectural visualisation, animation and property films created to make the unbuilt feel immediate, emotional and believable."
                buttons={[{ label: "View the Reel", href: "/work" }]}
            />

            <section className="px-4 md:px-16 lg:px-24 xl:px-32 w-full py-10">
                <p className="text-zinc-600 text-base md:text-lg max-w-2xl">
                    A technically correct image can still feel empty. We think beyond surfaces and furniture.
                </p>
                <ul className="flex flex-col gap-2 mt-6 max-w-xl">
                    {guidingQuestions.map((question) => (
                        <li key={question} className="text-zinc-500 text-sm md:text-base">{question}</li>
                    ))}
                </ul>
                <p className="text-zinc-900 text-base md:text-lg mt-6">That is how a render becomes a world.</p>
            </section>

            <section className="px-4 md:px-16 lg:px-24 xl:px-32 w-full pb-10">
                <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <button key={category} onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full text-xs transition cursor-pointer ${activeCategory === category ? "bg-zinc-950 text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {filteredImages.length === 0 ? (
                    <p className="text-zinc-400 text-sm mt-16">Nothing on this plot yet. Try another filter.</p>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                        {filteredImages.map((image, index) => (
                            <motion.div key={`${image.src}-${index}`} className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden bg-zinc-100"
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: (index % 4) * 0.05, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                            >
                                <Image src={image.src} alt={`${image.category} visualisation`} fill className="object-cover" />
                            </motion.div>
                        ))}
                    </div>
                )}
            </section>

            <section className="px-4 md:px-16 lg:px-24 xl:px-32 w-full py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <Eyebrow label="VISUAL SERVICES" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                        {visualServices.map((service) => (
                            <div key={service.title} className="bg-white rounded-xl p-6 border border-zinc-100">
                                <h3 className="text-base text-zinc-900 font-medium">{service.title}</h3>
                                <p className="text-sm text-zinc-500 mt-3 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CallToAction
                headline="Your Project Is Still on Paper. Let's Change That."
                copy="Bring us the drawings, the material schedule or the half-finished plan. We will make it believable before it is built."
                buttonLabel="Brief Our Visual Team"
                buttonHref="/contact"
                microcopy=""
            />
        </main>
    );
}
