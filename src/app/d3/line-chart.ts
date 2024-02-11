import { Visualization } from './visualization';
import * as d3 from 'd3';

export class LineChart extends Visualization
{
    constructor(svgName: string, width?: number, height?: number)
    {
        super(svgName, width ?? 100, height ?? 100);
    }


    createLineChart(data, isOverlapping)
    {
        var pointer = this;
        if (data.length <= 0)
        {
            this.clearSvg();
            return;
        }
        if (!isOverlapping)
        {
            this.svg.selectAll("image").remove();
            this.svg.selectAll("rect").remove();
        }

        this.xScale = this.createScaleBand(data[0].episodes.map(function (d)
        {
            return d.name;
        }), this.width, this.margin, 0);

        this.yScale = d3.scaleLinear()
            .range([this.height - this.margin.bottom, this.margin.top]);
        this.yScale.domain([0, 100]);

        var line2 = d3.line()
            .x(function (d, i) { return 0; }) // set the x values for the line generator
            .y(function (d) { return 0 }) // set the y values for the line generator 
            .curve(d3.curveMonotoneX) // apply smoothing to the line

        var line = d3.line()
            .x(function (d, i) { return pointer.xScale(d.name) + pointer.xScale.bandwidth() / 2; }) // set the x values for the line generator
            .y(function (d) { return pointer.yScale(d.value); }) // set the y values for the line generator 
            .curve(d3.curveMonotoneX) // apply smoothing to the line

        this.createAxes("Percentage of appearances", null, "%");

        var lines = this.svg.selectAll(".line").data(data);


        lines.enter().append("path")
            .attr("class", "line")
            .attr("fill", "none")
            .attr("stroke", function (d) { return d.color })
            .attr("stroke-width", 2)
            .attr("stroke-dasharray", function (this: any,)
            {
                return this.getTotalLength();
            })
            .attr("stroke-dashoffset", 0)
            .transition().duration(this.transitionSpeed)
            .on('start', function (this: any,d) { d3.select(this).attr("stroke", d.color) })
            .attr("d", function (d) { return line(d.episodes) })
            .attr("stroke-dashoffset", 0);

        lines
            .transition().duration(this.transitionSpeed)
            .on('start', function (this: any,d) { d3.select(this).attr("stroke", d.color) })
            .attr("d", function (d) { return line(d.episodes) });

        lines.exit().remove();

        var circleGroups = this.svg.selectAll("g.dot").data(data);
        circleGroups.enter().append("g").classed('dot', true);
        circleGroups.exit().remove();

        var circles = this.svg.selectAll("g.dot").selectAll("circle")
            .data(function (d) { return d.episodes; });

        circles.enter().append("circle")
            .attr("class", "dot") // Assign a class for styling
            .style("stroke", "white")
            .attr("r", 2)
            .attr("cx", function (d, i) { return Number(pointer.xScale(d.name) + pointer.xScale.bandwidth() / 2); })
            .attr("cy", function (d) { return pointer.height - pointer.margin.bottom })
            .transition().duration(this.transitionSpeed)
            .on('start', function (this: any,d) { d3.select(this).attr("fill", d.color) })
            .attr("cx", function (d, i) { return Number(pointer.xScale(d.name) + pointer.xScale.bandwidth() / 2); })
            .attr("cy", function (d) { return pointer.yScale(d.value) })
            .on('end', function (this: any,)
            {
                pointer.createTooltip(this, 'character', "%");
            });

        circles
            .transition().duration(this.transitionSpeed)
            .on('start', function (this: any,d) { d3.select(this).attr("fill", d.color) })
            .attr("cx", function (d, i) { return Number(pointer.xScale(d.name) + pointer.xScale.bandwidth() / 2); })
            .attr("cy", function (d) { return pointer.yScale(d.value) })
            .attr("r", 2)
            .on('end', function (this: any,)
            {
                pointer.setTooltipText(this, 'character', "%");
            });

        circles.exit().remove();

    }

    createOverlappingLineChart(data)
    {
        var pointer = this;
        if (data.length <= 0)
        {
            this.clearSvg();
            return;
        }
        this.svg.selectAll("image").remove();
        this.xScale = this.createScaleBand(data[0].episodes.map(function (d)
        {
            return d.name;
        }), this.width, this.margin, 0);

        this.yScale = d3.scaleLinear()
            .range([this.height - this.margin.bottom, this.margin.top]);
        this.yScale.domain([0, this.calculateHighestValue(data, 'episodes', null)]);

        var line2 = d3.line()
            .x(function (d, i) { return 0; }) // set the x values for the line generator
            .y(function (d) { return 0 }) // set the y values for the line generator 
            .curve(d3.curveMonotoneX) // apply smoothing to the line

        var line = d3.line()
            .x(function (d, i) { return pointer.xScale(d.name) + pointer.xScale.bandwidth() / 2; }) // set the x values for the line generator
            .y(function (d) { return pointer.yScale(d.value); }) // set the y values for the line generator 
            .curve(d3.curveMonotoneX) // apply smoothing to the line

        //this.createAxes("Percentage of appearances", null, "%");

        var lines = this.svg.selectAll(".line").data(data);


        lines.enter().append("path")
            .attr("class", "line")
            .attr("fill", "none")
            .attr("stroke", function (d) { return d.color })
            .attr("stroke-width", 2)
            .attr("stroke-dasharray", function (this: any,)
            {
                return this.getTotalLength();
            })
            .attr("stroke-dashoffset", 0)
            .transition().duration(this.transitionSpeed)
            .on('start', function (this: any,d) { d3.select(this).attr("stroke", d.color) })
            .attr("d", function (d) { console.log(d); return line(d.episodes) })
            .attr("stroke-dashoffset", 0);

        lines
            .transition().duration(this.transitionSpeed)
            .on('start', function (this: any,d) { d3.select(this).attr("stroke", d.color) })
            .attr("d", function (d) { return line(d.episodes) });

        lines.exit().remove();

        var circleGroups = this.svg.selectAll("g.dot").data(data);
        circleGroups.enter().append("g").classed('dot', true);
        circleGroups.exit().remove();

        var circles = this.svg.selectAll("g.dot").selectAll("circle")
            .data(function (d) { return d.episodes; });

        circles.enter().append("circle")
            .attr("class", "dot") // Assign a class for styling
            .style("stroke", "white")
            .attr("r", 2)
            .attr("cx", function (d, i) { return Number(pointer.xScale(d.name) + pointer.xScale.bandwidth() / 2); })
            .attr("cy", function (d) { return pointer.height - pointer.margin.bottom })
            .transition().duration(this.transitionSpeed)
            .on('start', function (this: any,d) { d3.select(this).attr("fill", d.color) })
            .attr("cx", function (d, i) { return Number(pointer.xScale(d.name) + pointer.xScale.bandwidth() / 2); })
            .attr("cy", function (d) { return pointer.yScale(d.value) })
            .on('end', function (this: any,)
            {
                pointer.createTooltip(this, 'character', "%");
            });

        circles
            .transition().duration(this.transitionSpeed)
            .on('start', function (this: any,d) { d3.select(this).attr("fill", d.color) })
            .attr("cx", function (d, i) { return Number(pointer.xScale(d.name) + pointer.xScale.bandwidth() / 2); })
            .attr("cy", function (d) { return pointer.yScale(d.value) })
            .attr("r", 2)
            .on('end', function (this: any,)
            {
                pointer.setTooltipText(this, 'character', "%");
            });


        circles.exit().remove();
    }
}
