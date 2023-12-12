import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    value: GameContainerVisibleState
}

type GameContainerVisibleState = {
    isHidden: boolean,
    isMaximized: boolean
};

const intitialState = {
    value: {
        isHidden: true,
        isMaximized: false
    } as GameContainerVisibleState,
} as InitialState;

export const gameContainerVisibilitySlice = createSlice({
    name: 'gameContainerVisibility',
    initialState: intitialState,
    reducers: {
        toggleGameContainerVisbility: (state) => {
            state.value.isHidden = !state.value.isHidden;
            return state;
        },
        toggleGameContainerMaximized: (state, action: PayloadAction<boolean>) => {
            state.value.isMaximized = action.payload;
            return state;
        }
    }
});

export const { toggleGameContainerVisbility, toggleGameContainerMaximized } = gameContainerVisibilitySlice.actions;
export default gameContainerVisibilitySlice.reducer;
