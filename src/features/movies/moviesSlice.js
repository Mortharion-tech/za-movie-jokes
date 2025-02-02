import { createSlice } from "@reduxjs/toolkit";
import { data } from "./data";

const moviesSlice = createSlice({
  name: "movies",
  initialState: data.results,
  reducers: {},
});

export default moviesSlice.reducer;
