import { combineReducers } from "redux";
import AllHymnsSlice from "./allHymns";
import spotlightSlice from "./spotlight";
import counterSlice from "./try";

const reducers = combineReducers({
  AllHymnsSlice,
  spotlightSlice,
  counterSlice,
});

export default reducers;

// const Reducers = combineReducers({
//   // AllHymnsSlice
// });
