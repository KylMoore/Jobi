import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIQ2wbvHaIr2d4ri6faf8L7smQluWf5nA",
  authDomain: "jobi-72762.firebaseapp.com",
  projectId: "jobi-72762",
  storageBucket: "jobi-72762.appspot.com",
  messagingSenderId: "465591054676",
  appId: "1:465591054676:web:c618649838179dfb04d8c1",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
