import {types} from '../types';

const initialState = {
  todos: [{}],
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.get:
      return {
        todos: action.payload.todos,
      };
    default:
      return state;
  }
};
