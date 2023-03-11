import { createStore } from "redux";

const initalState = {
  count: 0
};

export const Reducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADD_STEP":
      return {
        count: state.count + 1
      };
    case "RESET":
      return {
        count: 0
      };

    default:
      return state;
  }
};

export const store = createStore(Reducer);
