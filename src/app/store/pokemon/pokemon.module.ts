import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { pokemonReducer } from "./reducer";
import { PokemonEffects } from "./effects";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('pokemon', pokemonReducer),
    EffectsModule.forFeature([PokemonEffects])
  ]
})
export class PokemonModule {}