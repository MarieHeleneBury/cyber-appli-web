import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, EMPTY, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {API_URL} from '../env';
import {Pokemon} from './pokemon.model';

@Injectable()
export class PokemonsApiService {

  constructor(private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  
  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${API_URL}/pokemons`)
    // .pipe(
    //       catchError((err : HttpErrorResponse) => {
    //         return throwError(err);
    //       })
    //   )
  }

  savePokemon(pokemon: Pokemon): Observable<any> {
    return this.http
      .post(`${API_URL}/pokemons`, pokemon);
  }

  getPokemonType(pokemon_name: string) :Observable<any> {
    return this.http
      .get<any>(`${API_URL}/pokemon/`+ pokemon_name);
  }
}