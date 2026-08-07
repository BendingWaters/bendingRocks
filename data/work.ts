export interface WorkProject {
    slug: string;
    name: string;
    location: string;
    category: string;
    sector: "Residential" | "Hospitality" | "Commercial" | "Destinations";
    filters: string[];
    services: string[];
    microcopy: string;
    image: string;
    year: string;
    status: string;
    client: string;
    assignment: string;
    challengeHeadline: string;
    challenge: string;
    strategicIdea: string;
    strategy: string;
    audiencePrimary: string;
    audienceSecondary: string;
    audienceInvestor: string;
    identity: string;
    voice: string;
    campaignLines: string[];
    cgi: string;
    applications: string[];
    goToMarket: string;
    results: string[];
}

export const workProjects: WorkProject[] = [
    {
        slug: "meridian-residences",
        name: "Meridian Residences",
        location: "Lagos, Nigeria",
        category: "Brand Positioning · Campaign · Sales Collateral",
        sector: "Residential",
        filters: ["Residential", "Branding", "Campaigns"],
        services: ["Strategy", "Branding", "Campaign", "Digital"],
        microcopy: "A new rhythm for contemporary Lagos living.",
        image: "/assets/galleryImage1.png",
        year: "2025",
        status: "Launched",
        client: "Meridian Development Partners",
        assignment: "Meridian Development Partners approached BendingRocks to position and launch Meridian Residences, a mid-rise residential development located on Lagos's mainland. The project needed to command premium pricing in a corridor still defined by generic mid-market housing, while differentiating itself from a wave of look-alike towers promising the same finishes and the same skyline renders.",
        challengeHeadline: "THE MARKET DID NOT NEED ANOTHER GLASS TOWER.",
        challenge: "The category was crowded with similar promises, visual codes and definitions of contemporary living. The opportunity was not to communicate more loudly. It was to establish a clearer and more ownable point of view built around how residents would actually move through a day, not a floorplan.",
        strategicIdea: "LIVING IN RHYTHM WITH THE CITY",
        strategy: "We positioned Meridian Residences as the development that moves at the pace of the people who live in it — not a static address, but an active daily rhythm. This idea became the organising principle for the entire brand, shaping its name, story, visual language, photography, campaign and sales experience.",
        audiencePrimary: "Young professionals and dual-income households upgrading from rented apartments into their first owned home.",
        audienceSecondary: "Diaspora buyers seeking a foothold property in Lagos with strong resale and rental fundamentals.",
        audienceInvestor: "Mid-size real-estate investors looking for a development with a differentiated, defensible story ahead of competing launches.",
        identity: "The visual identity translates the development's clean architectural lines into a flexible communication system. Every component — from typography and colour to image direction and layout — was designed to reinforce a sense of motion, clarity and quiet confidence.",
        voice: "The voice is direct, current and unpretentious. It avoids generic claims and exaggerated luxury language. Instead, it communicates through specific observations, confident statements and a clear understanding of the buyer's world.",
        campaignLines: ["Built for the life already in motion.", "Your commute just got shorter.", "The address that keeps up with you."],
        cgi: "The visual direction presented Meridian as an inhabited world rather than an isolated architectural object. Lighting, styling, human presence and camera direction were developed to communicate the energy of daily life in and around the building — mornings on the terrace, evenings in the lobby, the city beyond the glass.",
        applications: ["Sales brochure", "Investor presentation", "Site hoarding", "Social campaign", "Website", "Agent toolkit", "Launch film"],
        goToMarket: "The launch translated the strategic idea into an integrated campaign designed to generate awareness, equip the sales network and move interested audiences towards enquiry. The communication system was adapted for investors, agents and end buyers without losing the central brand proposition.",
        results: ["38% increase in qualified enquiries during launch month", "62 units reserved during the launch period", "24% brochure-to-enquiry conversion"],
    },
    {
        slug: "maison-six",
        name: "Maison Six",
        location: "Ikoyi, Lagos",
        category: "Strategy · Identity · Property Marketing",
        sector: "Residential",
        filters: ["Residential", "Branding", "CGI"],
        services: ["Strategy", "Branding", "CGI", "Digital"],
        microcopy: "Private living, expressed with quieter confidence.",
        image: "/assets/galleryImage2.png",
        year: "2025",
        status: "Ongoing",
        client: "Six & Rose Properties",
        assignment: "Six & Rose Properties approached BendingRocks to position and launch Maison Six, a six-unit boutique residence located in Ikoyi. The project needed to justify a genuinely premium price point, while differentiating itself from the loud, gold-typography language that dominates the neighbourhood's luxury category.",
        challengeHeadline: "THE MARKET DID NOT NEED ANOTHER LOUD LUXURY LAUNCH.",
        challenge: "The category was crowded with similar promises, visual codes and definitions of luxury. The opportunity was not to communicate more loudly. It was to establish a clearer and more ownable point of view — one built on restraint rather than spectacle.",
        strategicIdea: "PRIVACY AS THE ULTIMATE LUXURY",
        strategy: "We positioned Maison Six as a residence for buyers who no longer need to prove anything — six homes, one address, no crowd. This idea became the organising principle for the entire brand, shaping its name, story, visual language, photography and sales experience.",
        audiencePrimary: "High-net-worth individuals and executives seeking a discreet primary or secondary residence in Ikoyi.",
        audienceSecondary: "Family offices acquiring on behalf of principals who value privacy over visibility.",
        audienceInvestor: "Private investors seeking a low-volume, high-margin residential asset with long-term capital appreciation.",
        identity: "The visual identity translates the project's architectural restraint into a flexible communication system. Every component — from typography and colour to image direction and layout — was designed to reinforce quiet confidence over conspicuous display.",
        voice: "The voice is measured, specific and unhurried. It avoids generic claims and exaggerated luxury language. Instead, it communicates through specific observations, confident statements and a clear understanding of the buyer's world.",
        campaignLines: ["Six homes. One address. No crowd.", "Privacy, designed in.", "Quieter confidence."],
        cgi: "The visual direction presented Maison Six as an inhabited world rather than an isolated architectural object. Lighting, styling, human presence and camera direction were developed to communicate calm, privacy and material honesty.",
        applications: ["Sales brochure", "Investor presentation", "Social campaign", "Website", "Agent toolkit", "Signage"],
        goToMarket: "The launch translated the strategic idea into a quiet, targeted campaign built for referral and direct introduction rather than mass reach — matching the scarcity of the product itself.",
        results: ["3 of 6 units reserved ahead of public launch", "₦2.1B in attributable pre-launch pipeline"],
    },
    {
        slug: "valerian-residences",
        name: "Valerian Residences",
        location: "Lekki, Lagos",
        category: "Campaign · Digital · Content",
        sector: "Residential",
        filters: ["Residential", "Campaigns", "Digital"],
        services: ["Campaign", "Digital", "CGI"],
        microcopy: "Designed for the life already in motion.",
        image: "/assets/galleryImage3.png",
        year: "2024",
        status: "Completed",
        client: "Valerian Living",
        assignment: "Valerian Living approached BendingRocks to launch and sell out Valerian Residences, a mixed-unit development in Lekki aimed at a younger, digitally native buyer. The project needed to generate demand fast, while differentiating itself from a corridor saturated with near-identical off-plan listings.",
        challengeHeadline: "THE MARKET DID NOT NEED ANOTHER OFF-PLAN PROMISE.",
        challenge: "The category was crowded with similar promises, visual codes and definitions of off-plan value. The opportunity was not to communicate more loudly. It was to establish a clearer and more ownable point of view built for buyers who research on Instagram before they ever visit a site office.",
        strategicIdea: "DESIGNED FOR THE LIFE ALREADY IN MOTION",
        strategy: "We positioned Valerian as the development that fits around real, current lifestyles — remote work, weekend logistics, a social calendar — instead of an aspirational future life. This idea became the organising principle for the entire brand, shaping its story, visual language, content system and campaign.",
        audiencePrimary: "First-time buyers and young families active on Instagram and TikTok, evaluating property alongside lifestyle content.",
        audienceSecondary: "Diaspora buyers purchasing remotely, reliant on digital content and virtual tours to make a decision.",
        audienceInvestor: "Retail investors buying smaller unit sizes for short-let and rental income.",
        identity: "The visual identity translates the development's flexible unit mix into a modular communication system built to perform natively across social platforms as much as print collateral.",
        voice: "The voice is warm, plain-spoken and platform-native. It avoids generic claims and exaggerated luxury language. Instead, it communicates through specific observations, confident statements and a clear understanding of the buyer's world.",
        campaignLines: ["Designed for the life already in motion.", "Move-in ready for however you live.", "Your Lekki, on your schedule."],
        cgi: "The visual direction presented Valerian as an inhabited world rather than an isolated architectural object. Lighting, styling, human presence and camera direction were developed to produce short-form, social-first content alongside traditional sales collateral.",
        applications: ["Social campaign", "Outdoor advertising", "Website", "Digital advertising", "Launch film", "Email communication"],
        goToMarket: "The launch translated the strategic idea into a content-led, always-on digital campaign designed to generate awareness, equip the sales network and move interested audiences towards enquiry across social and search.",
        results: ["100% of units reserved within the launch quarter", "31% reduction in cost per qualified lead", "4.2M campaign impressions"],
    },
    {
        slug: "carlton-residences",
        name: "Carlton Residences",
        location: "Ikoyi, Lagos",
        category: "Positioning · Brochure · Sales Experience",
        sector: "Residential",
        filters: ["Residential", "Branding", "CGI"],
        services: ["Strategy", "Branding", "CGI", "Campaign"],
        microcopy: "Prestige without the predictable language.",
        image: "/assets/galleryImage4.png",
        year: "2024",
        status: "Launched",
        client: "Carlton Development Group",
        assignment: "Carlton Development Group approached BendingRocks to reposition and relaunch Carlton Residences, a stalled luxury development in Ikoyi, after an earlier launch failed to generate meaningful traction. The project needed a credible reset, while differentiating itself from the beige-luxury language that had defined its first, unsuccessful campaign.",
        challengeHeadline: "THE MARKET DID NOT NEED ANOTHER BEIGE LUXURY BRAND.",
        challenge: "The category was crowded with similar promises, visual codes and definitions of luxury — marble, gold typography, drone footage. The opportunity was not to communicate more loudly. It was to establish a clearer and more ownable point of view rooted in Carlton's actual architectural and material strengths.",
        strategicIdea: "PRESTIGE, STATED PLAINLY",
        strategy: "We positioned Carlton Residences as a development confident enough to describe itself in plain, specific terms rather than borrowed luxury language. This idea became the organising principle for the entire brand, shaping its name, story, visual language, photography, campaign and sales experience.",
        audiencePrimary: "Established buyers in Ikoyi and Victoria Island seeking a credible, design-literate alternative to conventional luxury developments.",
        audienceSecondary: "Repeat property investors familiar with the market and skeptical of generic luxury marketing claims.",
        audienceInvestor: "Institutional and family-office investors evaluating the relaunch as a de-risked, repositioned asset.",
        identity: "The visual identity translates the property's architectural strengths into a flexible communication system. Every component — from typography and colour to image direction and layout — was designed to reinforce specificity and material honesty over generic prestige.",
        voice: "The voice is confident, specific and free of exaggerated luxury language. It communicates through concrete observations and a clear understanding of the buyer's world.",
        campaignLines: ["Prestige without the predictable language.", "Built on Ikoyi. Not another moodboard.", "Say less. Show more."],
        cgi: "The visual direction presented Carlton as an inhabited world rather than an isolated architectural object. Lighting, styling, human presence and camera direction were developed to communicate the intended emotional experience of the development without resorting to clichéd luxury tropes.",
        applications: ["Sales brochure", "Investor presentation", "Experience centre", "Website", "Agent toolkit", "Digital advertising"],
        goToMarket: "The relaunch translated the strategic idea into an integrated campaign designed to rebuild market confidence, equip the sales network and move interested audiences towards enquiry — while clearly signalling a break from the earlier campaign.",
        results: ["47 units reserved within six months of relaunch", "₦8.6B in attributable sales pipeline", "19 active agents onboarded"],
    },
];

export function getWorkProjectBySlug(slug: string): WorkProject | undefined {
    return workProjects.find((project) => project.slug === slug);
}
