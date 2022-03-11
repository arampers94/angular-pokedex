import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApexAxisChartSeries, ApexChart, ApexLegend, ApexPlotOptions, ApexTitleSubtitle, ApexTooltip, ApexXAxis } from 'ng-apexcharts';
import { Ability, Genus, Pokemon, PokemonSpecies, PokemonSpeciesDexEntry, VerboseEffect } from 'pokenode-ts';
import { forkJoin, Observable } from 'rxjs';
import { PokedexService } from '../shared/services/pokedex.service';

type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  tooltip: ApexTooltip;
  colors: string[];
}

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemon?: Pokemon;
  pokemonSpeciesData?: PokemonSpecies;
  chartOptions: Partial<ChartOptions>;
  stats: number[] = [];
  flavorText = '';
  genus?: Genus;
  entry?: PokemonSpeciesDexEntry;
  evolvesFrom = '';
  abilityDescriptions: VerboseEffect[] = [];

  constructor(private route: ActivatedRoute, protected pokedexService: PokedexService) {
    this.route.data.subscribe(data => {
      this.pokemon = data['pokemonDetail'];

      this.pokemon?.stats.forEach(stat => {
        this.stats.push(stat.base_stat);
      })
    });

    this.chartOptions = {
      series: [
        {
          name: 'Pokemon Stat Series',
          data: this.stats
        }
      ],
      chart: {
        height: 250,
        type: 'bar',
        toolbar: {
          show: false
        },
        offsetX: -10
      },
      title: {
        text: 'Base Stats',
        style: {
          color: '#fffafa',
          fontFamily: 'Roboto',
          fontSize: '16px',
          fontWeight: 'normal'
        }
      },
      xaxis: {
        categories: ['HP', 'Atk.', 'Def.', 'Sp. Atk.', 'Sp. Def.', 'Speed']
      },
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
          barHeight: '80%'
        }
      },
      legend: {
        labels: {
          colors: ['#fffafa']
        }
      },
      tooltip: {
        enabled: false
      },
      colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#81D4FA']
    }
   }

  ngOnInit(): void {
    this.pokedexService.getPokemonBySpeciesName(this.pokemon?.name!).subscribe(res => {
      let requests: Observable<Ability>[] = [];

      if (res) {
        this.pokemonSpeciesData = res;
        this.flavorText = this.pokemonSpeciesData.flavor_text_entries[2].flavor_text.replace('\f', ' ');
        this.genus = this.pokemonSpeciesData.genera.find(item => {
          return item.language.name === "en";
        });

        this.entry = this.pokemonSpeciesData.pokedex_numbers.find(item => {
          return item.pokedex.name === "national";
        });

        this.evolvesFrom = 'Evolves from ' + (this.pokemonSpeciesData.evolves_from_species !== null ? this.pokemonSpeciesData.evolves_from_species.name : 'nothing');
      }

      this.pokemon?.abilities.forEach(ability => {
        requests.push(this.pokedexService.getAbilityByName(ability.ability.name));
      });

      forkJoin(requests).subscribe(resp => {
        if (resp) {
          resp.forEach(ability => {
            let effect: VerboseEffect | undefined = ability.effect_entries.find(item => {
              return item.language.name === "en";
            });
            this.abilityDescriptions?.push(effect!)
          });
        }
      });
    });
  } 
}
