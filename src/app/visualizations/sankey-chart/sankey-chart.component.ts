import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SankeyChart } from '../../d3/sankey-chart';

@Component({
  selector: 'app-sankey-chart',
  templateUrl: './sankey-chart.component.html',
  styleUrls: ['./sankey-chart.component.css']
})
export class SankeyChartComponent implements OnInit, OnChanges
{

  @Input() data: any;
  @Input() colorInfo: any;
  @Input() svgName: any;

  sankeyChart!: SankeyChart;

  constructor() { }

  ngOnInit(): void
  {
    this.show();
  }

  ngOnChanges(): void
  {
    this.show();
  }

  show()
  {
    if(this.data !== undefined && this.colorInfo !== undefined)
    {
      if (this.sankeyChart === undefined)
      {
        this.create();
      }
      else
      {
        this.update();
      }
    }
  }

  create()
  {
    console.log("here");
    this.sankeyChart = new SankeyChart(this.svgName, 700, 500);
    this.sankeyChart.createSankeyChart(this.data, this.colorInfo);
  }

  update()
  {
    this.sankeyChart.createSankeyChart(this.data, this.colorInfo);
  }

}
