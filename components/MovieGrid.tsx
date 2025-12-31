import { MovieCard } from "./MovieCard"
import { type Movie } from "@/hooks/useMovies"

interface MovieGridProps {
    movies: Movie[]
    onSelectMovie: (movie: Movie) => void
}

export function MovieGrid({ movies, onSelectMovie }: MovieGridProps) {
    return (
        <section className="relative py-12 px-4">
            <div className="max-w-[65%] mx-auto">
                <div className="columns-1 md:columns-2 lg:columns-5 gap-6 space-y-6">
                    {movies.map((movie, index) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            index={index}
                            onClick={() => onSelectMovie(movie)}
                        />
                    ))}
                </div>
                {movies.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-2xl font-mono text-black opacity-60">NO SE ENCONTRARON AMENAZAS EN ESTA CATEGORÍA</p>
                    </div>
                )}
            </div>
        </section>
    )
}
