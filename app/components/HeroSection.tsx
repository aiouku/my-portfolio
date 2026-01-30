"use client";

import { useTypingEffect, useScrollAnimation } from "../hooks/useScrollAnimation";
import dynamic from "next/dynamic";

// Dynamically import ASCIIText to avoid SSR issues with Three.js
const ASCIIText = dynamic(() => import("./ASCIIText"), { ssr: false });

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/aiouku",
        icon: (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
    {
        name: "Twitter",
        href: "https://twitter.com/",
        icon: (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/",
        icon: (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
];


export default function HeroSection() {
    const typedText = useTypingEffect(
        "Student Developer • Unity / Web / Python",
        40,
        800
    );
    const [ref, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.2 });

    return (
        <section
            id="home"
            ref={ref}
            className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
        >
            <div className="relative z-10 mx-auto max-w-5xl text-center">
                {/* Badge */}
                <div
                    className={`mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
                        }`}
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                    </span>
                    Available for work
                </div>

                {/* Intro Text */}
                <p
                    className={`mb-2 text-2xl font-medium text-zinc-300 sm:text-3xl transition-all duration-700 delay-100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                >
                    Hi, I'm
                </p>

                {/* ASCII Name Animation */}
                <div
                    className={`relative mx-auto -translate-x-1 w-[90vw] sm:w-[85vw] lg:w-[80vw] max-w-6xl h-[180px] sm:h-[220px] lg:h-[260px] mb-6 transition-all duration-700 delay-150 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-0 opacity-0"
                        }`}
                >
                    <ASCIIText
                        text="Kei Tanaka"
                        enableWaves={true}
                        asciiFontSize={7}
                        textFontSize={150}
                        planeBaseHeight={10}
                        textColor="#00f5ff"
                    />
                </div>

                {/* Typing Subtitle */}
                <div
                    className={`mb-6 h-8 text-xl text-zinc-400 sm:text-2xl transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                >
                    <span>{typedText}</span>
                    <span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-cyan-400" />
                </div>

                {/* Bio */}
                <p
                    className={`mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400 transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                >
                    I build interactive experiences and web apps. I like making prototypes fast
                    and polishing UX. Currently focused on creating delightful digital experiences.
                </p>

                {/* CTA Buttons */}
                <div
                    className={`mb-12 flex flex-wrap items-center justify-center gap-4 transition-all duration-700 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                >
                    <a
                        href="#projects"
                        className="btn-glow group inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-zinc-900"
                    >
                        View My Work
                        <svg
                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <a
                        href="#contact"
                        className="glass-card inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white"
                    >
                        Let's Talk
                    </a>
                </div>

                {/* Social Links */}
                <div
                    className={`mb-16 flex items-center justify-center gap-4 transition-all duration-700 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                >
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-all duration-300 hover:border-cyan-500/50 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(0,245,255,0.3)]"
                            aria-label={link.name}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs text-zinc-500">Scroll</span>
                    <div className="flex h-10 w-6 items-start justify-center rounded-full border border-zinc-700 p-2">
                        <div className="h-2 w-1 animate-bounce rounded-full bg-cyan-400" />
                    </div>
                </div>
            </div>
        </section>
    );
}
