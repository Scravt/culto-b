"use client"

import { useState } from "react"
import { useHeadlines } from "@/hooks/useHeadlines"
import { useMovies, type Movie } from "@/hooks/useMovies"
import { useComments } from "@/hooks/useComments"
import { getRandomItem, showRandomMovieAlert } from "@/lib/utils"

import { AddThreatForm } from "@/components/AddThreatForm"
import { NewsTicker } from "@/components/NewsTicker"
import { LoadingScreen } from "@/components/LoadingScreen"
import { MovieDetails } from "@/components/MovieDetails"
import { HeroSection } from "@/components/HeroSection"
import { FilterBar } from "@/components/FilterBar"
import { MovieGrid } from "@/components/MovieGrid"
import { ActionButtons } from "@/components/ActionButtons"
import { RedStringConnector } from "@/components/RedStringConnector"


export default function CultoBPage() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null)
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
  const [showSubmissionForm, setShowSubmissionForm] = useState(false)

  const { headlines, loading: loadingHeadlines } = useHeadlines()
  const { movies, loading: loadingMovies } = useMovies()
  const { comments: initialComments, loading: loadingComments } = useComments()

  const [comments, setComments] = useState<typeof initialComments>([])

  // Load initial comments when fetched
  if (comments.length === 0 && initialComments.length > 0) {
    setComments(initialComments)
  }

  const handleAddComment = (newComment: Omit<typeof initialComments[0], "id">) => {
    const commentWithId = { ...newComment, id: Date.now() }
    setComments((prev) => [commentWithId, ...prev])
  }

  const filteredMovies = selectedGenre ? movies.filter((m) => m.genre === selectedGenre) : movies

  const randomize = () => {
    showRandomMovieAlert(movies)
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
            comments={comments}
            onClose={() => setSelectedMovie(null)}
            onAddComment={handleAddComment}
          />
        )
      }


      <HeroSection />


      <RedStringConnector />

      <FilterBar
        selectedGenre={selectedGenre}
        onSelectGenre={setSelectedGenre}
      />

      <MovieGrid
        movies={filteredMovies}
        onSelectMovie={setSelectedMovie}
      />

      <ActionButtons
        onReportClick={() => setShowSubmissionForm(true)}
        onRandomizeClick={randomize}
      />
    </div>
  )
}
