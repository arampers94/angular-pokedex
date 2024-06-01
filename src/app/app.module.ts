import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './layouts/error-page/error-page.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { MainComponent } from './layouts/main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageModule } from './layouts/landing-page/landing-page.module';
import { PokemonDetailModule } from './pokemon-detail/pokemon-detail.module';
import { AppStoreModule } from './store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PokedexModule } from './pokedex/pokedex.module';

@NgModule({ declarations: [
        ErrorPageComponent,
        NavbarComponent,
        MainComponent
    ],
    bootstrap: [MainComponent], imports: [BrowserModule,
        AppRoutingModule,
        NgbModule,
        LandingPageModule,
        PokemonDetailModule,
        PokedexModule,
        AppStoreModule,
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() , connectInZone: true})], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
