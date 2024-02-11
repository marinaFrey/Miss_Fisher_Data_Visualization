import { Component, OnInit, Input } from '@angular/core';
import { VisualizationComponent } from '../visualization/visualization.component';
import { EpisodeService } from '../../episode.service';
import { TOTAL, PER_SEASON, PER_EPISODE, PER_NUMBER_OF_EPISODES, PER_PERCENTAGE_OF_EPISODES } from '../../constants';
import { BarChart } from 'src/app/d3/bar-chart';
/* tslint:disable */
@Component({
  selector: 'app-name-calling-visualization',
  templateUrl: './name-calling-visualization.component.html',
  styleUrls: ['./name-calling-visualization.component.css']
})
export class NameCallingVisualizationComponent extends VisualizationComponent implements OnInit {

  selectAll = true;
  barChart!: BarChart;
  charactersInfo = [
    {
      name: "Jack", infos: [
        { name: "Jack", label: "Jack says '(Miss) Phryne Fisher'", color: "#163075ff", hightlight: "#102252ff", isShowing: true },
        { name: "Jack", label: "Jack says 'Miss Fisher'", color: "#3553a0ff", hightlight: "#284284ff", isShowing: true },
        { name: "Jack", label: "Jack says 'Phryne'", color: "#4b76e4ff", hightlight: "#3b62c7ff", isShowing: true }
      ]
    },
    {
      name: "Phryne", infos: [
        { name: "Phryne", label: "Phryne says 'Detective Inspector Jack Robinson'", color: "#4e252bff", hightlight: "#42171eff", isShowing: true },
        { name: "Phryne", label: "Phryne says 'Inspector (Jack) (Robinson)'", color: "#7c3842ff", hightlight: "#60252eff", isShowing: true },
        { name: "Phryne", label: "Phryne says 'Jack Robinson'", color: "#b74d5cff", hightlight: "#9f4552ff", isShowing: true },
        { name: "Phryne", label: "Phryne says 'Jack'", color: "#e25b6fff", hightlight: "#c14b5dff", isShowing: true }
      ]
    }
  ];

  constructor(private episodeService: EpisodeService) {
    super("#nameCallingViz");
  }

  override ngOnInit() {
    this.create();
  }

  create() {
    if (document.querySelector(this.svgName) != null) {
      this.barChart = new BarChart('#nameCallingViz', 500, 300);
      if (this.episodes)
        this.createVisualization();
    }
    else
    {
      setTimeout(() => this.create(), 50);
    }

  }

  createVisualization() {

    switch (this.graphTypeSelection) {
      case TOTAL:
        this.parsedData = this.episodeService.parseTotalData(this.episodes, this.charactersInfo, ['nameCalling'], "label", function (value: any) { return value; }, null, this.seasonSelection);
        this.parsedData = this.episodeService.reorderData(this.parsedData, this.charactersInfo);
        this.barChart.createGroupedStackedBarChart(this.parsedData, "Calling", " appearance(s)");
        break;

      case PER_SEASON:
        this.parsedData = this.episodeService.parseSeasonData(this.episodes,this.charactersInfo, ['nameCalling'], "label", function(value :any){return value;}, null, this.graphDataTypeSelection);
        this.parsedData = this.episodeService.reorderData(this.parsedData,this.charactersInfo);
        if (this.graphDataTypeSelection == PER_NUMBER_OF_EPISODES)
          this.barChart.createGroupedStackedBarChart(this.parsedData, "Calling", " appearance(s)");
        else
          this.barChart.createGroupedStackedBarChart(this.parsedData, "Calling", " appearance(s) per episode");
        break;

      case PER_EPISODE:
        this.parsedData = this.episodeService.parseEpisodicData(this.episodes, this.seasonSelection, this.charactersInfo, ['nameCalling'], "label", function(value: any){return value;}, null, "stacked");
        this.parsedData = this.episodeService.reorderData(this.parsedData,this.charactersInfo);
        this.barChart.createGroupedStackedBarChart(this.parsedData, "Calling", " appearance(s)");
        break;
    }
  }

  changeFilterSelection() {
    for (var i = 0; i < this.charactersInfo.length; i++) {
      for (var j = 0; j < this.charactersInfo[i].infos.length; j++)
        this.charactersInfo[i].infos[j].isShowing = this.selectAll;
    }
    this.createVisualization();
  }

  reorderData() {
    var pointer = this;
    var result : any[] = [];
    for (var i = 0; i < this.parsedData.length; i++) {
      for (var j = 0; j < this.parsedData[i].characters.length; j++) {
        var result = [];
        var index = this.charactersInfo.map(function (e) { return e.name; }).indexOf(this.parsedData[i].characters[j].name);
        this.charactersInfo[index].infos.forEach(function (item) {
          pointer.parsedData[i].characters[j].infos.forEach(function (character :any) {
            if (item.label == character.label)
              result.push(character);
          })
        })
        pointer.parsedData[i].characters[j].infos = result;
      }
    }
  }

}
