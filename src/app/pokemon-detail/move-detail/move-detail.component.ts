import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Move } from 'src/app/shared/models/move.model';
import { PokemonDetail } from 'src/app/shared/models/pokemon-detail.model';
import { PokedexService } from 'src/app/shared/services/pokedex.service';

@Component({
  selector: 'app-move-detail',
  templateUrl: './move-detail.component.html',
  styleUrls: ['./move-detail.component.scss']
})
export class MoveDetailComponent implements OnInit, OnChanges {
  @Input() moveName: string = '';
  @Input() pokemonDetail: PokemonDetail = new PokemonDetail();
  @Input() moveData = new Move
  moveDescription? = '';
  moveShortEffect? = '';

  constructor(protected pokedexService: PokedexService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      if (changes && changes['moveData']) {
        this.moveDescription = this.moveData.flavor_text_entries?.find(item => { return item.language.name === "en" })?.flavor_text;
        this.moveShortEffect = this.moveData.effect_entries?.find(effect => { return effect.language.name === "en" })?.short_effect;
        let effectChance = this.moveData.effect_chance?.toString();
        this.moveShortEffect = this.moveShortEffect?.replace('$effect_chance', effectChance ? effectChance : '');
      }
  }
}
