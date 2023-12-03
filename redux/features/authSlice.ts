// authSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, FirebaseUser, database, firestore } from '../../firebase/firebase';
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { get, ref, set } from 'firebase/database';
import { user } from '../../model/user';

interface AuthState {
  user: FirebaseUser | null;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  error: null
};

export const signUpAsync = createAsyncThunk(
  'auth/signUp',
  async(user: user, { dispatch }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
      // dispatch(setUser(userCredential.user));
      dispatch(setError(null));

      const snapshot = await set(ref(database, 'users/' + userCredential.user?.uid), {
        email: userCredential.user?.email,
        name: user.name,
        state: user.state,
        country: user.country,
        gender: user.gender,
        clubs: user.clubs,
        playtime: user.playtime

      });
      debugger;
      console.log(snapshot);
      
    } catch (error) {
      console.error('Error signing up:', error);
      dispatch(setError(null));
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state:AuthState, action: PayloadAction<FirebaseUser | null>) => {
      state.user = action.payload;
    },
    setError: (state:AuthState, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, setError } = authSlice.actions;
export default authSlice;