"use client"

import { X } from "lucide-react"

interface AddThreatFormProps {
    onClose: () => void
}

export function AddThreatForm({ onClose }: AddThreatFormProps) {
    return (
        <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            onClick={onClose}
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
                                            onClose()
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
                    onClick={onClose}
                    className="absolute -top-4 -right-4 bg-black text-white rounded-full p-2 hover:bg-zinc-800 transition-colors shadow-lg"
                >
                    <X className="w-6 h-6" />
                </button>
            </div>
        </div>
    )
}
