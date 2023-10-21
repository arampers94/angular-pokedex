import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbAccordionModule, NgbModalModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { MoveDetailComponent } from './move-detail/move-detail.component';

const ROUTES = [
  {
    path: ':pokemonName',
    component: PokemonDetailComponent,
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
    NgbAccordionModule,
    NgbModalModule,
  ]
})
export class PokemonDetailModule { }
