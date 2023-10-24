import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { 
  PokemonActions, 
  LocationActions,
  GameActions,
  PokemonSelectors,
  LocationSelectors,
  GameSelectors,
} from '../store';
import { Observable, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  public allPokemonLoading$ = this.store$.select(PokemonSelectors.selectGetAllPokemonLoading);
  public allRegionsLoading$ = this.store$.select(LocationSelectors.selectGetAllRegionsLoading);
  public pokedexLoading$ = this.store$.select(GameSelectors.selectGetPokedexLoading);
  public loading$: Observable<boolean>;

  constructor(private store$: Store) {
    this.loading$ = combineLatest([
      this.allPokemonLoading$,
      this.allRegionsLoading$,
      this.pokedexLoading$,
    ]).pipe(
      map(([pokemonLoading, regionsLoading, pokedexLoading]) => {
        return pokemonLoading || regionsLoading || pokedexLoading;
      })
    )
  }

  ngOnInit(): void {
    this.store$.dispatch(PokemonActions.getAllPokemon());
    this.store$.dispatch(LocationActions.getAllRegions());
    this.store$.dispatch(GameActions.getPokedex({ id: 1 }));
  }
}
