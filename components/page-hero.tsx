"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/eyebrow";

export interface PageHeroButton {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
}

export function PageHero({
    eyebrow,
    headline,
    copy,
    buttons,
}: {
    eyebrow: string;
    headline: string;
    copy?: string;
    buttons?: PageHeroButton[];
}) {
    return (
        <section className="pt-36 pb-16 md:pt-44 md:pb-20 px-4 md:px-16 lg:px-24 xl:px-32 w-full">
            <div className="flex flex-col items-start max-w-3xl">
                <Eyebrow label={eyebrow} />

                <motion.h1 className="text-4xl md:text-6xl text-zinc-900 mt-6 leading-tight max-w-2xl"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                >
                    {headline}
                </motion.h1>

                {copy && (
                    <motion.p className="text-zinc-500 text-sm md:text-base mt-5 max-w-xl"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        {copy}
                    </motion.p>
                )}

                {buttons && buttons.length > 0 && (
                    <motion.div className="flex flex-wrap items-center gap-4 mt-8"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        {buttons.map((button) => (
                            <Link key={button.href + button.label} href={button.href}
                                className={
                                    button.variant === "secondary"
                                        ? "border border-zinc-200 text-zinc-800 px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-50 transition"
                                        : "bg-zinc-950 hover:bg-zinc-900 text-white px-6 py-3 rounded-full text-sm font-medium transition"
                                }
                            >
                                {button.label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
}
