import { Injectable } from "@angular/core";
import { Move, MoveClient } from "pokenode-ts";
import { Observable, from } from "rxjs";

@Injectable({ providedIn: 'root' })
export class MoveService {
  private moveClient = new MoveClient();

  public getMoveByName(moveName: string): Observable<Move> {
    return from(this.moveClient.getMoveByName(moveName));
  }
}