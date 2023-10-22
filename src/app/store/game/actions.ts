import { createAction, props } from '@ngrx/store';
import { Pokedex } from 'pokenode-ts';

export enum GameActionTypes {
  GET_POKEDEX_REQUEST = "[Region] Get pokedex request",
  GET_POKEDEX_SUCCESS = "[Region] Get pokedex success",
  GET_POKEDEX_FAILURE = "[Region] Get pokedex fail",
}

export const getPokedex = createAction( 
  GameActionTypes.GET_POKEDEX_REQUEST,
  props<{ id: number; region?: string }>()
);

export const getPokedexSuccess = createAction( 
  GameActionTypes.GET_POKEDEX_SUCCESS,
  props<{ pokedex: Pokedex }>()
);

export const getPokedexFailure = createAction( 
  GameActionTypes.GET_POKEDEX_FAILURE,
  props<{ error: any }>()
);
