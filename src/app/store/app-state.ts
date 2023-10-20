import { MoveState } from "./move";
import { PokemonState } from "./pokemon";


export interface State {
  pokemon: PokemonState.State;
  move: MoveState.State;
}