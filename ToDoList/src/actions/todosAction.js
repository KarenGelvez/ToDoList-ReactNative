import {types} from '../types';
import Firebase from '../firebase/Firebase';

export const todos = (todos) => {
  return {
    type: types.get,
    payload: {
      todos,
    },
  };
};

export const getTodos = () => {
  return (dispatch) => {
    Firebase.database()
      .ref('todos')
      .on('value', (data) => {
        dispatch(todos(data.toJSON()));
      });
  };
};
