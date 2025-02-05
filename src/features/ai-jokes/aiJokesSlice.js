import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { OPENAI_COMPLETIONS_API_URL } from "src/common/constants";

const initialState = {
  rules: [{ name: "Joke type", description: "Programmer" }],
  jokes: {
    jokes: {},
    status: "idle", // 'idle' / 'loading' / 'succeeded' / 'failed'
    error: null,
  },
};

export const fetchJoke = createAsyncThunk(
  "aiJokes/fetchJoke",
  async ({ movieId, movieTitle, movieDescription }, thunkApi) => {
    /* console.log(movieId, movieTitle, movieDescription); */
    const state = thunkApi.getState();
    const joke = selectJokeByMovieId(state, movieId);
    const rules = selectJokesRules(state);
    const rulesParams = rules.reduce(
      (acc, rule) => `${acc}${rule.name}: ${rule.description}\n`,
      ""
    );
    /* console.log(rulesParams); */

    const messages = [
      {
        role: "user",
        content: `Movie Title: ${movieTitle}, Movie Description: ${movieDescription}, ${rulesParams} Joke:`,
      },
    ];

    if (joke) {
      messages.unshift({
        role: "user",
        content: `Don't use joke: ${joke.joke}`,
      });
    }

    /* console.log(messages); */

    const response = await axios.post(
      OPENAI_COMPLETIONS_API_URL,
      {
        messages,
        model: "gpt-4o-mini",
      },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
      }
    );

    /* console.log(response); */
    return { movieId, joke: response.data.choices[0].message.content };
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

        state.jokes.jokes[action.payload.movieId] = action.payload.joke;
      })
      .addCase(fetchJoke.rejected, (state, action) => {
        state.jokes.status = "failed";
        state.jokes.error = action.error.message;
      });
  },
});

export const { ruleAdded, ruleRemoved } = aiJokesSlice.actions;

export const selectJokeByMovieId = (state, movieId) =>
  state.aiJokes.jokes.jokes[movieId];
export const selectJokesStatus = (state) => state.aiJokes.jokes.status;
export const selectJokesRules = (state) => state.aiJokes.rules;

export default aiJokesSlice.reducer;
