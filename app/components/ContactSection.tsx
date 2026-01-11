"use client";

import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const contactMethods = [
    {
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        label: "Email",
        value: "kei@example.com",
        href: "mailto:kei@example.com",
    },
    {
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        label: "Location",
        value: "Tokyo, Japan",
        href: "#",
    },
    {
        icon: (
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
        ),
        label: "GitHub",
        value: "@keitanaka",
        href: "https://github.com/",
    },
];

export default function ContactSection() {
    const [ref, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSending, setIsSending] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        // Simulate sending
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSending(false);
        setFormState({ name: "", email: "", message: "" });
        alert("Message sent! (This is a demo)");
    };

    return (
        <section
            id="contact"
            ref={ref}
            className="relative py-32 px-6"
        >
            <div className="mx-auto max-w-6xl">
                {/* Section Header */}
                <div
                    className={`mb-16 text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                >
                    <span className="mb-4 inline-block rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 text-sm text-pink-300">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
                        Have a project idea or just want to chat? Feel free to reach out.
                        I'm always excited to explore new opportunities.
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-5">
                    {/* Contact Methods */}
                    <div
                        className={`lg:col-span-2 transition-all duration-700 delay-200 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                            }`}
                    >
                        <h3 className="mb-6 text-xl font-semibold">Contact Info</h3>
                        <div className="space-y-4">
                            {contactMethods.map((method, index) => (
                                <a
                                    key={method.label}
                                    href={method.href}
                                    target={method.href.startsWith("http") ? "_blank" : undefined}
                                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className={`glass-card group flex items-center gap-4 rounded-2xl p-4 transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                                        }`}
                                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-400 transition-colors group-hover:from-cyan-500/30 group-hover:to-purple-500/30">
                                        {method.icon}
                                    </div>
                                    <div>
                                        <div className="text-sm text-zinc-500">{method.label}</div>
                                        <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                                            {method.value}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Availability Badge */}
                        <div className="mt-8 glass-card rounded-2xl p-6">
                            <div className="flex items-center gap-3">
                                <span className="relative flex h-3 w-3">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                                </span>
                                <span className="text-sm text-zinc-300">
                                    Currently available for new projects
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div
                        className={`lg:col-span-3 transition-all duration-700 delay-400 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                            }`}
                    >
                        <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8">
                            <h3 className="mb-6 text-xl font-semibold">Send a Message</h3>

                            <div className="space-y-6">
                                {/* Name Field */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="name"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        onFocus={() => setFocusedField("name")}
                                        onBlur={() => setFocusedField(null)}
                                        className="peer w-full rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 pb-3 pt-6 text-white placeholder-transparent outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                                        placeholder="Your Name"
                                        required
                                    />
                                    <label
                                        htmlFor="name"
                                        className={`pointer-events-none absolute left-4 transition-all duration-200 ${focusedField === "name" || formState.name
                                                ? "top-2 text-xs text-cyan-400"
                                                : "top-1/2 -translate-y-1/2 text-sm text-zinc-500"
                                            }`}
                                    >
                                        Your Name
                                    </label>
                                </div>

                                {/* Email Field */}
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        onFocus={() => setFocusedField("email")}
                                        onBlur={() => setFocusedField(null)}
                                        className="peer w-full rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 pb-3 pt-6 text-white placeholder-transparent outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                                        placeholder="your@email.com"
                                        required
                                    />
                                    <label
                                        htmlFor="email"
                                        className={`pointer-events-none absolute left-4 transition-all duration-200 ${focusedField === "email" || formState.email
                                                ? "top-2 text-xs text-cyan-400"
                                                : "top-1/2 -translate-y-1/2 text-sm text-zinc-500"
                                            }`}
                                    >
                                        Email Address
                                    </label>
                                </div>

                                {/* Message Field */}
                                <div className="relative">
                                    <textarea
                                        id="message"
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        onFocus={() => setFocusedField("message")}
                                        onBlur={() => setFocusedField(null)}
                                        rows={5}
                                        className="peer w-full resize-none rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 pb-3 pt-6 text-white placeholder-transparent outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                                        placeholder="Your message..."
                                        required
                                    />
                                    <label
                                        htmlFor="message"
                                        className={`pointer-events-none absolute left-4 transition-all duration-200 ${focusedField === "message" || formState.message
                                                ? "top-2 text-xs text-cyan-400"
                                                : "top-4 text-sm text-zinc-500"
                                            }`}
                                    >
                                        Your Message
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSending}
                                    className="btn-glow relative w-full overflow-hidden rounded-xl px-8 py-4 text-base font-semibold text-zinc-900 transition-all disabled:opacity-70"
                                >
                                    <span className={`transition-opacity ${isSending ? "opacity-0" : "opacity-100"}`}>
                                        Send Message
                                    </span>
                                    {isSending && (
                                        <span className="absolute inset-0 flex items-center justify-center">
                                            <svg
                                                className="h-5 w-5 animate-spin text-zinc-900"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                />
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                />
                                            </svg>
                                        </span>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
