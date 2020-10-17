import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import 'firebase/auth';
import Firebase from './src/firebase/Firebase';
import {store} from './src/store';
import {SplashScreen} from './src/containers/SplashScreen';
import Todos from './src/containers/Todos';

const App = () => {
  /* useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
    });
    Firebase.database()
      .ref('todos/4')
      .set({
        id: 4,
        name: 'Conexion Firebase Database',
        completed: true,
      })
      .then(() => {
        console.log('INSERTED !');
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); */

  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
};

export default App;
