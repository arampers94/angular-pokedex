import { Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { 
  ApexAxisChartSeries, 
  ApexChart, 
  ApexLegend, 
  ApexPlotOptions, 
  ApexTitleSubtitle, 
  ApexTooltip, 
  ApexXAxis,
} from 'ng-apexcharts';
import { Pokemon, PokemonSpecies, Type } from 'pokenode-ts';
import { NOTHING } from '../app.constants';
import { Move } from '../shared/models/move.model';
import { PokemonDetail } from '../shared/models/pokemon-detail.model';
import { PokedexService } from '../shared/services/pokedex.service';
import { Actions } from '@ngrx/effects';
import { Observable, Subject, combineLatest, map, merge, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { PokemonActions, PokemonSelectors } from '../store/pokemon';

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

class DamageTaken {
  name: string;
  multiplier: number;

  constructor(name: string, multiplier: number) {
    this.name = name;
    this.multiplier = multiplier;
  }
}

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit, OnDestroy {
  pokemonDetail = new PokemonDetail();
  chartOptions: Partial<ChartOptions>;
  NOTHING = NOTHING;
  noAbilityInfo = 'No information currently available for this ability.';
  moveData = new Move();
  public pokemon$: Observable<Pokemon | null> = of(null)
  public pokemonLoading$: Observable<boolean>;
  public pokemonSpecies$: Observable<PokemonSpecies | null> = of(null);
  public pokemonSpeciesLoading$: Observable<boolean>;
  public pokemonDetail$?: Observable<any>;

  private destroyed$ = new Subject<boolean>;

  constructor(
    private route: ActivatedRoute, 
    protected pokedexService: PokedexService, 
    private modalService: NgbModal,
    private actions$: Actions,
    private store$: Store,
    ) {
    this.route.data.subscribe(data => {
      this.pokemonDetail = data['pokemonDetail'];
      // TODO - erase console log
      // console.log(data['pokemonDetail'])
      
    });

    this.route.params.subscribe(params => {
      const pokemonName = params['pokemonName'];

      this.store$.dispatch(
        PokemonActions.getPokemon({ pokemonName })
      );

      this.store$.dispatch(
        PokemonActions.getPokemonSpecies({ pokemonName })
      );
    });

    this.chartOptions = this.createChartOptions();

    this.pokemonLoading$ =
      this.store$.select(
        PokemonSelectors.selectGetPokemonLoading
      );

    this.pokemonSpeciesLoading$ = 
      this.store$.select(
        PokemonSelectors.selectGetPokemonSpeciesLoading
      );
    
    this.pokemon$ = this.store$.select(PokemonSelectors.selectPokemon);
    this.pokemonSpecies$ = this.store$.select(PokemonSelectors.selectPokemonSpecies)
  }

  ngOnInit(): void { 
    combineLatest([this.pokemon$, this.pokemonSpecies$])
    .pipe(
      map(([pokemon, pokemonSpecies]) => {
        this.pokemonDetail.flavorText = pokemonSpecies?.flavor_text_entries.find(item => { return item.language.name === "en" })?.flavor_text.replace('\f', ' ');
        this.pokemonDetail.genus = pokemonSpecies?.genera.find(item => { return item.language.name === "en" });
        this.pokemonDetail.entryNumber = pokemonSpecies?.pokedex_numbers.find(item => item.pokedex.name === "national")?.entry_number;
        this.pokemonDetail.evolvesFrom = pokemonSpecies?.evolves_from_species !== null ? pokemonSpecies?.evolves_from_species.name : 'nothing';
      })
    )
  }

  calculateDamageTaken(types: Type[] | null): DamageTaken[] {
    let result: DamageTaken[] = [];
    let finalResult: DamageTaken[] = [];
    
    if (types) {
      types.forEach(type => {
        type.damage_relations.double_damage_from.forEach(damageType => {
          let indexOfDuplicate = result.findIndex(d => { return d.name === damageType.name })
          if (indexOfDuplicate !== -1) {
            result[indexOfDuplicate].multiplier *= 2;
          } else {
            result.push(new DamageTaken(damageType.name, 2));
          }
        });

        type.damage_relations.half_damage_from.forEach(damageType => {
          let indexOfDuplicate = result.findIndex(d => { return d.name === damageType.name })
          if (indexOfDuplicate !== -1) {
            result[indexOfDuplicate].multiplier /= 2;
          } else {
            result.push(new DamageTaken(damageType.name, 0.5));
          }
        })

        if (type.damage_relations.no_damage_from.length > 0) {
          type.damage_relations.no_damage_from.forEach(damageType => {
            result.push(new DamageTaken(damageType.name, 0))
          })
        }
      });
    }

    finalResult = 
      result.filter(d =>  d.multiplier !== 1 )
      .sort((a, b) => {
        if (a.multiplier > b.multiplier) {
          return -1;
        } else if (a.multiplier < b.multiplier) {
          return 1;
        }

        return 0;
      });

    return finalResult;
  }

  fetchMoveData(moveName: string): void {
    if (moveName !== this.moveData.name) {
      this.pokedexService.getMoveByName(moveName).subscribe(data => {
        this.moveData = data;
      })
    }
  }

  formatName(move: string): string {
    let moveArray = move.replace('-', ' ').split(" ");

    for (let i = 0; i < moveArray.length; i++) {
      moveArray[i] = moveArray[i][0].toUpperCase() + moveArray[i].substring(1);
    }

    return moveArray.join(" ");
  }

  showMoveListModal(content: any): void {
    this.modalService.open(content, { centered: true, scrollable: true })
  }

  createChartOptions(): ChartOptions {
    return this.chartOptions = {
      series: [
        {
          name: 'Pokemon Stat Series',
          data: this.pokemonDetail.stats!
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
          color: 'rgba(255, 255, 255, 0.8)',
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
          colors: ['rgba(255, 255, 255, 0.8)']
        }
      },
      tooltip: {
        enabled: false
      },
      colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#81D4FA']
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
