import { createAction, props } from '@ngrx/store';
import { NamedAPIResourceList } from 'pokenode-ts';

export enum LocationActionTypes {
  GET_ALL_REGIONS = "[Region] GET_ALL_REGIONS",
  GET_ALL_REGIONS_SUCCESS = "[Region] GET_ALL_REGIONS SUCCESS",
  GET_ALL_REGIONS_FAILURE = "[Region] GET_ALL_REGIONS FAIL",
}

export const getAllRegions = createAction( 
  LocationActionTypes.GET_ALL_REGIONS,
);

export const getAllRegionsSuccess = createAction( 
  LocationActionTypes.GET_ALL_REGIONS_SUCCESS,
  props<{ resourceList: NamedAPIResourceList }>()
);

export const getAllRegionsFailure = createAction( 
  LocationActionTypes.GET_ALL_REGIONS_FAILURE,
  props<{ error: any }>()
);
