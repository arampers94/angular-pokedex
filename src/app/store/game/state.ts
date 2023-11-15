import { NamedAPIResourceList, Pokedex } from "pokenode-ts";

export interface State {
  pokedex: Pokedex | null;
  getPokedexLoading: boolean;
  getPokedexFailure: any;
  currentPokedexName: string;
  pokedexList: NamedAPIResourceList | null;
  getPokedexListLoading: boolean;
  getPokedexListFailure: any;
}

export const initialState: State = {
  pokedex: null,
  getPokedexLoading: false,
  getPokedexFailure: null,
  currentPokedexName: 'National',
  pokedexList: null,
  getPokedexListLoading: false,
  getPokedexListFailure: null,
}