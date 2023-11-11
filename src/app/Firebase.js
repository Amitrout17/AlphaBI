// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpCyz7w9ctoSbat9XfHOfwDJyxofobcOk",
  authDomain: "alphabi-74ebf.firebaseapp.com",
  projectId: "alphabi-74ebf",
  storageBucket: "alphabi-74ebf.appspot.com",
  messagingSenderId: "452483475347",
  appId: "1:452483475347:web:2a16b05257cb003dafaa66",
  measurementId: "G-KZS8090WXH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export default function firebase() {
  return <>hello</>;
}
