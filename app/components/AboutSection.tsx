"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

const timeline = [
    {
        year: "2025",
        title: "Joined Life is Tech!",
        description: "Started working as a mentor providing IT education to teenagers.",
        type: "work",
    },
    {
        year: "2024",
        title: "Won GDSC Hackathon",
        description: "Won the Audience Prize at GDSC Japan Summer Hackathon with News Podcaster app.",
        type: "achievement",
    },
    {
        year: "2024",
        title: "Entered Waseda University",
        description: "Started studying Computer Science at Waseda University.",
        type: "education",
    },
    {
        year: "2019",
        title: "Started Programming",
        description: "Began my coding journey at age 14, learning Python and building tools for games.",
        type: "milestone",
    },
];

export default function AboutSection() {
    const [ref, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

    return (
        <section
            id="about"
            ref={ref}
            className="relative py-32 px-6"
        >
            <div className="mx-auto max-w-6xl">
                {/* Section Header */}
                <div
                    className={`mb-16 text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                >
                    <span className="mb-4 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm text-cyan-300">
                        About Me
                    </span>
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Crafting <span className="gradient-text">Digital Experiences</span>
                    </h2>
                </div>

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left: Profile Image & Bio */}
                    <div
                        className={`transition-all duration-700 delay-200 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                            }`}
                    >
                        {/* Animated Profile Container */}
                        <div className="relative mb-8 inline-block">
                            <div className="animate-spin-slow absolute -inset-1 rounded-3xl bg-cyan-500 opacity-50 blur-lg" />
                            <div className="animate-morph relative h-64 w-64 overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 sm:h-80 sm:w-80">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-6xl">👨‍💻</span>
                                </div>
                            </div>
                        </div>

                        <h3 className="mb-4 text-2xl font-semibold">
                            Hello! I'm <span className="text-cyan-400">aiouku</span>
                        </h3>
                        <p className="mb-4 leading-relaxed text-zinc-400">
                            I'm a Computer Science student at Waseda University, passionate about
                            building interactive experiences. I started programming at 14 and
                            have been exploring game dev, web apps, and creative coding ever since.
                        </p>
                        <p className="mb-6 leading-relaxed text-zinc-400">
                            Currently working at Life is Tech!, inspiring the next generation of
                            developers. I love hackathons, rapid prototyping, and turning ideas
                            into reality through code.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { value: "5+", label: "Years Coding" },
                                { value: "🏆", label: "Hackathon Win" },
                                { value: "∞", label: "Curiosity" },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="glass-card rounded-2xl p-4 text-center"
                                >
                                    <div className="gradient-text text-2xl font-bold">{stat.value}</div>
                                    <div className="text-sm text-zinc-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Timeline */}
                    <div
                        className={`transition-all duration-700 delay-400 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                            }`}
                    >
                        <h3 className="mb-8 text-2xl font-semibold">My Journey</h3>
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-4 top-0 h-full w-0.5 bg-cyan-500" />

                            {/* Timeline Items */}
                            <div className="space-y-8">
                                {timeline.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`relative pl-12 transition-all duration-500 ${isVisible
                                            ? "translate-y-0 opacity-100"
                                            : "translate-y-4 opacity-0"
                                            }`}
                                        style={{ transitionDelay: `${600 + index * 150}ms` }}
                                    >
                                        {/* Dot */}
                                        <div className="absolute left-2 top-1.5 h-4 w-4 rounded-full border-2 border-cyan-400 bg-zinc-900">
                                            <div className="absolute inset-1 animate-pulse rounded-full bg-cyan-400" />
                                        </div>

                                        {/* Content */}
                                        <div className="glass-card rounded-2xl p-5">
                                            <div className="mb-2 flex items-center gap-3">
                                                <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-medium text-cyan-300">
                                                    {item.year}
                                                </span>
                                                <span className="text-xs text-zinc-500 capitalize">
                                                    {item.type}
                                                </span>
                                            </div>
                                            <h4 className="mb-1 font-semibold text-white">{item.title}</h4>
                                            <p className="text-sm text-zinc-400">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Download Resume */}
                        <div className="mt-10">
                            <a
                                href="#"
                                className="btn-glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-zinc-900"
                            >
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
