import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {PokemonsApiService} from './pokemons/pokemons-api.service';
import {Pokemon} from './pokemons/pokemon.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
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