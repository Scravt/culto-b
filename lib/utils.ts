import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRandomItem<T>(array: T[]): T | undefined {
  if (array.length === 0) return undefined
  return array[Math.floor(Math.random() * array.length)]
}

// Defining a minimal interface for the movie to avoid circular dependency or huge imports if possible,
// or just accepting any object with these properties.
// However, to be safe and clean, I'll import the type or define a compatible one.
// Since utils shouldn't depend on hooks usually, let's use a generic constraint or just the specific type if clean.
// Given strict TS, let's try to import the type if it's just an interface.
import { type Movie } from "@/hooks/useMovies"

export function showRandomMovieAlert(movies: Movie[]) {
  const randomMovie = getRandomItem(movies)
  if (!randomMovie) return

  alert(
    `🎬 PELÍCULA ALEATORIA:\n\n${randomMovie.title} (${randomMovie.year})\nGénero: ${randomMovie.genre}\nRating: ${randomMovie.rating}\n\n¡Que lo disfrutes!`,
  )
}
