import { createAction } from "@ngrx/store";

export const incrementRed = createAction('[State Counter] Increment Red');
export const decrementRed = createAction('[State Counter] Decrement Red');
export const resetRed = createAction('[State Counter] Reset Red');

export const incrementBlue = createAction('[State Counter] Increment Blue');
export const decrementBlue = createAction('[State Counter] Decrement Blue');
export const resetBlue = createAction('[State Counter] Reset Blue');

export const incrementGreen = createAction('[State Counter] Increment Green');
export const decrementGreen = createAction('[State Counter] Decrement Green');
export const resetGreen = createAction('[State Counter] Reset Green');