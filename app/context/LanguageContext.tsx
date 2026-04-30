"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../lib/translations";

export type Lang = "en" | "ja";

type LanguageContextType = {
    lang: Lang;
    toggle: () => void;
    t: typeof translations.en;
};

const LanguageContext = createContext<LanguageContextType>({
    lang: "en",
    toggle: () => {},
    t: translations.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Lang>("en");

    useEffect(() => {
        const saved = localStorage.getItem("lang") as Lang;
        if (saved === "en" || saved === "ja") setLang(saved);
    }, []);

    const toggle = () => {
        setLang((prev) => {
            const next = prev === "en" ? "ja" : "en";
            localStorage.setItem("lang", next);
            return next;
        });
    };

    return (
        <LanguageContext.Provider value={{ lang, toggle, t: translations[lang] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
