export function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-90"
                style={{
                    backgroundImage: "url('/images/hero-culto-b.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/60" />
            <div className="relative z-10 mb-20">
                <div className="h-32" />
            </div>
            <div className="relative z-10 -rotate-6 mx-auto max-w-md animate-float">
                <div className="bg-[#f4e8c1] border-2 border-[#8b7355] p-6 shadow-[16px_16px_0px_rgba(0,0,0,0.3)]">
                    <p
                        className="font-mono text-black text-base md:text-lg leading-relaxed relative z-10"
                        style={{ fontFamily: "Courier Prime, Courier New, monospace" }}
                    >
                        Bienvenido al videoclub del infierno. <br />
                        Cuidado con la cinta.
                    </p>
                    <div className="absolute inset-0 pointer-events-none opacity-15">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="h-[1px] bg-[#8b7355] mt-8" />
                        ))}
                    </div>
                </div>
                <div
                    className="absolute -top-3 right-8 w-24 h-6 bg-[#d4c5a9] opacity-90 rotate-45 border border-[#b8a88a] shadow-sm"
                    style={{ clipPath: "polygon(2% 0%, 98% 5%, 95% 100%, 0% 95%)" }}
                />
                <div
                    className="absolute -bottom-3 left-12 w-28 h-6 bg-[#d4c5a9] opacity-90 -rotate-12 border border-[#b8a88a] shadow-sm"
                    style={{ clipPath: "polygon(5% 0%, 100% 2%, 98% 100%, 0% 98%)" }}
                />
            </div>
        </section>
    )
}
