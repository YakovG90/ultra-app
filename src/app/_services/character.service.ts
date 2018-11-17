import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Member} from "../_models/member";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  baseUrl = 'http://localhost:51409';

  constructor(private http: HttpClient) {
  }

  getCharacters(): Observable<Member[]> {
    return this.http.get<Member[]>(this.baseUrl + '/api/1/character');
  }

  getImage(id: string): Observable<Blob> {
    return this.http.get(this.baseUrl + '/api/1/character/image/' + id, {responseType: 'blob'});
  }
}
