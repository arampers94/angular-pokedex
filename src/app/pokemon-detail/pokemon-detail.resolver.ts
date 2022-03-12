import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { PokemonDetail } from '../shared/models/pokemon-detail.model';
import { PokedexService } from '../shared/services/pokedex.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailResolver implements Resolve<PokemonDetail> {
  constructor(private pokedexService: PokedexService) {}

  resolve(route: ActivatedRouteSnapshot): Promise<PokemonDetail> {
    const pokemonName = route.params['pokemonName'];

    return this.pokedexService.getPokemonDetail(pokemonName);
  }
}
