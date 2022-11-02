import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import { fetchAsyncDetails, getDetails } from "../../features/movies/movieSlice"
import { FaStar, FaThumbsUp, FaFilm, FaCalendar } from "react-icons/fa"

import "./MovieDetails.scss"

const MovieDetails = () => {
  const { imdbID } = useParams()
  const dispatch = useDispatch()
  const data = useSelector(getDetails)

  useEffect(() => {
    dispatch(fetchAsyncDetails(imdbID))
  }, [dispatch, imdbID])

  return (
    <div className="movie-section">
      <div className="section-left">
        <div className="movie-title">{data.Title}</div>
        <div className="movie-rating">
          <span>
            IMDB Rating <FaStar className="fa-star"/> : {data.imdbRating}
          </span>
          <span>
            IMDB Votes <FaThumbsUp className="fa fa-thumbs-up"/> : {data.imdbVotes}
          </span>
          <span>
            Runtime <FaFilm className="fa fa-film"/>: {data.Runtime}
          </span>
          <span>
            Year <FaCalendar className="fa fa-calendar"/> : {data.Year}
          </span>
        </div>
        <div className="movie-plot">{data.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Actors</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Generes</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img src={data.Poster} alt={data.Title} />
      </div>
    </div>
  )
}
export default MovieDetails