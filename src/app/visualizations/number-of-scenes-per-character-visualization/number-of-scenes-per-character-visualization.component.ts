import { Component, OnInit, Input } from '@angular/core';
import { VisualizationComponent } from '../visualization/visualization.component';
import { EpisodeService } from '../../episode.service';
import { TOTAL, PER_SEASON, PER_EPISODE, LINE_CHART, BAR_CHART } from '../../constants';
/* tslint:disable */
import { BarChart } from 'src/app/d3/bar-chart';
import { LineChart } from 'src/app/d3/line-chart';
declare var $: any;

@Component({
  selector: 'app-number-of-scenes-per-character-visualization',
  templateUrl: './number-of-scenes-per-character-visualization.component.html',
  styleUrls: ['./number-of-scenes-per-character-visualization.component.css']
})
export class NumberOfScenesPerCharacterVisualizationComponent extends VisualizationComponent implements OnInit {

  barChart!: BarChart;
  lineChart!: LineChart;
  charactersInfo: any[] = [
    { name: "Phryne", color: "#e25b6fff", hightlight: "#be495aff", isShowing: true },
    { name: "Jack", color: "#4b76e4ff", hightlight: "#415a9eff", isShowing: true },
    { name: "Dot", color: "#f8b76eff", hightlight: "#c68f52ff", isShowing: true },
    { name: "Hugh", color: "#67c5deff", hightlight: "#4b9bb0ff", isShowing: true },
    { name: "Cec and Bert", color: "#86817eff", hightlight: "#685950ff", isShowing: true },
    { name: "Mr Butler", color: "#cda5ffff", hightlight: "#9a7cc1ff", isShowing: true },
    { name: "Aunt Prudence", color: "#51e6b2ff", hightlight: "#50ac8cff", isShowing: true },
    { name: "Jane", color: "#ff84bfff", hightlight: "#c46090ff", isShowing: true },
    { name: "Mac", color: "#f27f66ff", hightlight: "#bb6a58ff", isShowing: true },
    { name: "Hispano Suiza", color: "#9e5b60ff", hightlight: "#6d3a3dff", isShowing: true }
  ];

  constructor(private episodeService: EpisodeService) {
    super("#viz");
  }

  override ngOnInit() {
    this.create();
  }

  create() {
    if (document.querySelector(this.svgName) != null) {
      this.barChart = new BarChart('#viz', 500, 300);
      this.lineChart = new LineChart('#viz', 500, 300);
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
        this.parseTotalData();
        this.reorderData();
        this.barChart.createBarChart(this.parsedData, 'character', 'Percentage of appearances', '%', 100);
        break;

      case PER_SEASON:
        this.parseSeasonData();
        this.reorderData();
        if (this.graphStyleSelection == BAR_CHART)
          this.barChart.createGroupedBarChart(this.parsedData);
        if (this.graphStyleSelection == LINE_CHART) {
          this.parseLineData();
          this.lineChart.createLineChart(this.parsedData, false);
        }
        break;

      case PER_EPISODE:
        this.parseEpisodicData();
        this.reorderData();
        if (this.graphStyleSelection == BAR_CHART)
          this.barChart.createGroupedBarChart(this.parsedData);
        if (this.graphStyleSelection == LINE_CHART) {
          this.parsedData = this.episodeService.parseLineData(this.parsedData);
          this.episodeService.reorderData(this.parsedData, this.charactersInfo);
          this.lineChart.createLineChart(this.parsedData, false);
        }
        break;

    }

  }

  exportImage()
  {
    console.log("exporting image");
  }

  reorderData() {
    if(this.parsedData.length == 0)
      return;
    var pointer = this;
    var result: any[] = [];
    if (!this.parsedData[0].characters) {
      this.charactersInfo.forEach(function (key) {
        pointer.parsedData.forEach(function (character : any) {
          if (key.name == character.character)
            result.push(character);
        })
      })
      this.parsedData = result;
    }
    else {
      
      for (var i = 0; i < this.parsedData.length; i++) {
        var result = [];
        this.charactersInfo.forEach(function (key) {    
          pointer.parsedData[i].characters.forEach(function (character: any) {
            if (key.name == character.character)
              result.push(character);
          })
        })
        this.parsedData[i].characters = result;
      }
    }
  }

  parseTotalData() {
    var data = [];
    var numberOfEpisodes = 0;
    for (var i = 0; i < this.episodes.length; i++) {
      if ((this.seasonSelection == 0) || (this.episodes[i].season == this.seasonSelection)) {
        data = this.pushTotalCharacterData(data, i);
        numberOfEpisodes++;
      }
    }

    var parsedData: any[] = [];
    data.forEach(function (item: any) {
      item.value = Math.round(item.value);
      parsedData.push(item);
    });

    for (var j = 0; j < parsedData.length; j++) {
      parsedData[j].value = parsedData[j].value / numberOfEpisodes;
    }
    this.parsedData = parsedData;

  }

  parseSeasonData() {
    var data = [];
    var numberOfEpisodesPerSeason = [];
    for (var i = 0; i < this.episodes.length; i++) {
      data = this.pushSeasonCharacterData(data, i);
      if (!numberOfEpisodesPerSeason[this.episodes[i].season - 1])
        numberOfEpisodesPerSeason[this.episodes[i].season - 1] = 0;
      numberOfEpisodesPerSeason[this.episodes[i].season - 1]++;
    }

    var parsedData : any[] = [];
    for (var j = 0; j < data.length; j++) {
      parsedData[j] = { name: data[j].name, characters: [] };
      parsedData[j].characters = [];
      data[j].characters.forEach(function (item : any) {
        parsedData[j]['characters'].push(item);
      });
    }

    for (var j = 0; j < parsedData.length; j++) {
      for (var k = 0; k < parsedData[j].characters.length; k++) {
        parsedData[j].characters[k].value = parsedData[j].characters[k].value / numberOfEpisodesPerSeason[j];
      }
    }
    this.parsedData = parsedData;
  }

  parseEpisodicData() {
    var data = [];
    var numberOfEpisodes = 0;
    for (var i = 0; i < this.episodes.length; i++) {
      if ((this.seasonSelection == 0) || (this.episodes[i].season == this.seasonSelection)) {
        data = this.pushEpisodicCharacterData(data, i, numberOfEpisodes);
        //data = this.episodeService.parseEpisodicCharacterData(data, numberOfEpisodes, this.episodes[i], this.charactersInfo, ['scenesPerCharacter'], "name", this.calculateValue, "totalNumberOfScenes", "bar");
        numberOfEpisodes++;
      }
    }

    var parsedData: any[] = [];
    for (var j = 0; j < data.length; j++) {
      parsedData[j] = { name: data[j].name, characters: [] };
      parsedData[j].characters = [];
      data[j].characters.forEach(function (item: any) {

        parsedData[j]['characters'].push(item);
      });
    }

    this.parsedData = parsedData;
  }

  parseLineData() {
    var parsedData : any[] = [];
    for (var j = 0; j < this.parsedData.length; j++) {
      this.parsedData[j].characters.forEach(function (item: any, index: any) {
        if (!parsedData[index])
          parsedData[index] = { character: item.character, color: item.color, highlightColor: item.highlightColor, episodes: [] };
        parsedData[index]['episodes'].push({
          name: item.name,
          season: item.season,
          episode: item.episode,
          value: Math.round(item.value),
          character: item.character,
          color: item.color,
          highlightColor: item.highlightColor
        });
      });
    }
    this.parsedData = parsedData;
  }

  pushTotalCharacterData(data : any, i: any) {
    for (var j = 0; j < this.episodes[i].scenesPerCharacter.length; j++) {
      if (this.getCharacterInfo(this.episodes[i].scenesPerCharacter[j].character, "isShowing") == true) {
        if (!data[j]) {
          data[j] = {
            label: this.episodes[i].scenesPerCharacter[j].label,
            value: (this.episodes[i].scenesPerCharacter[j].value * 100) / this.episodes[i].totalNumberOfScenes,
            character: this.episodes[i].scenesPerCharacter[j].character,
            color: this.getCharacterInfo(this.episodes[i].scenesPerCharacter[j].character, "color"),
            highlightColor: this.getCharacterInfo(this.episodes[i].scenesPerCharacter[j].character, "hightlight")
          }
        }
        else {
          data[j].value += (this.episodes[i].scenesPerCharacter[j].value * 100) / this.episodes[i].totalNumberOfScenes;
        }
      }

    }

    return data;
  }

  pushSeasonCharacterData(data :any, i :any) {
    if (!data[this.episodes[i].season - 1])
      data[this.episodes[i].season - 1] = { name: "Season " + this.episodes[i].season, characters: [] };

    for (var j = 0; j < this.episodes[i].scenesPerCharacter.length; j++) {
      if (this.getCharacterInfo(this.episodes[i].scenesPerCharacter[j].character, "isShowing") == true) {
        if (!data[this.episodes[i].season - 1].characters[j]) {
          data[this.episodes[i].season - 1].characters[j] = {
            name: "Season " + this.episodes[i].season,
            season: this.episodes[i].season,
            label: this.episodes[i].scenesPerCharacter[j].label,
            value: (this.episodes[i].scenesPerCharacter[j].value * 100) / this.episodes[i].totalNumberOfScenes,
            character: this.episodes[i].scenesPerCharacter[j].character,
            color: this.getCharacterInfo(this.episodes[i].scenesPerCharacter[j].character, "color"),
            highlightColor: this.getCharacterInfo(this.episodes[i].scenesPerCharacter[j].character, "hightlight")
          }

        }
        else {
          data[this.episodes[i].season - 1].characters[j].value += (this.episodes[i].scenesPerCharacter[j].value * 100) / this.episodes[i].totalNumberOfScenes;
        }
      }
    }
    return data;
  }

  pushEpisodicCharacterData(data : any, i : any, id : any) {
    data[id] = { name: this.episodes[i].name, characters: [] };

    for (var j = 0; j < this.episodes[i].scenesPerCharacter.length; j++) {
      if (this.getCharacterInfo(this.episodes[i].scenesPerCharacter[j].character, "isShowing") == true) {
        data[id].characters[j] = {
          name: this.episodes[i].name,
          season: this.episodes[i].season,
          episode: this.episodes[i].episode,
          label: this.episodes[i].scenesPerCharacter[j].label,
          value: Math.round((this.episodes[i].scenesPerCharacter[j].value * 100) / this.episodes[i].totalNumberOfScenes),
          character: this.episodes[i].scenesPerCharacter[j].character,
          color: this.getCharacterInfo(this.episodes[i].scenesPerCharacter[j].character, "color"),
          highlightColor: this.getCharacterInfo(this.episodes[i].scenesPerCharacter[j].character, "hightlight")
        }
      }

    }
    return data;
  }

  calculateValue(value :any, extraInfo : any, episode : any) {
    if(episode[extraInfo])
      return Math.round((value * 100) / episode[extraInfo]);
    else return 0
  }

  getCharacterInfo(characterName :any, info : any) {
    for (var i = 0; i < this.charactersInfo.length; i++) {
      if (this.charactersInfo[i].name == characterName)
        return this.charactersInfo[i][info];
    }
  }

}
