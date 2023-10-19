import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './layouts/error-page/error-page.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { MainComponent } from './layouts/main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageModule } from './layouts/landing-page/landing-page.module';
import { PokemonDetailModule } from './pokemon-detail/pokemon-detail.module';
import { PokemonListModule } from './pokemon-list/pokemon-list.module';
import { AppStoreModule } from './store.module';

@NgModule({
  declarations: [
    ErrorPageComponent,
    NavbarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LandingPageModule,
    PokemonDetailModule,
    PokemonListModule,
    AppStoreModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
