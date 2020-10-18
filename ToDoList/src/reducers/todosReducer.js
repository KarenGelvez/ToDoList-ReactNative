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
    case types.insert:
      return {
        id: action.payload.id,
        todo: action.payload.todo,
        completed: action.payload.completed,
      };
    case types.update:
      return {
        id: action.payload.id,
        todo: action.payload.todo,
        completed: action.payload.completed,
      };

    case types.completed:
      return {
        id: action.payload.id,
        completed: !action.payload.completed,
      };
    case types.delete:
      return {
        id: action.payload.id,
      };
    default:
      return state;
  }
};
