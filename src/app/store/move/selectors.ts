import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./state";
import { moveFeatureKey } from "./reducer";

const getMoveLoading = (state: State): boolean =>
  state.getMoveLoading;
const getMoveFailure = (state: State): any =>
  state.getMoveFailure;

export const moveState = createFeatureSelector<State>(
  moveFeatureKey
);

export const selectGetMoveLoading = createSelector(
  moveState,
  getMoveLoading
);

export const selectGetMoveFailure = createSelector(
  moveState,
  getMoveFailure
);
  