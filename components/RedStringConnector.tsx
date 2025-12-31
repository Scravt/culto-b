export function RedStringConnector() {
    return (
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
    )
}
