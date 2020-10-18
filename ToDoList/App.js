import React from 'react';
import {Provider} from 'react-redux';
import 'firebase/auth';
import {store} from './src/store';
import Todos from './src/containers/TodosScreen';

const App = () => {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
};

export default App;
