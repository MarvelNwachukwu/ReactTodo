import firebase from 'firebase';
import 'firebase/auth';

const Config = {
  apiKey: 'AIzaSyCJwyK1WzZwyX_3U_n5xd5YCLVl4nnVqWM',
  authDomain: 'react-todo-abf8b.firebaseapp.com',
  projectId: 'react-todo-abf8b',
  storageBucket: 'react-todo-abf8b.appspot.com',
  messagingSenderId: '600255712254',
  appId: '1:600255712254:web:b45af65d18a9a0f0430eaf',
  measurementId: 'G-LF7XCHTM2C',
};

// Initialize Firebase
firebase.initializeApp(Config);
firebase.analytics();

export default firebase;
