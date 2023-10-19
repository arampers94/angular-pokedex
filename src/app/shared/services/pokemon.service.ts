import { Injectable } from "@angular/core";
import { PokemonClient, PokemonSpecies } from "pokenode-ts";
import { Observable, from } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private pokemonClient = new PokemonClient();

  public getPokemonSpeciesByName(pokemonName: string): Observable<PokemonSpecies> {
    return from(this.pokemonClient.getPokemonSpeciesByName(pokemonName));
  }
}