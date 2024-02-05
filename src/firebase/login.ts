import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./initFirebase";

export const logIn = (email: string , password: string ) => {
    return signInWithEmailAndPassword(auth, email, password);
}
