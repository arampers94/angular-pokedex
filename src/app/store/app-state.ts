import { GameState } from "./game";
import { LocationState } from "./location";
import { MoveState } from "./move";
import { PokemonState } from "./pokemon";


export interface State {
  pokemon: PokemonState.State;
  move: MoveState.State;
  location: LocationState.State;
  game: GameState.State;
}