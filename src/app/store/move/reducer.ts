import { Action, createReducer, on } from "@ngrx/store";
import { State, initialState } from "./state";
import { 
  getMove, 
  getMoveSuccess, 
  getMoveFailure,
} from "./actions";

export const moveFeatureKey = 'move';

export const moveReducer = createReducer(
  initialState,
  on(getMove, (state) => ({
    ...state,
    getMoveLoading: true,
  })),
  on(getMoveSuccess, (state) => ({
    ...state,
    getMoveLoading: false,
  })),
  on(getMoveFailure, (state, error) => ({
    ...state,
    getMoveLoading: false,
    getMoveFailure: error
  })),
)

export const reducer = (state: State, action: Action) =>
  moveReducer(state, action);