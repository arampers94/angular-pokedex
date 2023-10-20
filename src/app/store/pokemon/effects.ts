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
  getAbility,
  getAbilitySuccess,
  getAbilityFailure,
  getType,
  getTypeSuccess,
  getTypeFailure,
 } from "./actions";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";

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

  getAbility$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAbility),
      mergeMap((action) =>
        this.pokemonService
          .getAbilityByName(action.abilityName)
          .pipe(
            map(ability => getAbilitySuccess({ ability })),
            catchError(error => of(getAbilityFailure(error)))
        )
      )
    )
  );

  getType$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getType),
      mergeMap((action) =>
        this.pokemonService
          .getTypeByName(action.typeName)
          .pipe(
            map(pokemonType => getTypeSuccess({ pokemonType })),
            catchError(error => of(getTypeFailure(error)))
        )
      )
    )
  );

  constructor(private actions$: Actions, private pokemonService: PokemonService) {}
}