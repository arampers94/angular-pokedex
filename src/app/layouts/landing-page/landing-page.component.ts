import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  pokemonName = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search(event?: KeyboardEvent): void {
    if (event && event.key !== "Enter") return;
    
    if (this.pokemonName === '') {
      alert('Input can not be blank');
    } else {
      this.pokemonName = this.pokemonName.trim().toLowerCase();
      this.router.navigate([`/pokemon-detail/${this.pokemonName}`]);
    }
  }
}
