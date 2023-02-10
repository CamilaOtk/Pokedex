import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.components.html',
  styleUrls: ['./header.components.css'],
})
export class HeaderComponent {
  inputText: string = '';
  // pokeList: IPokemon [] = [];
  // @Output() pokemon = '';

  @Output() onSearchPokemon: EventEmitter<any> = new EventEmitter<any>();

  onInput(event: any): void {
    this.inputText = event.target.value;
    this.onSearchPokemon.emit(event?.target?.value);
  }

  onPress(event: any): void {
    console.log('event', event)
    // if ('13'.includes((event.which || event.keyCode).toString())) {
      // this.setItemInLocalStorage(event?.target?.value);
      
      this.onSearchPokemon.emit(event?.target?.value);
    // }
  }

  async setItemInLocalStorage(header: string) {
    await this.onSearchPokemon.emit({ header: header });
  }

  onClick(event: any) : void{
    this.onSearchPokemon.emit({HeaderComponent});
    console.log("Ta beleza")
  }

}
