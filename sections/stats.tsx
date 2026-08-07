"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CountUp from "@/components/count-number";

export function Stats() {
    return (
        <section className="py-16 md:py-25 px-4 md:px-16 lg:px-24 xl:px-32 w-full">
            <div className="flex flex-col items-start max-w-3xl">
                <motion.div className="flex items-center gap-1.5" 
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <span className="size-1.5 bg-zinc-900"></span>
                    <span className="text-sm text-zinc-900">
                        FROM PLOT TO POP CULTURE
                    </span>
                </motion.div>
                <motion.h2 className="text-5xl md:text-6xl text-zinc-900 mt-8 leading-tight max-w-[610px]"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                >
                    We Build the Brand Around the Building
                </motion.h2>

                <motion.p className="text-zinc-500 text-sm md:text-base mt-3 max-w-[520px]"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    A strong development should not arrive in the market looking, sounding and selling like everything else. We uncover what makes a project valuable, turn that value into a distinctive proposition and express it across every touchpoint — from the first investor presentation to the final campaign frame.
                </motion.p>

                <motion.div className="mt-7"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <Link href="/about" className="inline-block bg-zinc-950 hover:bg-zinc-900 text-white px-7 py-3 rounded-full text-sm transition">
                        Meet BendingRocks
                    </Link>
                </motion.div>
            </div>

            <div className="flex max-lg:flex-col max-lg:gap-10 justify-between max-w-4xl mt-16 md:mt-20">
                <div className="flex flex-col justify-center">
                    <span className="text-4xl md:text-5xl min-w-[152px] text-zinc-900">
                        <CountUp from={0} to={40} />+
                    </span>
                    <span className="text-sm text-zinc-600 mt-4">
                        DEVELOPMENTS SHAPED
                    </span>
                </div>

                <div className="max-lg:hidden h-20 w-px bg-zinc-200"></div>

                <div className="flex flex-col justify-center">
                    <span className="text-4xl md:text-5xl min-w-[200px] text-zinc-900">
                        ₦<CountUp from={0} to={120} />B+
                    </span>
                    <span className="text-sm text-zinc-600 mt-4">
                        PROPERTY VALUE POSITIONED
                    </span>
                </div>

                <div className="max-lg:hidden h-20 w-px bg-zinc-200"></div>

                <div className="flex flex-col justify-center">
                    <span className="text-4xl md:text-5xl min-w-[94px] text-zinc-900">
                        <CountUp from={0} to={60} />+
                    </span>
                    <span className="text-sm text-zinc-600 mt-4">
                        CAMPAIGNS AND LAUNCHES
                    </span>
                </div>
            </div>

            <p className="text-zinc-500 text-sm mt-10 max-w-2xl">
                Good design gets attention. Commercial design gives attention somewhere to go.
            </p>
        </section>
    );
}