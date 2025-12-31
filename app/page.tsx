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
  const { comments: mockComments, loading: loadingComments } = useComments()

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
            comments={mockComments}
            onClose={() => setSelectedMovie(null)}
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
