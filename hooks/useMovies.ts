
import { useState, useEffect } from "react"

export interface Movie {
    id: number
    title: string
    year: string
    genre: string
    rating: string
    director: string
    synopsis: string
    threatLevel: string
}

export function useMovies() {
    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch("/api/movies")
                if (!response.ok) throw new Error("Failed to fetch movies")
                const data = await response.json()
                setMovies(data)
            } catch (err) {
                setError(err instanceof Error ? err.message : "An error occurred")
            } finally {
                setLoading(false)
            }
        }

        fetchMovies()
    }, [])

    return { movies, loading, error }
}
