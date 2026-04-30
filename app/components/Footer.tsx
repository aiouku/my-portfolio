"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { t } = useLanguage();

    const quickLinks = [
        { label: t.nav.home, href: "#home" },
        { label: t.nav.about, href: "#about" },
        { label: t.nav.projects, href: "#projects" },
        { label: t.nav.skills, href: "#skills" },
        { label: t.nav.contact, href: "#contact" },
    ];

    const socialLinks = [
        { label: "GitHub", href: "https://github.com/aiouku" },
        { label: "Twitter", href: "https://twitter.com/" },
        { label: "LinkedIn", href: "https://linkedin.com/" },
    ];

    return (
        <footer className="relative border-t border-zinc-800 py-16 px-6">
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

            <div className="mx-auto max-w-6xl">
                <div className="grid gap-12 md:grid-cols-3">
                    {/* Brand */}
                    <div>
                        <a href="#home" className="inline-block text-2xl font-bold">
                            <span className="gradient-text">Kei Tanaka</span>
                        </a>
                        <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                            {t.footer.tagline}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-300">
                            {t.footer.quickLinks}
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} className="text-sm text-zinc-400 transition-colors hover:text-cyan-400">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-300">
                            {t.footer.connect}
                        </h4>
                        <ul className="space-y-2">
                            {socialLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-zinc-400 transition-colors hover:text-cyan-400"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 sm:flex-row">
                    <p className="text-sm text-zinc-500">
                        {t.footer.copyright(currentYear)}
                    </p>
                    <p className="text-sm text-zinc-500">
                        {t.footer.builtWith}{" "}
                        <span className="text-cyan-400">Next.js</span>
                        {" "}& {" "}
                        <span className="text-cyan-400">Tailwind CSS</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
