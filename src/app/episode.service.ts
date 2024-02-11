import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Episode } from './models/episode';
import { PER_PERCENTAGE_OF_EPISODES } from './constants';
import { EPISODES } from './episodeData';
declare var $: any;
/* tslint:disable */
@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor() {

  }

  getEpisodes(): Observable<Episode[]> {
    return of(EPISODES);
  }

  parseTotalData(
    episodes: string | any[], 
    extraInfoVector: { name: string; infos: { name: string; label: string; color: string; hightlight: string; isShowing: boolean; }[]; }[], 
    variables: string[], 
    label: string, calculateValueFunction: ((value: number, extraInfo: string | number, episode: { [x: string]: number; }) => number | undefined) | ((value: any) => any), 
    calculateValueExtraParameter: null, 
    seasonSelection: number) {
    var data: any[] = [];
    for (var i = 0; i < episodes.length; i++) {
      if ((seasonSelection == 0) || (episodes[i].season == seasonSelection)) {
        data = this.parseTotalCharacterData(data, episodes[i], extraInfoVector, variables, label, calculateValueFunction, calculateValueExtraParameter);
      }
    }
    return data;
  }

  parseTotalCharacterData(data: any[], episode: { [x: string]: any; }, extraInfoVector: any, variables: string | any[], label: any, calculateValueFunction: any, calculateValueExtraParameter: any) {
    if (!data[0])
      data[0] = { name: 'Total', characters: [] };
    for (var variableIndex = 0; variableIndex < variables.length; variableIndex++) {
      if (episode[variables[variableIndex]] && episode[variables[variableIndex]].length) {
        for (var subVariableIndex = 0; subVariableIndex < episode[variables[variableIndex]].length; subVariableIndex++) {
          this.parseTotalCharacterDataStackedGroupedBarChart(episode, data, 0, episode[variables[variableIndex]][subVariableIndex], label, extraInfoVector, calculateValueFunction, calculateValueExtraParameter)
        }
      }
      else if (episode[variables[variableIndex]] && (this.getCharacterExtraInfo(episode[variables[variableIndex]].label, label, 'isShowing', extraInfoVector))) {
        this.parseTotalCharacterDataStackedGroupedBarChart(episode, data, 0, episode[variables[variableIndex]], label, extraInfoVector, calculateValueFunction, calculateValueExtraParameter)
      }
    }
    return data;
  }

  parseTotalCharacterDataStackedGroupedBarChart(episode: any, data: any, id: number, variable: { label: any; character: any; value: any; }, label: any, extraInfoVector: any, calculateValueFunction: any, calculateValueExtraParameter: any) {
    if (this.getCharacterExtraInfo(variable.label, label, 'isShowing', extraInfoVector)) {
      var index = data[id].characters.map(function (e: { name: any; }) { return e.name; }).indexOf(variable.character);
      if (index == -1) {
        data[id].characters.push({
          name: variable.character, parent: 'Total', infos: [
            this.getCharacterSeasonObject(episode, 'Total', variable, calculateValueFunction, calculateValueExtraParameter, label, extraInfoVector)
          ]
        });
      }
      else {
        var infoIndex = data[id].characters[index].infos.map(function (e: { label: any; }) { return e.label; }).indexOf(variable.label);
        if (infoIndex == -1) {
          data[id].characters[index].infos.push(this.getCharacterSeasonObject(episode, 'Total', variable, calculateValueFunction, calculateValueExtraParameter, label, extraInfoVector));
        }
        else
          data[id].characters[index].infos[infoIndex].value += variable.value;
      }

    }
    return data;
  }

  parseSeasonData(episodes: string | any[], extraInfoVector: { name: string; infos: { name: string; label: string; color: string; hightlight: string; isShowing: boolean; }[]; }[], variables: string[], label: string, calculateValueFunction: ((value: number, extraInfo: string | number, episode: { [x: string]: number; }) => number | undefined) | ((value: any) => any), calculateValueExtraParameter: null, graphDataTypeSelection: number) {
    var data: any[] = [];
    var numberOfEpisodesPerSeason = [];
    for (var i = 0; i < episodes.length; i++) {
      data = this.parseSeasonCharacterData(data, episodes[i], extraInfoVector, variables, label, calculateValueFunction, calculateValueExtraParameter, null);
      if (!numberOfEpisodesPerSeason[episodes[i].season - 1])
        numberOfEpisodesPerSeason[episodes[i].season - 1] = 0;
      numberOfEpisodesPerSeason[episodes[i].season - 1]++;
    }

    if (graphDataTypeSelection == PER_PERCENTAGE_OF_EPISODES) {
      for (var j = 0; j < data.length; j++) {
        for (var k = 0; k < data[j].characters.length; k++) {
          for (var l = 0; l < data[j].characters[k].infos.length; l++)
            data[j].characters[k].infos[l].value = data[j].characters[k].infos[l].value / numberOfEpisodesPerSeason[j];
        }
      }
    }

    return data;
  }

  parseSeasonCharacterData(data: any[], episode: any, extraInfoVector: any, variables: string | any[], label: any, calculateValueFunction: any, calculateValueExtraParameter: any, type: null) {
    if (!data[episode.season - 1])
      data[episode.season - 1] = { name: 'Season ' + episode.season, characters: [] };
    for (var variableIndex = 0; variableIndex < variables.length; variableIndex++) {
      if (episode[variables[variableIndex]] && episode[variables[variableIndex]].length) {
        for (var subVariableIndex = 0; subVariableIndex < episode[variables[variableIndex]].length; subVariableIndex++) {
          this.parseSeasonCharacterDataStackedGroupedBarChart(data, episode, episode[variables[variableIndex]][subVariableIndex], label, extraInfoVector, calculateValueFunction, calculateValueExtraParameter);
        }
      }
      else if (episode[variables[variableIndex]] && (this.getCharacterExtraInfo(episode[variables[variableIndex]].label, label, 'isShowing', extraInfoVector) == true)) {
        this.parseSeasonCharacterDataStackedGroupedBarChart(data, episode, episode[variables[variableIndex]], label, extraInfoVector, calculateValueFunction, calculateValueExtraParameter);
      }
    }
    return data;
  }

  parseSeasonCharacterDataStackedGroupedBarChart(data: any[], episode: any, variable: { character: any; label: any; value: any; }, label: any, extraInfoVector: any, calculateValueFunction: any, calculateValueExtraParameter: any) {
    var index = data[episode.season - 1].characters.map(function (e: { name: any; }) { return e.name; }).indexOf(variable.character);
    var variableShouldBeShown = this.getCharacterExtraInfo(variable.label, label, 'isShowing', extraInfoVector);
    if (index == -1 && variableShouldBeShown) {
      data[episode.season - 1].characters.push({ name: variable.character, parent: 'Season ' + episode.season, infos: [] });
      index = data[episode.season - 1].characters.length - 1;
    }
    if (variableShouldBeShown) {
      var labelIndex = data[episode.season - 1].characters[index].infos.map(function (e: { label: any; }) { return e.label; }).indexOf(variable.label);
      if (labelIndex == -1) {
        data[episode.season - 1].characters[index].infos.push(
          this.getCharacterSeasonObject(episode, 'Season ' + episode.season, variable, calculateValueFunction, calculateValueExtraParameter, label, extraInfoVector))
      }
      else {
        data[episode.season - 1].characters[index].infos[labelIndex].value += variable.value;
      }
    }
  }

  getCharacterSeasonObject(episode: any, name: string, variable: { label: any; value: any; character: any; }, calculateValueFunction: (arg0: any, arg1: any, arg2: any) => any, calculateValueExtraParameter: any, label: any, extraInfoVector: any) {
    return {
      name: name,
      label: variable.label,
      value: calculateValueFunction(variable.value, calculateValueExtraParameter, episode),
      character: variable.character,
      color: this.getCharacterExtraInfo(variable.label, label, 'color', extraInfoVector),
      highlightColor: this.getCharacterExtraInfo(variable.label, label, 'hightlight', extraInfoVector)
    };
  }

  parseEpisodicData(episodes: string | any[], seasonSelection: number, extraInfoVector: { name: string; infos: { name: string; label: string; color: string; hightlight: string; isShowing: boolean; }[]; }[], variables: string[], label: string, calculateValueFunction: ((value: number, extraInfo: string | number, episode: { [x: string]: number; }) => number | undefined) | ((value: any) => any), calculateValueExtraParameter: null, graphType: string) {
    var data: any[] = [];
    var numberOfEpisodes = 0;
    for (var i = 0; i < episodes.length; i++) {
      if ((seasonSelection == 0) || (episodes[i].season == seasonSelection)) {
        data = this.parseEpisodicCharacterData(data, numberOfEpisodes, episodes[i], extraInfoVector, variables, label, calculateValueFunction, calculateValueExtraParameter, graphType);
        numberOfEpisodes++;
      }
    }
    return data;
  }

  parseEpisodicCharacterData(data: any[], id: number, episode: any, extraInfoVector: any, variables: any, label: any, calculateValueFunction: any, calculateValueExtraParameter: any, type: string) {
    data[id] = { name: episode.name, characters: [] };
    for (var variableIndex = 0; variableIndex < variables.length; variableIndex++) {
      if (episode[variables[variableIndex]] && episode[variables[variableIndex]].length) {
        for (var subVariableIndex = 0; subVariableIndex < episode[variables[variableIndex]].length; subVariableIndex++) {
          if (type == 'stacked')
            data = this.parseEpisodicCharacterDataStackedGroupedBarChart(data, id, episode, episode[variables[variableIndex]][subVariableIndex], label, extraInfoVector, calculateValueFunction, calculateValueExtraParameter);
          if (type == 'bar')
            data = this.parseEpisodicCharacterDataBarChart(data, id, episode, variables, variableIndex, subVariableIndex, label, extraInfoVector, calculateValueFunction, calculateValueExtraParameter);
        }
      }
      else if (episode[variables[variableIndex]] && (this.getCharacterExtraInfo(episode[variables[variableIndex]].label, label, 'isShowing', extraInfoVector) == true)) {
        if (type == 'stacked')
          data[id].characters.push({
            name: episode[variables[variableIndex]].character, parent: episode.name,
            infos: [this.getCharacterObject(episode, episode[variables[variableIndex]], calculateValueFunction, calculateValueExtraParameter, label, extraInfoVector)]
          });
        if (type == 'bar')
          data[id].characters.push(
            this.getCharacterObject(episode, episode[variables[variableIndex]], calculateValueFunction, calculateValueExtraParameter, label, extraInfoVector));
      }
    }
    return data;
  }

  parseEpisodicCharacterDataStackedGroupedBarChart(data: any, id: string | number, episode: any, variable:any, label: any, extraInfoVector: any, calculateValueFunction: any, calculateValueExtraParameter: any) {
    var index = data[id].characters.map(function (e: { name: any; }) { return e.name; }).indexOf(variable.character);
    if (index == -1 && this.getCharacterExtraInfo(variable.label, label, 'isShowing', extraInfoVector) == true) {
      data[id].characters.push({ name: variable.character, parent: episode.name, infos: [] });
      index = data[id].characters.length - 1;
    }
    if (this.getCharacterExtraInfo(variable.label, label, 'isShowing', extraInfoVector) == true) {
      data[id].characters[index].infos.push(
        this.getCharacterObject(episode, variable, calculateValueFunction, calculateValueExtraParameter, label, extraInfoVector)
      );
    }
    return data;
  }

  parseEpisodicCharacterDataBarChart(data: any, id: string | number, episode:any, variables: { [x: string]: string | number; }, variableIndex: number, subVariableIndex: number, label: any, extraInfoVector: any, calculateValueFunction: any, calculateValueExtraParameter: any) {
    if (this.getCharacterExtraInfo(episode[variables[variableIndex]][subVariableIndex].label, label, 'isShowing', extraInfoVector) == true) {
      data[id].characters[subVariableIndex] =
        this.getCharacterObject(episode, episode[variables[variableIndex]][subVariableIndex], calculateValueFunction, calculateValueExtraParameter, label, extraInfoVector);
    }
    return data;
  }

  parseLineData(data: string | any[]) {
    var parsedData: any[] = [];
    for (var j = 0; j < data.length; j++) {
      data[j].characters.forEach(function (item: { character: any; color: any; highlightColor: any; name: any; season: any; episode: any; value: number; }, index: any) {
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
    return parsedData;
  }

  getCharacterObject(episode: { name: any; season: any; episode: any; }, variable: { label: any; value: any; character: any; }, calculateValueFunction: (arg0: any, arg1: any, arg2: any) => any, calculateValueExtraParameter: any, label: any, extraInfoVector: any) {
    return {
      name: episode.name,
      season: episode.season,
      episode: episode.episode,
      label: variable.label,
      value: calculateValueFunction(variable.value, calculateValueExtraParameter, episode),
      character: variable.character,
      color: this.getCharacterExtraInfo(variable.label, label, 'color', extraInfoVector),
      highlightColor: this.getCharacterExtraInfo(variable.label, label, 'hightlight', extraInfoVector)
    };
  }

  /*
  getCharacterObject(episode, variables, variableIndex, subVariableIndex, calculateValueFunction, calculateValueExtraParameter, label, extraInfoVector) {
    return {
      name: episode.name,
      season: episode.season,
      episode: episode.episode,
      label: episode[variables[variableIndex]][subVariableIndex].label,
      value: calculateValueFunction(episode[variables[variableIndex]][subVariableIndex].value, calculateValueExtraParameter, episode),
      character: episode[variables[variableIndex]][subVariableIndex].character,
      color: this.getCharacterExtraInfo(episode[variables[variableIndex]][subVariableIndex].label, label, "color", extraInfoVector),
      highlightColor: this.getCharacterExtraInfo(episode[variables[variableIndex]][subVariableIndex].label, label, "hightlight", extraInfoVector)
    };
  }*/

  getCharacterExtraInfo(label: any, parameter: string | number, info: string, extraInfoVector: string | any[]) {
    for (var i = 0; i < extraInfoVector.length; i++) {
      for (var j = 0; j < extraInfoVector[i].infos.length; j++) {
        if (extraInfoVector[i].infos[j][parameter] == label)
          return extraInfoVector[i].infos[j][info];
      }

    }
  }

  reorderData(parsedData: any[], extraInfoVector: any[]) {
    if(parsedData.length == 0)
      return parsedData;
    var result: any[] = [];
    if (!parsedData[0].characters) {
      extraInfoVector.forEach(function (key: { name: any; }) {
        parsedData.forEach(function (character: { character: any; }) {
          if (key.name == character.character)
            result.push(character);
        })
      })
      parsedData = result;
      return parsedData;
    }
    for (var i = 0; i < parsedData.length; i++) {
      for (var j = 0; j < parsedData[i].characters.length; j++) {
        var result = [];
        var index = extraInfoVector.map(function (e: { name: any; }) { return e.name; }).indexOf(parsedData[i].characters[j].name);
        if (extraInfoVector[index].infos) {
          extraInfoVector[index].infos.forEach(function (item: { label: any; }) {
            parsedData[i].characters[j].infos.forEach(function (character: { label: any; }) {
              if (item.label == character.label)
                result.push(character);
            })
          })
          parsedData[i].characters[j].infos = result;
        }
        else {
          extraInfoVector.forEach(function (key: { name: any; }) {
            parsedData[i].characters.forEach(function (character: { character: any; }) {
              if (key.name == character.character)
                result.push(character);
            })
          })
          parsedData[i].characters = result;
        }

      }
    }
    return parsedData;
  }

}
