import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PokemonListComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
