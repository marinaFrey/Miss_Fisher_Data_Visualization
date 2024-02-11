import { Visualization } from './visualization';
import * as d3 from 'd3';

export class BarChart extends Visualization
{
    constructor(svgName: string, width?: number, height?: number)
    {
        super(svgName, width ?? 100, height ?? 100);
    }

    createBarChart(data, propertyName, yAxisLabel, yAxisSuffix, maxYAxisValue)
    {
        var pointer = this;
        if (data.length <= 0)
        {
            this.clearSvg();
            return;
        }
        this.svg.selectAll("g.dot").remove();
        this.svg.selectAll(".line").remove();

        this.xScale = this.createScaleBand(data.map(function (d)
        { 
            return d[propertyName];
        }), this.width, this.margin, 0.1);

        this.yScale = d3.scaleLinear()
            .rangeRound([this.height - this.margin.bottom, this.margin.top]);

        if (maxYAxisValue)
            this.yScale.domain([0, maxYAxisValue])
        else
        {
            this.yScale.domain([0, d3.max(data, d => d.value)])
        }

        this.createAxes(yAxisLabel, null, yAxisSuffix);

        var barGroups = this.svg.selectAll("g.layer");
        if (barGroups.empty())
            barGroups = this.svg.append("g").classed('layer', true);
        var rects = barGroups.selectAll("rect").data(data);

        rects
            .enter()
            .append("rect") // Add a new rect for each new elements
            .attr("x", function (d) { return pointer.xScale(d[propertyName]); })
            .attr("y", function (d) { return pointer.height - pointer.margin.bottom; })
            .on("mouseover", function (this: any,d, i) { d3.select(this).attr("fill", i.highlightColor); })
            .on("mouseout", function (this: any,d, i) { d3.select(this).attr("fill", i.color); })
            .merge(rects) // get the already existing elements as well
            .transition() // and apply changes to all of them
            .duration(this.transitionSpeed)
            .attr("class", "bar")
            .on('start', function (this: any,d) { d3.select(this).attr("fill", d.color) })
            .attr("x", function (d) { return pointer.xScale(d[propertyName]); })
            .attr("y", function (d) { return pointer.yScale(Number(d.value)); })
            .attr("width", this.xScale.bandwidth())
            .attr("height", function (d) { return pointer.height - pointer.yScale(Number(d.value)) - pointer.margin.bottom; })
            .on('end', function (this: any)
            {

                d3.select(this)
                    .attr("data-original-title", function (d) { var text = d[propertyName] + ": " + Math.round(d.value) + yAxisSuffix; return text; });
                d3.select(this).attr("class", "tooltipped");
                d3.select(this).attr("data-toggle", "tooltip");
            });


        // If less group in the new dataset, I delete the ones not in use anymore
        rects.exit().remove();

        var imageGroups = this.svg.selectAll("g.img");
        if (imageGroups.empty())
            imageGroups = this.svg.append("g").classed('img', true);
        var images = imageGroups.selectAll("image").data(data);
        var imagePadding = 10;

        images
            .enter()
            .append("image")
            .attr("x", function (d) { return pointer.xScale(d[propertyName]); })
            .attr("y", function (d) { return pointer.height - pointer.margin.bottom - imagePadding; })
            //.on("mouseover", function (d, i) { d3.select(this).attr("fill", d.highlightColor); })
            //.on("mouseout", function (d, i) { d3.select(this).attr("fill", d.color); })
            .merge(images) // get the already existing elements as well
            .transition() // and apply changes to all of them
            .duration(this.transitionSpeed)
            .attr("class", "img")
            .attr("opacity", function (d) { if (d.value > 0 && (pointer.minPhotoSize <= pointer.xScale.bandwidth())) return 1; else return 0 })
            .attr("xlink:href", function (d) { return "../../../assets/images/" + d[propertyName] + ".png"; })
            .attr("width", function (d) { return pointer.calculateImageInfo(pointer.xScale.bandwidth(), pointer.maxPhotoSize, pointer.xScale.bandwidth(), pointer); })
            .attr("height", function (d) { return pointer.calculateImageInfo(pointer.xScale.bandwidth(), pointer.maxPhotoSize, pointer.xScale.bandwidth(), pointer) * 1.3; })
            .attr("x", function (d) { return pointer.calculateImageInfo(pointer.xScale(d[propertyName]), pointer.xScale(d[propertyName]) + pointer.xScale.bandwidth() / 2 - pointer.maxPhotoSize / 2, pointer.xScale.bandwidth(), pointer); })
            .attr("y", function (d) { return pointer.calculateImageInfo(pointer.yScale(Number(d.value)) - pointer.xScale.bandwidth(), pointer.yScale(Number(d.value)) - pointer.maxPhotoSize, pointer.xScale.bandwidth(), pointer) - imagePadding; })
            .on('end', function (this: any)
            {
                d3.select(this)
                    .attr("data-original-title", function (d) { var text = d[propertyName] + ": " + Math.round(d.value) + yAxisSuffix; return text; });
                d3.select(this).attr("class", "tooltipped");
                d3.select(this).attr("data-toggle", "tooltip");
            });

        images.exit().remove();
    }

    createGroupedBarChart(data)
    {
        var pointer = this;
        if (data[0].characters.length <= 0)
        {
            this.clearSvg();
            return;
        }

        this.svg.selectAll("g.dot").remove();
        this.svg.selectAll(".line").remove();

        this.xScale = this.createScaleBand(data.map(function (d)
        {
            return d.name;
        }), this.width, this.margin, 0.05);

        var x1 = d3.scaleBand()
            .padding(0.005)
            .domain(data[0].characters.map(function (d)
            {
                return d.character;
            }))
            .rangeRound([0, this.xScale.bandwidth()]);

        this.yScale = d3.scaleLinear()
            .rangeRound([this.height - this.margin.bottom, this.margin.top]);
        this.yScale.domain([0, 100]);

        this.createAxes("Percentage of appearances", null, "%");

        var barGroups = this.svg.selectAll("g.layer").data(data);
        barGroups.enter().append("g").classed('layer', true);
        barGroups.exit().remove();

        var bars = this.svg.selectAll("g.layer").selectAll("rect")
            .data(function (d)
            {
                return d.characters;
            });

        bars.enter().append("rect")
            .attr("width", x1.bandwidth())
            .attr("y", function (d) { return pointer.height - pointer.margin.bottom; })
            .attr("x", function (d) { return pointer.xScale(d.name) + x1(d.character); })
            .on("mouseover", function (this: any,d, i) { d3.select(this).attr("fill", i.highlightColor); })
            .on("mouseout", function (this: any,d, i) { d3.select(this).attr("fill", i.color); })
            .transition().duration(this.transitionSpeed)
            .on('start', function (this: any,d) { d3.select(this).attr("fill", d.color) })
            .attr("y", function (d) { return pointer.yScale(d.value); })
            .attr("height", function (d) { return pointer.height - pointer.yScale(Number(d.value)) - pointer.margin.bottom; })
            .on('end', function (this: any)
            {
                d3.select(this).attr("data-original-title", function (d)
                {
                    var text;
                    if (d.episode)
                        text = d.character + ": " + Math.round(d.value) + "%<br/>" + "S" + d.season + "E" + d.episode + ": " + d.name;
                    else
                        text = d.character + ": " + Math.round(d.value) + "%<br/>" + "Season " + d.season;
                    return text;
                });
                d3.select(this).attr("class", "tooltipped");
                d3.select(this).attr("data-toggle", "tooltip");
            });

        bars
            .transition().duration(this.transitionSpeed)
            .on('start', function (this: any,d) { d3.select(this).attr("fill", d.color) })
            .attr("x", function (d) { return pointer.xScale(d.name) + x1(d.character); })
            .attr("y", function (d) { return pointer.yScale(d.value); })
            .attr("width", x1.bandwidth())
            .attr("height", function (d) { return pointer.height - pointer.yScale(Number(d.value)) - pointer.margin.bottom; })
            .on('end', function (this: any)
            {
                d3.select(this).attr("data-original-title", function (d)
                {
                    var text;
                    if (d.episode)
                        text = d.character + ": " + Math.round(d.value) + "%<br/>" + "S" + d.season + "E" + d.episode + ": " + d.name;
                    else
                        text = d.character + ": " + Math.round(d.value) + "%<br/>" + "Season " + d.season;
                    return text;
                });
            });

        bars.exit().remove();



        var imageGroups = this.svg.selectAll("g.img").data(data);
        imageGroups.enter().append("g").classed('img', true);
        imageGroups.exit().remove();
        var images = this.svg.selectAll("g.img").selectAll("image").data(function (d) { return d.characters; });
        images
            .enter()
            .append("image")
            .attr("width", function (d) { return pointer.calculateImageInfo(x1.bandwidth(), pointer.maxPhotoSize, x1.bandwidth(), pointer); })
            .attr("height", function (d) { return pointer.calculateImageInfo(x1.bandwidth(), pointer.maxPhotoSize, x1.bandwidth(), pointer); })
            .attr("x", function (d) { return pointer.calculateImageInfo(pointer.xScale(d.name) + x1(d.character) + x1.bandwidth() / 2 - x1.bandwidth() / 2, pointer.xScale(d.name) + x1(d.character) + x1.bandwidth() / 2 - pointer.maxPhotoSize / 2, x1.bandwidth(), pointer); })
            .attr("y", function (d) { return pointer.height - pointer.margin.bottom; })
            .merge(images) // get the already existing elements as well
            .transition() // and apply changes to all of them
            .duration(this.transitionSpeed)
            .attr("class", "img")
            .attr("opacity", function (d) { if (d.value > 0 && (pointer.minPhotoSize <= pointer.xScale.bandwidth())) return 1; else return 0 })
            .attr("xlink:href", function (d) { return "../../../assets/images/" + d.character + ".png"; })
            .attr("width", function (d) { return pointer.calculateImageInfo(x1.bandwidth(), pointer.maxPhotoSize, x1.bandwidth(), pointer); })
            .attr("height", function (d) { return pointer.calculateImageInfo(x1.bandwidth(), pointer.maxPhotoSize, x1.bandwidth(), pointer); })
            .attr("x", function (d) { return pointer.calculateImageInfo(pointer.xScale(d.name) + x1(d.character) + x1.bandwidth() / 2 - x1.bandwidth() / 2, pointer.xScale(d.name) + x1(d.character) + x1.bandwidth() / 2 - pointer.maxPhotoSize / 2, x1.bandwidth(), pointer); })
            .attr("y", function (d) { return pointer.calculateImageInfo(pointer.yScale(Number(d.value)) - x1.bandwidth(), pointer.yScale(Number(d.value)) - pointer.maxPhotoSize, x1.bandwidth(), pointer); })
            .on('end', function (this: any)
            {
                d3.select(this).attr("data-original-title", function (d)
                {
                    var text;
                    if (d.episode)
                        text = d.character + ": " + Math.round(d.value) + "%<br/>" + "S" + d.season + "E" + d.episode + ": " + d.name;
                    else
                        text = d.character + ": " + Math.round(d.value) + "%<br/>" + "Season " + d.season;
                    return text;
                });
                d3.select(this).attr("class", "tooltipped");
                d3.select(this).attr("data-toggle", "tooltip");
            });

        images.exit().remove();
    }


    createStackedBarChart(data, tooltipLabel)
    {
        console.log(data);
        var pointer = this;
        if (data[0].characters[0].length <= 0)
        {
            this.clearSvg();
            return;
        }

        //this.svg.selectAll("image").remove();
        this.svg.selectAll("g.dot").remove();
        this.svg.selectAll(".line").remove();


        var yPoints: any[] = []
        for (var i = 0; i < data.length; i++)
        {
            yPoints[data[i].name] = [];
            for (var j = 0; j < data[i].characters.length; j++)
            {
                yPoints[data[i].name][data[i].characters[j].name] = [];
                for (var k = 0; k < data[i].characters[j].infos.length; k++)
                {
                    yPoints[data[i].name][data[i].characters[j].name][k] =
                    {
                        y: data[i].characters[j].infos[k].value
                    }
                    if (k > 0)
                    {
                        yPoints[data[i].name][data[i].characters[j].name][k].y += yPoints[data[i].name][data[i].characters[j].name][k - 1].y
                    }
                }
            }
        }

        this.xScale = this.createScaleBand(data.map(function (d)
        {
            return d.name;
        }), this.width, this.margin, 0.05);

        var x1 = d3.scaleBand()
            .domain(data[0].characters.map(function (d)
            {
                return d.name;
            }))
            .rangeRound([0, this.xScale.bandwidth()]);

        this.yScale = d3.scaleLinear()
            .rangeRound([this.height - this.margin.bottom, this.margin.top]);
        this.yScale.domain([0, this.calculateHighestValue(data, 'characters', "infos")]);

        this.createAxes("Number of times", null, null);

        for (var i = 0; i < data.length; i++)
        {
            for (var j = 0; j < data[i].characters.length; j++)
            {
                for (var k = 0; k < data[i].characters[j].infos.length; k++)
                {
                    yPoints[data[i].name][data[i].characters[j].name][k].height = (k == 0) ?
                        pointer.yScale.range()[0] - pointer.yScale(yPoints[data[i].name][data[i].characters[j].name][k].y) :
                        pointer.yScale(yPoints[data[i].name][data[i].characters[j].name][k - 1].y) - pointer.yScale(yPoints[data[i].name][data[i].characters[j].name][k].y)
                }

            }
        }

        var barGroups = this.svg.selectAll("g.layer").data(data);
        barGroups.enter().append("g").classed('layer', true);
        barGroups.exit().remove();

        var bars = this.svg.selectAll("g.layer").selectAll("g")
            .data(function (d)
            {
                return d.characters;
            });
        bars.enter().append("g").classed('subLayer', true);
        bars.exit().remove();

        var subBars = this.svg.selectAll("g.subLayer").selectAll("rect")
            .data(function (d)
            {
                return d.infos;
            });

        subBars.enter().append("rect")
            .attr("width", x1.bandwidth())
            .attr("y", function (d) { return pointer.height - pointer.margin.bottom; })
            .attr("x", function (d) { return pointer.xScale(d.name) + x1(d.character); })
            .on("mouseover", function (this: any,d, i) {d3.select(this).attr("fill", i.highlightColor); })
            .on("mouseout", function (this: any,d, i) { d3.select(this).attr("fill", i.color); })
            .transition().duration(this.transitionSpeed)
            .on('start', function (this: any,d) { d3.select(this).attr("fill", d.color) })
            .attr("y", function (d, i)
            {
                return pointer.yScale(yPoints[d.name][d.character][i].y);
            })
            .attr("height", function (d, i) { return yPoints[d.name][d.character][i].height; })
            .on('end', function (this: any,)
            {
                d3.select(this)
                    .attr("data-original-title", function (d)
                    {
                        var text;
                        if (d.episode)
                            text = d.label + ": " + Math.round(d.value) + tooltipLabel + "<br/>" + "S" + d.season + "E" + d.episode + ": " + d.name;
                        else
                            text = d.label + ": " + Math.round(d.value) + tooltipLabel + "<br/>" + d.name;
                        return text;
                    });
                d3.select(this).attr("class", "tooltipped");
                d3.select(this).attr("data-toggle", "tooltip");
            });

        subBars
            .transition().duration(this.transitionSpeed)
            .on('start', function (this: any,d) { d3.select(this).attr("fill", d.color) })
            .attr("x", function (d) { return pointer.xScale(d.name) + x1(d.character); })
            .attr("y", function (d, i)
            {
                return pointer.yScale(yPoints[d.name][d.character][i].y);
            })
            .attr("height", function (d, i) { return yPoints[d.name][d.character][i].height; })
            .attr("width", x1.bandwidth())
            .on('end', function (this: any,)
            {
                d3.select(this)
                    .attr("data-original-title", function (d)
                    {
                        var text;
                        if (d.episode)
                            text = d.label + ": " + Math.round(d.value) + tooltipLabel + "<br/>" + "S" + d.season + "E" + d.episode + ": " + d.name;
                        else
                            text = d.label + ": " + Math.round(d.value) + tooltipLabel + "<br/>" + d.name;
                        return text;
                    });
            });

        subBars.exit().remove();

    }

    createGroupedStackedBarChart(data, imageName, tooltipLabel)
    {
        var pointer = this;
        if (data[0].characters.length <= 0 || data[0].characters[0].length <= 0)
        {
            this.clearSvg();
            return;
        }

        //this.svg.selectAll("image").remove();
        this.svg.selectAll("g.dot").remove();
        this.svg.selectAll(".line").remove();


        var yPoints: any[] = []
        for (var i = 0; i < data.length; i++)
        {
            yPoints[data[i].name] = [];
            for (var j = 0; j < data[i].characters.length; j++)
            {
                yPoints[data[i].name][data[i].characters[j].name] = [];
                for (var k = 0; k < data[i].characters[j].infos.length; k++)
                {
                    yPoints[data[i].name][data[i].characters[j].name][k] =
                    {
                        y: data[i].characters[j].infos[k].value
                    }
                    if (k > 0)
                    {
                        yPoints[data[i].name][data[i].characters[j].name][k].y += yPoints[data[i].name][data[i].characters[j].name][k - 1].y
                    }
                }
            }
        }

        this.xScale = this.createScaleBand(data.map(function (d)
        {
            return d.name;
        }), this.width, this.margin, 0.05);

        var x1 = d3.scaleBand()
            .domain(data[0].characters.map(function (d)
            {
                return d.name;
            }))
            .rangeRound([0, this.xScale.bandwidth()]);

        this.yScale = d3.scaleLinear()
            .rangeRound([this.height - this.margin.bottom, this.margin.top]);
        this.yScale.domain([0, this.calculateHighestValue(data, 'characters', "infos")]);

        this.createAxes("Number of times", null, null);

        for (var i = 0; i < data.length; i++)
        {
            for (var j = 0; j < data[i].characters.length; j++)
            {
                for (var k = 0; k < data[i].characters[j].infos.length; k++)
                {
                    yPoints[data[i].name][data[i].characters[j].name][k].height = (k == 0) ?
                        pointer.yScale.range()[0] - pointer.yScale(yPoints[data[i].name][data[i].characters[j].name][k].y) :
                        pointer.yScale(yPoints[data[i].name][data[i].characters[j].name][k - 1].y) - pointer.yScale(yPoints[data[i].name][data[i].characters[j].name][k].y)
                }

            }
        }

        var barGroups = this.svg.selectAll("g.layer").data(data);
        barGroups.enter().append("g").classed('layer', true);
        barGroups.exit().remove();

        var bars = this.svg.selectAll("g.layer").selectAll("g")
            .data(function (d)
            {
                return d.characters;
            });
        bars.enter().append("g").classed('subLayer', true);
        bars.exit().remove();

        var subBars = this.svg.selectAll("g.subLayer").selectAll("rect")
            .data(function (d)
            {
                return d.infos;
            });

        subBars.enter().append("rect")
            .attr("width", x1.bandwidth())
            .attr("y", function (d) { return pointer.height - pointer.margin.bottom; })
            .attr("x", function (d) { return pointer.xScale(d.name) + x1(d.character); })
            .on("mouseover", function (this: any,d, i) { d3.select(this).attr("fill", i.highlightColor); })
            .on("mouseout", function (this: any,d, i) { d3.select(this).attr("fill", i.color); })
            .transition().duration(this.transitionSpeed)
            .on('start', function (this: any,d) { d3.select(this).attr("fill", d.color) })
            .attr("y", function (d, i)
            {
                return pointer.yScale(yPoints[d.name][d.character][i].y);
            })
            .attr("height", function (d, i) { return yPoints[d.name][d.character][i].height; })
            .on('end', function (this: any)
            {
                d3.select(this)
                    .attr("data-original-title", function (d)
                    {
                        var text;
                        if (d.episode)
                            text = d.label + ": " + Math.round(d.value) + tooltipLabel + "<br/>" + "S" + d.season + "E" + d.episode + ": " + d.name;
                        else
                            text = d.label + ": " + Math.round(d.value) + tooltipLabel + "<br/>" + d.name;
                        return text;
                    });
                d3.select(this).attr("class", "tooltipped");
                d3.select(this).attr("data-toggle", "tooltip");
            });

        subBars
            .transition().duration(this.transitionSpeed)
            .on('start', function (this: any,d) { d3.select(this).attr("fill", d.color) })
            .attr("x", function (d) { return pointer.xScale(d.name) + x1(d.character); })
            .attr("y", function (d, i)
            {
                return pointer.yScale(yPoints[d.name][d.character][i].y);
            })
            .attr("height", function (d, i) { return yPoints[d.name][d.character][i].height; })
            .attr("width", x1.bandwidth())
            .on('end', function (this: any)
            {
                d3.select(this)
                    .attr("data-original-title", function (d)
                    {
                        var text;
                        if (d.episode)
                            text = d.label + ": " + Math.round(d.value) + tooltipLabel + "<br/>" + "S" + d.season + "E" + d.episode + ": " + d.name;
                        else
                            text = d.label + ": " + Math.round(d.value) + tooltipLabel + "<br/>" + d.name;
                        return text;
                    });
            });

        subBars.exit().remove();

        if (imageName !== null)
        {
            var imageGroups = this.svg.selectAll("g.img").data(data);
            imageGroups.enter().append("g").classed('img', true);
            imageGroups.exit().remove();
            var images = this.svg.selectAll("g.img").selectAll("image").data(function (d) { return d.characters; });

            images
                .enter()
                .append("image")
                .attr("width", function (d) { return pointer.calculateImageInfo(x1.bandwidth(), pointer.maxPhotoSize, x1.bandwidth(), pointer); })
                .attr("height", function (d) { return pointer.calculateImageInfo(x1.bandwidth(), pointer.maxPhotoSize, x1.bandwidth(), pointer); })
                .attr("x", function (d) { return pointer.calculateImageInfo(pointer.xScale(d.parent) + x1(d.name) + x1.bandwidth() / 2 - x1.bandwidth() / 2, pointer.xScale(d.parent) + x1(d.name) + x1.bandwidth() / 2 - pointer.maxPhotoSize / 2, x1.bandwidth(), pointer); })
                .attr("y", function (d) { return pointer.height - pointer.margin.bottom; })
                .merge(images) // get the already existing elements as well
                .transition() // and apply changes to all of them
                .duration(this.transitionSpeed)
                .attr("class", "img")
                .attr("xlink:href", function (d) { return "../../../assets/images/" + d.name + imageName + ".png"; })
                .attr("opacity", function (d) { if (yPoints[d.parent][d.name][yPoints[d.parent][d.name]?.length - 1].y > 0 && (pointer.minPhotoSize <= pointer.xScale.bandwidth())) return 1; else return 0 })
                .attr("width", function (d) { return pointer.calculateImageInfo(x1.bandwidth(), pointer.maxPhotoSize, x1.bandwidth(), pointer); })
                .attr("height", function (d) { return pointer.calculateImageInfo(x1.bandwidth(), pointer.maxPhotoSize, x1.bandwidth(), pointer); })
                .attr("x", function (d) { return pointer.calculateImageInfo(pointer.xScale(d.parent) + x1(d.name) + x1.bandwidth() / 2 - x1.bandwidth() / 2, pointer.xScale(d.parent) + x1(d.name) + x1.bandwidth() / 2 - pointer.maxPhotoSize / 2, x1.bandwidth(), pointer); })
                .attr("y", function (d) { return pointer.calculateImageInfo(pointer.yScale(yPoints[d.parent][d.name][yPoints[d.parent][d.name]?.length - 1].y) - x1.bandwidth(), pointer.yScale(yPoints[d.parent][d.name][yPoints[d.parent][d.name].length - 1].y) - pointer.maxPhotoSize, x1.bandwidth(), pointer); })
                ;

            images.exit().remove();
        }

    }

    createBarChartOfImages(data, tooltipLabel)
    {
        if (data[0].column[0].length <= 0)
        {
            this.clearSvg();
            return;
        }

        this.svg.selectAll("g.dot").remove();
        this.svg.selectAll(".line").remove();
        this.svg.selectAll("rect").remove();

        console.log(data);

        this.xScale = this.createScaleBand(data.map(function (d)
        {
            return d.name;
        }), this.width, this.margin, 0.05);
        
        let maxSize = 0;
        data.forEach(episode =>
        {
            if (episode.column.length > maxSize)
                maxSize = episode.column.length;
        });
        this.yScale = d3.scaleLinear()
            .rangeRound([this.height - this.margin.bottom, this.margin.top]);
        this.yScale.domain([]);
        const totalSize = maxSize * (this.xScale.bandwidth() * 1.8359375);
        if(totalSize > 300)
        {
            this.xScale.padding(0.45);
        }else if (totalSize > 200)
        {
            this.xScale.padding(0.30);
        }
        this.createAxes(tooltipLabel, null, null);

        var imageGroups = this.svg.selectAll("g.img").data(data);
        imageGroups.enter().append("g").classed('img', true);
        imageGroups.exit().remove();
        var images = this.svg.selectAll("g.img").selectAll("image").data(function (d) { return d.column; });
        var imageHeight = this.xScale.bandwidth() * 1.8359375;
        images
            .enter()
            .append("image")
            .attr("width",  0)
            .attr("height", 0)
            .attr("x", 0)
            .attr("y", 0)
            .merge(images) // get the already existing elements as well
            .transition() // and apply changes to all of them
            .duration(this.transitionSpeed)
            .attr("class", "img")
            .attr("xlink:href", function (d) { return "../../../assets/images/" + d.label + ".png"; })
            .attr("opacity", 1)
            .attr("width", this.xScale.bandwidth())
            .attr("height", imageHeight)
            .attr("x", (d) => this.xScale(d.name))
            .attr("y", (d, i) => this.height - this.margin.bottom - i * imageHeight - imageHeight)
            .on('end', function (this: any, d)
            {
                d3.select(this)
                    .attr("data-original-title", d.label );
                d3.select(this).attr("class", "tooltipped");
                d3.select(this).attr("data-toggle", "tooltip");
            })
            ;

        images.exit().remove();
        
    }
}
