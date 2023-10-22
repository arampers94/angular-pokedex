import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { locationReducer } from "./reducer";
import { LocationEffects } from "./effects";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('location', locationReducer),
    EffectsModule.forFeature([LocationEffects])
  ]
})
export class LocationModule {}