import { Injectable } from '@angular/core';
import { Ability, PokemonClient, PokemonSpecies } from "pokenode-ts";
import { Observable, from, of, catchError } from 'rxjs';
import { Pokemon } from "pokenode-ts";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  api = new PokemonClient();

  constructor(private router: Router) { }

  getPokemonByName(pokemonName: string): Observable<Pokemon> {
    return from(
      this.api.getPokemonByName(pokemonName).then(data => {
        return data;
      })
    )
    .pipe(
      catchError(err => {
        this.router.navigate(['404']);
        return of();
      })
    )
  }

  getPokemonBySpeciesName(pokemonName: string): Observable<PokemonSpecies> {
    return from(
      this.api.getPokemonSpeciesByName(pokemonName).then(data => {
        return data;
      })
    )
    .pipe(
      catchError(err => {
        this.router.navigate(['404']);
        return of();
      })
    )
  }

  getAbilityByName(abilityName: string): Observable<Ability> {
    return from(
      this.api.getAbilityByName(abilityName).then(data => {
        return data;
      })
    )
    .pipe(
      catchError(err => {
        this.router.navigate(['404']);
        return of();
      })
    )
  }
}
