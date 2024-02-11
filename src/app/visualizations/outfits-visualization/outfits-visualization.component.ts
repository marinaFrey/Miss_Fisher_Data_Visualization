import { Component, OnInit } from '@angular/core';
import { VisualizationComponent } from '../visualization/visualization.component';
import { EpisodeService } from '../../episode.service';
import { TOTAL, PER_SEASON, PER_EPISODE, PER_NUMBER_OF_EPISODES, PER_PERCENTAGE_OF_EPISODES } from '../../constants';
import { parse } from 'querystring';
import { BarChart } from 'src/app/d3/bar-chart';
/* tslint:disable */
@Component({
  selector: 'app-outfits-visualization',
  templateUrl: './outfits-visualization.component.html',
  styleUrls: ['./outfits-visualization.component.css']
})
export class OutfitsVisualizationComponent extends VisualizationComponent implements OnInit {

  override parsedData!: any;
  selectAll = true;
  barChart!: BarChart;
  tiesInfo = [
    { name: "Striped Tie", color: "#a2a2a2ff", hightlight: "#7e7e7eff", isShowing: true },
    { name: "Rhombus Filled Tie", color: "#58609eff", hightlight: "#3f4787ff", isShowing: true },
    { name: "Diamond Striped Tie", color: "#2a3266ff", hightlight: "#13193cff", isShowing: true },
    { name: "Maroon Tie", color: "#5b1725ff", hightlight: "#3f0813ff", isShowing: true },
    { name: "Beige Tie", color: "#d2c9b3ff", hightlight: "#a69a7aff", isShowing: true },
    { name: "Diamond Tie", color: "#172050ff", hightlight: "#00072fff", isShowing: true },
    { name: "Black Bowtie", color: "#1e1e1eff", hightlight: "#000000ff", isShowing: true },
    { name: "Feathers Tie", color: "#1f1650ff", hightlight: "#080033ff", isShowing: true },
    { name: "Lined Tie", color: "#060027ff", hightlight: "#030015ff", isShowing: true },
    { name: "Gold Tie", color: "#f4cd56ff", hightlight: "#b8952dff", isShowing: true },
    { name: "Cozy Tie", color: "#b6988fff", hightlight: "#9b786eff", isShowing: true },
    { name: "Rather Nice Tie", color: "#18215eff", hightlight: "#11142cff", isShowing: true },
    { name: "Flowers Tie", color: "#254385ff", hightlight: "#172c5cff", isShowing: true },
    { name: "Seal Striped Tie", color: "#1b256bff", hightlight: "#060d3eff", isShowing: true },
    { name: "Brown Tie", color: "#3c1409ff", hightlight: "#190500ff", isShowing: true },
    { name: "Planet Tie", color: "#041349ff", hightlight: "#000721ff", isShowing: true }
  ];

  constructor(private episodeService: EpisodeService) {
    super('#outfitsViz');
  }

  override ngOnInit() {
    this.create();
  }

  create() {
    if (document.querySelector(this.svgName) != null) {
        this.barChart = new BarChart('#outfitsViz', 500, 310);
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
        let ties = this.parseTieData(this.episodes, this.seasonSelection);
        ties.sort((a, b) => b.value - a.value);
        this.barChart.createBarChart(ties, 'ties', 'Number of Times Worn', '', null);
        break;

      case PER_SEASON:

        break;

      case PER_EPISODE:
        this.parsedData = this.parseEpisodicData();
        this.barChart.createBarChartOfImages(this.parsedData, " time(s) worn");
        break;
    }
  }

  parseTieData(episodes: any, seasonSelection: any) {
    let data = [];
    for (let i = 0; i < episodes.length; i++) {
      if ((seasonSelection === 0) || (episodes[i].season === seasonSelection)) {
        data = this.parseTieCountData(data, episodes[i]);
      }
    }
    const parsedData = [];
    // tslint:disable-next-line:forin
    for (const tie in data) {
      if(this.tiesInfo?.find((tieInfo) => tieInfo.name == tie)?.isShowing == true)
      {
        parsedData.push({
          label: tie,
          value: data[tie],
          ties: tie,
          color: this.getInfo(tie, this.tiesInfo, 'color'),
          highlightColor: this.getInfo(tie, this.tiesInfo, 'hightlight')
        });
      }
      
    }

    return parsedData;
  }

  parseTieCountData(data: any, episode: any) {
    episode.neckties.forEach((tie: { label: string | number; }) => {
      if (!data[tie.label]) {
        data[tie.label] = 0;
      }
      data[tie.label] += 1;
    });

    return data;
  }


  getInfo(name: any, infoVector: any, info: any)
  {
    for (var i = 0; i < infoVector.length; i++)
    {
      if (infoVector[i].name == name)
        return infoVector[i][info];
    }
  }

  parseEpisodicData()
  {
    var data = [];
    var numberOfEpisodes = 0;
    for (var i = 0; i < this.episodes.length; i++)
    {
      if ((this.seasonSelection == 0) || (this.episodes[i].season == this.seasonSelection))
      {
        data = this.pushEpisodicCharacterData(data, i, numberOfEpisodes);
        numberOfEpisodes++;
      }
    }
    this.parsedData = data;
    return data;
  }

  pushEpisodicCharacterData(data: any, i: number, id: any)
  {
    data[id] = { name: this.episodes[i].name, column: [] };

    for (var j = 0; j < this.episodes[i].neckties.length; j++)
    {
      
      if (this.getInfo(this.episodes[i].neckties[j].label, this.tiesInfo, "isShowing") == true)
      {
        data[id].column[j] = {
          name: this.episodes[i].name,
          season: this.episodes[i].season,
          episode: this.episodes[i].episode,
          label: this.episodes[i].neckties[j].label,
          value: this.episodes[i].neckties[j].value,
          character: this.episodes[i].neckties[j].character,
          color: this.getInfo(this.episodes[i].neckties[j].label, this.tiesInfo, "color"),
          highlightColor: this.getInfo(this.episodes[i].neckties[j].label, this.tiesInfo, "hightlight", )
        }
      }

    }
    return data;
  }

}
