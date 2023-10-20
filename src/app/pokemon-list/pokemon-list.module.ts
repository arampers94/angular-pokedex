import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list.component';
import { RegionPickerComponent } from './region-picker/region-picker.component';



@NgModule({
  declarations: [PokemonListComponent, RegionPickerComponent],
  imports: [
    CommonModule
  ]
})
export class PokemonListModule { }
