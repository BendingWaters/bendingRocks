export interface NavLink {
    label: string;
    href: string;
}

export const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Visuals", href: "/visuals" },
    { label: "About", href: "/about" },
    { label: "The Plot", href: "/the-plot" },
    { label: "Contact", href: "/contact" },
];
