"use client";

import { useState, useRef, useEffect } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useLanguage } from "../context/LanguageContext";

const projects = [
    { id: 8, title: "Pitta", jaTitle: null, image: "/images/projects/pitta.png", tech: ["Next.js", "TypeScript", "Konva"], category: "game", link: "https://pitta-dglo.onrender.com/" },
    { id: 12, title: "Trainly", jaTitle: null, image: "/images/projects/trainly.png", tech: ["SwiftUI", "Gemini API"], category: "mobile", link: "https://github.com/aiouku/Trainly" },
    { id: 5, title: "Prompt-Master", jaTitle: null, image: "/images/projects/promptmaster.png", tech: ["Flutter", "Dart", "AI API"], category: "mobile", link: "https://little-monsters-877c0.web.app/" },
    { id: 6, title: "Keity's Pick", jaTitle: null, image: "/images/projects/keityspick.png", tech: ["HTML", "CSS", "JavaScript", "Figma"], category: "web", link: "https://keityspick.com/" },
    { id: 2, title: "Five Seconds World", jaTitle: "5秒世界", image: "/images/projects/unity-game.png", tech: ["Unity", "C#", "Shader Graph"], category: "game", link: "https://unityroom.com/games/fivesecondsalpha" },
    { id: 11, title: "Hijack", jaTitle: null, image: "/images/projects/hijack.png", tech: ["Unity", "Shader Graph", "Animation"], category: "game", link: "https://github.com/inf1nitygame/HijackGame" },
    { id: 7, title: "Tetris 1v1", jaTitle: null, image: "/images/projects/tetris.png", tech: ["JavaScript", "WebSocket"], category: "game", link: "https://tetris-1v1.onrender.com/" },
    { id: 1, title: "News Podcaster", jaTitle: null, image: "/images/projects/news-podcaster.png", tech: ["Flutter", "Dart", "Gemini API"], category: "mobile", link: "https://github.com/aiouku/news_podcaster" },
    { id: 9, title: "VR Suika Game", jaTitle: "VRスイカゲーム", image: "/images/projects/vr.png", tech: ["Unity", "VR", "Oculus"], category: "game", link: "https://github.com/aiouku/waseda_projectresearch_unity" },
    { id: 4, title: "YouTube Analyst", jaTitle: null, image: "📊", tech: ["Python", "HTML Parsing", "Data Analysis"], category: "tool", link: "https://github.com/aiouku/YoutubeAnalyst" },
    { id: 10, title: "Toon Shader", jaTitle: null, image: "/images/projects/toon.png", tech: ["Unity", "Shader Graph", "URP"], category: "tool", link: "https://qiita.com/aiouku/items/1d8c8d279d4ff6181551" },
    { id: 3, title: "Portfolio Website", jaTitle: null, image: "/images/projects/portfolio.png", tech: ["Next.js", "TypeScript", "Tailwind"], category: "web", link: "https://github.com/aiouku/my-portfolio" },
];

type Project = typeof projects[0];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
    const { t, lang } = useLanguage();
    const desc = t.projects.fullDescriptions[project.id as keyof typeof t.projects.fullDescriptions] ?? "";
    const title = lang === "ja" && project.jaTitle ? project.jaTitle : project.title;

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Panel */}
            <div
                className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-zinc-700/50 bg-zinc-900/95 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                    {project.image.startsWith("/") ? (
                        <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                    ) : (
                        <span className="text-8xl">{project.image}</span>
                    )}
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
                        aria-label="Close"
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="p-8">
                    <h3 className="mb-3 text-2xl font-bold text-white">{title}</h3>
                    <p className="mb-6 leading-relaxed text-zinc-400">{desc}</p>

                    {/* Tech */}
                    <div className="mb-8 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-zinc-700/50 bg-zinc-800/50 px-3 py-1 text-sm text-zinc-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Link */}
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-glow inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-zinc-900"
                    >
                        {t.projects.viewProject}
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

function ProjectCard({ project, index, isVisible, onClick }: { project: Project; index: number; isVisible: boolean; onClick: () => void }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const { t, lang } = useLanguage();

    const desc = t.projects.descriptions[project.id as keyof typeof t.projects.descriptions] ?? "";
    const title = lang === "ja" && project.jaTitle ? project.jaTitle : project.title;

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
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            className={`group relative cursor-pointer transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            style={{
                transitionDelay: `${index * 100}ms`,
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${isVisible ? "translateY(0)" : "translateY(48px)"}`,
            }}
        >
            <div className={`absolute -inset-0.5 rounded-3xl bg-cyan-500 opacity-0 blur transition-opacity duration-500 ${isHovered ? "opacity-50" : ""}`} />

            <article className="glass-card relative flex h-full flex-col overflow-hidden rounded-3xl">
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 flex items-center justify-center">
                    {project.image.startsWith("/") ? (
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
                </div>

                <div className="flex flex-1 flex-col p-7">
                    <h3 className="mb-3 text-[2.1rem] font-semibold leading-tight text-white group-hover:text-cyan-400 transition-colors">
                        {title}
                    </h3>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">{desc}</p>

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
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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
        <section id="projects" ref={ref} className="relative py-32">
            {/* Section Header — full-width, flush left */}
            <div className={`mb-[150px] pl-6 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                <h2 className="text-[3.5rem] font-bold leading-none tracking-tight sm:text-[5rem] lg:text-[7rem]">
                    {t.projects.heading1} <span className="gradient-text">{t.projects.heading2}</span>
                </h2>
            </div>

            <div className="mx-auto max-w-6xl px-6">
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
                            onClick={() => setSelectedProject(project)}
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

            {/* Modal */}
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </section>
    );
}
