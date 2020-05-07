import { createReducer, on } from '@ngrx/store';
import { incrementRed, decrementRed, resetRed } from './counter.actions';
import { AppState } from './counter.selector';

export const initialState = 0;

export const initialAppState = {
    redState: 0,
    blueState: 0,
    greenState: 0
}

const _counterReducer = createReducer(
    initialAppState,
    on(incrementRed, state => ({...state, redState: state.redState + 1})),
    on(decrementRed, state => ({...state, redState: state.redState - 1})),
    on(resetRed, state => ({...state, redState: 0}))
);

export function counterReducer(state, action) {
    return _counterReducer(state, action);
}