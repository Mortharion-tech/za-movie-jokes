import { createSlice } from "@reduxjs/toolkit";

const aiJokesSlice = createSlice({
  name: "ai-jokes",
  initialState: {
    rules: [{ name: "Joke type", description: "Programmer" }],
    jokes: [],
  },
  reducers: {
    ruleAdded(state, action) {
      state.rules.push(action.payload);
    },
  },
});

export const { ruleAdded } = aiJokesSlice.actions;

export default aiJokesSlice.reducer;
