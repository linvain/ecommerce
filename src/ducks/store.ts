import { createStore } from "redux";

import { reducer } from "./reducer";
import { preloadedState } from "./preloadedState";
import { enhancer } from "./enhancer";

export const store = createStore(
  reducer,
  preloadedState,
  enhancer
)
