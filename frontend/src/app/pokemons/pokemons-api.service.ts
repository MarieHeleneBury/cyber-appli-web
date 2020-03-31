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

  // GET list of public, future events
  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${API_URL}/pokemons`)
    .pipe(
          catchError((err : HttpErrorResponse) => {
            return throwError(err);
          })
      )
  }
}