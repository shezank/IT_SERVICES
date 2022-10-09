import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPad5T2rokBkE5zVdjkSd_I5ISlNQwjDU",
  authDomain: "pabnaitsolutioncenter-637db.firebaseapp.com",
  projectId: "pabnaitsolutioncenter-637db",
  storageBucket: "pabnaitsolutioncenter-637db.appspot.com",
  messagingSenderId: "469590218170",
  appId: "1:469590218170:web:10b4ebc76c9311019ff983",
  measurementId: "G-BGGPRFR80C"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;


