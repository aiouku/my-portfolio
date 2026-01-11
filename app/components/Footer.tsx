"use client";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills" },
        { label: "Contact", href: "#contact" },
    ];

    const socialLinks = [
        { label: "GitHub", href: "https://github.com/" },
        { label: "Twitter", href: "https://twitter.com/" },
        { label: "LinkedIn", href: "https://linkedin.com/" },
    ];

    return (
        <footer className="relative border-t border-zinc-800 py-16 px-6">
            {/* Gradient Line */}
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

            <div className="mx-auto max-w-6xl">
                <div className="grid gap-12 md:grid-cols-3">
                    {/* Brand */}
                    <div>
                        <a href="#home" className="inline-block text-2xl font-bold">
                            <span className="gradient-text">K</span>
                            <span className="text-white">ei</span>
                        </a>
                        <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                            Building interactive experiences and web apps.
                            Always learning, always creating.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-300">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-zinc-400 transition-colors hover:text-cyan-400"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-300">
                            Connect
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
                        © {currentYear} Kei Tanaka. All rights reserved.
                    </p>
                    <p className="text-sm text-zinc-500">
                        Built with{" "}
                        <span className="text-cyan-400">Next.js</span>
                        {" "}& {" "}
                        <span className="text-purple-400">Tailwind CSS</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
