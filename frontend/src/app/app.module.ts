import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonsApiService } from './pokemons/pokemons-api.service';

import {PokemonFormComponent} from './pokemons/pokemon-form.component';
import {RouterModule, Routes} from '@angular/router';
import {PokemonsComponent} from './pokemons/pokemons.component';
import { PokemonTypeFormComponent } from './pokemon-type-form/pokemon-type-form.component';

const appRoutes: Routes = [
  { path: 'new-pokemon', component: PokemonFormComponent },
  { path: '', component: PokemonsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PokemonFormComponent,
    PokemonsComponent,
    PokemonTypeFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
    ),
  ],
  providers: [PokemonsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
