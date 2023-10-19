import { Action, createReducer, on } from "@ngrx/store";
import { State, initialState } from "./state";
import {
  getPokemon,
  getPokemonSuccess,
  getPokemonFailure,
  getPokemonSpecies, 
  getPokemonSpeciesSuccess,
  getPokemonSpeciesFailure,
 } from "./actions";

export const pokemonFeatureKey = 'pokemon';

export const pokemonReducer = createReducer(
  initialState,
  on(getPokemon, (state) => ({
    ...state,
    getPokemonLoading: true,
  })),
  on(getPokemonSuccess, (state, { pokemon }) => ({
    ...state,
    getPokemonLoading: false,
    pokemon
  })),
  on(getPokemonFailure, (state, error) => ({
    ...state,
    getPokemonLoading: false,
    getPokemonFailure: error
  })),
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