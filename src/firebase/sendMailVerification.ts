import { sendEmailVerification } from "firebase/auth";
import { auth } from "./initFirebase";

export const sendMailVerification = (user: any) => {
    if(user) {
        sendEmailVerification(user);
    }
}