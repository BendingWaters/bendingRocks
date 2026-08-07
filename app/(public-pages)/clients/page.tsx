import { PageHero } from "@/components/page-hero";
import { Eyebrow } from "@/components/eyebrow";
import { CallToAction } from "@/sections/call-to-action";

const clientCategories = [
    "Property Developers",
    "Real-Estate Investment Companies",
    "Hospitality Brands",
    "Architectural Practices",
    "Government and Destination Entities",
    "Asset Managers",
    "Sales and Brokerage Networks",
    "Construction and Development Partners",
];

const partnershipTraits = [
    "Value strategic thinking",
    "Welcome honest creative challenge",
    "Understand that brand affects commercial outcomes",
    "Give access to decision-makers",
    "Want a connected system rather than isolated assets",
    "Are willing to make clear choices",
];

export default function ClientsPage() {
    return (
        <main>
            <PageHero
                eyebrow="WHO WE BUILD WITH"
                headline="For People Building What Comes Next."
                copy="We collaborate with developers, investors, architects, hospitality companies, property operators and destination makers. Our best partnerships begin before the brief is treated as final."
            />

            <section className="px-4 md:px-16 lg:px-24 xl:px-32 w-full py-10">
                <Eyebrow label="CLIENT CATEGORIES" />
                <div className="flex flex-wrap gap-2 mt-6 max-w-4xl">
                    {clientCategories.map((category) => (
                        <span key={category} className="text-sm bg-zinc-100 text-zinc-700 px-4 py-2 rounded-full">{category}</span>
                    ))}
                </div>
            </section>

            <section className="px-4 md:px-16 lg:px-24 xl:px-32 w-full py-16 bg-gray-50">
                <p className="text-zinc-900 text-lg md:text-xl max-w-2xl">
                    Selected organisations and projects we have supported.
                </p>
                <p className="text-zinc-500 text-sm mt-3 max-w-xl">
                    We publish only logos for which BendingRocks has approval or a clearly demonstrable working relationship — this section will grow as those approvals come through.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 max-w-3xl">
                    {[1, 2, 3, 4].map((placeholder) => (
                        <div key={placeholder} className="h-20 rounded-lg border border-dashed border-zinc-300 flex items-center justify-center text-xs text-zinc-400">
                            Logo pending approval
                        </div>
                    ))}
                </div>
            </section>

            <section className="px-4 md:px-16 lg:px-24 xl:px-32 w-full py-20 max-w-3xl">
                <h2 className="text-2xl md:text-3xl text-zinc-900 leading-tight">We work best with teams that:</h2>
                <ul className="flex flex-col gap-3 mt-6">
                    {partnershipTraits.map((trait) => (
                        <li key={trait} className="text-zinc-600 text-base flex items-start gap-3">
                            <span className="size-1.5 bg-zinc-900 mt-2.5 shrink-0"></span>
                            {trait}
                        </li>
                    ))}
                </ul>
            </section>

            <CallToAction
                headline="Different Project. Same Ambition."
                copy="Tell us what you are building, where it is located and what needs to move."
                buttonLabel="Become a Partner"
                buttonHref="/contact"
                microcopy=""
            />
        </main>
    );
}
