import { createAction, props } from '@ngrx/store';
import { Pokedex } from 'pokenode-ts';

export enum GameActionTypes {
  GET_POKEDEX_REQUEST = "[Game] Get pokedex request",
  GET_POKEDEX_SUCCESS = "[Game] Get pokedex success",
  GET_POKEDEX_FAILURE = "[Game] Get pokedex fail",
  SET_CURRENT_POKEDEX_NAME = "[Game] Set current pokedex name",
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

export const setCurrentPokedexName = createAction( 
  GameActionTypes.SET_CURRENT_POKEDEX_NAME,
  props<{ pokedexName: string }>()
);
