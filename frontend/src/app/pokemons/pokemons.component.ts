import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Pokemon} from './pokemon.model';
import {PokemonsApiService} from './pokemons-api.service';
import {PokemonTypeFormComponent} from '../pokemon-type-form/pokemon-type-form.component';
import {Router} from "@angular/router";

@Component({
  selector: 'pokemons',
  templateUrl: './pokemons.component.html'
})
export class PokemonsComponent implements OnInit, OnDestroy {
  pokemonsListSubs: Subscription;
  pokemonsList: Pokemon[];
  pokemon = {
    name: '',
    elem_type: '',
  };

  constructor(private pokemonsApi: PokemonsApiService, private router: Router) {
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

  

  updateName(event: any) {
    this.pokemon.name = event.target.value;
  }

  getPokemonType() {
    this.pokemonsApi
      .getPokemonType(this.pokemon.name)
      .subscribe(
        res => {
          this.pokemon.elem_type = res;
        },
        error => alert(error.message)
      );
  }

  getType() {
      return this.pokemon.elem_type;
  }

}