import { useEffect } from "react"

import MovieListing from "../MovieListing/MovieListing"
import movieApi from "../../common/apis/movieApi"
import { API_KEY } from "../../common/apis/movieApiKey"

const Home = () => {
  useEffect(() => {
    const movieTest = "Harry"
    try {
      const getMoviesData = async () => {
        const res = await movieApi.get(`?apiKey=${API_KEY}&s=${movieTest}&type=movie`)
        console.log("Response:", res)
      }
      getMoviesData()
    } catch (error) {
      console.log("Error: ", error)
    }
  }, [])

  return (
    <main>
      <div className="banner-img"></div>
      <MovieListing />
    </main>
  )
}
export default Home