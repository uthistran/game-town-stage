// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, FirebaseUser } from '../../firebase/firebase';
interface AuthState {
  user: FirebaseUser | null;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<FirebaseUser | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export const signInAsync = (email: string, password: string) => async (dispatch: any) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error('Error signing in:', error);
  }
};

export const signUpAsync = (email: string, password: string) => async (dispatch: any) => {
    try {
     const res =  await createUserWithEmailAndPassword(auth, email, password);
     console.log(res);
    } catch (error) {
      console.error('Error sign up:', error);
    }
  };

export const signOutAsync = () => async (dispatch: any) => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out:', error);
  }
};

export default authSlice.reducer;
