import { GET_TEXT_INPUT_VALUE, CLEAR_TEXT_INPUT_VALUE } from '../constants';

const initialTextInputReducer = '';

export const textInputReducer = function (state = initialTextInputReducer, action) {
  switch (action.type) {
    case GET_TEXT_INPUT_VALUE:
      return action.textInputValue;
    case CLEAR_TEXT_INPUT_VALUE:
      return action.textInputValue;
  }
  return state;
};
