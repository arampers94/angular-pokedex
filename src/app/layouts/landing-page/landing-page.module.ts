import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class LandingPageModule { }
