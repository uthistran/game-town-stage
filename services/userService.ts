// userService.ts
import { doc, setDoc } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';

export const addUserInfo = async (userId: string, userInfo: any) => {
  await setDoc(doc(firestore, 'users', userId), userInfo);
};
