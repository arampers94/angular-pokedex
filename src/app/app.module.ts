import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './layouts/landing-page/landing-page.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { ErrorPageComponent } from './layouts/error-page/error-page.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { MainComponent } from './layouts/main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { LandingPageModule } from './layouts/landing-page/landing-page.module';

@NgModule({
  declarations: [
    PokemonListComponent,
    ErrorPageComponent,
    NavbarComponent,
    MainComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LandingPageModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
