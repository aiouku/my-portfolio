"use client";

export default function AnimatedBackground() {
    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            {/* Large gradient orbs */}
            <div
                className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full opacity-30"
                style={{
                    background: "radial-gradient(circle, rgba(0,245,255,0.4) 0%, transparent 70%)",
                    animation: "orb-float-1 20s ease-in-out infinite",
                }}
            />
            <div
                className="absolute -right-32 top-1/2 h-[600px] w-[600px] rounded-full opacity-25"
                style={{
                    background: "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
                    animation: "orb-float-2 25s ease-in-out infinite",
                }}
            />
            <div
                className="absolute bottom-1/4 left-1/3 h-[400px] w-[400px] rounded-full opacity-20"
                style={{
                    background: "radial-gradient(circle, rgba(20,184,166,0.4) 0%, transparent 70%)",
                    animation: "orb-float-3 18s ease-in-out infinite",
                }}
            />

            {/* Smaller floating particles */}
            {Array.from({ length: 20 }).map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        width: `${Math.random() * 6 + 2}px`,
                        height: `${Math.random() * 6 + 2}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        background: `rgba(${i % 3 === 0
                                ? "0,245,255"
                                : i % 3 === 1
                                    ? "168,85,247"
                                    : "20,184,166"
                            },${Math.random() * 0.5 + 0.2})`,
                        animation: `float ${Math.random() * 4 + 4}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 2}s`,
                    }}
                />
            ))}

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.02]"
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
                className="absolute inset-0"
                style={{
                    background: "radial-gradient(ellipse at center, transparent 0%, rgba(10,10,15,0.8) 100%)",
                }}
            />
        </div>
    );
}
