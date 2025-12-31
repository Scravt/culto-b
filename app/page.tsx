"use client"

import { useState } from "react"
import { Film, Clapperboard, X } from "lucide-react"
import { useHeadlines } from "@/hooks/useHeadlines"
import { useMovies, type Movie } from "@/hooks/useMovies"
import { useComments } from "@/hooks/useComments"


import { AddThreatForm } from "@/components/AddThreatForm"
import { NewsTicker } from "@/components/NewsTicker"
import { LoadingScreen } from "@/components/LoadingScreen"
import { MovieDetails } from "@/components/MovieDetails"


export default function CultoBPage() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null)
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
  const [showSubmissionForm, setShowSubmissionForm] = useState(false)

  const { headlines, loading: loadingHeadlines } = useHeadlines()
  const { movies, loading: loadingMovies } = useMovies()
  const { comments: mockComments, loading: loadingComments } = useComments()

  const filteredMovies = selectedGenre ? movies.filter((m) => m.genre === selectedGenre) : movies

  const randomize = () => {
    if (movies.length === 0) return;
    const randomMovie = movies[Math.floor(Math.random() * movies.length)]
    alert(
      `🎬 PELÍCULA ALEATORIA:\n\n${randomMovie.title} (${randomMovie.year})\nGénero: ${randomMovie.genre}\nRating: ${randomMovie.rating}\n\n¡Que lo disfrutes!`,
    )
  }

  if (loadingMovies || loadingComments || loadingHeadlines) {
    return (
      <LoadingScreen />
    )
  }

  return (
    <div className="min-h-screen relative bg-newspaper pb-16">
      <NewsTicker headlines={headlines} />

      {showSubmissionForm && (
        <AddThreatForm onClose={() => setShowSubmissionForm(false)} />
      )}

      {
        selectedMovie && (
          <MovieDetails
            movie={selectedMovie}
            comments={mockComments}
            onClose={() => setSelectedMovie(null)}
          />
        )
      }

      {/* Hero Section */}
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

      {/* Red string connector */}
      <div className="relative h-24 flex items-center justify-center -mt-12">
        <svg className="absolute" width="200" height="100" viewBox="0 0 200 100">
          <path
            d="M 100 0 Q 120 30, 100 60 T 100 100"
            stroke="#8b0000"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,3"
            opacity="0.6"
          />
          <circle cx="100" cy="0" r="3" fill="#8b0000" opacity="0.8" />
          <circle cx="100" cy="100" r="3" fill="#8b0000" opacity="0.8" />
        </svg>
      </div>

      {/* Filter Bar */}
      <div className="relative">
        <section className="relative py-8 px-4 border-b-2 border-[#8b7355]/30">
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <div className="flex gap-6 pb-4 min-w-max px-4">
              {["Tentáculos", "Gore Gratuito", "Adolescentes Tontos", "Viajes Falopa"].map((genre, i) => (
                <button
                  key={genre}
                  onClick={() => setSelectedGenre(selectedGenre === genre ? null : genre)}
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
                  onClick={() => setSelectedGenre(null)}
                  className="px-6 py-4 bg-[#8b0000] text-white font-mono text-sm uppercase rotate-3 border-2 border-black hover:scale-105 transition-transform shadow-lg"
                >
                  ✕ LIMPIAR
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Movie Grid */}
        <section className="relative py-12 px-4">
          <div className="max-w-[95%] mx-auto">
            <div className="columns-1 md:columns-2 lg:columns-4 gap-8 space-y-8">
              {filteredMovies.map((movie, index) => (
                <div
                  key={movie.id}
                  onClick={() => setSelectedMovie(movie)}
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
            {filteredMovies.length === 0 && (
              <div className="text-center py-20">
                <p className="text-2xl font-mono text-black opacity-60">NO SE ENCONTRARON AMENAZAS EN ESTA CATEGORÍA</p>
              </div>
            )}
          </div>
        </section>
      </div>

      <button
        onClick={() => setShowSubmissionForm(true)}
        className="fixed bottom-16 right-8 z-40 group"
        aria-label="Report a Threat"
      >
        <div className="bg-[#8b0000] text-white px-12 py-8 shadow-2xl hover:shadow-[0_0_30px_rgba(139,0,0,0.6)] transition-all rotate-3 hover:rotate-0 border-4 border-black">
          <p
            className="font-black text-xl uppercase tracking-wider flex items-center gap-2"
            style={{ fontFamily: "Impact, sans-serif" }}
          >
            <Clapperboard className="w-8 h-8" />
            Reportar Amenaza
          </p>
        </div>
      </button>

      {/* Random button */}
      <button
        onClick={randomize}
        className="fixed bottom-16 left-8 z-40 bg-[#8b0000] text-white px-12 py-8 font-black uppercase text-xl shadow-2xl hover:shadow-[0_0_30px_rgba(139,0,0,0.6)] transition-all -rotate-3 hover:rotate-0 border-4 border-black"
        style={{ fontFamily: "Impact, sans-serif" }}
      >
        🎲 PELÍCULA ALEATORIA
      </button>
    </div >
  )
}
