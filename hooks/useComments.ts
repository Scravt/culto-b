
import { useState, useEffect } from "react"

export interface Comment {
    id: number
    text: string
    author: string
    color: string
}

export function useComments() {
    const [comments, setComments] = useState<Comment[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch("/api/comments")
                if (!response.ok) throw new Error("Failed to fetch comments")
                const data = await response.json()
                setComments(data)
            } catch (err) {
                setError(err instanceof Error ? err.message : "An error occurred")
            } finally {
                setLoading(false)
            }
        }

        fetchComments()
    }, [])

    return { comments, loading, error }
}
