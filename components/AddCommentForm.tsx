"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { type Comment } from "@/hooks/useComments"

interface AddCommentFormProps {
    onClose: () => void
    onAddComment: (comment: Omit<Comment, "id">) => void
}

export function AddCommentForm({ onClose, onAddComment }: AddCommentFormProps) {
    const [text, setText] = useState("")
    const [author, setAuthor] = useState("")
    const [color, setColor] = useState("yellow")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!text || !author) return

        onAddComment({
            text,
            author,
            color,
        })
        onClose()
    }

    return (
        <div
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div className="relative max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
                <div className={`p-6 shadow-2xl relative rotate-2 transition-all duration-300 ${color === "yellow" ? "bg-[#fef3c7]" : color === "pink" ? "bg-[#fecaca]" : "bg-[#dbeafe]"}`}>

                    {/* Tape effect */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/30 skew-x-12 blur-[1px]" />

                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-black/50 hover:text-black hover:scale-110 transition-transform"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <h3
                        className="text-xl font-black uppercase mb-4 text-black text-center"
                        style={{ fontFamily: "Impact, sans-serif" }}
                    >
                        Nuevo Hallazgo
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold uppercase mb-1 text-black/70 font-mono">
                                Mensaje:
                            </label>
                            <textarea
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                className="w-full bg-black/5 p-2 font-mono text-sm min-h-[100px] border-b border-dashed border-black/30 focus:outline-none resize-none placeholder-black/30"
                                style={{ fontFamily: "Courier Prime, Courier New, monospace" }}
                                placeholder="Escribe tu observación..."
                                autoFocus
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase mb-1 text-black/70 font-mono">
                                Investigador:
                            </label>
                            <input
                                type="text"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                className="w-full bg-black/5 p-2 font-mono text-sm border-b border-dashed border-black/30 focus:outline-none placeholder-black/30"
                                style={{ fontFamily: "Courier Prime, Courier New, monospace" }}
                                placeholder="Tu nombre"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase mb-2 text-black/70 font-mono">
                                Color de Nota:
                            </label>
                            <div className="flex gap-3 justify-center">
                                <button
                                    type="button"
                                    onClick={() => setColor("yellow")}
                                    className={`w-8 h-8 rounded-full bg-[#fef3c7] border-2 shadow-sm transition-transform hover:scale-110 ${color === "yellow" ? "border-black scale-110" : "border-transparent"}`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setColor("pink")}
                                    className={`w-8 h-8 rounded-full bg-[#fecaca] border-2 shadow-sm transition-transform hover:scale-110 ${color === "pink" ? "border-black scale-110" : "border-transparent"}`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setColor("blue")}
                                    className={`w-8 h-8 rounded-full bg-[#dbeafe] border-2 shadow-sm transition-transform hover:scale-110 ${color === "blue" ? "border-black scale-110" : "border-transparent"}`}
                                />
                            </div>
                        </div>

                        <div className="pt-2 text-center">
                            <button
                                type="submit"
                                className="group relative inline-block focus:outline-none focus:ring "
                            >
                                <span
                                    className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-black transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
                                ></span>

                                <span
                                    className="relative inline-block border-2 border-current px-8 py-2 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75 bg-[#d4af37]"
                                    style={{ fontFamily: "Impact, sans-serif" }}
                                >
                                    Pegar Nota
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
