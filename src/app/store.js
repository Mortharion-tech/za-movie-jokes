import { configureStore } from "@reduxjs/toolkit";
import moviesReducer, { moviesApi } from "src/features/movies/moviesSlice";
import aiJokesReducer from "src/features/ai-jokes/aiJokesSlice";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    aiJokes: aiJokesReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(moviesApi.middleware),
});
