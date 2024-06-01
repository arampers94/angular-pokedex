import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  getAllRegions,
  getAllRegionsSuccess,
  getAllRegionsFailure
} from './actions';
import { LocationService } from 'src/app/core/services/location.service';

@Injectable()
export class LocationEffects {
  getAllRegions$ = createEffect(() =>
    this.action$.pipe(
      ofType(getAllRegions),
      switchMap(() => 
        this.locationService
          .getAllRegions()
          .pipe(
            map(resourceList => getAllRegionsSuccess({ resourceList })),
            catchError(error => of(getAllRegionsFailure(error)))
          )
      )
    )
  );
  
  constructor(private action$: Actions, private locationService: LocationService) { }
}