import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PokemonsApiService} from "../pokemons/pokemons-api.service";
import {PokemonsComponent} from "../pokemons/pokemons.component";
import {Router} from "@angular/router";

@Component({
    selector: 'pokemon-type-form',
    templateUrl: './pokemon-type-form.component.html',
    styleUrls: ['./pokemon-type-form.component.css']
  })

  export class PokemonTypeFormComponent {
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
        .getPokemonType(this.pokemon.name)
        .subscribe(
          () => this.router.navigate(['/']),
          error => alert(error.message)
        );
    }

    getType() {
        return this.pokemon.elem_type;
    }
  }