import { INCREMENT, DECREMENT } from "../actionsTypes/index";

export const Inc = () => {
  return {
    type: INCREMENT,
  };
};

export const Dec = () => {
  return {
    type: DECREMENT,
  };
};
