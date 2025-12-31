import { Clapperboard } from "lucide-react"

interface ActionButtonsProps {
    onReportClick: () => void
    onRandomizeClick: () => void
}

export function ActionButtons({ onReportClick, onRandomizeClick }: ActionButtonsProps) {
    return (
        <>
            <button
                onClick={onReportClick}
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
                onClick={onRandomizeClick}
                className="fixed bottom-16 left-8 z-40 bg-[#8b0000] text-white px-12 py-8 font-black uppercase text-xl shadow-2xl hover:shadow-[0_0_30px_rgba(139,0,0,0.6)] transition-all -rotate-3 hover:rotate-0 border-4 border-black"
                style={{ fontFamily: "Impact, sans-serif" }}
            >
                🎲 PELÍCULA ALEATORIA
            </button>
        </>
    )
}
