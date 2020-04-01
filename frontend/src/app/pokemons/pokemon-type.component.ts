import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PokemonsApiService} from "./pokemons-api.service";
import {Router} from "@angular/router";

@Component({
    selector: 'pokemon-type',
    template: `
      <div>
        <label for="pokemon-name">Name</label>
        <input id="pokemon-name" (keyup)="updateName($event)">
        <button (click)="getPokemonType()">Get its type</button>
        <p>{{getType()}}</p>
      </div>
    `
  })
  export class PokemonTypeComponent {
    pokemon = {
      name: '',
      elem_type: '',
    };
  
    constructor(private pokemonsApi: PokemonsApiService, private router: Router) { }
  
    updateName(event: any) {
      this.pokemon.name = event.target.value;
    }
  
    getPokemonType() {
      this.pokemonsApi
        .getPokemonType(this.pokemon)
        .subscribe(
          () => this.router.navigate(['/']),
          error => alert(error.message)
        );
    }

    getType() {
        return this.pokemon.elem_type;
    }
  }