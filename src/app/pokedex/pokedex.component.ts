import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { 
  PokemonActions, 
  LocationActions,
  GameActions,
} from '../store';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  constructor(private store$: Store) {}

  ngOnInit(): void {
    this.store$.dispatch(PokemonActions.getAllPokemon());
    this.store$.dispatch(LocationActions.getAllRegions());
    this.store$.dispatch(GameActions.getPokedex({ id: 1 }));
  }
}
