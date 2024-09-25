import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameActions, GameSelectors, LocationSelectors } from '../../store';
import { Observable, OperatorFunction, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { Router } from '@angular/router';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { PokemonEntry } from 'pokenode-ts';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  public regions$ = this.store$.select(LocationSelectors.selectRegions);
  public currentPokedexName$ = this.store$.select(GameSelectors.selectCurrentPokedexName);
  public pokedex$ = this.store$.select(GameSelectors.selectPokedex);
  public pokemonName = '';
  public allPokemon: string[] = [];
  public currentPokedexPage$ = this.store$.select(GameSelectors.selectCurrentPokedexPage);
  public page = 1;
  public pageSize = 25;
  public displayedPokemon: PokemonEntry[] = [];
  public pokemonEntries: PokemonEntry[] = [];

  formatter = (result: string) => result.charAt(0).toUpperCase() + result.slice(1);

  constructor(
    private store$: Store, 
    private router: Router,
  ) {
    this.currentPokedexPage$.subscribe((currentPokedexPage) => {
      this.page = currentPokedexPage;
    });
   }

  public ngOnInit(): void {
    this.pokedex$.subscribe(pokedex => {
      if (pokedex) {
        this.allPokemon = pokedex.pokemon_entries.map(pokemon => pokemon.pokemon_species.name);
        this.pokemonEntries = pokedex.pokemon_entries;
        this.displayPokemon();
      }
    });
  }

  public search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
				term.length < 2 ? [] : this.allPokemon.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
      )
    )
  }

  public searchPokemon(event: NgbTypeaheadSelectItemEvent): void {
    this.router.navigateByUrl('/pokemon-detail/' + event.item);
  }

  public pageChanged(page: number): void {
    this.store$.dispatch(GameActions.setCurrentPokedexPage({ page }));
    this.displayPokemon();
  }

  public displayPokemon(): void {
    this.displayedPokemon = 
          this.pokemonEntries
            .map(data => ({ ...data }))
            .slice(
              (this.page - 1) * this.pageSize,
              (this.page - 1) * this.pageSize + this.pageSize
            );
  }

  public pokemonNationalDexNumber(entry: PokemonEntry): number {
    return this.extractNumberFromUrl(entry.pokemon_species.url)
  }

  private extractNumberFromUrl(url: string): number {
    const match = url.match(/\/(\d+)\/$/);
    if (match) {
      return parseInt(match[1], 10);
    }
    return 0;
  }
}
