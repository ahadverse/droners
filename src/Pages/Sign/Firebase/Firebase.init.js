import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const authentication = ()=>{
    initializeApp(firebaseConfig);
}
export default authentication;