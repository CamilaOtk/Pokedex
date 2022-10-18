import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventosComponent } from './Components/Eventos/eventos.components';
import { HeaderComponent } from './Components/Header/header.components';

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
