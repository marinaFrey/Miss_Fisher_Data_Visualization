import * as d3 from 'd3';
declare var $: any;

export class Visualization
{

    colorScale: any;
    xScale: any;
    yScale: any;
    svg: any;
    width: number;
    height: number;
    margin = {
        top: 50,
        right: 30,
        bottom: 80,
        left: 50
    };
    svgName: string;
    parent: any;
    data: any;
    transitionSpeed = 1000;
    minPhotoSize = 10;
    maxPhotoSize = 50;

    constructor(svgName: string, width: number, height: number)
    {
        this.width = width;
        this.height = height;
        this.svgName = svgName;
        this.createSvg(svgName, width, height);
    }

    createSvg(svgName: string, width: number, height: number)
    {
        this.svg = d3.select(svgName)
            .attr('width', width)
            .attr('height', height)
            .attr("viewBox", `0 0 ${width} ${height}`)
            ;

        this.clearSvg();
        return this.svg;
    }

    clearSvg()
    {
        this.svg.selectAll('*').remove();
    }

    setSvg()
    {
        this.svg = d3.select(this.svgName);
    }

    createXScale(domain, width, margin)
    {
        if (margin.top && margin.bottom)
        {
            this.xScale = d3.scaleLinear()
                .domain(domain)
                .range([margin.top, width - margin.bottom]);
        } else
        {
            this.xScale = d3.scaleLinear()
                .domain(domain)
                .range([margin, width - margin]);
        }

        return this.xScale;
    }

    createYScale(domain, height, margin)
    {
        if (margin.top && margin.bottom)
        {
            this.yScale = d3.scaleLinear()
                .domain(domain)
                .range([margin.top, height - margin.bottom]);
        } else
        {
            this.yScale = d3.scaleLinear()
                .domain(domain)
                .range([margin, height - margin]);
        }

        return this.yScale;
    }

    createScaleLinear(domain, size, margin)
    {
        let scale;
        if (margin.top && margin.bottom)
        {
            scale = d3.scaleLinear()
                .domain(domain)
                .range([margin.top, size - margin.bottom]);
        } else
        {
            scale = d3.scaleLinear()
                .domain(domain)
                .range([margin, size - margin]);
        }
        return scale;
    }

    createScaleBand(domain, size, margin, padding)
    {
        let scale;
        if (margin.top && margin.bottom)
        {
            scale = d3.scaleBand()
                .domain(domain)
                .rangeRound([margin.left, size - margin.right])
                .padding(padding);
        } else
        {
            scale = d3.scaleBand()
                .domain(domain)
                .rangeRound([margin, size - margin])
                .padding(padding);
        }
        return scale;
    }

    calculateImageInfo(responsiveSize, maximumSize, bandwidth, pointer)
    {
        if (pointer.minPhotoSize <= bandwidth)
        {
            if (bandwidth <= pointer.maxPhotoSize)
            {
                return responsiveSize;
            } else
            {
                return maximumSize;
            }
        }
        return 0;
    }

    highlightLine(d, c)
    {
        d3.selectAll('.line').attr('opacity', 0.3);
        d3.selectAll('#' + d.character.replace(/\s/g, '')).attr('stroke-width', 3).attr('opacity', 1);
        d3.selectAll('circle').attr('opacity', 0.3);
        d3.selectAll(c).attr('fill', d.highlightColor).attr('opacity', 1);
    }

    unhighlightLine(d, c)
    {
        d3.selectAll(c).attr('fill', d.color);
        d3.selectAll('.line').attr('opacity', 1);
        d3.selectAll('circle').attr('opacity', 1);
        d3.selectAll('#' + d.character.replace(/\s/g, '')).attr('stroke-width', 2).attr('opacity', 1);
    }

    createYAxis(yAxis, text)
    {
        this.svg.selectAll('.y.axis').remove();
        this.svg.append('g')
            .attr('transform', 'translate(' + (this.margin.left / 2 + 10) + ',0)')
            .attr('class', 'y axis').call(yAxis)
            .attr('font-size', '6px')
            .append('text')
            .attr('fill', '#000')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '0.71em')
            .attr('font-size', '6px')
            .attr('text-anchor', 'end')
            .text(text);
    }

    createXAxis(xAxis, text)
    {
        this.svg.selectAll('.x.axis').remove();
        this.svg.append('g')
            .attr('transform', 'translate(0,' + (this.height - this.margin.bottom) + ')')
            .attr('class', 'x axis')
            .call(xAxis)
            .selectAll('text')
            .attr('font-size', '6px')
            .style('text-anchor', 'start')
            .attr('transform', 'rotate(30)');
    }

    createAxes(yText, xText, tickFormatText, )
    {
        const yAxis = d3.axisLeft().scale(this.yScale);
        if (tickFormatText)
        {
            yAxis.tickFormat(d => d + tickFormatText);
        }
        const xAxis = d3.axisBottom(this.xScale);
        if (this.svg.selectAll('.y.axis').empty() && this.svg.selectAll('.x.axis').empty())
        {
            this.createYAxis(yAxis, yText);
            this.createXAxis(xAxis, xText);

        } else
        {
            this.svg.selectAll('.y.axis').transition().duration(this.transitionSpeed).call(yAxis).selectAll('text')
                .attr('font-size', '6px');
            this.svg.selectAll('.x.axis').transition().duration(this.transitionSpeed).call(xAxis).selectAll('text')
                .attr('font-size', '6px')
                .style('text-anchor', 'start')
                .attr('transform', 'rotate(30)');
        }
    }

    createTooltip(parentObject, label, valueEndText)
    {
        this.setTooltipText(parentObject, label, valueEndText);
        d3.select(parentObject).attr('class', 'tooltipped');
        d3.select(parentObject).attr('data-toggle', 'tooltip');
    }

    setTooltipText(parentObject, label, valueEndText)
    {
        d3.select(parentObject).attr('data-original-title', function (d)
        {
            let text;
            if (d.episode)
            {
                text = d[label] + ': ' + Math.round(d.value) + valueEndText + '<br/>' + 'S' + d.season + 'E' + d.episode + ': ' + d.name;
            } else
            {
                text = d[label] + ': ' + Math.round(d.value) + valueEndText + '<br/>' + 'Season ' + d.season;
            }
            return text;
        });
    }

    calculateHighestValue(data, vectorsName, vectorsName2)
    {
        var highestValue = 0;
        var sum = 0
        for (var i = 0; i < data.length; i++)
        {
            for (var j = 0; j < data[i][vectorsName].length; j++)
            {
                sum = 0;
                if (vectorsName2)
                {
                    for (var k = 0; k < data[i][vectorsName][j][vectorsName2].length; k++)
                    {
                        sum += data[i][vectorsName][j][vectorsName2][k].value;
                    }
                }
                else
                    sum = data[i][vectorsName][j].value;
                if (highestValue < sum)
                    highestValue = sum;
            }
            if (highestValue < sum)
                highestValue = sum;
        }

        return highestValue;
    }


}
