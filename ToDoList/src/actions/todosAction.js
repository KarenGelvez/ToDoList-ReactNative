import {types} from '../types';
import Firebase from '../firebase/Firebase';
import {convertTodo} from '../helpers/Obj2Array';

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
        const todosArr = convertTodo(data.toJSON());
        dispatch(todos(todosArr));
      });
  };
};

export const addTodo = (value) => {
  return () => {
    const todo = {
      todo: value,
      completed: false,
    };
    Firebase.database().ref('todos').push(todo);
  };
};

export const completedTodo = (id, completed) => {
  return () => {
    Firebase.database().ref(`todos/${id}`).update({
      completed: !completed,
    });
  };
};

export const updateTodo = (id, newtodo) => {
  return () => {
    Firebase.database().ref(`todos/${id}`).update({
      todo: newtodo,
    });
  };
};

export const deleteTodo = (id) => {
  return () => {
    Firebase.database().ref(`todos/${id}`).remove();
  };
};
