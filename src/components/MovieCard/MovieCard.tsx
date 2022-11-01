import { Link } from "react-router-dom"

import "./MovieCard.scss"

interface Movie {
  Title: string,
  Year: string,
  imdbID: string,
  type: string,
  Poster: string,
}

interface Props {
  data: Movie
}

const MovieCard = ({data}: Props) => {
  return (
    <div className="card-item">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default MovieCard