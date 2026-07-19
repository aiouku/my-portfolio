"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "../context/ThemeContext";

const ASCIIText = dynamic(() => import("./ASCIIText"), { ssr: false });

export default function ClosedSection() {
    const { accentColor } = useTheme();

    // Lock scrolling while the site is closed
    useEffect(() => {
        const { overflow } = document.body.style;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = overflow;
        };
    }, []);

    return (
        <section
            id="closed"
            className="relative flex h-screen w-full items-center justify-center overflow-hidden"
        >
            <div className="relative z-10 w-full text-center">
                {/* ASCII Closed Animation */}
                <div className="relative mx-auto w-full h-[280px] sm:h-[340px] lg:h-[420px]">
                    <ASCIIText
                        text="Closed.."
                        enableWaves={true}
                        asciiFontSize={10}
                        textFontSize={220}
                        planeBaseHeight={10}
                        textColor={accentColor}
                    />
                </div>
            </div>
        </section>
    );
}
