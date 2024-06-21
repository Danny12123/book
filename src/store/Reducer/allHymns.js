import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Only believe",
    number: 1,
    key: "D",
    uri: require("../../../assets/images/iphone15.png"),
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
      //   {
      //     chorus: [
      //       "Only believe, only believe;",
      //       "All things are possible, only believe;",
      //       "Only believe, only believe;",
      //       "All things are possible, only believe.",
      //     ],
      //   },
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
        versNum: 3,
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
    id: 2,
    title: "Amazing grace",
    number: 2,
    key: "C#",
    uri: require("../../../assets/images/iphone15.png"),
    leys: [
      {
        versNum: 1,
        words: [
          "Amazing grace! how sweet the sound,",
          "That saved a wretch; like me!",
          "I once was lost, but now am found,",
          "Was blind, but now I see.",
        ],
      },
      {
        versNum: 2,
        words: [
          "Twas grace that taught my heart to fear,",
          "And grace my fears relieved;",
          "How precious did that grace appear",
          "The hour I first believed!",
        ],
      },
      {
        versNum: 3,
        words: [
          "The Lord hath promised good to me,",
          "His word my hope secures;",
          "He will my shield and portion be",
          "As long as life endures.",
        ],
      },
      {
        versNum: 2,
        words: [
          "When we’ve been there ten thousand years,",
          "Bright shining as the sun,",
          "We’ve no less days to sing God’s praise",
          "Than when we first begun.",
        ],
      },
    ],
  },
];

export const AllHymnsSlice = createSlice({
  name: "allHymns",
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
  AllHymnsSlice.actions;

export default AllHymnsSlice.reducer;
