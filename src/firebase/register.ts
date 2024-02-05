import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./initFirebase";

export const register = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth , email, password)
        .then((userCredential) => {
            const user = userCredential.user
            console.log("User registration was completed successfully..");
        })
        .catch((error)=> {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`User registration was failed due to ${error.message} with error code - ${errorCode}`);
        });
}
