import { useState } from "react"
import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa"
import "./Header.scss"

import user from "../../images/user.png"
import { useDispatch } from "react-redux"
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice"

const Header = () => {
  const [term, setTerm] = useState("")
  const dispatch = useDispatch()

  const submitHandler = (e: Event) => {
    e.preventDefault()

    if (term === "") return alert("Please enter seacrh term")

    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm("")
  }

  return (
    <header>
      <div className="logo">
        <Link to="/">Movie App</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input type="text" name="search" id="search" placeholder="Search for movies or show" value={term} onChange={(e) => setTerm(e.target.value)}/>
          <button><FaSearch className="fa fa-search"/></button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="User image" />
      </div>
    </header>
  )
}
export default Header