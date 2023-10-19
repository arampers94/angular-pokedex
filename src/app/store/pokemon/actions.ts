import { createAction } from "@ngrx/store";
import { props } from "@ngrx/store";
import { PokemonSpecies } from "pokenode-ts";


export enum PokemonActionTypes {
  GET_POKEMON_SPECIES_REQUEST = '[Pokemon] Get pokemon species request',
  GET_POKEMON_SPECIES_SUCCESS = '[Pokemon] Get pokemon species success',
  GET_POKEMON_SPECIES_FAILURE = '[Pokemon] Get pokemon species failure',
}

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