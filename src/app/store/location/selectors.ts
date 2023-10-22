import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./state";
import { APIResource, NamedAPIResource } from "pokenode-ts";
import { regionFeatureKey } from "./reducer";

const regions = (state: State): NamedAPIResource[] | APIResource[] =>
  state.regions;
const getAllRegionsLoading = (state: State): boolean =>
  state.getAllRegionsLoading;
const getAllRegionsFailure = (state: State): any =>
  state.getAllRegionsFailure;

export const locationState = createFeatureSelector<State>(
  regionFeatureKey
);

export const selectRegions = createSelector(
  locationState,
  regions
) 
export const selectGetAllRegionsLoading = createSelector(
  locationState,
  getAllRegionsLoading
)
export const selectGetAllRegionsFailure = createSelector(
  locationState,
  getAllRegionsFailure
)