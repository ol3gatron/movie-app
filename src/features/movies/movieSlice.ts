import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import movieApi from "../../common/apis/movieApi"
import { API_KEY } from "../../common/apis/movieApiKey"

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async () => {
  const movieTest = "Star Wars"
  const res = await movieApi.get(`?apiKey=${API_KEY}&s=${movieTest}&type=movie`)
  return res.data
})

const initialState = {
  movies: {},
}

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, {payload}) => {
      state.movies = payload
    }
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending")
    },
    [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
      console.log("Fetched Successufully!")
      return {...state, movies: payload}
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected")
    },
  }
})


export const { addMovies } = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export default movieSlice.reducer