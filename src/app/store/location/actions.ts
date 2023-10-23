import { createAction, props } from '@ngrx/store';
import { NamedAPIResourceList } from 'pokenode-ts';

export enum LocationActionTypes {
  GET_ALL_REGIONS_REQUEST = "[Location] Get all regions request",
  GET_ALL_REGIONS_SUCCESS = "[Location] Get all regions success",
  GET_ALL_REGIONS_FAILURE = "[Location] Get all regions failure",
}

export const getAllRegions = createAction( 
  LocationActionTypes.GET_ALL_REGIONS_REQUEST,
);

export const getAllRegionsSuccess = createAction( 
  LocationActionTypes.GET_ALL_REGIONS_SUCCESS,
  props<{ resourceList: NamedAPIResourceList }>()
);

export const getAllRegionsFailure = createAction( 
  LocationActionTypes.GET_ALL_REGIONS_FAILURE,
  props<{ error: any }>()
);
