import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import movieApi from "../../common/apis/movieApi"
import { API_KEY } from "../../common/apis/movieApiKey"

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async (term) => {
  const res = await movieApi.get(`?apiKey=${API_KEY}&s=${term}&type=movie`)
  return res.data
})

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async (term) => {
  const res = await movieApi.get(`?apiKey=${API_KEY}&s=${term}&type=series`)
  return res.data
})

export const fetchAsyncDetails = createAsyncThunk("movies/fetchAsyncDetails", async (id) => {
  const res = await movieApi.get(`?apiKey=${API_KEY}&i=${id}&Plot=full`)
  return res.data
})

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
}

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeDetails: (state) => {
      state.selectedMovieOrShow = {}
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
    [fetchAsyncShows.fulfilled]: (state, {payload}) => {
      console.log("Fetched Successufully!")
      return {...state, shows: payload}
    },
    [fetchAsyncDetails.fulfilled]: (state, {payload}) => {
      console.log("Fetched Successufully!")
      return {...state, selectedMovieOrShow: payload}
    },
  }
})


export const { removeDetails } = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getDetails = (state) => state.movies.selectedMovieOrShow
export default movieSlice.reducer