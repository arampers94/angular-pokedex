import { NgModule, isDevMode } from '@angular/core';
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
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';

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
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
