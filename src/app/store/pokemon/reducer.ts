import { Action, createReducer, on } from "@ngrx/store";
import { State, initialState } from "./state";
import { 
  getPokemonSpecies, 
  getPokemonSpeciesSuccess,
  getPokemonSpeciesFailure,
 } from "./actions";

export const pokemonFeatureKey = 'pokemon';

export const pokemonReducer = createReducer(
  initialState,
  on(getPokemonSpecies, (state) => ({
    ...state,
    getPokemonSpeciesLoading: true,
  })),
  on(getPokemonSpeciesSuccess, (state, { pokemonSpecies }) => ({
    ...state,
    getPokemonSpeciesLoading: false,
    pokemonSpecies
  })),
  on(getPokemonSpeciesFailure, (state, error) => ({
    ...state,
    getPokemonSpeciesLoading: false,
    getPokemonSpeciesFailure: error
  })),
);

export const reducer = (state: State, action: Action) =>
  pokemonReducer(state, action);