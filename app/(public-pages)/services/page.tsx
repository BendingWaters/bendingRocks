"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/page-hero";
import { Eyebrow } from "@/components/eyebrow";
import { CallToAction } from "@/sections/call-to-action";

const services = [
    {
        number: "01",
        title: "Development and Place Strategy",
        intro: "We help developers define what they are creating, who it is for and how it should compete.",
        deliverables: ["Development advisory", "Market and competitor review", "Audience definition", "Place visioning", "Product proposition", "Portfolio strategy", "Experience principles", "Commercial positioning", "Go-to-market planning"],
        outcome: "A development people can understand before they are asked to buy it.",
    },
    {
        number: "02",
        title: "Brand Strategy and Identity",
        intro: "We create the strategic, verbal and visual foundations that make a property distinctive.",
        deliverables: ["Research and insight", "Positioning", "Naming", "Brand architecture", "Brand narrative", "Messaging", "Visual identity", "Typography and colour", "Brand guidelines", "Environmental applications"],
        outcome: "A property with an ownable identity — not another interchangeable luxury brand.",
    },
    {
        number: "03",
        title: "Property Marketing",
        intro: "We turn the brand into the materials, content and campaigns required to move the market.",
        deliverables: ["Launch strategy", "Integrated campaigns", "Sales brochures", "Investor decks", "Agent toolkits", "Outdoor advertising", "Social content", "Photography", "Film", "Email communication", "Lifecycle campaigns"],
        outcome: "A connected marketing system that builds awareness and supports sales.",
    },
    {
        number: "04",
        title: "CGI and Visualisation",
        intro: "We transform architectural information into atmospheric, convincing and commercially useful visual experiences.",
        deliverables: ["Exterior CGI", "Interior CGI", "Aerial visualisation", "Amenity visualisation", "Animation", "Virtual walkthroughs", "Property films", "Motion graphics", "Social edits", "Interactive experiences"],
        outcome: "An unbuilt property people can already picture themselves inside.",
    },
    {
        number: "05",
        title: "Digital Experiences",
        intro: "We build digital journeys that communicate the proposition and make enquiry easier.",
        deliverables: ["Property websites", "Developer websites", "Campaign landing pages", "Interactive brochures", "Lead capture systems", "CRM integration", "Email journeys", "Analytics setup", "Conversion tracking", "Performance dashboards"],
        outcome: "A digital experience that does more than look expensive.",
    },
    {
        number: "06",
        title: "Brand Lifecycle and Guardianship",
        intro: "We protect and evolve the brand as the project moves through construction, launch, sales, handover and operation.",
        deliverables: ["Brand management", "Campaign phases", "Content systems", "Design support", "Sales-channel support", "Reputation communication", "Handover communication", "Community storytelling", "Performance optimisation"],
        outcome: "A brand that remains coherent long after launch day.",
    },
];

export default function ServicesPage() {
    return (
        <main>
            <PageHero
                eyebrow="WHAT WE DO"
                headline="Everything Between the Drawing Board and the Sold Board."
                copy="BendingRocks provides strategy, branding, visualisation, marketing and digital services for real estate, hospitality and destination projects. We can enter at the beginning, repair what already exists or build the complete system from concept to launch."
                buttons={[{ label: "Discuss Your Project", href: "/contact" }]}
            />

            <section className="px-4 md:px-16 lg:px-24 xl:px-32 w-full pb-10">
                <div className="flex flex-col gap-16 md:gap-20 max-w-4xl">
                    {services.map((service, index) => (
                        <motion.div key={service.number} className="border-t border-zinc-200 pt-10"
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index % 2) * 0.05, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                        >
                            <span className="text-xs text-zinc-400">{service.number}</span>
                            <h2 className="text-2xl md:text-3xl text-zinc-900 mt-3 leading-tight">{service.title}</h2>
                            <p className="text-zinc-600 text-base mt-4 max-w-2xl">{service.intro}</p>

                            <div className="flex flex-wrap gap-2 mt-6">
                                {service.deliverables.map((item) => (
                                    <span key={item} className="text-xs bg-zinc-100 text-zinc-700 px-3 py-1.5 rounded-full">{item}</span>
                                ))}
                            </div>

                            <p className="text-zinc-900 text-base mt-6 font-medium">{service.outcome}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="py-24 px-4 md:px-16 lg:px-24 xl:px-32 w-full bg-gray-50 text-center flex flex-col items-center">
                <Eyebrow label="NEED THE WHOLE SYSTEM?" className="justify-center" />
                <h2 className="text-3xl md:text-5xl text-zinc-900 mt-6 leading-tight max-w-2xl">That Is the Point.</h2>
                <p className="text-zinc-500 text-sm md:text-base mt-6 max-w-xl">
                    Strategy without execution becomes a document. Design without strategy becomes decoration. Marketing without measurement becomes noise. BendingRocks connects all three.
                </p>
            </section>

            <CallToAction
                headline="Build With Us."
                copy="Bring us the land, the plans, the half-formed idea or the property the market is not yet understanding. We will help you find the story — and build the system that moves it."
                buttonLabel="Build With Us"
                buttonHref="/contact"
                microcopy=""
            />
        </main>
    );
}
