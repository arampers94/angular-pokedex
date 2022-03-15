import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { PokemonDetailResolver } from './pokemon-detail.resolver';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbAccordionModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { MoveDetailComponent } from './move-detail/move-detail.component';

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
  declarations: [PokemonDetailComponent, MoveDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    NgApexchartsModule,
    NgbPopoverModule,
    NgbAccordionModule
  ]
})
export class PokemonDetailModule { }
