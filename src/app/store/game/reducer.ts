import { Action, createReducer, on } from '@ngrx/store';
import {
  getPokedex,
  getPokedexSuccess,
  getPokedexFailure,
} from './actions';
import { State } from './state';
import { initialState } from './state';

export const gameFeatureKey = 'game';

export const gameReducer = createReducer(
  initialState,
  on(getPokedex, state => ({ 
    ...state, 
    getPokedexLoading: true 
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
);
export const reducer = (state: State, action: Action) =>
gameReducer(state, action);
