import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { gameReducer } from "./reducer";
import { GameEffects } from "./effects";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('game', gameReducer),
    EffectsModule.forFeature([GameEffects])
  ]
})
export class GameModule {}