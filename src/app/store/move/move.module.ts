import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { moveReducer } from "./reducer";
import { MoveEffects } from "./effects";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('move', moveReducer),
    EffectsModule.forFeature([MoveEffects])
  ]
})
export class MoveModule {}