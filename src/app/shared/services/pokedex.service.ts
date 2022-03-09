import { Injectable } from '@angular/core';
import { PokemonClient } from "pokenode-ts";
import { Observable, from } from 'rxjs';
import { Pokemon } from "pokenode-ts";
import { ERROR } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  api = new PokemonClient();

  constructor() { }

  getPokemonByName(pokemonName: string): Observable<string | Pokemon> {
    return from(
      this.api.getPokemonByName(pokemonName).then(data => {
        return data;
      }).catch(err => {
        console.log(err);
        return ERROR;
      })
      );
  }
}
