import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './pokedex.component';
import { RegionPickerComponent } from './region-picker/region-picker.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingScreenModule } from '../layouts/loading-screen/loading-screen.module';

const ROUTES = [
  {
    path: '',
    component: PokedexComponent,
  }
];

@NgModule({
  declarations: [
    PokedexComponent,
    PokemonListComponent,
    RegionPickerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    LoadingScreenModule,
  ]
})
export class PokedexModule { }
