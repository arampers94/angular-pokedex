import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { PokemonModule } from "./store/pokemon";
import { MoveModule } from "./store/move";
import { LocationModule } from "./store/location";
import { GameModule } from "./store/game";


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    PokemonModule,
    MoveModule,
    LocationModule,
    GameModule,
  ]
})
export class AppStoreModule {}