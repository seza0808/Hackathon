// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL5F_fqgIyLRMrf3_pQDo1JaKXqbuMsD8",
  authDomain: "hackathon-ec8af.firebaseapp.com",
  projectId: "hackathon-ec8af",
  storageBucket: "hackathon-ec8af.appspot.com",
  messagingSenderId: "459106573412",
  appId: "1:459106573412:web:324eba0a1ecab32d385371",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
export const auth = getAuth(app);
