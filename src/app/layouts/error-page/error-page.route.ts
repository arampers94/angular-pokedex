import { Routes } from "@angular/router";
import { ErrorPageComponent } from "./error-page.component";

export const errorRoute: Routes = [
    {
        path: '404',
        component: ErrorPageComponent,
        data: {
            pageTitle: 'Not found',
            errorMessage: 'We can\'t find that pokemon. Make sure you typed the name correctly.'
        }
    },
    {
        path: '**',
        redirectTo: '/404'
    }
]