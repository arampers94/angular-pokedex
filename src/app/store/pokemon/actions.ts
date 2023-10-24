import { createAction } from "@ngrx/store";
import { props } from "@ngrx/store";
import { Ability, NamedAPIResourceList, Pokemon, PokemonSpecies, Type } from "pokenode-ts";


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
  GET_TYPE_REQUEST = '[Pokemon] Get type request',
  GET_TYPE_SUCCESS = '[Pokemon] Get type success',
  GET_TYPE_FAILURE = '[Pokemon] Get type failure',
  GET_ALL_POKEMON_REQUEST = '[Pokemon] Get all pokemon request',
  GET_ALL_POKEMON_SUCCESS = '[Pokemon] Get all pokemon success',
  GET_ALL_POKEMON_FAILURE = '[Pokemon] Get all pokemon failure',
  UPDATE_INITIAL_FETCH_COMPLETED = '[Pokemon] Update initial fetch completed',
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
);

export const getAbilitySuccess = createAction(
  PokemonActionTypes.GET_ABILITY_SUCCESS,
  props<{ ability: Ability }>()
);

export const getAbilityFailure = createAction(
  PokemonActionTypes.GET_ABILITY_FAILURE,
  props<{ error: any }>()
);

export const getType = createAction(
  PokemonActionTypes.GET_TYPE_REQUEST,
  props<{ typeName: string }>()
);

export const getTypeSuccess = createAction(
  PokemonActionTypes.GET_TYPE_SUCCESS,
  props<{ pokemonType: Type }>()
);

export const getTypeFailure = createAction(
  PokemonActionTypes.GET_TYPE_FAILURE,
  props<{ error: any }>()
);

export const getAllPokemon = createAction(
  PokemonActionTypes.GET_ALL_POKEMON_REQUEST
);

export const getAllPokemonSuccess = createAction(
  PokemonActionTypes.GET_ALL_POKEMON_SUCCESS,
  props<{ resourceList: NamedAPIResourceList }>()
);

export const getAllPokemonFailure = createAction(
  PokemonActionTypes.GET_ALL_POKEMON_FAILURE,
  props<{ error: any }>()
);

export const updateInitialFetchCompleted = createAction(
  PokemonActionTypes.UPDATE_INITIAL_FETCH_COMPLETED,
  props<{ fetchCompleted: boolean }>()
);
