import { Action, createReducer, on } from '@ngrx/store';
import {
  getPokedex,
  getPokedexSuccess,
  getPokedexFailure,
  setCurrentPokedexName,
} from './actions';
import { State } from './state';
import { initialState } from './state';

export const gameFeatureKey = 'game';

export const gameReducer = createReducer(
  initialState,
  on(getPokedex, state => ({ 
    ...state, 
    getPokedexLoading: true,
    currentPokedexName: state.currentPokedexName,
  })),
  on(getPokedexSuccess, (state, { pokedex }) => ({ 
    ...state, 
    getPokedexLoading: false,
    pokedex
  })),
  on(getPokedexFailure, (state, error) => ({ 
    ...state, 
    getPokedexLoading: false,
    getPokedexFailure: error,
  })),
  on(setCurrentPokedexName, (state, { pokedexName }) => ({ 
    ...state, 
    currentPokedexName: pokedexName
  })),
);
export const reducer = (state: State, action: Action) =>
gameReducer(state, action);
