import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Pokemon} from './pokemon.model';
import {PokemonsApiService} from './pokemons-api.service';

@Component({
  selector: 'pokemons',
  template: `
    <div>
        <h2>Here are the pokemons created so far: </h2>
        <button routerLink="/new-pokemon">New pokemon</button>
        <ul>
            <li *ngFor="let pokemon of pokemonsList">
                {{pokemon.name}}
            </li>
        </ul>
        <h2>Discover a pokemon's type !</h2>
        <app-pokemon-type></app-pokemon-type>
    </div>
  `
})
export class PokemonsComponent implements OnInit, OnDestroy {
  pokemonsListSubs: Subscription;
  pokemonsList: Pokemon[];

  constructor(private pokemonsApi: PokemonsApiService) {
  }

  ngOnInit() {
    this.pokemonsListSubs = this.pokemonsApi
      .getPokemons()
      .subscribe(res => {
          this.pokemonsList = res;
        },
        console.error
      );
  }

  ngOnDestroy() {
    this.pokemonsListSubs.unsubscribe();
  }
}