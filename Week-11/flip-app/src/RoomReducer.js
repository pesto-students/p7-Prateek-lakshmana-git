import { createStore } from "redux";
const initalState = {
  flip: false
};

const RoomReducer = (state = initalState, action) => {
  switch (action.type) {
    case "FLIP":
      return {
        flip: !state.flip
      };

    default:
      return state;
  }
};

export const store = createStore(RoomReducer);
