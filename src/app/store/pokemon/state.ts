import { PokemonSpecies } from "pokenode-ts"

export interface State {
  pokemonSpecies: PokemonSpecies | null;
  getPokemonSpeciesLoading: boolean;
  getPokemonSpeciesFailure: any;
}

export const initialState: State = {
  pokemonSpecies: null,
  getPokemonSpeciesLoading: false,
  getPokemonSpeciesFailure: null,
}