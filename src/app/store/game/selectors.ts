import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./state";
import { NamedAPIResourceList, Pokedex } from "pokenode-ts";
import { gameFeatureKey } from "./reducer";

const pokedex = (state: State): Pokedex | null =>
  state.pokedex;
const getPokedexLoading = (state: State): boolean =>
  state.getPokedexLoading;
const getPokedexFailure = (state: State): any =>
  state.getPokedexFailure;
const currentPokedexName = (state: State): string =>
  state.currentPokedexName;
const currentPokedexPage = (state: State): number =>
  state.currentPokedexPage;
const pokedexList = (state: State): NamedAPIResourceList | null =>
  state.pokedexList;
const getPokedexListLoading = (state: State): boolean =>
  state.getPokedexListLoading;
const getPokedexListFailure = (state: State): any =>
  state.getPokedexListFailure;

export const gameState = createFeatureSelector<State>(
  gameFeatureKey
);

export const selectPokedex = createSelector(
  gameState,
  pokedex
);

export const selectGetPokedexLoading = createSelector(
  gameState,
  getPokedexLoading
);

export const selectGetPokedexFailure = createSelector(
  gameState,
  getPokedexFailure
);

export const selectCurrentPokedexName = createSelector(
  gameState,
  currentPokedexName
);

export const selectCurrentPokedexPage = createSelector(
  gameState,
  currentPokedexPage
);

export const selectPokedexList = createSelector(
  gameState,
  pokedexList
);

export const selectGetPokedexListLoading = createSelector(
  gameState,
  getPokedexListLoading
);

export const selectGetPokedexListFailure = createSelector(
  gameState,
  getPokedexListFailure
);