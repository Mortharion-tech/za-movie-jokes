import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  rules: [{ name: "Joke type", description: "Programmer" }],
  jokes: {
    jokes: [],
    status: "idle",
    error: null,
  },
};

export const fetchJoke = createAsyncThunk(
  "aiJokes/fetchJoke",
  async ({ movieId }) => {
    return { movieId, joke: "Funny joke!" };
  }
);

const aiJokesSlice = createSlice({
  name: "ai-jokes",
  initialState,
  reducers: {
    ruleAdded(state, action) {
      const ruleIndex = state.rules.findIndex(
        (rule) => rule.name === action.payload.name
      );
      if (ruleIndex >= 0) return;
      state.rules.push(action.payload);
    },
    ruleRemoved(state, action) {
      const ruleIndex = state.rules.findIndex(
        (rule) => rule.name === action.payload
      );
      if (ruleIndex < 0) return;
      state.rules.splice(ruleIndex, 1);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchJoke.pending, (state) => {
        state.jokes.status = "loading";
      })
      .addCase(fetchJoke.fulfilled, (state, action) => {
        state.jokes.status = "succeeded";
        const jokeIndex = state.jokes.jokes.findIndex(
          (joke) => joke.movieId === action.payload.movieId
        );

        if (jokeIndex > -1) {
          state.jokes.jokes[jokeIndex] = action.payload;
        } else {
          state.jokes.jokes.push(action.payload);
        }
      })
      .addCase(fetchJoke.rejected, (state, action) => {
        state.jokes.status = "failed";
        state.jokes.error = action.error.message;
      });
  },
});

export const { ruleAdded, ruleRemoved } = aiJokesSlice.actions;

export default aiJokesSlice.reducer;
