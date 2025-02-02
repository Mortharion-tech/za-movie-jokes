import { createSlice } from "@reduxjs/toolkit";

const aiJokesSlice = createSlice({
  name: "ai-jokes",
  initialState: {
    rules: [{ name: "Joke type", description: "Programmer" }],
    jokes: [],
  },
  reducers: {},
});

export default aiJokesSlice.reducer;
