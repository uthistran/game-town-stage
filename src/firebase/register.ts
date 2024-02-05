import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "./initFirebase";

export const register = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth , email, password);
}
