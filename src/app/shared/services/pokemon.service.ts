import { Injectable } from "@angular/core";
import { Pokemon, PokemonClient, PokemonSpecies } from "pokenode-ts";
import { Observable, from } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private pokemonClient = new PokemonClient();

  public getPokemonByName(pokemonName: string): Observable<Pokemon> {
    return from(this.pokemonClient.getPokemonByName(pokemonName));
  }

  public getPokemonSpeciesByName(pokemonName: string): Observable<PokemonSpecies> {
    return from(this.pokemonClient.getPokemonSpeciesByName(pokemonName));
  }
}