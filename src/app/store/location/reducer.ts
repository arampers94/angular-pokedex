import { Action, createReducer, on } from '@ngrx/store';
import {
  getAllRegions,
  getAllRegionsSuccess,
  getAllRegionsFailure,
} from './actions';
import { State } from './state';
import { initialState } from './state';

export const regionFeatureKey = 'location';

export const locationReducer = createReducer(
  initialState,
  on(getAllRegions, state => ({ 
    ...state, 
    getAllRegionsLoading: true 
  })),
  on(getAllRegionsSuccess, (state, { resourceList }) => ({ 
    ...state, 
    getAllRegionsLoading: false,
    regions: resourceList.results
  })),
  on(getAllRegionsFailure, (state, error) => ({ 
    ...state, 
    getAllRegionsLoading: false,
    getAllRegionsSFailure: error,
  })),
);
export const reducer = (state: State, action: Action) =>
  locationReducer(state, action);
