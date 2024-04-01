// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwEg3emuJTSoEZq3zHRrh3Wz_m1DL9O5w",
  authDomain: "emailpasswordauth-da795.firebaseapp.com",
  projectId: "emailpasswordauth-da795",
  storageBucket: "emailpasswordauth-da795.appspot.com",
  messagingSenderId: "198634712859",
  appId: "1:198634712859:web:818de301bc2f70a175edbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default app
const Auth =getAuth(app)
export default Auth