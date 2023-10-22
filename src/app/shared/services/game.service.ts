import { Injectable } from "@angular/core";
import { GameClient, Pokedex } from "pokenode-ts";
import { Observable, from } from "rxjs";

@Injectable({ providedIn: 'root' })
export class GameService {
  private gameClient = new GameClient();

  public getPokedex(id: number, region?: string): Observable<Pokedex> {
    return from(
      region ? 
        this.gameClient.getPokedexByName(region) : 
        this.gameClient.getPokedexById(id)
    );
  }
}