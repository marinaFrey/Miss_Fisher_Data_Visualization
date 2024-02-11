import { Component, OnInit, Input } from '@angular/core';
import { VisualizationComponent } from '../visualization/visualization.component';
import { EpisodeService } from '../../episode.service';
import { TOTAL, PER_SEASON, PER_EPISODE, PER_NUMBER_OF_EPISODES, PER_PERCENTAGE_OF_EPISODES } from '../../constants';
import { BarChart } from 'src/app/d3/bar-chart';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent extends VisualizationComponent implements OnInit
{

  @Input() title!: string;
  @Input() override svgName!: string;
  @Input() parsingInfo: any;
  @Input() variables!: string[];

  @Input() valueCalculationExtraParameter: any = null;
  @Input() width: number = 500;
  @Input() height: number = 300;
  @Input() label: string = 'label';
  @Input() imageName: string = '';
  @Input() tooltipLabel: string = ' appearance(s)';

  barChart!: BarChart;

  constructor(private episodeService: EpisodeService)
  {
    super();
  }

  override ngOnInit(): void
  {
    this.create();
  }

  create()
  {
    if (document.querySelector('#'+this.svgName) != null)
    {
      this.barChart = new BarChart('#'+this.svgName, this.width, this.height);
      
      if (this.episodes)
        this.createVisualization();
    }
    else
    {
      setTimeout(() => this.create(), 50);
    }
  }

  createVisualization()
  {
    switch (this.graphTypeSelection)
    {
      case TOTAL:
        this.parsedData = this.episodeService.parseTotalData(this.episodes, this.parsingInfo, this.variables, this.label, this.getValueCalculationFunction(), this.valueCalculationExtraParameter, this.seasonSelection);
        this.parsedData = this.episodeService.reorderData(this.parsedData, this.parsingInfo);
        this.barChart.createGroupedStackedBarChart(this.parsedData, this.imageName.length ? this.imageName : null, this.tooltipLabel);
        break;

      case PER_SEASON:
        this.parsedData = this.episodeService.parseSeasonData(this.episodes, this.parsingInfo, this.variables, this.label, this.getValueCalculationFunction(), this.valueCalculationExtraParameter, this.graphDataTypeSelection);
        this.parsedData = this.episodeService.reorderData(this.parsedData, this.parsingInfo);
        if (this.graphDataTypeSelection == PER_NUMBER_OF_EPISODES)
          this.barChart.createGroupedStackedBarChart(this.parsedData, this.imageName.length ? this.imageName : null, this.tooltipLabel);
        else
          this.barChart.createGroupedStackedBarChart(this.parsedData, this.imageName.length ? this.imageName : null, this.tooltipLabel + ' per episode');
        break;

      case PER_EPISODE:
        this.parsedData = this.episodeService.parseEpisodicData(this.episodes, this.seasonSelection, this.parsingInfo, this.variables, this.label, this.getValueCalculationFunction(), this.valueCalculationExtraParameter, "stacked");
        this.parsedData = this.episodeService.reorderData(this.parsedData, this.parsingInfo);
        this.barChart.createGroupedStackedBarChart(this.parsedData, this.imageName.length ? this.imageName : null, this.tooltipLabel);
        break;
    }
  }

  getValueCalculationFunction()
  {
    if (this.valueCalculationExtraParameter === 'totalNumberOfScenes')
    {
      return this.calculatePercentageOfScenes;
    }
    else
    {
      return (value: any) => value;
    }
  }

  calculatePercentageOfScenes(value: number, extraInfo: string | number, episode: { [x: string]: number; })
  {
    if (episode[extraInfo]) 
    {
      return Math.round((value * 100) / episode[extraInfo]);
    }
    else return 0;
  }

}
