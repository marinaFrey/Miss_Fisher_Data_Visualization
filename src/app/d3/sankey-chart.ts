import { Visualization } from './visualization';
import * as d3 from 'd3';
import { sankey as d3Sankey, sankeyLinkHorizontal } from 'd3-sankey';

export class SankeyChart extends Visualization
{
    constructor(svgName: string, width?: number, height?: number)
    {
        super(svgName, width ?? 100, height ?? 100);
    }

    createSankeyChart(data, color)
    {
        const nodeWidth = 25;
        const nodePadding = 3;
        
        var graph = { nodes: data[1], links: data[0] };
        
        this.svg.selectAll('path').remove();

        var nodeMap = {};
        graph.nodes.forEach(function (x, i) { nodeMap[x.name] = i; });
        graph.links = graph.links.map(function (x)
        {
            return {
                source: nodeMap[x['source']],
                target: nodeMap[x['target']],
                value: x.value
            };
        });

        const { nodes, links } = d3Sankey()
            .nodeWidth(nodeWidth)
            .nodePadding(nodePadding)
            /*.nodeSort(function (d,e) {
              console.log(d,e,d.value < e.value);return d.value < e.value;
            })*/
            .extent([[1, 1], [this.width - 1, this.height - 25]])({
                nodes: graph.nodes.map(d => Object.assign({}, d)),
                links: graph.links.map(d => Object.assign({}, d))
            });
            
        var rects = this.svg.selectAll("rect").data(nodes.filter(d => !d.photo));
        console.log(nodes, rects);
        rects
            .enter()
            .append("rect") // Add a new rect for each new elements
            .attr("x", function (d) { return d.x0; })
            .attr("y", function (d) { return d.y0; })
            .attr("width", nodeWidth)
            .on("mouseover", function (this: any,d, i) { d3.select(this).attr("fill", color[d.name]); })
            .on("mouseout", function (this: any,d, i) { d3.select(this).attr("fill", color[d.name]); })
            .merge(rects) // get the already existing elements as well
            .transition() // and apply changes to all of them
            .duration(this.transitionSpeed)
            .attr("class", "bar")
            .on('start', function (this: any,d) { d3.select(this).attr("fill", color[d.name]) })
            .attr("x", function (d) { return d.x0; })
            .attr("y", function (d) { return d.y0; })
            .attr("width", nodeWidth)
            .attr("height", function (d) { return d.y1 - d.y0; })
            /*.on('end', function ()
            {
                d3.select(this)
                    .attr("data-original-title", (d) => `${d.name}: ${d.value}`);
                d3.select(this).attr("class", "tooltipped");
                d3.select(this).attr("data-toggle", "tooltip");
            })*/

        rects.exit().remove();

        const link = this.svg.append('g')
            .attr('fill', 'none')
            .attr('stroke-opacity', 0.5)
            .selectAll('g')
            .data(links)
            .enter()
            .append('g')
            .style('mix-blend-mode', 'multiply')

        const guid = () =>
        {
            const _p8 = (i) =>
            {
                const p = (`${Math.random().toString(16)}000000000`).substr(2, 8)
                return i ? `-${p.substr(0, 4)}-${p.substr(4, 4)}` : p
            }
            return _p8(false) + _p8(true) + _p8(true) + _p8(false)
        }
        const gradient = link.append('linearGradient')
            .attr('id', (d) =>
            {
                d.uid = guid()
                return d.uid
            })
            .attr('gradientUnits', 'userSpaceOnUse')
            .attr('x1', d => d.source.x1)
            .attr('x2', d => d.target.x0)

        gradient.append('stop')
            .attr('offset', '0%')
            .attr('stop-color', d => color[d.source.name])

        gradient.append('stop')
            .attr('offset', '100%')
            .attr('stop-color', d => color[d.target.name])



        link.append('path')
            .attr('d', sankeyLinkHorizontal())
            .transition()
            .duration(this.transitionSpeed)
            .attr('stroke', d => `url(#${d.uid})`)
            .attr('stroke-width', d => Math.max(1, d.width))
        
        link.exit().remove();

        var texts = this.svg.selectAll("text").data(nodes);

        texts
            .enter()
            .append("text") // Add a new rect for each new elements
            .merge(texts) // get the already existing elements as well   
            .text(d => `${d.name} (${(d.value)})`)
            .transition()
            .duration(this.transitionSpeed * 1.6)
            .attr('x', d => (d.x0 < this.width / 2 ? d.x1 + 6 : d.x0 - 6))
            .attr('y', d => (d.y1 + d.y0) / 2)
            .attr('font-size', '10px')
            .attr('dy', '0.35em')
            .attr('text-anchor', d => (d.x0 < this.width / 2 ? 'start' : 'end'))
            .attr('opacity', 1);

        texts.exit().remove();
    }
}
