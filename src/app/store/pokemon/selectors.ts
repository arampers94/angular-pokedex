import { Pokemon, PokemonSpecies } from "pokenode-ts";
import { State } from "./state";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { pokemonFeatureKey } from "./reducer";

const pokemon = (state: State): Pokemon | null => 
  state.pokemon;
const getPokemonLoading = (state: State): boolean =>
  state.getPokemonLoading;
const getPokemonFailure = (state: State): any =>
  state.getPokemonFailure;
const pokemonSpecies = (state: State): PokemonSpecies | null => 
  state.pokemonSpecies;
const getPokemonSpeciesLoading = (state: State): boolean =>
  state.getPokemonSpeciesLoading;
const getPokemonSpeciesFailure = (state: State): any =>
  state.getPokemonSpeciesFailure;

export const pokemonState = createFeatureSelector<State>(
  pokemonFeatureKey
);

export const selectPokemon = createSelector(
  pokemonState,
  pokemon
);

export const selectGetPokemonLoading = createSelector(
  pokemonState,
  getPokemonLoading
);

export const selectGetPokemonFailure = createSelector(
  pokemonState,
  getPokemonFailure
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
);