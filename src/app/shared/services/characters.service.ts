import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../model/character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  url = 'https://swapi.dev/api/people/';
  constructor(private httpclient: HttpClient) { }
  getCharacter(): Observable<Character>{
    return this.httpclient
                          .get<Character>(this.url);
  }
}
