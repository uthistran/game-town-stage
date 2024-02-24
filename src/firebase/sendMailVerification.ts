import { sendEmailVerification } from "firebase/auth";
import { auth } from "./initFirebase";

export const sendMailVerification = (user: any) => {
    if(user) {
        sendEmailVerification(user).then(res=> {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }
}