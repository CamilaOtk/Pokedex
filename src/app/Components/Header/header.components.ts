import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.components.html',
  styleUrls: ['./header.components.css']
})
export class HeaderComponent{
  inputText: string = '';
  @Output() image = '';

  // @Output() onSerachPokemon: EventEmitter<string> = new EventEmitter<string>(); 

  // onInput(event: any): void {
  //   this.inputText = event.target.value;
  // }

  // onPress(event: any): void {
  //   // if ('13'.includes((event.which || event.keyCode).toString()))
  //     // this.setItemInLocalStorage(this.inputText);
  // }




}

