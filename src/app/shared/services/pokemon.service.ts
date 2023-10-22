import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Ability, NamedAPIResourceList, Pokemon, PokemonClient, PokemonSpecies, Type } from "pokenode-ts";
import { Observable, from } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private pokemonClient = new PokemonClient();

  constructor(private http: HttpClient) {}

  public getPokemonByName(pokemonName: string): Observable<Pokemon> {
    return from(this.pokemonClient.getPokemonByName(pokemonName));
  }

  public getPokemonSpeciesByName(pokemonName: string): Observable<PokemonSpecies> {
    return from(this.pokemonClient.getPokemonSpeciesByName(pokemonName));
  }

  public getAbilityByName(abilityName: string): Observable<Ability> {
    return from(this.pokemonClient.getAbilityByName(abilityName));
  }

  public getTypeByName(typeName: string): Observable<Type> {
    return from(this.pokemonClient.getTypeByName(typeName));
  }

  public getAllPokemon(): Observable<NamedAPIResourceList> {
    return from(this.pokemonClient.listPokemons());
  }
}