import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<any> {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/');
  }

  getPokemonByName(name: string): Observable<any> {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/' + name);
  }
}
