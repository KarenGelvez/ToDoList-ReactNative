import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {todosReducer} from './reducers/todosReducer';

const reducers = combineReducers({
  todos: todosReducer,
});
export const store = createStore(reducers, applyMiddleware(thunk));
