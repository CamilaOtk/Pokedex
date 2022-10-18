import { Component, Output, EventEmitter, Input } from '@angular/core';
import { listPokemons } from 'src/app/service/api/pokedex';
import { IPokemon } from 'src/models/pokemon';
import {uniqBy}from "lodash";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Pokedex';
  pokeList: IPokemon [] = [];
  @Input () name = "";


  ngOnInit() {
    this.getPokemons();
    
  }

  onConsole(value: any){
    console.log('value', value)
  }

  async getPokemons() {
    const response = await listPokemons();
    console.log('response', response)
    if (response.status === 200 )
    this.pokeList = uniqBy(response.data, "id");
    console.log('pokeList', this.pokeList);
  }

  
}
