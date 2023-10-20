import { Ability, Pokemon, PokemonSpecies } from "pokenode-ts"

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
}