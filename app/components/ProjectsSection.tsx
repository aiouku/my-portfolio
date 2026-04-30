"use client";

import { useState, useRef } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useLanguage } from "../context/LanguageContext";

const projects = [
    { id: 5, title: "Prompt-Master", image: "/images/projects/promptmaster.png", tech: ["Flutter", "Dart", "AI API"], category: "mobile", link: "https://little-monsters-877c0.web.app/", featured: true },
    { id: 6, title: "Keity's Pick", image: "/images/projects/keityspick.png", tech: ["HTML", "CSS", "JavaScript", "Figma"], category: "web", link: "https://keityspick.com/", featured: false },
    { id: 2, title: "Unity Game Prototype", image: "/images/projects/unity-game.png", tech: ["Unity", "C#", "Shader Graph"], category: "game", link: "https://unityroom.com/games/fivesecondsalpha", featured: true },
    { id: 7, title: "Tetris 1v1", image: "/images/projects/tetris.png", tech: ["JavaScript", "WebSocket"], category: "game", link: "https://tetris-1v1.onrender.com/", featured: false },
    { id: 1, title: "News Podcaster", image: "/images/projects/news-podcaster.png", tech: ["Flutter", "Dart", "Gemini API"], category: "mobile", link: "https://github.com/aiouku/news_podcaster", featured: true },
    { id: 4, title: "YouTube Analyst", image: "📊", tech: ["Python", "HTML Parsing", "Data Analysis"], category: "tool", link: "https://github.com/aiouku/YoutubeAnalyst", featured: false },
    { id: 3, title: "Portfolio Website", image: "/images/projects/portfolio.png", tech: ["Next.js", "TypeScript", "Tailwind"], category: "web", link: "https://github.com/aiouku/my-portfolio", featured: false },
];

function ProjectCard({ project, index, isVisible }: { project: typeof projects[0]; index: number; isVisible: boolean }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const { t } = useLanguage();

    const desc = t.projects.descriptions[project.id as keyof typeof t.projects.descriptions] ?? "";

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
            className={`group relative transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            style={{
                transitionDelay: `${index * 100}ms`,
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${isVisible ? "translateY(0)" : "translateY(48px)"}`,
            }}
        >
            <div className={`absolute -inset-0.5 rounded-3xl bg-cyan-500 opacity-0 blur transition-opacity duration-500 ${isHovered ? "opacity-50" : ""}`} />

            <article className="glass-card relative flex h-full flex-col overflow-hidden rounded-3xl">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 flex items-center justify-center">
                    {project.image.startsWith('/') ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    ) : (
                        <span className="text-7xl transition-transform duration-500 group-hover:scale-110">
                            {project.image}
                        </span>
                    )}

                    {project.featured && (
                        <span className="absolute right-4 top-4 rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-white">
                            {t.projects.featured}
                        </span>
                    )}

                    <div className={`absolute inset-0 flex items-center justify-center bg-zinc-900/80 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-glow rounded-full px-6 py-3 text-sm font-semibold text-zinc-900"
                        >
                            {t.projects.viewProject}
                        </a>
                    </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">
                        {desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-zinc-700/50 bg-zinc-800/50 px-3 py-1 text-xs text-zinc-400"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
        </div>
    );
}

export default function ProjectsSection() {
    const [ref, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
    const [activeCategory, setActiveCategory] = useState("all");
    const { t } = useLanguage();

    const categories = [
        { id: "all", label: t.projects.categories.all },
        { id: "mobile", label: t.projects.categories.mobile },
        { id: "game", label: t.projects.categories.game },
        { id: "web", label: t.projects.categories.web },
        { id: "tool", label: t.projects.categories.tool },
    ];

    const filtered = activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory);

    return (
        <section id="projects" ref={ref} className="relative py-32 px-6">
            <div className="mx-auto max-w-6xl">
                {/* Section Header */}
                <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    <span className="mb-4 inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300">
                        {t.projects.badge}
                    </span>
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        {t.projects.heading1} <span className="gradient-text">{t.projects.heading2}</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
                        {t.projects.description}
                    </p>
                </div>

                {/* Category Filter */}
                <div className={`mb-12 flex flex-wrap justify-center gap-3 transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${activeCategory === cat.id ? "bg-cyan-500 text-zinc-900 shadow-[0_0_20px_rgba(0,245,255,0.4)]" : "glass-card text-zinc-400 hover:text-white"}`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            isVisible={isVisible}
                        />
                    ))}
                </div>

                {/* View All Link */}
                <div className={`mt-12 text-center transition-all duration-700 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    <a
                        href="https://github.com/aiouku"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-cyan-400"
                    >
                        {t.projects.viewAll}
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
