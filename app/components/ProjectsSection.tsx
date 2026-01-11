"use client";

import { useState, useRef } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const projects = [
    {
        id: 1,
        title: "p5.js 2D Platformer",
        description: "A scrolling platformer prototype with block patterns, pitfalls, and stage composition logic. Built with vanilla JavaScript and p5.js for creative coding exploration.",
        image: "🎮",
        tech: ["p5.js", "JavaScript", "Canvas"],
        category: "game",
        link: "https://github.com/",
        featured: true,
    },
    {
        id: 2,
        title: "Unity Game Prototype",
        description: "A mid-scale Unity game prototype focusing on feel and novelty with iterative playtesting. Implemented custom physics and particle systems.",
        image: "🕹️",
        tech: ["Unity", "C#", "Shader Graph"],
        category: "game",
        link: "https://github.com/",
        featured: true,
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "This very portfolio! Built with Next.js 14, featuring glassmorphism design, smooth animations, and responsive layouts.",
        image: "🌐",
        tech: ["Next.js", "TypeScript", "Tailwind"],
        category: "web",
        link: "https://github.com/",
        featured: false,
    },
    {
        id: 4,
        title: "Interactive Art Generator",
        description: "Creative coding project that generates abstract art pieces using mathematical algorithms and user interaction.",
        image: "🎨",
        tech: ["p5.js", "WebGL", "GLSL"],
        category: "creative",
        link: "https://github.com/",
        featured: false,
    },
];

const categories = [
    { id: "all", label: "All Projects" },
    { id: "game", label: "Games" },
    { id: "web", label: "Web" },
    { id: "creative", label: "Creative" },
];

function ProjectCard({ project, index, isVisible }: { project: typeof projects[0]; index: number; isVisible: boolean }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: y * 10, y: x * -10 });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
        setIsHovered(false);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            className={`group relative transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
            style={{
                transitionDelay: `${index * 100}ms`,
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${isVisible ? "translateY(0)" : "translateY(48px)"
                    }`,
            }}
        >
            {/* Glow effect on hover */}
            <div
                className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 blur transition-opacity duration-500 ${isHovered ? "opacity-50" : ""
                    }`}
            />

            <article className="glass-card relative flex h-full flex-col overflow-hidden rounded-3xl">
                {/* Image/Emoji Placeholder */}
                <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-zinc-800/50 to-zinc-900/50">
                    <span className="text-7xl transition-transform duration-500 group-hover:scale-110">
                        {project.image}
                    </span>

                    {/* Featured Badge */}
                    {project.featured && (
                        <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-3 py-1 text-xs font-semibold text-white">
                            Featured
                        </span>
                    )}

                    {/* Overlay on hover */}
                    <div
                        className={`absolute inset-0 flex items-center justify-center bg-zinc-900/80 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-glow rounded-full px-6 py-3 text-sm font-semibold text-zinc-900"
                        >
                            View Project
                        </a>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <span
                                key={t}
                                className="rounded-full border border-zinc-700/50 bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
        </div>
    );
}

export default function ProjectsSection() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [ref, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.05 });

    const filteredProjects =
        activeCategory === "all"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <section
            id="projects"
            ref={ref}
            className="relative py-32 px-6"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div
                    className={`mb-12 text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                >
                    <span className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-300">
                        My Work
                    </span>
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
                        A collection of projects I've built, from games to web applications.
                        Each one represents a learning journey and creative exploration.
                    </p>
                </div>

                {/* Category Filter */}
                <div
                    className={`mb-12 flex flex-wrap items-center justify-center gap-3 transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                >
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${activeCategory === cat.id
                                    ? "text-zinc-900"
                                    : "text-zinc-400 hover:text-white"
                                }`}
                        >
                            {activeCategory === cat.id && (
                                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
                            )}
                            <span className="relative">{cat.label}</span>
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            isVisible={isVisible}
                        />
                    ))}
                </div>

                {/* View All Link */}
                <div
                    className={`mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                >
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-cyan-400"
                    >
                        View all projects on GitHub
                        <svg
                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
