import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function NotFound() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-32">
                <h1 className="text-5xl md:text-7xl text-zinc-900 leading-tight">Wrong Plot.</h1>
                <p className="text-zinc-500 text-base mt-6 max-w-md">
                    This page may have moved, changed its name or never received planning approval.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
                    <Link href="/" className="bg-zinc-950 hover:bg-zinc-900 text-white px-7 py-3 rounded-full text-sm transition">
                        Back to Solid Ground
                    </Link>
                    <Link href="/work" className="border border-zinc-200 text-zinc-800 hover:bg-zinc-50 px-7 py-3 rounded-full text-sm transition">
                        View Our Work
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    );
}
