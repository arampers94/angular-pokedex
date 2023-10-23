import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameSelectors, LocationSelectors } from '../../store';
import { Observable, OperatorFunction, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { Router } from '@angular/router';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  public regions$ = this.store$.select(LocationSelectors.selectRegions);
  public currentPokedex = this.store$.select(GameSelectors.selectCurrentPokedexName);
  public pokedex$ = this.store$.select(GameSelectors.selectPokedex);
  public pokemonName = '';
  public allPokemon: string[] = [];

  formatter = (result: string) => result.charAt(0).toUpperCase() + result.slice(1);

  constructor(
    private store$: Store, 
    private router: Router, 
    ) { }

  ngOnInit(): void {
    this.pokedex$.subscribe(pokedex => {
      if (pokedex) {
        this.allPokemon = pokedex.pokemon_entries.map(pokemon => pokemon.pokemon_species.name);
      }
    });
  }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
				term.length < 2 ? [] : this.allPokemon.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
      )
    )
  }

  searchPokemon(event: NgbTypeaheadSelectItemEvent): void {
    this.router.navigateByUrl('/pokemon-detail/' + event.item);
  }
}
