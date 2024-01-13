import { Component, OnInit, Input } from '@angular/core';
import { VisualizationComponent } from '../visualization/visualization.component';
import { ForceChart } from 'src/app/d3/force-chart';

@Component({
  selector: 'app-force-chart',
  templateUrl: './force-chart.component.html',
  styleUrls: ['./force-chart.component.css']
})
export class ForceChartComponent extends VisualizationComponent implements OnInit
{

  @Input() title: string;
  @Input() svgName: string;
  @Input() data: any;
  @Input() width: number = 500;
  @Input() height: number = 300;
  forceChart: ForceChart;

  dummy = {
    "nodes": [{
      "name": "Phryne",
      "group": 1
    }, {
      "name": "Jack",
      "group": 3
    }, {
      "name": "Hugh",
      "group": 3
    }, {
      "name": "Dot",
      "group": 2
    }, {
      "name": "Cec and Bert",
      "group": 2
    }, {
      "name": "Mr Butler",
      "group": 2
    }, {
      "name": "Jane",
      "group": 4
    }, {
      "name": "Mac",
      "group": 4
    }, {
      "name": "Aunt Prudence",
      "group": 4
    }],
    "links": [{
      "source": 0, // phryne and jack
      "target": 1,
      "group": 1
    }, {
      "source": 0, //phryne and hugh
        "target": 2,
        "group": 0
    }, {
      "source": 0, // phryne and dot
        "target": 3,
        "group": 2
    }, {
      "source": 0, // phryne and cec and bert
        "target": 4,
        "group": 2
    }, {
      "source": 0, // phryne and mr b
        "target": 5,
        "group": 2
    }, {
      "source": 0, // phryne and jane
        "target": 6,
        "group": 3
    }, {
      "source": 0, // phryne and mac
        "target": 7,
        "group": 4
    }, {
      "source": 0, // phryne and aunt p
        "target": 8,
        "group": 3
    }, {
      "source": 2, // dot and hugh
        "target": 3,
        "group": 1
    }, {
      "source": 2, // jack and hugh
        "target": 1,
        "group": 2
    }, {
      "source": 5, // mr b and dot
        "target": 3,
        "group": 2
    }, {
      "source": 6, // jane and dot
        "target": 3,
        "group": 4
    },
    {
      "source": 4, // cec and bert and jack
      "target": 1,
      "group": 0
    },
    {
      "source": 4, // cec and bert and dot
      "target": 3,
      "group": 2
    }]
  };

  constructor() { super(); }

  ngOnInit(): void
  {
    this.create();
  }

  create()
  {
    if (document.querySelector('#' + this.svgName) != null)
    {
      this.forceChart = new ForceChart('#' + this.svgName, this.width, this.height);

      this.createVisualization();
    }
    else
    {
      setTimeout(() => this.create(), 50);
    }
  }

  createVisualization()
  {
    this.forceChart.create(this.dummy);
  }

}
