import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1> listes de pokemon </h1>
  `
})
export class AppComponent implements OnInit{
  title = 'ng-poke';
  pokeListe = POKEMONS;
  ngOnInit() {
    console.table(this.pokeListe);
    this.selectPoke(this.pokeListe[1]);
  }
  selectPoke(pokemon: Pokemon){
    console.log(`Le nom selectionné est ${pokemon.name}`)
  }
}

