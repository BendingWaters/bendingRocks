import React from "react";
import { Sparkles, Landmark, Lightbulb, Layers, Globe } from "lucide-react";

export interface WhyChooseUsItem {
    icon: React.ReactNode;
    title: string;
    description: string;
    image: string;
}

export const whyChooseUsData: WhyChooseUsItem[] = [
    {
        icon: <Sparkles className="size-5 text-zinc-600" />,
        title: "Cultural Intelligence",
        description: "We understand how contemporary buyers discover, evaluate and talk about property.",
        image: "/assets/house.png"
    },
    {
        icon: <Landmark className="size-5 text-zinc-600" />,
        title: "Real-Estate Specialisation",
        description: "We understand development timelines, off-plan communication, investor expectations, sales channels and the realities behind a launch.",
        image: "/assets/galleryImage1.png"
    },
    {
        icon: <Lightbulb className="size-5 text-zinc-600" />,
        title: "Commercial Creativity",
        description: "We do not create for applause alone. We connect every creative decision to awareness, differentiation, enquiry or conversion.",
        image: "/assets/galleryImage2.png"
    },
    {
        icon: <Layers className="size-5 text-zinc-600" />,
        title: "End-to-End Thinking",
        description: "Strategy, brand, CGI, content, digital and launch are developed as one connected system — not isolated deliverables.",
        image: "/assets/galleryImage3.png"
    },
    {
        icon: <Globe className="size-5 text-zinc-600" />,
        title: "Local Insight. Global Craft.",
        description: "We build brands rooted in African cities and expressed at an international standard.",
        image: "/assets/galleryImage4.png"
    }
];

export interface TestimonialItem {
    name: string;
    role: string;
    text: string;
}

// Placeholder client-name/role fields until real, approved and attributable
// testimonials are supplied — see "Testimonial Section" in the content doc.
export const testimonialsCol1: TestimonialItem[] = [
    {
        name: "[CLIENT NAME]",
        role: "[ROLE], [COMPANY]",
        text: "BendingRocks helped us move beyond a conventional property presentation. They gave the development a clearer identity, a stronger market story and a complete communication system."
    },
    {
        name: "[CLIENT NAME]",
        role: "[ROLE], [COMPANY]",
        text: "They understood that we did not simply need a brochure. We needed a commercially convincing brand that agents, investors and buyers could immediately understand."
    },
    {
        name: "[CLIENT NAME]",
        role: "[ROLE], [COMPANY]",
        text: "The work brought strategy, design and sales thinking together. Every touchpoint felt connected to the same vision."
    }
];

export const testimonialsCol2: TestimonialItem[] = [
    {
        name: "[CLIENT NAME]",
        role: "[ROLE], [COMPANY]",
        text: "The work brought strategy, design and sales thinking together. Every touchpoint felt connected to the same vision."
    },
    {
        name: "[CLIENT NAME]",
        role: "[ROLE], [COMPANY]",
        text: "They understood that we did not simply need a brochure. We needed a commercially convincing brand that agents, investors and buyers could immediately understand."
    },
    {
        name: "[CLIENT NAME]",
        role: "[ROLE], [COMPANY]",
        text: "BendingRocks helped us move beyond a conventional property presentation. They gave the development a clearer identity, a stronger market story and a complete communication system."
    }
];
