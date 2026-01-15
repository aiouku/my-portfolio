"use client";

import dynamic from "next/dynamic";

// Dynamically import Dither to avoid SSR issues with Three.js
const Dither = dynamic(() => import("./Dither"), { ssr: false });

export default function AnimatedBackground() {
    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            {/* Dither Background Effect */}
            <div className="absolute inset-0 pointer-events-auto opacity-40">
                <Dither
                    waveColor={[0.0, 0.3, 0.35]}
                    disableAnimation={false}
                    enableMouseInteraction={true}
                    mouseRadius={0.3}
                    colorNum={4}
                    waveAmplitude={0.2}
                    waveFrequency={3}
                    waveSpeed={0.05}
                />
            </div>

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
                    backgroundSize: "50px 50px",
                }}
            />

            {/* Vignette effect */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at center, transparent 0%, rgba(10,10,15,0.7) 100%)",
                }}
            />
        </div>
    );
}

