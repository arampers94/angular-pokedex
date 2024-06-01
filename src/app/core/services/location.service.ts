import { Injectable } from "@angular/core";
import { LocationClient, NamedAPIResourceList } from "pokenode-ts";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http"

@Injectable({ providedIn: 'root' })
export class LocationService {
  private locationClient = new LocationClient();

  constructor(private http: HttpClient) { }

  public getAllRegions(): Observable<NamedAPIResourceList> {
    return this.http.get<NamedAPIResourceList>('https://pokeapi.co/api/v2/region/');
  }
}