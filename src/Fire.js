import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDufitJyrOfWIFOEgs6OVc-VFMXDnmXkzQ",
  authDomain: "artshop-10da3.firebaseapp.com",
  projectId: "artshop-10da3",
  storageBucket: "artshop-10da3.appspot.com",
  messagingSenderId: "422942132744",
  appId: "1:422942132744:web:259038fb5d229e6ed3dfbd",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;