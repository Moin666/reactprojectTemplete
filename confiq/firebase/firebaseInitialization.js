import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyApJHvcCQWC0tuMQC-ELagSWqVQUkxu9dw",
    authDomain: "reactwithfirebase-ea1fb.firebaseapp.com",
    projectId: "reactwithfirebase-ea1fb",
    storageBucket: "reactwithfirebase-ea1fb.appspot.com",
    messagingSenderId: "714210745165",
    appId: "1:714210745165:web:99c36c653a47b0e59e7504",
    measurementId: "G-EDG8CTFRKC"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export default app;