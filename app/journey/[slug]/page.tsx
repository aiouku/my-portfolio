import { notFound } from "next/navigation";
import Link from "next/link";
import { getJourneyBySlug, getAllJourneySlugs } from "@/app/lib/journeyData";

export async function generateStaticParams() {
    const slugs = getAllJourneySlugs();
    return slugs.map((slug) => ({ slug }));
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function JourneyDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const journey = getJourneyBySlug(slug);

    if (!journey) {
        notFound();
    }

    const typeColors: Record<string, string> = {
        work: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
        achievement: "bg-amber-500/20 text-amber-300 border-amber-500/30",
        education: "bg-blue-500/20 text-blue-300 border-blue-500/30",
        milestone: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    };

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
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Back to About
                </Link>

                {/* Header */}
                <div className="mb-8">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-cyan-500/20 px-4 py-1.5 text-sm font-medium text-cyan-300">
                            {journey.year}
                        </span>
                        <span
                            className={`rounded-full border px-3 py-1 text-xs font-medium capitalize ${typeColors[journey.type]}`}
                        >
                            {journey.type}
                        </span>
                    </div>
                    <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        {journey.title}
                    </h1>
                    <p className="text-xl text-zinc-400">{journey.description}</p>
                </div>

                {/* Divider */}
                <div className="mb-8 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

                {/* Image */}
                {journey.image && (
                    <div className="mb-10 overflow-hidden rounded-2xl border border-zinc-800">
                        <img
                            src={journey.image}
                            alt={journey.title}
                            className="w-full object-cover"
                        />
                    </div>
                )}

                {/* Detailed Description */}
                <div className="prose prose-invert mb-10 max-w-none">
                    {journey.detailedDescription.split("\n\n").map((paragraph, i) => (
                        <p key={i} className="mb-4 leading-relaxed text-zinc-300">
                            {paragraph}
                        </p>
                    ))}
                </div>

                {/* Highlights */}
                {journey.highlights && journey.highlights.length > 0 && (
                    <div className="mb-10">
                        <h2 className="mb-4 text-xl font-semibold text-white">Highlights</h2>
                        <ul className="space-y-3">
                            {journey.highlights.map((highlight, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                                    <span className="text-zinc-300">{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Links */}
                {journey.links && journey.links.length > 0 && (
                    <div className="mb-10">
                        <h2 className="mb-4 text-xl font-semibold text-white">Links</h2>
                        <div className="flex flex-wrap gap-3">
                            {journey.links.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/50 px-4 py-2 text-sm text-zinc-300 transition-all hover:border-cyan-500/50 hover:text-cyan-400"
                                >
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
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
                        <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
