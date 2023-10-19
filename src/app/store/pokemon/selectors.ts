import { PokemonSpecies } from "pokenode-ts";
import { State } from "./state";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { pokemonFeatureKey } from "./reducer";

const pokemonSpecies = (state: State): PokemonSpecies | null => 
  state.pokemonSpecies;
const getPokemonSpeciesLoading = (state: State): boolean =>
  state.getPokemonSpeciesLoading;
const getPokemonSpeciesFailure = (state: State): any =>
  state.getPokemonSpeciesFailure;

export const pokemonState = createFeatureSelector<State>(
  pokemonFeatureKey
);

export const selectPokemonSpecies = createSelector(
  pokemonState,
  pokemonSpecies
);

export const selectGetPokemonSpeciesLoading = createSelector(
  pokemonState,
  getPokemonSpeciesLoading
);

export const selectGetPokemonSpeciesFailure = createSelector(
  pokemonState,
  getPokemonSpeciesFailure
)