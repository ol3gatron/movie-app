import { useEffect } from "react"
import { useDispatch } from "react-redux"

import MovieListing from "../MovieListing/MovieListing"
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice"

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncMovies("Star Wars"))
    dispatch(fetchAsyncShows("Star Wars"))
  }, [dispatch])

  return (
    <main>
      <div className="banner-img"></div>
      <MovieListing />
    </main>
  )
}
export default Home