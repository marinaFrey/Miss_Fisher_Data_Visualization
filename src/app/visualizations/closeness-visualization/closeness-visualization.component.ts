import { Component, OnInit, Input } from '@angular/core';
import { VisualizationComponent } from '../visualization/visualization.component';
import { EpisodeService } from '../../episode.service';
import { TOTAL, PER_SEASON, PER_EPISODE, PER_NUMBER_OF_EPISODES, PER_PERCENTAGE_OF_EPISODES } from "../../constants";
import { BarChart } from '../../d3/bar-chart';

@Component({
  selector: 'app-closeness-visualization',
  templateUrl: './closeness-visualization.component.html',
  styleUrls: ['./closeness-visualization.component.css']
})
export class ClosenessVisualizationComponent extends VisualizationComponent implements OnInit {

  parsedBarChartData: any;
  parsedLineChartData: any;
  barChart!: BarChart;
  talkingInfo = [
    {
      name: "Phryne & Jack", infos: [
        { name: "Phryne & Jack", label: "Screen time with Phryne and Jack on the same scene (not 'alone')", color: "#44345E", hightlight: "#342342", isShowing: true },
        { name: "Phryne & Jack", label: "Screen time with Phryne and Jack 'alone'", color: "#9D67A4", hightlight: "#785897", isShowing: true }
      ]
    }
  ];

  closenessInfo = [
    {
      name: "Phryne & Jack", infos: [
        { name: "Phryne & Jack", label: "Standing very close", color: "#9e5b60ff", hightlight: "#6d3a3dff", isShowing: true },
        { name: "Phryne & Jack", label: "Long eye contact", color: "#f8b76eff", hightlight: "#c68f52ff", isShowing: true },
        { name: "Phryne & Jack", label: "Touching", color: "#f27f66ff", hightlight: "#bb6a58ff", isShowing: true }
      ]
    }
  ];

  constructor(private episodeService: EpisodeService) {
    super('#closenessViz');
  }

  override ngOnInit() {
    super.ngOnInit();
    this.barChart = new BarChart(this.svgName, 500, 300);
    this.createVisualization();
  }

  createVisualization() {

    switch (this.graphTypeSelection) {
      case TOTAL:
        this.parsedBarChartData = this.episodeService.parseTotalData(this.episodes, this.closenessInfo, ['proximity'], "label", function (value: any) { return value; }, null, this.seasonSelection);
        this.parsedBarChartData = this.episodeService.reorderData(this.parsedBarChartData, this.closenessInfo);
        this.barChart.createGroupedStackedBarChart(this.parsedBarChartData, null, " appearance(s)");
        //const barChart = new BarChart('#closenessViz', 500, 300);
        //barChart.createGroupedStackedBarChart(this.parsedBarChartData, null, " appearance(s)");
        break;

      case PER_SEASON:
        this.parsedBarChartData = this.episodeService.parseSeasonData(this.episodes, this.closenessInfo, ['proximity'], "label", function (value: any) { return value; }, null, this.graphDataTypeSelection);
        this.parsedBarChartData = this.episodeService.reorderData(this.parsedBarChartData, this.closenessInfo);
        if (this.graphDataTypeSelection == PER_NUMBER_OF_EPISODES)
          this.barChart.createGroupedStackedBarChart(this.parsedBarChartData, null, " appearance(s)");
        else
          this.barChart.createGroupedStackedBarChart(this.parsedBarChartData, null, " appearance(s) per episode");
        break;

      case PER_EPISODE:
        this.parsedBarChartData = this.episodeService.parseEpisodicData(this.episodes, this.seasonSelection, this.closenessInfo, ['proximity'], "label", function (value: any) { return value; }, null, "stacked");
        this.parsedBarChartData = this.episodeService.reorderData(this.parsedBarChartData, this.closenessInfo);
        //this.parsedBarChartData = this.episodeService.reorderData(this.parsedBarChartData,this.talkingInfo);
        //this.createGroupedStackedBarChart(this.parsedBarChartData, null, "%");
        //this.createOverlappingLineChart(this.parsedLineChartData);
        this.barChart.createGroupedStackedBarChart(this.parsedBarChartData, null, "%");
        break;

    }

  }

  calculateByPercentageOfEpisode(value: number, extraInfo: string | number, episode: { [x: string]: number; }) {
    if (episode[extraInfo])
      return Math.round((value * 100) / episode[extraInfo]);
    else return 0;
  }
  /*
    parseEpisodicData() {
      var data = [];
      var lineData = [];
      var numberOfEpisodes = 0;
      for (var i = 0; i < this.episodes.length; i++) {
        if ((this.seasonSelection == 0) || (this.episodes[i].season == this.seasonSelection)) {
          data = this.episodeService.parseEpisodicCharacterData(data, numberOfEpisodes, this.episodes[i], this.closenessInfo, ['proximity'], "label", function(value){return value;}, null, "stacked");
          //data = this.episodeService.parseEpisodicCharacterData(data, numberOfEpisodes, this.episodes[i], this.talkingInfo, ['talking'], "label", this.calculateValue, 'totalNumberOfScenes', "stacked");
          //lineData = this.episodeService.parseEpisodicCharacterData(lineData, numberOfEpisodes, this.episodes[i], this.closenessInfo, ['proximity'], "label", function(value){return value;}, null, "bar"); 
          numberOfEpisodes++;
        }
      }
      this.parsedBarChartData = data;
      //lineData = this.episodeService.parseLineData(lineData);
      this.parsedLineChartData = lineData;
      console.log("bar chart data", this.parsedBarChartData,"line chart data", this.parsedLineChartData);
    }*/


}
