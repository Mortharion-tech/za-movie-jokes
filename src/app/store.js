import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "src/features/movies/moviesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
