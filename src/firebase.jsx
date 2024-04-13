import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPsn8TLbu70e0ambMe89TX0g8lNemcLV8",
  authDomain: "dacoid.firebaseapp.com",
  projectId: "dacoid",
  storageBucket: "dacoid.appspot.com",
  messagingSenderId: "27402340709",
  appId: "1:27402340709:web:05510fd4a816b1e7d8b98c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
