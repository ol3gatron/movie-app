import { useEffect } from "react"
import { useDispatch } from "react-redux"

import MovieListing from "../MovieListing/MovieListing"
import movieApi from "../../common/apis/movieApi"
import { API_KEY } from "../../common/apis/movieApiKey"
import { addMovies } from "../../features/movies/movieSlice"

const Home = () => {
  const movieTest = "Harry"
  const dispatch = useDispatch()

  useEffect(() => {
    const getMoviesData = async () => {
      const res = await movieApi.get(`?apiKey=${API_KEY}&s=${movieTest}&type=movie`)
      dispatch(addMovies(res.data))
      console.log("Response:", res)
    }
    getMoviesData()
  }, [])

  return (
    <main>
      <div className="banner-img"></div>
      <MovieListing />
    </main>
  )
}
export default Home