import { APIResource, NamedAPIResource } from "pokenode-ts";

export interface State {
  regions: NamedAPIResource[] | APIResource[];
  getAllRegionsLoading: boolean;
  getAllRegionsFailure: any;
}

export const initialState: State = {
  regions: [],
  getAllRegionsLoading: false,
  getAllRegionsFailure: null,
}