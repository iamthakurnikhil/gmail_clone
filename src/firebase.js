import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyD6nxz4WB5JuFbMTpKi5He12-yYdT4ck6I",
    authDomain: "clone-1e02a.firebaseapp.com",
    projectId: "clone-1e02a",
    storageBucket: "clone-1e02a.appspot.com",
    messagingSenderId: "615287340612",
    appId: "1:615287340612:web:2ac956a7319aa0573ec611"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {db}