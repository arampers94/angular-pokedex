import { Ability, Pokemon, PokemonSpecies, Type } from "pokenode-ts";
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
const abilities = (state: State): Ability[] =>
  state.abilities;
const getAbilityLoading = (state: State): boolean =>
  state.getAbilityLoading;
const getAbilityFailure = (state: State): any =>
  state.getAbilityFailure;
const getTypes = (state: State): Type[] =>
  state.types;
const getTypeLoading = (state: State): boolean =>
  state.getTypeLoading;
const getTypeFailure = (state: State): any =>
  state.getTypeFailure;

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

export const selectAbilites = createSelector(
  pokemonState,
  abilities
);

export const selectGetAbilityLoading = createSelector(
  pokemonState,
  getAbilityLoading
);

export const selectGetAbilityFailure = createSelector(
  pokemonState,
  getAbilityFailure
);

export const selectGetTypes = createSelector(
  pokemonState,
  getTypes
);

export const selectGetTypeLoading = createSelector(
  pokemonState,
  getTypeLoading
);

export const selectGetTypeFailure = createSelector(
  pokemonState,
  getTypeFailure
);
