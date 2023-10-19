import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { from, Observable } from 'rxjs';
import { PokemonDetail } from '../shared/models/pokemon-detail.model';
import { PokedexService } from '../shared/services/pokedex.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailResolver  {
  constructor(private pokedexService: PokedexService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<PokemonDetail> {
    const pokemonName = route.params['pokemonName'];

    return from(this.pokedexService.getPokemonDetail(pokemonName).then(data => { return data }));
  }
}
