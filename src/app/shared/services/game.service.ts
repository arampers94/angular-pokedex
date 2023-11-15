import { Injectable } from "@angular/core";
import { GameClient, NamedAPIResourceList, Pokedex } from "pokenode-ts";
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

  public getPokedexList(offset?: number, limit?: number): Observable<NamedAPIResourceList | null> {
    return from(this.gameClient.listPokedexes(offset, limit));
  }
}