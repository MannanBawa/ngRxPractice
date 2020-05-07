import { createSelector } from '@ngrx/store';

export interface AppState {
    count: {
        redState: number;
        blueState: number;
        greenState: number;
    }
}

export const selectRedCounter = (state: AppState) => state.count.redState;;
export const selectBlueCounter = (state: AppState) => state.count.blueState;
export const selectGreenCounter = (state: AppState) => state.count.greenState;

export const selectPurpleCounter = createSelector(
    selectRedCounter,
    selectBlueCounter,
    (redCount: number, blueCount: number) => {
        return redCount + blueCount;
    }
)
