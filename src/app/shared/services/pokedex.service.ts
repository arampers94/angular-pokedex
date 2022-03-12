import { Injectable } from '@angular/core';
import { Ability, PokemonClient, PokemonSpecies } from "pokenode-ts";
import { Observable, from, of, catchError, forkJoin, mergeMap, map } from 'rxjs';
import { Pokemon } from "pokenode-ts";
import { Router } from '@angular/router';
import { PokemonDetail } from '../models/pokemon-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  api = new PokemonClient();

  constructor(private router: Router) { }

  async getPokemonDetail(pokemonName: string): Promise<PokemonDetail> {
    let pokemonDetail = new PokemonDetail();

    let abilities$ = this.getPokemonByName(pokemonName).pipe(
      map(pokemon => {
        pokemonDetail.pokemon = pokemon;
        pokemonDetail.stats = pokemon.stats.map(stat => stat.base_stat);
        return pokemon;
      }),
      mergeMap(pokemon => 
        forkJoin(
          pokemon.abilities.map(ability => this.getAbilityByName(ability.ability.name))
        )
      )
    )

    let pokemonSpecies$ = this.getPokemonBySpeciesName(pokemonName);

    await forkJoin([abilities$, pokemonSpecies$]).subscribe(data => {
      let abilities = data[0];
      let pokemonSpecies = data[1];

      pokemonDetail.pokemonSpecies = pokemonSpecies;
      pokemonDetail.flavorText = pokemonSpecies.flavor_text_entries[2].flavor_text.replace('\f', ' ');
      pokemonDetail.genus = pokemonSpecies.genera.find(item => { return item.language.name === "en" });
      pokemonDetail.pokemonSpeciesDexEntry = pokemonSpecies.pokedex_numbers.find(item => { return item.pokedex.name === "national" });
      pokemonDetail.evolvesFrom = 'Evolves from ' + (pokemonSpecies.evolves_from_species !== null ? pokemonSpecies.evolves_from_species.name : 'nothing');
      pokemonDetail.verboseEffects = abilities.map(ability => ability.effect_entries.find(item => { return item.language.name === "en" })!);
      pokemonDetail.entryNumber = pokemonSpecies.pokedex_numbers.find(item => item.pokedex.name === "national")?.entry_number;
    })

    return pokemonDetail;
  }

  private getPokemonByName(pokemonName: string): Observable<Pokemon> {
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

  private getPokemonBySpeciesName(pokemonName: string): Observable<PokemonSpecies> {
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

  private getAbilityByName(abilityName: string): Observable<Ability> {
    return from(
      this.api.getAbilityByName(abilityName).then(data => {
        return data;
      })
    )
  }
}
