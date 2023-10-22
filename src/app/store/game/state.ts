import { Pokedex } from "pokenode-ts";

export interface State {
  pokedex: Pokedex | null;
  getPokedexLoading: boolean;
  getPokedexFailure: any;
}

export const initialState: State = {
  pokedex: null,
  getPokedexLoading: false,
  getPokedexFailure: null,
}