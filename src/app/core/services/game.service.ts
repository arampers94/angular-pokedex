import { Injectable } from "@angular/core";
import { GameClient, NamedAPIResourceList, Pokedex } from "pokenode-ts";
import { Observable, from } from "rxjs";

@Injectable({ providedIn: 'root' })
export class GameService {
  private gameClient = new GameClient();

  public getPokedex(region: string): Observable<Pokedex> {
    return from(
      this.gameClient.getPokedexByName(region)
    );
  }

  public getPokedexList(offset?: number, limit?: number): Observable<NamedAPIResourceList | null> {
    return from(this.gameClient.listPokedexes(offset, limit));
  }
}