import { createAction } from "@ngrx/store";
import { props } from "@ngrx/store";
import { Pokemon, PokemonSpecies } from "pokenode-ts";


export enum PokemonActionTypes {
  GET_POKEMON_REQUEST = '[Pokemon] Get pokemon request',
  GET_POKEMON_SUCCESS = '[Pokemon] Get pokemon success',
  GET_POKEMON_FAILURE = '[Pokemon] Get pokemon failure',
  GET_POKEMON_SPECIES_REQUEST = '[Pokemon] Get pokemon species request',
  GET_POKEMON_SPECIES_SUCCESS = '[Pokemon] Get pokemon species success',
  GET_POKEMON_SPECIES_FAILURE = '[Pokemon] Get pokemon species failure',
}

export const getPokemon = createAction(
  PokemonActionTypes.GET_POKEMON_REQUEST,
  props<{ pokemonName: string }>()
);

export const getPokemonSuccess = createAction(
  PokemonActionTypes.GET_POKEMON_SUCCESS,
  props<{ pokemon: Pokemon }>()
);

export const getPokemonFailure = createAction(
  PokemonActionTypes.GET_POKEMON_FAILURE,
  props<{ error: any }>()
);

export const getPokemonSpecies = createAction(
  PokemonActionTypes.GET_POKEMON_SPECIES_REQUEST,
  props<{ pokemonName: string }>()
);

export const getPokemonSpeciesSuccess = createAction(
  PokemonActionTypes.GET_POKEMON_SPECIES_SUCCESS,
  props<{ pokemonSpecies: PokemonSpecies }>()
);

export const getPokemonSpeciesFailure = createAction(
  PokemonActionTypes.GET_POKEMON_SPECIES_FAILURE,
  props<{ error: any }>()
);