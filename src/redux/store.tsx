import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './features/game-container-visibility-slices';
import reducer from './features/notification-popup-visibility-slices';

export const store = configureStore({
    reducer: {
        rootReducer,
        reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
