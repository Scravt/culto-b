interface FilterBarProps {
    selectedGenre: string | null
    onSelectGenre: (genre: string | null) => void
}

export function FilterBar({ selectedGenre, onSelectGenre }: FilterBarProps) {
    return (
        <div className="relative">
            <section className="relative py-8 px-4 border-b-2 border-[#8b7355]/30">
                <div className="max-w-6xl mx-auto overflow-x-auto">
                    <div className="flex gap-6 pb-4 min-w-max px-4">
                        {["Tentáculos", "Gore Gratuito", "Adolescentes Tontos", "Viajes Falopa"].map((genre, i) => (
                            <button
                                key={genre}
                                onClick={() => onSelectGenre(selectedGenre === genre ? null : genre)}
                                className={`
                    relative px-8 py-4 text-black font-bold text-sm uppercase
                    transition-all hover:scale-105 hover:shadow-2xl
                    ${selectedGenre === genre ? "scale-105 brightness-110" : ""}
                    ${i % 2 === 0 ? "rotate-2" : "-rotate-2"}
                  `}
                                style={{
                                    background: "linear-gradient(135deg, #c0c0c0 0%, #a8a8a8 100%)",
                                    boxShadow: "0 6px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
                                    clipPath: "polygon(2% 5%, 97% 2%, 99% 95%, 3% 98%)",
                                    fontFamily: "Arial, sans-serif",
                                    letterSpacing: "0.05em",
                                }}
                            >
                                <span
                                    style={{
                                        textShadow: "1px 1px 0px rgba(0,0,0,0.3)",
                                        position: "relative",
                                        zIndex: 10,
                                    }}
                                >
                                    {genre}
                                </span>
                                <div
                                    className="absolute inset-0 opacity-20 pointer-events-none"
                                    style={{
                                        background:
                                            "repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 4px)",
                                    }}
                                />
                                <div className="absolute top-0 left-2 w-1 h-1 bg-black/30 rounded-full" />
                                <div className="absolute bottom-1 right-3 w-1 h-1 bg-black/30 rounded-full" />
                            </button>
                        ))}
                        {selectedGenre && (
                            <button
                                onClick={() => onSelectGenre(null)}
                                className="px-6 py-4 bg-[#8b0000] text-white font-mono text-sm uppercase rotate-3 border-2 border-black hover:scale-105 transition-transform shadow-lg"
                            >
                                ✕ LIMPIAR
                            </button>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}
