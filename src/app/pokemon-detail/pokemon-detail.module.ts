import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { PokemonDetailResolver } from './pokemon-detail.resolver';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

const ROUTES = [
  {
    path: ':pokemonName',
    component: PokemonDetailComponent,
    resolve: {
      pokemonDetail: PokemonDetailResolver
    }
  },
  {
    path: '',
    component: PokemonDetailComponent
  }
];


@NgModule({
  declarations: [PokemonDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    NgApexchartsModule,
    NgbPopoverModule
  ]
})
export class PokemonDetailModule { }
