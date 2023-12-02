// authService.ts
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';

export const SignUpWithEmailAndPassword = async (email: string, password: string) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

export const SignInWithEmailAndPassword = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const SignOut = async () => {
  await signOut(auth);
};
