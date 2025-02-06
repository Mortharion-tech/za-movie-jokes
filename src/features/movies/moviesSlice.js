/* import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { fetchPopularMovies } from "./api"; */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MOVIEDB_API_URL } from "src/common/constants";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: MOVIEDB_API_URL,
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${import.meta.env.VITE_MOVIEDB_API_KEY}`
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMovies: buider.query({
      query: () => "/movie/popular",
      transformResponse: (response) => response.results,
    }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;

/* const initialState = {
  movies: [],
  status: "idle", // 'idle' / 'loading' / 'succeeded' / 'failed'
  error: null,
}; */

/* export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const data = await fetchPopularMovies();
  return data.data;
}); */

/* const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload.results;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
}); */

/* export const selectAllMovies = createSelector(
  [(state) => state.movies.movies],
  (mov) => {
    const movies = [...mov];
    movies.sort((movieA, movieB) => movieB.vote_average - movieA.vote_average);
    return movies;
  }
); */

/* export const selectMoviesStatus = (state) => state.movies.status;
export const selectMoviesError = (state) => state.movies.error;
export const selectMovieById = (state, movieId) =>
  state.movies.movies.find((movie) => movie.id === Number(movieId));

export default moviesSlice.reducer; */
