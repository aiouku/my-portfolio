"use client";

import { useState, useEffect } from "react";

const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navItems.map((item) => item.href.slice(1));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${isScrolled
                    ? "glass py-4"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <a
                    href="#home"
                    className="group relative text-2xl font-bold tracking-tight"
                >
                    <span className="gradient-text">K</span>
                    <span className="text-white transition-colors group-hover:text-cyan-400">ei</span>
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
                </a>

                {/* Desktop Nav */}
                <ul className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className={`relative py-2 text-sm font-medium transition-colors ${activeSection === item.href.slice(1)
                                        ? "text-cyan-400"
                                        : "text-zinc-400 hover:text-white"
                                    }`}
                            >
                                {item.label}
                                {activeSection === item.href.slice(1) && (
                                    <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-cyan-400 to-purple-500" />
                                )}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <a
                    href="#contact"
                    className="btn-glow hidden rounded-full px-6 py-2.5 text-sm font-semibold text-zinc-900 md:block"
                >
                    Get In Touch
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
                    aria-label="Toggle menu"
                >
                    <div className="flex h-5 w-6 flex-col justify-between">
                        <span
                            className={`h-0.5 w-full rounded-full bg-white transition-all duration-300 ${isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
                                }`}
                        />
                        <span
                            className={`h-0.5 w-full rounded-full bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`h-0.5 w-full rounded-full bg-white transition-all duration-300 ${isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                                }`}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-40 flex items-center justify-center transition-all duration-500 md:hidden ${isMobileMenuOpen
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                    }`}
                style={{
                    background: "rgba(10, 10, 15, 0.98)",
                    backdropFilter: "blur(20px)",
                }}
            >
                <ul className="flex flex-col items-center gap-8">
                    {navItems.map((item, index) => (
                        <li
                            key={item.href}
                            style={{
                                transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : "0ms",
                            }}
                            className={`transition-all duration-500 ${isMobileMenuOpen
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-4 opacity-0"
                                }`}
                        >
                            <a
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-3xl font-semibold text-white transition-colors hover:text-cyan-400"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
