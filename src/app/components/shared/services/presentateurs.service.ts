import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Presentateur } from "../models/presentateursModel";

@Injectable({
  providedIn: 'root'
})

export class PresentateursService {
  private _id!: number;


  private _baseUrlPresentateur = 'https://devfest-nantes-2018-api.cleverapps.io/speakers';

  constructor(private _http: HttpClient) { }

 public findAll(): Observable<Presentateur[]> {
    return this._http.get<Presentateur[]>(this._baseUrlPresentateur)
  }

  // public findById(id: number): Observable<Presentateur[]> {
  //   return this._http.get<Presentateur>(`${this._baseUrl}/${id}`).pipe(map(data => Object.values(data)))
  // }

}