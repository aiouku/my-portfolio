"use client";

import Link from "next/link";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { journeyData } from "../lib/journeyData";
import { useLanguage } from "../context/LanguageContext";

export default function AboutSection() {
    const [ref, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
    const { t } = useLanguage();

    return (
        <section
            id="about"
            ref={ref}
            className="relative py-32"
        >
            {/* Section Header — full-width, flush left */}
            <div
                className={`mb-[150px] pl-6 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
                <h2 className="text-[3.5rem] font-bold leading-none tracking-tight sm:text-[5rem] lg:text-[7rem]">
                    {t.about.heading1} <span className="gradient-text">{t.about.heading2}</span>
                </h2>
            </div>

            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left: Profile Image & Bio */}
                    <div
                        className={`transition-all duration-700 delay-200 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
                    >
                        {/* Animated Profile Container */}
                        <div className="relative mb-8 mt-[100px] inline-block">
                            <div className="animate-spin-slow absolute -inset-1 rounded-3xl bg-cyan-500 opacity-50 blur-lg" />
                            <div className="animate-morph relative h-64 w-64 overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 sm:h-80 sm:w-80">
                                <img
                                    src="/images/me.png"
                                    alt="Kei Tanaka"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        <h3 className="mb-4 text-5xl font-semibold leading-tight">
                            {t.about.hello} <span className="text-cyan-400">Kei Tanaka</span>
                        </h3>
                        <p className="mb-4 leading-relaxed text-zinc-400">
                            {t.about.bio1}
                        </p>
                        <p className="mb-6 leading-relaxed text-zinc-400">
                            {t.about.bio2}
                        </p>
                    </div>

                    {/* Right: Timeline */}
                    <div
                        className={`transition-all duration-700 delay-400 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
                    >
                        <h3 className="mb-8 text-2xl font-semibold">{t.about.myJourney}</h3>
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-4 top-0 h-full w-0.5 bg-cyan-500" />

                            {/* Timeline Items */}
                            <div className="space-y-8">
                                {journeyData.filter(item => item.showInTimeline !== false).map((item, index) => {
                                    const translated = t.journey.items[item.slug as keyof typeof t.journey.items];
                                    return (
                                        <div
                                            key={item.id}
                                            className={`relative pl-12 transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                                            style={{ transitionDelay: `${600 + index * 150}ms` }}
                                        >
                                            {/* Dot */}
                                            <div className="absolute left-2 top-1.5 h-4 w-4 rounded-full border-2 border-cyan-400 bg-zinc-900">
                                                <div className="absolute inset-1 animate-pulse rounded-full bg-cyan-400" />
                                            </div>

                                            {/* Content */}
                                            <Link
                                                href={`/journey/${item.slug}`}
                                                className="glass-card block rounded-2xl p-5 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(0,245,255,0.15)]"
                                            >
                                                <div className="mb-2 flex items-center gap-3">
                                                    <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-medium text-cyan-300">
                                                        {item.year}
                                                    </span>
                                                    <span className="text-xs text-zinc-500 capitalize">
                                                        {item.type}
                                                    </span>
                                                    <svg
                                                        className="ml-auto h-4 w-4 text-zinc-500 transition-transform group-hover:translate-x-1"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="mb-1 font-semibold text-white">{translated?.title ?? item.title}</h4>
                                                <p className="text-sm text-zinc-400">{translated?.description ?? item.description}</p>
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Download Resume - hidden for now */}
                    </div>
                </div>

                {/* Awards */}
                <div
                    className={`mt-16 transition-all duration-700 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                >
                    <h3 className="mb-6 text-2xl font-semibold">{t.about.awards.heading}</h3>
                    <div className="flex flex-wrap gap-4">
                        {t.about.awards.items.map((item, i) => (
                            <Link
                                key={i}
                                href={`/journey/${item.slug}`}
                                className="glass-card flex items-center gap-4 rounded-2xl px-6 py-4 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(0,245,255,0.15)]"
                            >
                                <span className="text-2xl">🏆</span>
                                <div>
                                    <p className="font-semibold text-white">{item.award}</p>
                                    <p className="text-sm text-zinc-400">{item.event}</p>
                                </div>
                                <span className="ml-4 rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-medium text-cyan-300">
                                    {item.year}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
