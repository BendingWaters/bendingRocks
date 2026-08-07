"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";

const steps = [
    { number: "01", title: "Discover", description: "We examine the development, location, market, audience, architecture, commercial ambition and competitive landscape." },
    { number: "02", title: "Define", description: "We establish the opportunity, positioning, proposition, narrative and strategic direction." },
    { number: "03", title: "Design", description: "We build the verbal identity, visual world, digital experience and communication system." },
    { number: "04", title: "Launch", description: "We activate the brand across campaigns, content, sales tools, media and market channels." },
    { number: "05", title: "Grow", description: "We track performance, improve communication and support the brand throughout its sales and operational lifecycle." },
];

export function Process() {
    return (
        <section className="py-16 md:py-25 px-4 md:px-16 lg:px-24 xl:px-32 w-full">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-start max-w-3xl">
                    <Eyebrow label="HOW WE MOVE" />
                    <motion.h2 className="text-3xl md:text-5xl text-zinc-900 mt-6 leading-tight max-w-xl"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                    >
                        From First Idea to Market Impact
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-14">
                    {steps.map((step, index) => (
                        <motion.div key={step.number} className="flex flex-col gap-3"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                        >
                            <span className="text-3xl text-zinc-300">{step.number}</span>
                            <h3 className="text-base text-zinc-900 font-medium">{step.title}</h3>
                            <p className="text-sm text-zinc-500 leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div className="mt-12"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <Link href="/services" className="inline-block border border-zinc-200 text-zinc-800 hover:bg-zinc-50 px-7 py-3 rounded-full text-sm transition">
                        See Our Full Process
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
