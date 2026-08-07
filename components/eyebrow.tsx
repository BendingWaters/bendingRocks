"use client";

import { motion } from "framer-motion";

export function Eyebrow({ label, className = "" }: { label: string; className?: string }) {
    return (
        <motion.div className={`flex items-center gap-1.5 ${className}`}
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
            <span className="size-1.5 bg-zinc-900"></span>
            <span className="text-sm text-zinc-900">{label}</span>
        </motion.div>
    );
}
