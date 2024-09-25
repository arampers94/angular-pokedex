import { createAction, props } from '@ngrx/store';
import { NamedAPIResourceList, Pokedex } from 'pokenode-ts';

export enum GameActionTypes {
  GET_POKEDEX_REQUEST = "[Game] Get pokedex request",
  GET_POKEDEX_SUCCESS = "[Game] Get pokedex success",
  GET_POKEDEX_FAILURE = "[Game] Get pokedex fail",
  SET_CURRENT_POKEDEX_NAME = "[Game] Set current pokedex name",
  SET_CURRENT_POKEDEX_PAGE = "[Game] Set current pokedex page",
  GET_POKEDEX_LIST_REQUEST = "[Game] Get all pokedexes request",
  GET_POKEDEX_LIST_SUCCESS = "[Game] Get all pokedexes success",
  GET_POKEDEX_LIST_FAILURE = "[Game] Get all pokedexes fail",
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

export const setCurrentPokedexPage = createAction( 
  GameActionTypes.SET_CURRENT_POKEDEX_PAGE,
  props<{ page: number }>()
);

export const getPokedexList = createAction( 
  GameActionTypes.GET_POKEDEX_LIST_REQUEST,
  props<{ offset?: number; limit?: number }>()
);

export const getPokedexListSuccess = createAction( 
  GameActionTypes.GET_POKEDEX_LIST_SUCCESS,
  props<{ pokedexList: NamedAPIResourceList | null }>()
);

export const getPokedexListFailure = createAction( 
  GameActionTypes.GET_POKEDEX_LIST_FAILURE,
  props<{ error: any }>()
);
