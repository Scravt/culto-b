import { Film } from "lucide-react"
import { type Movie } from "@/hooks/useMovies"

interface MovieGridProps {
    movies: Movie[]
    onSelectMovie: (movie: Movie) => void
}

export function MovieGrid({ movies, onSelectMovie }: MovieGridProps) {
    return (
        <section className="relative py-12 px-4">
            <div className="max-w-[95%] mx-auto">
                <div className="columns-1 md:columns-2 lg:columns-4 gap-8 space-y-8">
                    {movies.map((movie, index) => (
                        <div
                            key={movie.id}
                            onClick={() => onSelectMovie(movie)}
                            className={`
                    break-inside-avoid relative group cursor-pointer
                    ${index % 7 === 0 ? "rotate-[8deg]" : index % 7 === 1 ? "-rotate-6" : index % 7 === 2 ? "rotate-3" : index % 7 === 3 ? "-rotate-[10deg]" : index % 7 === 4 ? "rotate-2" : index % 7 === 5 ? "-rotate-4" : "rotate-[6deg]"}
                    transition-all duration-100
                    hover:scale-105 hover:z-50 hover:animate-jitter
                  `}
                        >
                            <div
                                className="bg-[#2a2a2a] shadow-[12px_12px_0px_rgba(0,0,0,0.6)] overflow-hidden relative"
                                style={{
                                    clipPath:
                                        "polygon(2% 1%, 15% 0%, 30% 2%, 45% 0%, 60% 1%, 75% 0%, 90% 2%, 98% 1%, 99% 15%, 100% 30%, 99% 45%, 100% 60%, 99% 75%, 100% 90%, 98% 98%, 85% 100%, 70% 99%, 55% 100%, 40% 99%, 25% 100%, 10% 98%, 1% 99%, 0% 85%, 1% 70%, 0% 55%, 1% 40%, 0% 25%, 2% 10%)",
                                }}
                            >
                                <div className="aspect-[2/3] bg-gradient-to-br from-zinc-700 to-zinc-900 relative flex items-center justify-center grayscale contrast-75">
                                    <Film className="w-16 h-16 text-zinc-600" />
                                    <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_4px,rgba(0,0,0,0.4)_4px,rgba(0,0,0,0.4)_8px)]" />
                                    <div className="absolute inset-0 opacity-30 noise-filter" />
                                </div>
                                <div className="p-4 bg-[#1a1612] border-t-4 border-black relative">
                                    <h3
                                        className="font-black text-[#d4af37] text-lg mb-1 uppercase leading-tight"
                                        style={{ fontFamily: "Impact, sans-serif" }}
                                    >
                                        {movie.title}
                                    </h3>
                                    <p
                                        className="font-mono text-xs text-[#ff6b35] mb-2"
                                        style={{ fontFamily: "Courier Prime, Courier New, monospace" }}
                                    >
                                        {movie.year}
                                    </p>
                                    <p
                                        className="font-mono text-xs text-zinc-400 mb-1"
                                        style={{ fontFamily: "Courier Prime, Courier New, monospace" }}
                                    >
                                        {movie.genre}
                                    </p>
                                    <p
                                        className="font-mono text-xs text-[#8b0000] font-bold"
                                        style={{ fontFamily: "Courier Prime, Courier New, monospace" }}
                                    >
                                        ★ {movie.rating}
                                    </p>
                                </div>
                            </div>
                            <div
                                className="absolute -top-3 -left-3 w-16 h-10 bg-[#d4c5a9] opacity-80 rotate-45 border border-[#b8a88a] shadow-lg pointer-events-none"
                                style={{ clipPath: "polygon(5% 10%, 95% 0%, 100% 85%, 90% 100%, 0% 90%, 8% 15%)" }}
                            />
                            <div
                                className="absolute -top-3 -right-3 w-16 h-10 bg-[#d4c5a9] opacity-80 -rotate-45 border border-[#b8a88a] shadow-lg pointer-events-none"
                                style={{ clipPath: "polygon(0% 15%, 90% 0%, 100% 90%, 95% 100%, 5% 85%, 10% 10%)" }}
                            />
                        </div>
                    ))}
                </div>
                {movies.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-2xl font-mono text-black opacity-60">NO SE ENCONTRARON AMENAZAS EN ESTA CATEGORÍA</p>
                    </div>
                )}
            </div>
        </section>
    )
}
