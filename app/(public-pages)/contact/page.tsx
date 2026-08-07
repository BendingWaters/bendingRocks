"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/page-hero";

const projectTypes = ["Residential", "Hospitality", "Commercial", "Mixed Use", "Destination", "Corporate Real Estate", "Other"];
const projectStages = ["Early Concept", "Design Development", "Pre-Launch", "Currently Selling", "Under Construction", "Completed", "Needs Repositioning"];
const needs = ["Strategy", "Naming and Branding", "Campaign", "CGI and Animation", "Website", "Sales Collateral", "Full Launch System", "Not Sure Yet"];
const budgetRanges = ["Under ₦20M", "₦20M – ₦50M", "₦50M – ₦150M", "₦150M – ₦300M", "₦300M+", "Not Sure Yet"];

const labelClass = "text-sm text-zinc-600 mb-2";
const inputClass = "w-full border border-zinc-200 rounded-sm px-4 py-2.5 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors bg-white";

export default function ContactPage() {
    const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
    const [submitted, setSubmitted] = useState(false);

    const toggleNeed = (need: string) => {
        setSelectedNeeds((current) =>
            current.includes(need) ? current.filter((item) => item !== need) : [...current, need]
        );
    };

    return (
        <main>
            <PageHero
                eyebrow="START A PROJECT"
                headline="Got Land, a Launch or a Brand Problem?"
                copy="Tell us what you are building, where it is located and what needs to move. We will take it from there."
            />

            <section className="px-4 md:px-16 lg:px-24 xl:px-32 w-full pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-6xl">

                    <div className="lg:col-span-8">
                        {submitted ? (
                            <motion.div className="bg-zinc-50 rounded-xl p-10 flex flex-col items-start"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                            >
                                <h2 className="text-2xl text-zinc-900">Brief received. The rock is officially in motion.</h2>
                                <p className="text-zinc-500 text-sm mt-3">We will be in touch shortly to talk through next steps.</p>
                            </motion.div>
                        ) : (
                            <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex flex-col">
                                        <label className={labelClass}>YOUR NAME</label>
                                        <input type="text" required placeholder="E.g. Ade Johnson" className={inputClass} />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className={labelClass}>COMPANY</label>
                                        <input type="text" placeholder="E.g. Meridian Development Partners" className={inputClass} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex flex-col">
                                        <label className={labelClass}>WORK EMAIL</label>
                                        <input type="email" required placeholder="ade@yourcompany.com" className={inputClass} />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className={labelClass}>PHONE NUMBER</label>
                                        <input type="tel" placeholder="E.g. +234 800 000 0000" className={inputClass} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex flex-col">
                                        <label className={labelClass}>PROJECT NAME</label>
                                        <input type="text" placeholder="E.g. Meridian Residences" className={inputClass} />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className={labelClass}>PROJECT LOCATION</label>
                                        <input type="text" placeholder="E.g. Ikoyi, Lagos" className={inputClass} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex flex-col">
                                        <label className={labelClass}>PROJECT TYPE</label>
                                        <select className={inputClass} defaultValue="">
                                            <option value="" disabled>Select project type</option>
                                            {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                                        </select>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className={labelClass}>PROJECT STAGE</label>
                                        <select className={inputClass} defaultValue="">
                                            <option value="" disabled>Select project stage</option>
                                            {projectStages.map((stage) => <option key={stage} value={stage}>{stage}</option>)}
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <label className={labelClass}>WHAT DO YOU NEED?</label>
                                    <div className="flex flex-wrap gap-2">
                                        {needs.map((need) => {
                                            const active = selectedNeeds.includes(need);
                                            return (
                                                <button type="button" key={need} onClick={() => toggleNeed(need)}
                                                    className={`px-4 py-2 rounded-full text-xs transition cursor-pointer ${active ? "bg-zinc-950 text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`}
                                                >
                                                    {need}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex flex-col">
                                        <label className={labelClass}>INDICATIVE BUDGET</label>
                                        <select className={inputClass} defaultValue="">
                                            <option value="" disabled>Select budget range</option>
                                            {budgetRanges.map((range) => <option key={range} value={range}>{range}</option>)}
                                        </select>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className={labelClass}>EXPECTED LAUNCH DATE</label>
                                        <input type="date" className={inputClass} />
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <label className={labelClass}>TELL US WHAT IS NOT WORKING</label>
                                    <textarea rows={4} placeholder="E.g. Tell us what you are building, where it is located and what needs to move." className={`${inputClass} resize-none`} />
                                </div>

                                <div className="flex flex-col">
                                    <label className={labelClass}>FILE UPLOAD</label>
                                    <p className="text-xs text-zinc-400 mb-2">Architectural plans, existing brand materials, project brief or anything else that helps us understand the assignment.</p>
                                    <input type="file" className="text-sm text-zinc-600 file:mr-4 file:py-2.5 file:px-4 file:rounded-sm file:border-0 file:text-xs file:bg-zinc-100 file:text-zinc-700 hover:file:bg-zinc-200 file:cursor-pointer cursor-pointer" />
                                </div>

                                <div className="mt-2">
                                    <button type="submit" className="bg-black hover:bg-zinc-900 text-white text-sm px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer">
                                        SEND THE BRIEF
                                    </button>
                                </div>

                                <p className="text-zinc-400 text-xs">
                                    Not ready for a full brief? Send the messy version. Clarity is part of our job.
                                </p>
                            </form>
                        )}
                    </div>

                    <div className="lg:col-span-4 flex flex-col gap-8">
                        <div>
                            <span className="text-xs text-zinc-400 uppercase tracking-wide">New Business</span>
                            <p className="text-sm text-zinc-800 mt-2">hello@bendingrocks.com</p>
                        </div>
                        <div>
                            <span className="text-xs text-zinc-400 uppercase tracking-wide">General Enquiries</span>
                            <p className="text-sm text-zinc-800 mt-2">info@bendingrocks.com</p>
                        </div>
                        <div>
                            <span className="text-xs text-zinc-400 uppercase tracking-wide">Telephone</span>
                            <p className="text-sm text-zinc-800 mt-2">+234 800 000 0000</p>
                        </div>
                        <div>
                            <span className="text-xs text-zinc-400 uppercase tracking-wide">Studio</span>
                            <p className="text-sm text-zinc-800 mt-2">Lagos, Nigeria</p>
                        </div>
                        <div>
                            <span className="text-xs text-zinc-400 uppercase tracking-wide">Business Hours</span>
                            <p className="text-sm text-zinc-800 mt-2">Monday–Friday<br />9:00 AM–6:00 PM</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
