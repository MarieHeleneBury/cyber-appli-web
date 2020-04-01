import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PokemonsApiService} from "./pokemons-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'pokemon-form',
  template: `
    <div>
      <h2>New Pokemon</h2>
      <label for="pokemon-name">Name</label>
      <input id="pokemon-name" (keyup)="updateName($event)">
      <label for="pokemon-elem_type">Elem_type</label>
      <input id="pokemon-elem_type" (keyup)="updateElem_type($event)">
      <button (click)="savePokemon()">Save Pokemon</button>
    </div>
  `
})
export class PokemonFormComponent {
  pokemon = {
    name: '',
    elem_type: '',
  };

  constructor(private pokemonsApi: PokemonsApiService, private router: Router) { }

  updateName(event: any) {
    this.pokemon.name = event.target.value;
  }

  updateElem_type(event: any) {
    this.pokemon.elem_type = event.target.value;
  }

  savePokemon() {
    this.pokemonsApi
      .savePokemon(this.pokemon)
      .subscribe(
        () => this.router.navigate(['/']),
        error => alert(error.message)
      );
  }
}