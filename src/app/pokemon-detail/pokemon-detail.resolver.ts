import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Pokemon } from 'pokenode-ts';
import { Observable } from 'rxjs';
import { PokedexService } from '../shared/services/pokedex.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailResolver implements Resolve<Pokemon> {
  constructor(private pokedexService: PokedexService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Pokemon> | Observable<never> {
    const pokemonName = route.params['pokemonName'];

    return this.pokedexService.getPokemonByName(pokemonName);
  }
}
