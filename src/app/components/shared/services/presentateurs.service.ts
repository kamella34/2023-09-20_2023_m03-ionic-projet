import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from 'rxjs';
import { Presentateur } from "../models/presentateursModel";

@Injectable({
  providedIn: 'root'
})

export class PresentateursService {
  private _id!: number;


  private _baseUrlPresentateur = 'https://devfest-nantes-2018-api.cleverapps.io/speakers';

  constructor(private _http: HttpClient) { }

  public findAllPresentateur(): Observable<Presentateur[]> {
    return this._http.get<Presentateur[]>(this._baseUrlPresentateur)
  }

}