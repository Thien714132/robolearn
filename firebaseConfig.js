import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCzv0qk-VvnPp5INYIjIrMf_9607TeSqDc',
  authDomain: 'ai-note-32b09.firebaseapp.com',
  projectId: 'ai-note-32b09',
  storageBucket: 'ai-note-32b09.firebasestorage.app',
  messagingSenderId: '543652075488',
  appId: '1:543652075488:web:fd94ded4542002a08fbd85',
  measurementId: 'G-2TMWFPQPRP',
};

// const app = initializeApp(firebaseConfig);
// let analytics;
// if (typeof window !== 'undefined') {
//   isSupported().then(supported => {
//     if (supported) {
//       analytics = getAnalytics(app);
//     }
//   });
// }
export const app = initializeApp(firebaseConfig);
