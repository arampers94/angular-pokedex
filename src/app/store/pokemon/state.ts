import { APIResource, Ability, Pokemon, PokemonSpecies, Type } from "pokenode-ts"
import { NamedAPIResource } from "src/app/shared/models/named-api-resource.model";

export interface State {
  pokemon: Pokemon | null;
  getPokemonLoading: boolean;
  getPokemonFailure: any;
  pokemonSpecies: PokemonSpecies | null;
  getPokemonSpeciesLoading: boolean;
  getPokemonSpeciesFailure: any;
  abilities: Ability[];
  getAbilityLoading: boolean;
  getAbilityFailure: any;
  types: Type[];
  getTypeLoading: boolean;
  getTypeFailure: any;
  allPokemon: NamedAPIResource[] | APIResource[];
  getAllPokemonLoading: boolean;
  getAllPokemonFailure: any;
  initialFetchCompleted: boolean;
}

export const initialState: State = {
  pokemon: null,
  getPokemonLoading: false,
  getPokemonFailure: null,
  pokemonSpecies: null,
  getPokemonSpeciesLoading: false,
  getPokemonSpeciesFailure: null,
  abilities: [],
  getAbilityLoading: false,
  getAbilityFailure: null,
  types: [],
  getTypeLoading: false,
  getTypeFailure: null,
  allPokemon: [],
  getAllPokemonLoading: false,
  getAllPokemonFailure: null,
  initialFetchCompleted: false,
}