import { Visualization } from './visualization';
import * as d3 from 'd3';

export class ForceChart extends Visualization
{
    force = d3.forceSimulation()
        .force("charge", d3.forceManyBody().strength(-1500).distanceMin(50).distanceMax(500))
        .force("link", d3.forceLink().id(function (d) { return d.index }))
        .force("center", d3.forceCenter(this.width / 2, this.height / 2))
        .force("y", d3.forceY(0.001))
        .force("x", d3.forceX(0.001))


    constructor(svgName: string, width: number, height: number)
    {
        super(svgName, width, height);
    }

    create(data)
    {
        this.force
            .nodes(data.nodes)
            .force("link").links(data.links)

        var link = this.svg.selectAll(".link")
            .data(data.links)
            .enter()
            .append("line")
            .attr("class", "link")
            .attr("stroke", (d) => this.strokeColor(d.group));

        var node = this.svg.selectAll(".node")
            .data(data.nodes)
            .enter().append("g")
            .attr("class", "node")
            .style("cursor", "pointer")
            .attr('class', 'tooltipped')
            .attr('data-toggle', 'tooltip')
            .attr('data-original-title', function (d) { return d.name })
            .call(d3.drag()
                .on("start", (event, d) =>
                {
                    if (!event.active) this.force.alphaTarget(0.1).restart();
                    d.fx = d.x;
                    d.fy = d.y;
                })
                .on("drag", (event, d) =>
                {
                    d.fx = event.x;
                    d.fy = event.y;
                })
                .on("end", (event, d) =>
                {
                    if (!event.active) this.force.alphaTarget(0.1);
                    d.fx = null;
                    d.fy = null;
                }));

        var imgSize = this.width / 10;
        node.append("image")
            .data(data.nodes)
            .attr("width", imgSize)
            .attr("height", imgSize)
            .attr("xlink:href", (d) => "../../../assets/images/" + d.name + ".png")
            .attr("x", -(imgSize / 2))
            .attr("y", -(imgSize / 2));

        this.force.on("tick", function ()
        {
            link.attr("x1", function (d)
            {
                return d.source.x;
            })
                .attr("y1", function (d)
                {
                    return d.source.y;
                })
                .attr("x2", function (d)
                {
                    return d.target.x;
                })
                .attr("y2", function (d)
                {
                    return d.target.y;
                });
            node.attr("transform", function (d)
            {
                return "translate(" + d.x + "," + d.y + ")";
            });
        });
    }

    strokeColor(group)
    {
        if (group == 0) // asc
        {
            return "#ccc"
        } else if (group == 1) // love interest
        {
            return "red"
        } else if (group == 2) // work
        {

            return "#4d4691"
        } else if (group == 3)
        { // family
            return "purple"
        } else
        { // friends
            return "pink"
        }
    }

    color(group)
    {
        if (group == 1)
        {
            return "#aaa"
        } else if (group == 2)
        {
            return "#fbc280"
        } else
        {
            return "#405275"
        }
    }
}
