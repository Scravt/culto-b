import { Film, X } from "lucide-react"

// Types reused from hooks (assuming export, but defining interface here for independence if needed, 
// strictly we should import if possible but interface is cleaner for component isolation unless we have shared type file)
// Reading previous step output, `useMovies` exports `Movie`.
import { type Movie } from "@/hooks/useMovies"
import { type Comment } from "@/hooks/useComments"
import { useState } from "react"
import { AddCommentForm } from "./AddCommentForm"

// Minimal comment interface removed in favor of import

interface MovieDetailsProps {
    movie: Movie
    comments: Comment[]
    onClose: () => void
    onAddComment: (comment: Omit<Comment, "id">) => void
}

export function MovieDetails({ movie, comments, onClose, onAddComment }: MovieDetailsProps) {
    const [showAddComment, setShowAddComment] = useState(false)
    return (
        <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center pt-[60px] px-4 pb-4 overflow-y-auto"
            onClick={onClose}
        >
            <div className="relative max-w-6xl w-full mb-8" onClick={(e) => e.stopPropagation()}>
                <div className="relative bg-[#e8d7b0] rounded-sm shadow-2xl p-6">
                    {/* Paper texture */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <div className="w-full h-full bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.05)_2px,rgba(0,0,0,0.05)_4px)]" />
                    </div>

                    {/* Coffee stain */}
                    <div
                        className="absolute top-20 right-16 w-24 h-24 rounded-full opacity-20 pointer-events-none"
                        style={{
                            background: "radial-gradient(circle, rgba(101,67,33,0.4) 0%, transparent 70%)",
                        }}
                    />

                    {/* CONFIDENCIAL stamp */}
                    <div className="absolute top-8 right-8 rotate-12">
                        <div className="border-4 border-[#8b0000] px-6 py-3 opacity-60">
                            <p
                                className="text-[#8b0000] font-black text-xl uppercase tracking-wider"
                                style={{ fontFamily: "Impact, sans-serif" }}
                            >
                                CONFIDENCIAL
                            </p>
                        </div>
                    </div>

                    <div className="relative z-10 grid md:grid-cols-[240px_1fr] gap-6">
                        {/* Movie poster with paperclip */}
                        <div className="relative">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                                <svg width="40" height="80" viewBox="0 0 40 80" fill="none">
                                    <path
                                        d="M20 5 C20 5, 15 5, 15 10 L15 60 C15 70, 25 70, 25 60 L25 15 C25 12, 23 10, 20 10 C17 10, 15 12, 15 15 L15 55"
                                        stroke="#a8a8a8"
                                        strokeWidth="3"
                                        fill="none"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>

                            <div className="aspect-[2/3] bg-gradient-to-br from-zinc-700 to-zinc-900 shadow-xl relative flex items-center justify-center grayscale contrast-75 border-4 border-white">
                                <Film className="w-20 h-20 text-zinc-600" />
                                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_4px,rgba(0,0,0,0.4)_4px,rgba(0,0,0,0.4)_8px)]" />
                                <div className="absolute inset-0 opacity-30 noise-filter" />
                            </div>
                        </div>

                        {/* Movie details */}
                        <div className="space-y-6">
                            <div className="-rotate-2">
                                <h2
                                    className="text-2xl md:text-3xl font-black uppercase text-black leading-tight border-4 border-black inline-block px-3 py-1 bg-[#d4af37]/30"
                                    style={{ fontFamily: "Impact, sans-serif" }}
                                >
                                    {movie.title}
                                </h2>
                            </div>

                            <div
                                className="space-y-4 font-mono text-sm md:text-base"
                                style={{ fontFamily: "Courier Prime, Courier New, monospace" }}
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <span className="uppercase text-zinc-600 font-bold">Año:</span>
                                        <p className="text-black font-bold border-b border-black/30 pb-1">{movie.year}</p>
                                    </div>
                                    <div>
                                        <span className="uppercase text-zinc-600 font-bold">Rating:</span>
                                        <p className="text-black font-bold border-b border-black/30 pb-1">★ {movie.rating}</p>
                                    </div>
                                </div>

                                <div>
                                    <span className="uppercase text-zinc-600 font-bold">Director:</span>
                                    <p className="text-black font-bold border-b border-black/30 pb-1">{movie.director}</p>
                                </div>

                                <div>
                                    <span className="uppercase text-zinc-600 font-bold">Categoría:</span>
                                    <p className="text-black font-bold border-b border-black/30 pb-1">{movie.genre}</p>
                                </div>

                                <div>
                                    <span className="uppercase text-zinc-600 font-bold">Nivel de Amenaza:</span>
                                    <p
                                        className={`font-black text-lg ${movie.threatLevel === "EXTREMO"
                                            ? "text-[#8b0000]"
                                            : movie.threatLevel === "ALTO"
                                                ? "text-orange-600"
                                                : movie.threatLevel === "MEDIO"
                                                    ? "text-yellow-700"
                                                    : "text-green-700"
                                            }`}
                                    >
                                        [{movie.threatLevel}]
                                    </p>
                                </div>

                                <div className="pt-4">
                                    <span className="uppercase text-zinc-600 font-bold mb-2 block">Sinopsis del Caso:</span>
                                    <div className="bg-white/40 p-4 border border-black/20 shadow-inner">
                                        <p className="text-black leading-relaxed">{movie.synopsis}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <button className="relative group">
                                    <div className="bg-[#2a2a2a] text-[#d4af37] px-6 py-3 font-black uppercase text-sm shadow-lg hover:shadow-xl transition-all border-2 border-black">
                                        <span className="relative z-10">▶ Ver Trailer</span>
                                        <div className="absolute top-0 left-0 right-0 h-2 bg-[#d4af37] flex gap-[2px]">
                                            {[...Array(20)].map((_, i) => (
                                                <div key={i} className="flex-1 bg-black" />
                                            ))}
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#d4af37] flex gap-[2px]">
                                            {[...Array(20)].map((_, i) => (
                                                <div key={i} className="flex-1 bg-black" />
                                            ))}
                                        </div>
                                    </div>
                                </button>

                                <button onClick={onClose} className="relative group">
                                    <div className="border-4 border-[#8b0000] bg-[#8b0000]/10 px-6 py-3 hover:bg-[#8b0000]/20 transition-colors rotate-3 hover:rotate-0">
                                        <p
                                            className="text-[#8b0000] font-black text-sm uppercase tracking-wider flex items-center gap-2"
                                            style={{ fontFamily: "Impact, sans-serif" }}
                                        >
                                            <X className="w-4 h-4" />
                                            CERRAR CASO
                                        </p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 mt-6 pt-4 border-t-2 border-black/20">
                        <h3
                            className="text-2xl font-black uppercase mb-6 text-black"
                            style={{ fontFamily: "Impact, sans-serif" }}
                        >
                            Notas de Investigadores:
                        </h3>

                        {/* Masonry grid with scattered sticky notes */}
                        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                            {comments.map((comment, index) => (
                                <div
                                    key={comment.id}
                                    className={`
                        break-inside-avoid relative p-4 shadow-lg hover:shadow-2xl transition-all cursor-default hover:scale-105 hover:z-10
                        ${index % 5 === 0 ? "rotate-2" : index % 5 === 1 ? "-rotate-3" : index % 5 === 2 ? "rotate-1" : index % 5 === 3 ? "-rotate-2" : "rotate-3"}
                        ${comment.color === "yellow" ? "bg-[#fef3c7]" : comment.color === "pink" ? "bg-[#fecaca]" : "bg-[#dbeafe]"}
                      `}
                                    style={{
                                        minHeight: "140px",
                                    }}
                                >
                                    {/* Thumbtack pin */}
                                    <div
                                        className={`absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full shadow-lg ${comment.color === "yellow"
                                            ? "bg-amber-600"
                                            : comment.color === "pink"
                                                ? "bg-red-600"
                                                : "bg-blue-600"
                                            }`}
                                    >
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-800 rounded-full" />
                                    </div>

                                    <p
                                        className="text-sm text-black mb-3 leading-relaxed"
                                        style={{ fontFamily: "Courier Prime, Courier New, monospace" }}
                                    >
                                        {comment.text}
                                    </p>
                                    <p
                                        className="text-xs text-black/60 font-bold text-right mt-auto"
                                        style={{ fontFamily: "Courier Prime, Courier New, monospace" }}
                                    >
                                        — {comment.author}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <button
                                onClick={() => setShowAddComment(true)}
                                className="group relative inline-block focus:outline-none focus:ring rotate-1 hover:rotate-0 transition-transform"
                            >
                                <span
                                    className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-black transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
                                ></span>

                                <span
                                    className="relative inline-block border-2 border-black px-8 py-3 text-lg font-black uppercase tracking-widest text-black bg-[#dbeafe] hover:bg-[#bfdbfe]"
                                    style={{ fontFamily: "Impact, sans-serif" }}
                                >
                                    + Agregar Nota
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {showAddComment && (
                <AddCommentForm
                    onClose={() => setShowAddComment(false)}
                    onAddComment={onAddComment}
                />
            )}
        </div>
    )
}
