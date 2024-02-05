import { signOut } from "firebase/auth";
import { auth } from "./initFirebase";

export const logOut = async ()=> {
    await signOut(auth);
}
