"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

interface JourneyMeta {
    slug: string;
    year: string;
    type: string;
    image?: string;
}

const typeColors: Record<string, string> = {
    work: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    achievement: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    education: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    milestone: "bg-purple-500/20 text-purple-300 border-purple-500/30",
};

export default function JourneyContent({ meta }: { meta: JourneyMeta }) {
    const { t } = useLanguage();
    const item = t.journey.items[meta.slug as keyof typeof t.journey.items];

    return (
        <main className="min-h-screen bg-zinc-950 px-6 py-20">
            <div className="mx-auto max-w-3xl">
                {/* Back Button */}
                <Link
                    href="/#about"
                    className="group mb-8 inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-cyan-400"
                >
                    <svg
                        className="h-5 w-5 transition-transform group-hover:-translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    {t.journey.backToAbout}
                </Link>

                {/* Header */}
                <div className="mb-8">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-cyan-500/20 px-4 py-1.5 text-sm font-medium text-cyan-300">
                            {meta.year}
                        </span>
                        <span className={`rounded-full border px-3 py-1 text-xs font-medium capitalize ${typeColors[meta.type]}`}>
                            {meta.type}
                        </span>
                    </div>
                    <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        {item.title}
                    </h1>
                    <p className="text-xl text-zinc-400">{item.description}</p>
                </div>

                {/* Divider */}
                <div className="mb-8 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

                {/* Image */}
                {meta.image && (
                    <div className="mb-10 overflow-hidden rounded-2xl border border-zinc-800">
                        <img src={meta.image} alt={item.title} className="w-full object-cover" />
                    </div>
                )}

                {/* Detailed Description */}
                <div className="prose prose-invert mb-10 max-w-none">
                    {item.detailedDescription.split("\n\n").map((paragraph, i) => (
                        <p key={i} className="mb-4 leading-relaxed text-zinc-300">
                            {paragraph}
                        </p>
                    ))}
                </div>

                {/* Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                    <div className="mb-10">
                        <h2 className="mb-4 text-xl font-semibold text-white">{t.journey.highlights}</h2>
                        <ul className="space-y-3">
                            {item.highlights.map((highlight, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                                    <span className="text-zinc-300">{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Links */}
                {item.links && item.links.length > 0 && (
                    <div className="mb-10">
                        <h2 className="mb-4 text-xl font-semibold text-white">{t.journey.links}</h2>
                        <div className="flex flex-wrap gap-3">
                            {item.links.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/50 px-4 py-2 text-sm text-zinc-300 transition-all hover:border-cyan-500/50 hover:text-cyan-400"
                                >
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                {/* Back to Home */}
                <div className="border-t border-zinc-800 pt-8">
                    <Link
                        href="/"
                        className="btn-glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-zinc-900"
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        {t.journey.backToHome}
                    </Link>
                </div>
            </div>
        </main>
    );
}
