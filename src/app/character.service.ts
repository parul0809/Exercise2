import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';;


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient
    ) { }

  getCharacters() : Observable<any>{
      return this.http.get('https://swapi.co/api/people/');
  };

}
