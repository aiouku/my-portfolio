"use client";

import { createContext, useContext, useState, useEffect } from "react";

const DEFAULT_COLOR = "#00f5ff";

function hexToRgb(hex: string): [number, number, number] {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
}

function hexToHsl(hex: string): [number, number, number] {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
        }
    }
    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function applyAccentColor(hex: string) {
    const [r, g, b] = hexToRgb(hex);
    const [h, s] = hexToHsl(hex);
    const el = document.documentElement;

    el.style.setProperty("--accent-cyan", hex);
    el.style.setProperty("--accent-cyan-dim", `hsl(${h}, ${s}%, 38%)`);
    el.style.setProperty("--accent-rgb", `${r}, ${g}, ${b}`);
    el.style.setProperty("--color-cyan-300", `hsl(${h}, ${s}%, 83%)`);
    el.style.setProperty("--color-cyan-400", `hsl(${h}, ${s}%, 72%)`);
    el.style.setProperty("--color-cyan-500", `hsl(${h}, ${s}%, 61%)`);
}

export function hexToWaveColor(hex: string): [number, number, number] {
    const [r, g, b] = hexToRgb(hex);
    return [r / 255 * 0.35, g / 255 * 0.35, b / 255 * 0.35];
}

type ThemeContextType = {
    accentColor: string;
    setAccentColor: (color: string) => void;
};

const ThemeContext = createContext<ThemeContextType>({
    accentColor: DEFAULT_COLOR,
    setAccentColor: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [accentColor, setAccentColorState] = useState(DEFAULT_COLOR);

    useEffect(() => {
        const saved = localStorage.getItem("accent-color") ?? DEFAULT_COLOR;
        setAccentColorState(saved);
        applyAccentColor(saved);
    }, []);

    const setAccentColor = (color: string) => {
        setAccentColorState(color);
        localStorage.setItem("accent-color", color);
        applyAccentColor(color);
    };

    return (
        <ThemeContext.Provider value={{ accentColor, setAccentColor }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
