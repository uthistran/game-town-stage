import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './features/game-container-visibility-slices';
import { authSlice } from './features/authSlice';

export const store = configureStore({
    reducer: {
        rootReducer,
        auth: authSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
