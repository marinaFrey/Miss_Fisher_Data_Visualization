import { Component, OnInit, Input } from '@angular/core';
import { VisualizationComponent } from '../visualization/visualization.component';
import { EpisodeService } from '../../episode.service';
import { TOTAL, PER_SEASON, PER_EPISODE, PER_NUMBER_OF_EPISODES, PER_PERCENTAGE_OF_EPISODES } from "../../constants";

@Component({
  selector: 'app-indulging-visualization',
  templateUrl: './indulging-visualization.component.html',
  styleUrls: ['./indulging-visualization.component.css']
})
export class IndulgingVisualizationComponent extends VisualizationComponent implements OnInit {

  parsedData;

  charactersInfo = [
    {
      name: "Jack", infos: [
        { name: "Jack", label: "Screen time with Jack in Phryne's Home", color: "#4b76e4ff", hightlight: "#3b62c7ff", isShowing: true }/*,
        { name: "Jack", label: "Total number of scenes in Phryne's Home", color: "grey", hightlight: "black", isShowing: true }*/
      ]
    },
    {
      name: "Phryne", infos: [
        { name: "Phryne", label: "scenes with Phryne in Jack's police station", color: "#7c3842ff", hightlight: "#60252eff", isShowing: true },
        { name: "Phryne", label: "scenes with Phryne in Jack's office", color: "#b74d5cff", hightlight: "#9f4552ff", isShowing: true },
        { name: "Phryne", label: "scenes with Phryne in Jack's table", color: "#e25b6fff", hightlight: "#c14b5dff", isShowing: true }/*,
        { name: "Phryne", label: "Total number of scenes in Jack's police station", color: "grey", hightlight: "black", isShowing: true }*/
      ]
    }

  ];

  constructor(private episodeService: EpisodeService) {
    super("#indulgeViz", 500, 300);
  }

  ngOnInit() {
    this.create();
  }

  create() {
    var pointer = this;
    if (document.querySelector(this.svgName) != null) {
      this.setSvg();
      if (this.episodes)
        this.createVisualization();
    }
    else {
      setTimeout(function () {
        pointer.create();
      }, 50);
    }

  }

  createVisualization() {

    switch (this.graphTypeSelection) {
      case TOTAL:
        this.parsedData = this.episodeService.parseTotalData(this.episodes, this.charactersInfo, ['jackInPhrynesHome','phryneInPoliceStation'], "label", function (value) { return value; }, null, this.seasonSelection);
        this.parsedData = this.episodeService.reorderData(this.parsedData, this.charactersInfo);
        this.createGroupedStackedBarChart(this.parsedData, "Visiting", " appearance(s)");
        break;

      case PER_SEASON:
        this.parsedData = this.episodeService.parseSeasonData(this.episodes, this.charactersInfo, ['jackInPhrynesHome','phryneInPoliceStation'], "label", function (value) { return value; }, null, this.graphDataTypeSelection);
        this.parsedData = this.episodeService.reorderData(this.parsedData, this.charactersInfo);
        if (this.graphDataTypeSelection == PER_NUMBER_OF_EPISODES)
          this.createGroupedStackedBarChart(this.parsedData, "Visiting", " appearance(s)");
        else
          this.createGroupedStackedBarChart(this.parsedData, "Visiting", " appearance(s) per episode");
        break;

      case PER_EPISODE:
        this.parsedData = this.episodeService.parseEpisodicData(this.episodes, this.seasonSelection, this.charactersInfo, ['jackInPhrynesHome','phryneInPoliceStation'], "label", function (value) { return value; }, null, "stacked");
        this.parsedData = this.episodeService.reorderData(this.parsedData, this.charactersInfo);
        
        this.createGroupedStackedBarChart(this.parsedData, "Visiting", " appearance(s)");
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

}
