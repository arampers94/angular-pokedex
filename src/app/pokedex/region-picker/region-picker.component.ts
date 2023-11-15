import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NamedAPIResource, APIResource } from 'pokenode-ts';
import { GameActions, LocationSelectors } from 'src/app/store';

@Component({
  selector: 'app-region-picker',
  templateUrl: './region-picker.component.html',
  styleUrls: ['./region-picker.component.scss']
})
export class RegionPickerComponent implements OnInit {
  public regions$: Observable<NamedAPIResource[] | APIResource[]> = 
    this.store$.select(LocationSelectors.selectRegions);

  constructor(private store$: Store) { }

  ngOnInit(): void {
    
  }

  isNamedAPIResource(item: NamedAPIResource | APIResource): item is NamedAPIResource {
    return (item as NamedAPIResource).name !== undefined;
  }

  setCurrentPokedexName(pokedexName: string): void {
    this.store$.dispatch(GameActions.setCurrentPokedexName({ pokedexName }))
    this.store$.dispatch(GameActions.getPokedex({ id: 1, region: pokedexName }))
  }
}
