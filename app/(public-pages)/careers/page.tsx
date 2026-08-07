import { PageHero } from "@/components/page-hero";
import { Eyebrow } from "@/components/eyebrow";

const valuedTraits = [
    "Original thinking",
    "Visual intelligence",
    "Cultural curiosity",
    "Commercial awareness",
    "Low ego",
    "High standards",
    "Clear communication",
    "Reliable execution",
];

export default function CareersPage() {
    return (
        <main>
            <PageHero
                eyebrow="WORK WITH US"
                headline="Come Bend the Category."
                copy="We are building a multidisciplinary team for the next generation of African real-estate brands. Strategists, designers, writers, filmmakers, architects, artists, account people, technologists and professional overthinkers are welcome."
            />

            <section className="px-4 md:px-16 lg:px-24 xl:px-32 w-full py-10 max-w-3xl">
                <p className="text-zinc-600 text-base leading-relaxed">
                    We care about ideas. We also care about deadlines, file organisation, commercial context, clear communication and finishing what was started. Creative freedom is not freedom from responsibility.
                </p>
            </section>

            <section className="px-4 md:px-16 lg:px-24 xl:px-32 w-full py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <Eyebrow label="WHAT WE VALUE" />
                    <div className="flex flex-wrap gap-3 mt-8">
                        {valuedTraits.map((trait) => (
                            <span key={trait} className="text-sm bg-white border border-zinc-200 text-zinc-700 px-5 py-2.5 rounded-full">{trait}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 md:px-16 lg:px-24 xl:px-32 w-full py-24 max-w-2xl">
                <h2 className="text-3xl md:text-4xl text-zinc-900 leading-tight">Do Not See Your Role Listed?</h2>
                <p className="text-zinc-500 text-base mt-5">
                    Send us your portfolio, CV and a short explanation of the kind of problems you solve.
                </p>
                <a href="mailto:careers@bendingrocks.com" className="inline-block mt-8 bg-zinc-950 hover:bg-zinc-900 text-white px-7 py-3.5 rounded-full text-sm transition">
                    Show Us Your Work
                </a>
            </section>
        </main>
    );
}
