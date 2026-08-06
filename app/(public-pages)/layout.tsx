import React from 'react';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import LenisScroll from '@/components/lenis-scroll';

export const metadata = {
    title: 'BendingRocks | Real Estate Branding, Marketing and CGI Agency',
    description: 'BendingRocks is a real-estate branding and growth agency specialising in strategy, identity, CGI, campaigns, digital experiences and property launches.',
    appleWebApp: {
        title: 'BendingRocks',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <LenisScroll />
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
