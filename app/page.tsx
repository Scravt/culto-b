"use client"

import { useState } from "react"
import { Film, Clapperboard, X } from "lucide-react"
import { useHeadlines } from "@/hooks/useHeadlines"
import { useMovies, type Movie } from "@/hooks/useMovies"
import { useComments } from "@/hooks/useComments"


const NewsTicker = ({ headlines }: { headlines: string[] }) => {
  if (!headlines || headlines.length === 0) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-red-700 border-t-4 border-black overflow-hidden">
      <div className="relative h-12 flex items-center">
        {/* Breaking News Label */}
        <div className="absolute left-0 top-0 bottom-0 bg-yellow-400 px-6 flex items-center z-10 border-r-4 border-black">
          <p
            className="font-black text-black text-xs uppercase tracking-wider whitespace-nowrap"
            style={{ fontFamily: "Impact, sans-serif" }}
          >
            ⚠️ URGENTE
          </p>
        </div>

        {/* Scrolling Text */}
        <div className="absolute left-0 right-0 animate-marquee whitespace-nowrap pl-32">
          <span
            className="inline-block text-white font-bold text-sm uppercase"
            style={{ fontFamily: "Arial Black, sans-serif" }}
          >
            {headlines.join(" ••• ")} ••• {headlines.join(" ••• ")}
          </span>
        </div>
      </div>
    </div>
  )
}

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
      <div className="min-h-screen bg-newspaper flex items-center justify-center">
        <div className="text-2xl font-black uppercase text-[#8b0000] animate-pulse" style={{ fontFamily: "Impact, sans-serif" }}>
          CARGANDO AMENAZAS...
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative bg-newspaper pb-16">
      <NewsTicker headlines={headlines} />

      {showSubmissionForm && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setShowSubmissionForm(false)}
        >
          <div className="relative max-w-2xl w-full my-8" onClick={(e) => e.stopPropagation()}>
            {/* Clipboard background */}
            <div className="relative bg-[#3a3a3a] rounded-sm p-4 shadow-2xl">
              {/* Metal clip */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-16">
                <div className="w-full h-full bg-gradient-to-b from-zinc-500 to-zinc-600 rounded-t-xl shadow-lg border-2 border-zinc-700" />
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-6 bg-zinc-400 rounded-full" />
              </div>

              {/* Paper form */}
              <div className="bg-[#e8e4dc] p-8 shadow-inner relative">
                {/* Paper texture lines */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  {[...Array(30)].map((_, i) => (
                    <div key={i} className="h-[1px] bg-zinc-400 mb-6" />
                  ))}
                </div>

                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h2
                      className="text-2xl font-bold uppercase tracking-wider mb-2"
                      style={{ fontFamily: "Courier Prime, Courier New, monospace" }}
                    >
                      REPORTE DE AMENAZA CINEMATOGRÁFICA
                    </h2>
                    <p
                      className="text-xs text-zinc-600 uppercase"
                      style={{ fontFamily: "Courier Prime, Courier New, monospace" }}
                    >
                      Formulario #B-2025-CULTO
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Threat Name */}
                    <div>
                      <label
                        className="block text-sm font-bold mb-2 uppercase text-zinc-700"
                        style={{ fontFamily: "Courier Prime, Courier New, monospace" }}
                      >
                        Nombre de la Amenaza:
                      </label>
                      <input
                        type="text"
                        placeholder="Ej: Mega Shark vs. Giant Octopus"
                        className="w-full bg-transparent border-b-2 border-dotted border-zinc-500 pb-2 font-mono focus:outline-none focus:border-black text-black placeholder:text-zinc-400"
                        style={{ fontFamily: "Courier Prime, Courier New, monospace" }}
                      />
                    </div>

                    {/* Year of Sighting */}
                    <div>
                      <label
                        className="block text-sm font-bold mb-2 uppercase text-zinc-700"
                        style={{ fontFamily: "Courier Prime, Courier New, monospace" }}
                      >
                        Año del Avistamiento:
                      </label>
                      <input
                        type="text"
                        placeholder="Ej: 1987"
                        className="w-full bg-transparent border-b-2 border-dotted border-zinc-500 pb-2 font-mono focus:outline-none focus:border-black text-black placeholder:text-zinc-400"
                        style={{ fontFamily: "Courier Prime, Courier New, monospace" }}
                      />
                    </div>

                    {/* Category Checkboxes */}
                    <div>
                      <label
                        className="block text-sm font-bold mb-3 uppercase text-zinc-700"
                        style={{ fontFamily: "Courier Prime, Courier New, monospace" }}
                      >
                        Categoría de Amenaza:
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {["Tentáculos", "Gore Gratuito", "Adolescentes Tontos", "Viajes Falopa"].map((cat) => (
                          <label
                            key={cat}
                            className="flex items-center gap-2 cursor-pointer"
                            style={{ fontFamily: "Courier Prime, Courier New, monospace" }}
                          >
                            <input
                              type="checkbox"
                              className="w-4 h-4 border-2 border-zinc-600 rounded-none accent-black"
                            />
                            <span className="text-sm text-black">{cat}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="border-l-4 border-[#8b0000] pl-4 bg-yellow-50/50 py-3">
                      <label
                        className="block text-sm font-bold mb-2 uppercase text-[#8b0000] flex items-center gap-2"
                        style={{ fontFamily: "Courier Prime, Courier New, monospace" }}
                      >
                        <span className="text-lg">✍️</span>
                        TIPO DE AMENAZA NO LISTADA (Entrada Manual):
                      </label>
                      <input
                        type="text"
                        placeholder="Ej: Robots Sentimentales, Zombies Filosóficos..."
                        className="w-full bg-white/70 border-b-2 border-dotted border-[#8b0000] pb-2 font-mono focus:outline-none focus:border-black text-black placeholder:text-zinc-400 italic"
                        style={{ fontFamily: "Courier Prime, Courier New, monospace" }}
                      />
                      <p
                        className="text-xs text-zinc-600 mt-2 italic"
                        style={{ fontFamily: "Courier Prime, Courier New, monospace" }}
                      >
                        * Agregado a mano por el investigador de campo
                      </p>
                    </div>

                    {/* Description with lined paper background */}
                    <div>
                      <label
                        className="block text-sm font-bold mb-2 uppercase text-zinc-700"
                        style={{ fontFamily: "Courier Prime, Courier New, monospace" }}
                      >
                        Descripción del Incidente:
                      </label>
                      <div
                        className="relative bg-white/60 border border-zinc-400 p-4"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(transparent, transparent 27px, #cbd5e1 27px, #cbd5e1 28px)",
                          backgroundSize: "100% 28px",
                        }}
                      >
                        <textarea
                          rows={5}
                          placeholder="Describa los detalles del caso..."
                          className="w-full bg-transparent resize-none focus:outline-none font-mono text-black placeholder:text-zinc-400 leading-7"
                          style={{ fontFamily: "Courier Prime, Courier New, monospace", lineHeight: "28px" }}
                        />
                      </div>
                    </div>

                    {/* Submit Button as Red Stamp */}
                    <div className="flex justify-center pt-4">
                      <button
                        className="relative group"
                        onClick={() => {
                          alert("Reporte enviado al Departamento de Amenazas Cinematográficas.")
                          setShowSubmissionForm(false)
                        }}
                      >
                        <div className="border-4 border-[#8b0000] bg-[#8b0000]/10 px-8 py-4 hover:bg-[#8b0000]/20 transition-colors rotate-3 hover:rotate-0">
                          <p
                            className="text-[#8b0000] font-black text-lg uppercase tracking-wider"
                            style={{ fontFamily: "Impact, sans-serif" }}
                          >
                            CONFIDENCIAL - ENVIAR
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={() => setShowSubmissionForm(false)}
              className="absolute -top-4 -right-4 bg-black text-white rounded-full p-2 hover:bg-zinc-800 transition-colors shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )
      }

      {
        selectedMovie && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedMovie(null)}
          >
            <div className="relative max-w-4xl w-full my-8" onClick={(e) => e.stopPropagation()}>
              <div className="relative bg-[#e8d7b0] rounded-sm shadow-2xl p-8 md:p-12">
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

                <div className="relative z-10 grid md:grid-cols-[280px_1fr] gap-8">
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
                        className="text-3xl md:text-4xl font-black uppercase text-black leading-tight border-4 border-black inline-block px-4 py-2 bg-[#d4af37]/30"
                        style={{ fontFamily: "Impact, sans-serif" }}
                      >
                        {selectedMovie.title}
                      </h2>
                    </div>

                    <div
                      className="space-y-4 font-mono text-sm md:text-base"
                      style={{ fontFamily: "Courier Prime, Courier New, monospace" }}
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="uppercase text-zinc-600 font-bold">Año:</span>
                          <p className="text-black font-bold border-b border-black/30 pb-1">{selectedMovie.year}</p>
                        </div>
                        <div>
                          <span className="uppercase text-zinc-600 font-bold">Rating:</span>
                          <p className="text-black font-bold border-b border-black/30 pb-1">★ {selectedMovie.rating}</p>
                        </div>
                      </div>

                      <div>
                        <span className="uppercase text-zinc-600 font-bold">Director:</span>
                        <p className="text-black font-bold border-b border-black/30 pb-1">{selectedMovie.director}</p>
                      </div>

                      <div>
                        <span className="uppercase text-zinc-600 font-bold">Categoría:</span>
                        <p className="text-black font-bold border-b border-black/30 pb-1">{selectedMovie.genre}</p>
                      </div>

                      <div>
                        <span className="uppercase text-zinc-600 font-bold">Nivel de Amenaza:</span>
                        <p
                          className={`font-black text-lg ${selectedMovie.threatLevel === "EXTREMO"
                            ? "text-[#8b0000]"
                            : selectedMovie.threatLevel === "ALTO"
                              ? "text-orange-600"
                              : selectedMovie.threatLevel === "MEDIO"
                                ? "text-yellow-700"
                                : "text-green-700"
                            }`}
                        >
                          [{selectedMovie.threatLevel}]
                        </p>
                      </div>

                      <div className="pt-4">
                        <span className="uppercase text-zinc-600 font-bold mb-2 block">Sinopsis del Caso:</span>
                        <div className="bg-white/40 p-4 border border-black/20 shadow-inner">
                          <p className="text-black leading-relaxed">{selectedMovie.synopsis}</p>
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

                      <button onClick={() => setSelectedMovie(null)} className="relative group">
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

                <div className="relative z-10 mt-12 pt-8 border-t-2 border-black/20">
                  <h3
                    className="text-2xl font-black uppercase mb-6 text-black"
                    style={{ fontFamily: "Impact, sans-serif" }}
                  >
                    Notas de Investigadores:
                  </h3>

                  {/* Masonry grid with scattered sticky notes */}
                  <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {mockComments.map((comment, index) => (
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
                </div>
              </div>
            </div>
          </div>
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
