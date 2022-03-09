import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Pokemon } from 'pokenode-ts';
import { EMPTY, mergeMap, Observable, of } from 'rxjs';
import { ERROR } from '../app.constants';
import { PokedexService } from '../shared/services/pokedex.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailResolver implements Resolve<string | Pokemon> {
  constructor(private pokedexService: PokedexService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<string | Pokemon> | Observable<never> {
    const pokemonName = route.params['pokemonName'];

    return this.pokedexService.getPokemonByName(pokemonName).pipe(
      mergeMap(data => {
        if (data !== ERROR) {
          return of(data);
        } else {
          this.router.navigate(['404']);
          return EMPTY;
        }
      })
    )
  }
}
