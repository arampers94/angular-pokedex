import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApexAxisChartSeries, ApexChart, ApexLegend, ApexPlotOptions, ApexTitleSubtitle, ApexTooltip, ApexXAxis } from 'ng-apexcharts';
import { PokemonDetail } from '../shared/models/pokemon-detail.model';
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
  pokemonDetail = new PokemonDetail();
  chartOptions: Partial<ChartOptions>;

  constructor(private route: ActivatedRoute, protected pokedexService: PokedexService) {
    this.route.data.subscribe(data => {
      this.pokemonDetail = data['pokemonDetail'];
      console.log(this.pokemonDetail.pokemon?.name)
    });

    this.chartOptions = {
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
   
  }
}
