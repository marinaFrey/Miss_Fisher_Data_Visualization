import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.css']
})
export class LegendComponent implements OnInit {

  @Input() charactersInfo! :any;
  @Output() charactersInfoChange = new EventEmitter();
  selectAll = true;

  constructor() { }

  ngOnInit() {
  }

  onChange() {
    this.charactersInfoChange.emit(this.charactersInfo);
  }

  changeFilterSelection() {
    for (var i = 0; i < this.charactersInfo.length; i++) {
      if (this.charactersInfo[i].infos && this.charactersInfo[i].infos.length > 0) {
        for (var j = 0; j < this.charactersInfo[i].infos.length; j++)
          this.charactersInfo[i].infos[j].isShowing = this.selectAll;
      }
      else
        this.charactersInfo[i].isShowing = this.selectAll;
    }
    this.onChange();
  }

}
