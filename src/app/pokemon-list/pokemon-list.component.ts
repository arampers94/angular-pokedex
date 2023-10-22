import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LocationActions } from '../store';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  public regionName = '';

  constructor(private store$: Store) { }

  ngOnInit(): void {
    this.store$.dispatch(LocationActions.getAllRegions());
  }

}
