import { createAction } from "@ngrx/store";
import { props } from "@ngrx/store";
import { Ability, Pokemon, PokemonSpecies } from "pokenode-ts";


export enum PokemonActionTypes {
  GET_POKEMON_REQUEST = '[Pokemon] Get pokemon request',
  GET_POKEMON_SUCCESS = '[Pokemon] Get pokemon success',
  GET_POKEMON_FAILURE = '[Pokemon] Get pokemon failure',
  GET_POKEMON_SPECIES_REQUEST = '[Pokemon] Get pokemon species request',
  GET_POKEMON_SPECIES_SUCCESS = '[Pokemon] Get pokemon species success',
  GET_POKEMON_SPECIES_FAILURE = '[Pokemon] Get pokemon species failure',
  GET_ABILITY_REQUEST = '[Pokemon] Get ability request',
  GET_ABILITY_SUCCESS = '[Pokemon] Get ability success',
  GET_ABILITY_FAILURE = '[Pokemon] Get ability failure',
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

export const getAbility = createAction(
  PokemonActionTypes.GET_ABILITY_REQUEST,
  props<{ abilityName: string }>()
)
export const getAbilitySuccess = createAction(
  PokemonActionTypes.GET_ABILITY_SUCCESS,
  props<{ ability: Ability }>()
)
export const getAbilityFailure = createAction(
  PokemonActionTypes.GET_ABILITY_FAILURE,
  props<{ error: any }>()
)