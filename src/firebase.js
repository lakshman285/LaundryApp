import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDudOwwEWyqc8Hreg4N4UpP_iWueg2kTuc',
  authDomain: 'laundry-application-be684.firebaseapp.com',
  projectId: 'laundry-application-be684',
  storageBucket: 'laundry-application-be684.appspot.com',
  messagingSenderId: '423665954601',
  appId: '1:423665954601:web:00cdd1ce962c1fe445d138',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth, db};
