import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// const app = initializeApp(firebaseConfig);el line ta firebase console website theke copy kore niche ekta function declare korlam  r (firebaseConfig)
const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}

// below line export default er meaning onno kono place the call korbo
export default initializeFirebase;