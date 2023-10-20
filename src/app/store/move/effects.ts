import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { MoveService } from "src/app/shared/services/move.service";
import {
  getMove,
  getMoveSuccess,
  getMoveFailure,
} from './actions'

@Injectable()
export class MoveEffects {
  getMove$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMove),
      switchMap((action) =>
        this.moveService
          .getMoveByName(action.moveName)
          .pipe(
            map(move => getMoveSuccess({ move })),
            catchError(error => of(getMoveFailure(error)))
        )
      )
    )
  );

  constructor(private actions$: Actions, private moveService: MoveService) {}
}