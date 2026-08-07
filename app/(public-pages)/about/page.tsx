import Link from "next/link";
import { MoveRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Eyebrow } from "@/components/eyebrow";
import { CallToAction } from "@/sections/call-to-action";

const values = [
    { title: "Clarity Over Decoration", description: "The work must communicate before it impresses." },
    { title: "Culture Over Cliché", description: "We create brands connected to how people actually live, think, discover and decide." },
    { title: "Commercial Impact Over Vanity", description: "Awards are welcome. Movement in the market matters more." },
    { title: "Local Intelligence. Global Craft.", description: "The work should belong to its location without being limited by it." },
    { title: "Move Fast. Finish Properly.", description: "Speed is valuable only when the thinking survives it." },
    { title: "Partners, Not Vendors", description: "We take ownership of the commercial and creative problem — not only the assigned deliverable." },
];

export default function AboutPage() {
    return (
        <main>
            <PageHero
                eyebrow="ABOUT BENDINGROCKS"
                headline="We Are the People Behind the Property People Remember."
                copy="BendingRocks is a strategy, branding and creative agency dedicated to real estate, hospitality and destinations. We work with developers, architects, investors and operators to transform physical developments into commercially compelling brands and experiences. Our work combines global creative standards with a deep understanding of African cities, buyers, culture and commercial realities."
            />

            <section className="px-4 md:px-16 lg:px-24 xl:px-32 w-full py-10 max-w-4xl">
                <h2 className="text-3xl md:text-5xl text-zinc-900 leading-tight">Buildings Occupy Space. Brands Occupy Minds.</h2>
                <p className="text-zinc-500 text-base mt-6 max-w-2xl">
                    The strongest developments are not defined only by square metres, finishes or amenities. They represent a particular way of living, investing, working or belonging. Our role is to find that meaning, sharpen it and make it visible at every point where the market encounters the project.
                </p>
            </section>

            <section className="px-4 md:px-16 lg:px-24 xl:px-32 w-full py-10 max-w-4xl">
                <h2 className="text-3xl md:text-5xl text-zinc-900 leading-tight">Small Team Energy. Big Project Thinking.</h2>
                <p className="text-zinc-500 text-base mt-6 max-w-2xl">
                    We combine strategists, designers, writers, filmmakers, visualisation artists, marketers and digital specialists around each assignment. The team changes according to the problem. The standard does not.
                </p>
                <Link href="/careers" className="inline-flex items-center gap-2 text-sm text-zinc-900 mt-6 group">
                    <span className="border-b border-zinc-300 group-hover:border-zinc-900 transition-colors">We&apos;re Hiring — See Open Roles</span>
                    <MoveRight size={14} />
                </Link>
            </section>

            <section className="px-4 md:px-16 lg:px-24 xl:px-32 w-full py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <Eyebrow label="OUR VALUES" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                        {values.map((value) => (
                            <div key={value.title} className="bg-white rounded-xl p-6 border border-zinc-100">
                                <h3 className="text-base text-zinc-900 font-medium">{value.title}</h3>
                                <p className="text-sm text-zinc-500 mt-3 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 md:px-16 lg:px-24 xl:px-32 w-full py-20 max-w-4xl">
                <Eyebrow label="THE PEOPLE BENDING THE CATEGORY" />
                <p className="text-zinc-500 text-base mt-6 max-w-2xl">
                    Team profiles are being finalised. Every assignment is staffed with a core team plus specialist collaborators matched to the project — get in touch and we will introduce you to the people working on your development.
                </p>
                <Link href="/clients" className="inline-flex items-center gap-2 text-sm text-zinc-900 mt-6 group">
                    <span className="border-b border-zinc-300 group-hover:border-zinc-900 transition-colors">See Who We Build With</span>
                    <MoveRight size={14} />
                </Link>
            </section>

            <CallToAction
                headline="Building Something the Market Has Not Seen?"
                copy="Bring us the land, the plans, the half-formed idea or the property the market is not yet understanding."
                buttonLabel="Let's Give It a Name"
                buttonHref="/contact"
                microcopy=""
            />
        </main>
    );
}
