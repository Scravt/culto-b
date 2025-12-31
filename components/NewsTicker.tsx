export const NewsTicker = ({ headlines }: { headlines: string[] }) => {
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
