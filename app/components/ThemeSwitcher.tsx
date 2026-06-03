"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

const PRESETS = [
    "#00f5ff",
    "#a78bfa",
    "#34d399",
    "#fb923c",
    "#fb7185",
    "#facc15",
    "#60a5fa",
];

function hslToHex(h: number, s: number, l: number): string {
    s /= 100;
    l /= 100;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) => {
        const k = (n + h / 30) % 12;
        const c = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * c).toString(16).padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

function hexToHue(hex: string): number {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    if (max === min) return 0;
    const d = max - min;
    let h = 0;
    switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
    }
    return Math.round(h * 360);
}

export default function ThemeSwitcher() {
    const { accentColor, setAccentColor } = useTheme();
    const [open, setOpen] = useState(false);
    const [hue, setHue] = useState(180);
    const [isMono, setIsMono] = useState(false);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        if (!isMono) setHue(hexToHue(accentColor));
    }, [accentColor, isMono]);

    useEffect(() => {
        setIsMono(localStorage.getItem("mono-mode") === "true");
    }, []);

    const toggleMono = () => {
        const next = !isMono;
        setIsMono(next);
        localStorage.setItem("mono-mode", String(next));
        if (next) {
            localStorage.setItem("pre-mono-color", accentColor);
            setAccentColor("#ffffff");
        } else {
            const restored = localStorage.getItem("pre-mono-color") ?? "#00f5ff";
            setAccentColor(restored);
            setHue(hexToHue(restored));
        }
    };

    const handleHue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const h = Number(e.target.value);
        setHue(h);
        if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
            setAccentColor(hslToHex(h, 100, 65));
            rafRef.current = null;
        });
    };

    const handlePreset = (color: string) => {
        setAccentColor(color);
        setHue(hexToHue(color));
    };

    return (
        <>
            <style>{`
                .hue-slider { -webkit-appearance: none; appearance: none; outline: none; border: none; }
                .hue-slider::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    width: 20px; height: 20px;
                    border-radius: 50%;
                    background: #fff;
                    border: 2px solid rgba(0,0,0,0.25);
                    cursor: pointer;
                    box-shadow: 0 1px 4px rgba(0,0,0,0.5);
                }
                .hue-slider::-moz-range-thumb {
                    width: 20px; height: 20px;
                    border-radius: 50%;
                    background: #fff;
                    border: 2px solid rgba(0,0,0,0.25);
                    cursor: pointer;
                    box-shadow: 0 1px 4px rgba(0,0,0,0.5);
                }
            `}</style>

            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
                {open && (
                    <div
                        className="rounded-2xl border border-zinc-800 p-5 shadow-2xl"
                        style={{ background: "#000", width: "13rem" }}
                    >
                        {/* Hue slider */}
                        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-zinc-500">Color</p>
                        <input
                            type="range"
                            min={0}
                            max={359}
                            value={hue}
                            onChange={handleHue}
                            className="hue-slider mb-5 w-full"
                            style={{
                                height: "12px",
                                borderRadius: "9999px",
                                background: "linear-gradient(to right,hsl(0,100%,65%),hsl(40,100%,65%),hsl(80,100%,65%),hsl(120,100%,65%),hsl(160,100%,65%),hsl(200,100%,65%),hsl(240,100%,65%),hsl(280,100%,65%),hsl(320,100%,65%),hsl(360,100%,65%))",
                            }}
                        />

                        {/* Presets */}
                        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-zinc-500">Presets</p>
                        <div className="grid grid-cols-4 gap-2">
                            {PRESETS.map((color) => {
                                const active = !isMono && accentColor.toLowerCase() === color.toLowerCase();
                                return (
                                    <button
                                        key={color}
                                        onClick={() => { if (isMono) toggleMono(); handlePreset(color); }}
                                        className="h-9 w-9 rounded-full transition-all hover:scale-110"
                                        style={{
                                            backgroundColor: color,
                                            outline: active ? "2px solid #fff" : "none",
                                            outlineOffset: "2px",
                                            boxShadow: active ? `0 0 8px ${color}` : "none",
                                        }}
                                    />
                                );
                            })}
                            {/* Mono button */}
                            <button
                                onClick={toggleMono}
                                className="h-9 w-9 rounded-full transition-all hover:scale-110 overflow-hidden"
                                style={{
                                    background: "linear-gradient(135deg, #000 50%, #fff 50%)",
                                    outline: isMono ? "2px solid #aaa" : "none",
                                    outlineOffset: "2px",
                                    boxShadow: isMono ? "0 0 8px rgba(255,255,255,0.5)" : "none",
                                }}
                                aria-label="Monochrome mode"
                            />
                        </div>
                    </div>
                )}

                {/* Toggle button */}
                <button
                    onClick={() => setOpen((o) => !o)}
                    className="flex h-12 w-12 items-center justify-center rounded-full border-2 shadow-lg backdrop-blur-md transition-all hover:scale-110"
                    style={{
                        borderColor: accentColor,
                        backgroundColor: `color-mix(in srgb, ${accentColor} 15%, #0a0a0f)`,
                        boxShadow: `0 0 16px color-mix(in srgb, ${accentColor} 40%, transparent)`,
                    }}
                    aria-label="Change accent color"
                >
                    <span className="h-5 w-5 rounded-full" style={{ backgroundColor: accentColor }} />
                </button>
            </div>
        </>
    );
}
