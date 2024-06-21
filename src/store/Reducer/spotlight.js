import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "Additional Hymns",
    number: 23,
    leys: [
      {
        versNum: 1,
        words: [
          "Fear not, little flock, from",
          "the cross to the throne,",
          "From death into life He went for His own;",
          "All power in earth, all power above,",
          "Is given to Him for the flock of His love.",
        ],
      },
      {
        versNum: 2,
        words: [
          "Only believe, only believe;",
          "All things are possible, only believe;",
          "Only believe, only believe;",
          "All things are possible, only believe.",
        ],
      },
      {
        versNum: 2,
        words: [
          "Fear not, little flock, He goeth ahead,",
          "Your Shepherd selecteth the path you must tread;",
          "The waters of Marah He’ll sweeten for thee,",
          "He drank all the bitter in Gethsemane.",
        ],
      },
      {
        versNum: 2,
        words: [
          "Fear not, little flock, whatever your lot,",
          "He enters all rooms, “the doors being shut”",
          "He never forsakes, He never is gone,",
          "So count on His presence in darkness and dawn.",
        ],
      },
    ],
  },
  {
    title: "Christmas Carols",
    number: 30,
  },
  {
    title: "Contemporary",
    number: 10,
  },
  {
    title: "For Children: Birth of Christ",
    number: 7,
  },
  {
    title: "God: In Creation",
    number: 10,
  },
  {
    title: "God: In Providence",
    number: 15,
  },
  {
    title: "Marriage",
    number: 8,
  },
  {
    title: "New Year",
    number: 2,
  },
];

export const spotlightSlice = createSlice({
  name: "spotlight",
  initialState,
  reducers: {
    increment: (state) => {
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
export const { increment, decrement, incrementByAmount } =
  spotlightSlice.actions;

export default spotlightSlice.reducer;
