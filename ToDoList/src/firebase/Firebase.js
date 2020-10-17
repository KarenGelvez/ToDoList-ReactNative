import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDWmEwwRhHgkUzOhKpjIL5qrlIXGLIaJyc',
  authDomain: 'todolist-0799.firebaseapp.com',
  databaseURL: 'https://todolist-0799.firebaseio.com',
  projectId: 'todolist-0799',
  storageBucket: 'todolist-0799.appspot.com',
  messagingSenderId: '20000055363',
  appId: '1:20000055363:web:676bef1e71db6679dbf4f6',
};

export default firebase.initializeApp(firebaseConfig);
