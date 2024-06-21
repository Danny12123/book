import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const LyricsSlice = createSlice({
  name: "lyrics",
  initialState,
  reducers: {
    currentLyrics: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { currentLyrics, decrement, incrementByAmount } =
  LyricsSlice.actions;

export default LyricsSlice.reducer;
