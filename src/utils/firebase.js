 import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDw-0pgbNdaKxG_5v5CtQM5-TlEY52FRs4",
    authDomain: "whatsapp-clone-99c15.firebaseapp.com",
    projectId: "whatsapp-clone-99c15",
    storageBucket: "whatsapp-clone-99c15.appspot.com",
    messagingSenderId: "1082277326801",
    appId: "1:1082277326801:web:aa70716808826fd8977af0"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db};