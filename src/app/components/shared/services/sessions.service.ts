import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Session } from "../models/sessionsModel";

@Injectable({
  providedIn: 'root'
})

export class SessionsService {
  private _id!: number;


  private _baseUrlSession = 'https://devfest-nantes-2018-api.cleverapps.io/sessions';

  constructor(private _http: HttpClient) { }

  public findAllSession(): Observable<Session[]> {
    return this._http.get<Session[]>(this._baseUrlSession)
  }

}