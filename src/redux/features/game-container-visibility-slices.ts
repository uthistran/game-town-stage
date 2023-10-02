import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    value: GameContainerVisibleState
}

type GameContainerVisibleState = {
    isHidden: boolean
};

const intitialState = {
    value: {
        isHidden: true
    } as GameContainerVisibleState,
} as InitialState;

export const gameContainerVisibilitySlice = createSlice({
    name: 'gameContainerVisibility',
    initialState: intitialState,
    reducers: {
        toggleGameContainerVisbility: (state) => {
            state.value.isHidden = !state.value.isHidden;
            return state;
        }
    }
});

export const { toggleGameContainerVisbility } = gameContainerVisibilitySlice.actions;
export default gameContainerVisibilitySlice.reducer;
