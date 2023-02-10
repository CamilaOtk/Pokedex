import { Component, Output, EventEmitter, Input } from '@angular/core';
import { listPokemons } from 'src/app/service/api/pokedex';
import { IPokemon } from 'src/models/pokemon';
import { uniqBy } from 'lodash';
import { HeaderComponent } from './Components/Header/header.components';
import { DetailsComponent } from './Components/details/details.components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Pokedex';
  pokeList: IPokemon[] = [];
  // @Input () name = "";
  // @Input () number = "";

  ngOnInit() {
    this.getPokemons();
  }

  onConsole(value: any) {
    console.log('value', value);
  }

  async getPokemons(search?: string) {
    const response = await listPokemons();
    if (response.status === 200)
      this.pokeList = uniqBy(
        response.data?.filter(
          (item) =>
            item.name
              .toLowerCase()
              .includes(search?.toLowerCase() || item.name.toLowerCase()) ||
            item.number.includes(search ?? item.number)
        ),
        'id'
      );
    // this.pokeList = uniqBy(response.data?.filter(item => item.number.toLowerCase().includes(search?.toLowerCase() || item.number.toLowerCase())), "id");
  }

  // @Output() onGetPokemons: EventEmitter<any> = new EventEmitter<any>();

  onClickItem(event: any): void {
    console.log('passou aqui', event);
    // this.onGetPokemons.emit({DetailsComponent});
  }
}
