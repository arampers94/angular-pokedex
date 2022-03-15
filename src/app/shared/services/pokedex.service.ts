import { Injectable } from '@angular/core';
import { Ability, Move, MoveClient, PokemonClient, PokemonSpecies, Type } from "pokenode-ts";
import { Observable, from, of, catchError, forkJoin, mergeMap, map } from 'rxjs';
import { Pokemon } from "pokenode-ts";
import { Router } from '@angular/router';
import { PokemonDetail } from '../models/pokemon-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  pokemonClient = new PokemonClient();
  moveClient = new MoveClient();

  constructor(private router: Router) { }

  async getPokemonDetail(pokemonName: string): Promise<PokemonDetail> {
    let pokemonDetail = new PokemonDetail();

    let pokemon$ = this.getPokemonByName(pokemonName).pipe(
      map(pokemon => {
        pokemonDetail.pokemon = pokemon;
        pokemonDetail.stats = pokemon.stats.map(stat => stat.base_stat);
        return pokemon;
      }),
      mergeMap(pokemon => 
        forkJoin(
          [
            forkJoin(
              pokemon.abilities.map(ability => this.getAbilityByName(ability.ability.name))
            ),
            forkJoin(
              pokemon.types.map(type =>  this.getTypeByName(type.type.name))
            )
          ]
        )
      )
    )

    let pokemonSpecies$ = this.getPokemonBySpeciesName(pokemonName);

    await forkJoin([pokemon$, pokemonSpecies$]).subscribe(data => {
      let abilities = data[0][0];
      let types = data[0][1];
      let pokemonSpecies = data[1];

      pokemonDetail.pokemonSpecies = pokemonSpecies;
      pokemonDetail.flavorText = pokemonSpecies.flavor_text_entries.find(item => { return item.language.name === "en" })?.flavor_text.replace('\f', ' ');
      pokemonDetail.genus = pokemonSpecies.genera.find(item => { return item.language.name === "en" });
      pokemonDetail.pokemonSpeciesDexEntry = pokemonSpecies.pokedex_numbers.find(item => { return item.pokedex.name === "national" });
      pokemonDetail.evolvesFrom = pokemonSpecies.evolves_from_species !== null ? pokemonSpecies.evolves_from_species.name : 'nothing';
      pokemonDetail.verboseEffects = abilities.map(ability => ability.effect_entries.find(item => { return item.language.name === "en" })!);
      pokemonDetail.entryNumber = pokemonSpecies.pokedex_numbers.find(item => item.pokedex.name === "national")?.entry_number;
      pokemonDetail.types = types;
    })

    return pokemonDetail;
  }

  private getPokemonByName(pokemonName: string): Observable<Pokemon> {
    return from(
      this.pokemonClient.getPokemonByName(pokemonName).then(data => {
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

  private getPokemonBySpeciesName(pokemonName: string): Observable<PokemonSpecies> {
    return from(
      this.pokemonClient.getPokemonSpeciesByName(pokemonName).then(data => {
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

  private getAbilityByName(abilityName: string): Observable<Ability> {
    return from(
      this.pokemonClient.getAbilityByName(abilityName).then(data => {
        return data;
      })
    )
  }

  private getTypeByName(typeName: string): Observable<Type> {
    return from(
      this.pokemonClient.getTypeByName(typeName).then(data => {
        return data;
      })
    )
  }

  public getMoveByName(moveName: string): Observable<Move> {
    return from(
      this.moveClient.getMoveByName(moveName).then(data => {
        return data;
      })
    )
  }
}
