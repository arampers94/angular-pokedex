import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { PokemonDetailResolver } from './pokemon-detail.resolver';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
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
    ])
  ]
})
export class PokemonDetailModule { }
