import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent implements OnInit {

  @Input() showPerSeasonOption: boolean = true;
  @Input() 
  set selections(list: Array<number | undefined> ) {
    [this.seasonSelection, this.graphTypeSelection, this.graphStyleSelection, this.graphDataTypeSelection] = list;
  }

  seasonSelection?: number; // 0 = all seasons 
  graphTypeSelection? : number; // 0 = sum 1 = per season 2 = per episode
  graphStyleSelection?: number; // 0 = line chart 1 = bar chart
  graphDataTypeSelection?: number; // 0 = number of times 1 = average per episode

  @Output() selectionsChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  

  onChange() {
    this.selectionsChange.emit([this.seasonSelection, this.graphTypeSelection, this.graphStyleSelection, this.graphDataTypeSelection]);
  }

}
