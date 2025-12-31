
import { useState, useEffect } from "react"

export function useHeadlines() {
    const [headlines, setHeadlines] = useState<string[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchHeadlines = async () => {
            try {
                const response = await fetch("/api/headlines")
                if (!response.ok) throw new Error("Failed to fetch headlines")
                const data = await response.json()
                setHeadlines(data)
            } catch (err) {
                setError(err instanceof Error ? err.message : "An error occurred")
            } finally {
                setLoading(false)
            }
        }

        fetchHeadlines()
    }, [])

    return { headlines, loading, error }
}
