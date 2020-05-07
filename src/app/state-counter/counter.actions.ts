import { createAction } from "@ngrx/store";

export const increment = createAction('[State Counter] Increment');
export const decrement = createAction('[State Counter] Decrement');
export const reset = createAction('[State Counter] Reset');