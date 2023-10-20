import { Action, createReducer, on } from "@ngrx/store";
import { State, initialState } from "./state";
import {
  getPokemon,
  getPokemonSuccess,
  getPokemonFailure,
  getPokemonSpecies, 
  getPokemonSpeciesSuccess,
  getPokemonSpeciesFailure,
  getAbility,
  getAbilitySuccess,
  getAbilityFailure,
  getType,
  getTypeSuccess,
  getTypeFailure,
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
  on(getAbility, (state) => ({
    ...state,
    getAbilityLoading: true,
  })),
  on(getAbilitySuccess, (state, { ability }) => ({
    ...state,
    getAbilityLoading: false,
    abilities: [...state.abilities, ability]
  })),
  on(getAbilityFailure, (state, error) => ({
    ...state,
    getAbilityLoading: false,
    getAbilityFailure: error
  })),
  on(getType, (state) => ({
    ...state,
    getTypeLoading: true,
  })),
  on(getTypeSuccess, (state, { pokemonType }) => ({
    ...state,
    getTypeLoading: false,
    types: [...state.types, pokemonType]
  })),
  on(getTypeFailure, (state, error) => ({
    ...state,
    getTypeLoading: false,
    getTypeFailure: error
  })),
);

export const reducer = (state: State, action: Action) =>
  pokemonReducer(state, action);