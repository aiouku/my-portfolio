"use client";

import { useEffect, useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useLanguage } from "../context/LanguageContext";

const skills = [
    { name: "Unity / C#", level: 85 },
    { name: "React / Next.js", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "p5.js / Creative Coding", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML / CSS", level: 90 },
];

function SkillBar({ skill, index, shouldAnimate }: { skill: typeof skills[0]; index: number; shouldAnimate: boolean }) {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (shouldAnimate) {
            const timer = setTimeout(() => setWidth(skill.level), index * 150);
            return () => clearTimeout(timer);
        }
    }, [shouldAnimate, skill.level, index]);

    return (
        <div className="group">
            <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-300 group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                </span>
                <span className="text-sm text-zinc-500">{skill.level}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                <div
                    className="h-full rounded-full bg-cyan-500 transition-all duration-1000 ease-out"
                    style={{ width: `${width}%` }}
                />
            </div>
        </div>
    );
}

export default function SkillsSection() {
    const [ref, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
    const { t } = useLanguage();

    return (
        <section id="skills" ref={ref} className="relative py-32 px-6">
            <div className="mx-auto max-w-6xl">
                {/* Section Header */}
                <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    <span className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm text-teal-300">
                        {t.skills.badge}
                    </span>
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        {t.skills.heading1} <span className="gradient-text">{t.skills.heading2}</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
                        {t.skills.description}
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Skill Bars */}
                    <div className={`transition-all duration-700 delay-200 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}>
                        <h3 className="mb-8 text-xl font-semibold">{t.skills.proficiency}</h3>
                        <div className="space-y-6">
                            {skills.map((skill, index) => (
                                <SkillBar key={skill.name} skill={skill} index={index} shouldAnimate={isVisible} />
                            ))}
                        </div>
                    </div>

                    {/* Skill Categories Grid */}
                    <div className={`transition-all duration-700 delay-400 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}>
                        <h3 className="mb-8 text-xl font-semibold">{t.skills.expertise}</h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {t.skills.categories.map((category, catIndex) => (
                                <div
                                    key={category.name}
                                    className={`glass-card group rounded-2xl p-5 transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                                    style={{ transitionDelay: `${500 + catIndex * 100}ms` }}
                                >
                                    <div className="mb-3 flex items-center gap-3">
                                        <span className="text-2xl group-hover:scale-110 transition-transform">{category.icon}</span>
                                        <h4 className="font-semibold text-white">{category.name}</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-full border border-zinc-700/50 bg-zinc-800/50 px-2.5 py-1 text-xs text-zinc-400 transition-colors hover:border-cyan-500/30 hover:text-cyan-300"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Fun Stats */}
                <div className={`mt-16 grid gap-6 sm:grid-cols-3 transition-all duration-700 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    {t.skills.funStats.map((stat) => (
                        <div key={stat.label} className="glass-card group flex items-center gap-4 rounded-2xl p-6">
                            <span className="text-3xl group-hover:animate-bounce">{stat.icon}</span>
                            <div>
                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                                <div className="text-sm text-zinc-400">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
