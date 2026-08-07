"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { navLinks } from "@/data/nav";

export function Navbar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    // Close the mobile menu when the route changes. Adjusted during render
    // (per React's guidance) instead of an effect, to avoid an extra render pass.
    const [lastPathname, setLastPathname] = useState(pathname);
    if (pathname !== lastPathname) {
        setLastPathname(pathname);
        setMobileOpen(false);
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Interior pages open on a light background, so the navbar needs dark
    // text from the start. Only the home page's dark hero image justifies
    // white text before the user scrolls.
    const useLightText = !scrolled && isHome;

    return (
        <>
            <nav className={`fixed z-50 flex items-center justify-between left-1/2 -translate-x-1/2 transition-all duration-500 p-4 ${scrolled ? "lg:w-5xl w-[calc(100vw-14px)] bg-white/60 backdrop-blur-2xl rounded-full mt-4 pl-6 shadow" : "md:px-16 lg:px-24 xl:px-32 w-full"}`}>
                <Link href="/">
                    <h1 className={`transition-all duration-500 h-9 w-auto text-xl md:text-2xl ${useLightText ? "text-white" : "text-zinc-900"} ${scrolled ? "opacity-80" : ""}`} >BendingRocks</h1>
                </Link>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-6 md:gap-10 text-sm">
                    {navLinks.map((link) => {
                        const active = pathname === link.href;
                        return (
                            <Link key={link.href} href={link.href} className={`transition-colors duration-500 ${useLightText ? "text-white hover:text-white/90" : "text-zinc-800 hover:text-zinc-600"} ${active ? "font-medium" : ""}`}>
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                <Link href="/contact" className={`hidden md:block px-6 py-2.5 text-sm font-medium cursor-pointer transition-all duration-500 ${scrolled ? "rounded-full bg-zinc-900 text-white hover:bg-zinc-800" : useLightText ? "rounded-md bg-zinc-50 text-zinc-800 hover:bg-zinc-200" : "rounded-md bg-zinc-900 text-white hover:bg-zinc-800"}`}>
                    Start a Project
                </Link>

                <button onClick={() => setMobileOpen(true)} className={`md:hidden p-2 rounded-md aspect-square font-medium transition cursor-pointer ${useLightText ? "text-white" : "text-zinc-800"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12h16" /><path d="M4 18h16" /><path d="M4 6h16" />
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`${mobileOpen ? 'max-md:w-full' : 'max-md:w-0'} md:hidden max-md:fixed max-md:top-0 max-md:z-50 max-md:left-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-full max-md:bg-white max-md:flex-col max-md:justify-center flex items-center gap-6 md:gap-10 text-sm`}>
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="transition-colors duration-500 text-zinc-800 hover:text-zinc-600">
                        {link.label}
                    </Link>
                ))}
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="bg-zinc-900 text-white px-6 py-2.5 rounded-full text-sm font-medium">
                    Start a Project
                </Link>

                <button onClick={() => setMobileOpen(false)} className="md:hidden absolute top-4 right-4 bg-zinc-100 text-zinc-800 p-2 rounded-md aspect-square font-medium transition cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                    </svg>
                </button>
            </div>
        </>
    );
}
