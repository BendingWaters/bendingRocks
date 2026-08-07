"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";

const capabilities = [
    {
        number: "01",
        title: "Strategy",
        tagline: "Turning Property Into Proposition",
        description: "We identify the market opportunity, audience, competitive advantage and story capable of making the development matter.",
    },
    {
        number: "02",
        title: "Branding",
        tagline: "Turning Architecture Into Identity",
        description: "We create names, narratives and visual systems that make developments recognisable before they are even completed.",
    },
    {
        number: "03",
        title: "Property Marketing",
        tagline: "Turning Attention Into Demand",
        description: "We build the communication and campaign ecosystem required to introduce, launch and sustain a development.",
    },
    {
        number: "04",
        title: "Visualisation",
        tagline: "Turning Plans Into Belief",
        description: "We create cinematic visual worlds that help buyers experience what does not yet physically exist.",
    },
    {
        number: "05",
        title: "Digital",
        tagline: "Turning Interest Into Action",
        description: "We design digital experiences that communicate value clearly and move prospective buyers towards enquiry.",
    },
];

export function Capabilities() {
    return (
        <section className="py-16 md:py-25 px-4 md:px-16 lg:px-24 xl:px-32 w-full bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-start max-w-3xl">
                    <Eyebrow label="WHAT WE BEND" />
                    <motion.h2 className="text-3xl md:text-5xl text-zinc-900 mt-6 leading-tight max-w-xl"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                    >
                        Everything Around the Property
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
                    {capabilities.map((item, index) => (
                        <motion.div key={item.number} className="bg-white rounded-xl p-6 flex flex-col gap-4 border border-zinc-100"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                        >
                            <span className="text-xs text-zinc-400">{item.number}</span>
                            <div>
                                <h3 className="text-base text-zinc-900 font-medium">{item.title}</h3>
                                <p className="text-xs text-zinc-500 uppercase tracking-wide mt-1">{item.tagline}</p>
                            </div>
                            <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div className="mt-10"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <Link href="/services" className="inline-block bg-zinc-950 hover:bg-zinc-900 text-white px-7 py-3 rounded-full text-sm transition">
                        Explore Our Services
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
