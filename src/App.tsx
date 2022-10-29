import "./App.scss"
import { Routes, Route } from "react-router-dom"

import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import MovieDetails from "./components/MovieDetails/MovieDetails"
import PageNotFound from "./components/PageNotFound/PageNotFound"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App
