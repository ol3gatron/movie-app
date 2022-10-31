import { useSelector } from "react-redux"
import { getAllMovies } from "../../features/movies/movieSlice"
import MovieCard from "../MovieCard/MovieCard"

interface Movie {
  Title: string,
  Year: string,
  imdbID: string,
  type: string,
  Poster: string,
}

const MovieListing = () => {
  const movies = useSelector(getAllMovies)

  const renderMovies = movies.Response === "True" ? (
    <>
      {movies.Search.map((movie: Movie, index: number) => (
        <MovieCard key={index} data={movie} />
      ))}
    </>
  ) : (
    <div className="movies-error">
      <h3>{movies.Error}</h3>
    </div>
  )

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {renderMovies}
        </div>
      </div>
    </div>
  )
}
export default MovieListing