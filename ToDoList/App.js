import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import 'firebase/auth';
import {store} from './src/store';
import Todos from './src/containers/TodosScreen';
import {Header} from './src/components/Header';
import {SplashScreen} from './src/containers/SplashScreen';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Provider store={store}>
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          <Header />
          <Todos />
        </>
      )}
    </Provider>
  );
};

export default App;
