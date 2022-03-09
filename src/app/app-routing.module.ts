import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { errorRoute } from './layouts/error-page/error-page.route';
import { LandingPageComponent } from './layouts/landing-page/landing-page.component';
import { navbarRoute } from './layouts/navbar/navbar.route';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

const LAYOUT_ROUTES = [navbarRoute, ...errorRoute]

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LandingPageComponent
  },
  {
    path: 'pokedex',
    component: PokemonListComponent
  },
  {
    path: 'pokemon-detail',
    loadChildren: () => import('./pokemon-detail/pokemon-detail.module').then(m => m.PokemonDetailModule)
  },
  ...LAYOUT_ROUTES
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
