import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  getPokedex,
  getPokedexSuccess,
  getPokedexFailure
} from './actions';
import { GameService } from 'src/app/shared/services/game.service';

@Injectable()
export class GameEffects {
  getPokedex$ = createEffect(() =>
    this.action$.pipe(
      ofType(getPokedex),
      switchMap((action) => 
        this.gameService
          .getPokedex(action.id, action.region)
          .pipe(
            map(pokedex => getPokedexSuccess({ pokedex })),
            catchError(error => of(getPokedexFailure(error)))
          )
      )
    )
  );
  
  constructor(private action$: Actions, private gameService: GameService) { }
}