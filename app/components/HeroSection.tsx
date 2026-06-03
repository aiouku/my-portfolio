"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";
import dynamic from "next/dynamic";
import { useTheme } from "../context/ThemeContext";

const ASCIIText = dynamic(() => import("./ASCIIText"), { ssr: false });

export default function HeroSection() {
    const { accentColor } = useTheme();
    const [ref, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.2 });

    return (
        <section
            id="home"
            ref={ref}
            className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
        >
            <div className="relative z-10 mx-auto max-w-5xl text-center">
                {/* ASCII Name Animation */}
                <div
                    className={`relative mx-auto -translate-x-1 w-[90vw] sm:w-[85vw] lg:w-[80vw] max-w-6xl h-[180px] sm:h-[220px] lg:h-[260px] mb-6 transition-all duration-700 delay-150 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-0 opacity-0"}`}
                >
                    <ASCIIText
                        text="Kei Tanaka"
                        enableWaves={true}
                        asciiFontSize={7}
                        textFontSize={150}
                        planeBaseHeight={10}
                        textColor={accentColor}
                    />
                </div>
            </div>
        </section>
    );
}
