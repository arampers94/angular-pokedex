import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PokemonService } from "src/app/shared/services/pokemon.service";
import {
  getPokemon,
  getPokemonSuccess,
  getPokemonFailure,
  getPokemonSpecies,
  getPokemonSpeciesSuccess,
  getPokemonSpeciesFailure,
 } from "./actions";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class PokemonEffects {
  getPokemon$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPokemon),
      switchMap((action) =>
        this.pokemonService
          .getPokemonByName(action.pokemonName)
          .pipe(
            map(pokemon => getPokemonSuccess({ pokemon })),
            catchError(error => of(getPokemonFailure(error)))
        )
      )
    )
  );

  getPokemonSpecies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPokemonSpecies),
      switchMap((action) =>
        this.pokemonService
          .getPokemonSpeciesByName(action.pokemonName)
          .pipe(
            map(pokemonSpecies => getPokemonSpeciesSuccess({ pokemonSpecies })),
            catchError(error => of(getPokemonSpeciesFailure(error)))
        )
      )
    )
  );

  constructor(private actions$: Actions, private pokemonService: PokemonService) {}
}