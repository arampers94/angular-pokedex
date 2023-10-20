import { createAction, props } from "@ngrx/store";
import { Move } from "pokenode-ts";

export enum MoveActionTypes {
  GET_MOVE_REQUEST = '[Pokemon] Get move request',
  GET_MOVE_SUCCESS = '[Pokemon] Get move success',
  GET_MOVE_FAILURE = '[Pokemon] Get move failure',
}

export const getMove = createAction(
  MoveActionTypes.GET_MOVE_REQUEST,
  props<{ moveName: string }>()
);

export const getMoveSuccess = createAction(
  MoveActionTypes.GET_MOVE_SUCCESS,
  props<{ move: Move }>()
);

export const getMoveFailure = createAction(
  MoveActionTypes.GET_MOVE_FAILURE,
  props<{ error: any }>()
);