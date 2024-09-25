import { NamedAPIResourceList, Pokedex } from "pokenode-ts";

export interface State {
  pokedex: Pokedex | null;
  getPokedexLoading: boolean;
  getPokedexFailure: any;
  currentPokedexName: string;
  currentPokedexPage: number;
  pokedexList: NamedAPIResourceList | null;
  getPokedexListLoading: boolean;
  getPokedexListFailure: any;
}

export const initialState: State = {
  pokedex: null,
  getPokedexLoading: false,
  getPokedexFailure: null,
  currentPokedexName: 'National',
  currentPokedexPage: 1,
  pokedexList: null,
  getPokedexListLoading: false,
  getPokedexListFailure: null,
}