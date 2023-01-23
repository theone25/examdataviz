import * as d3 from 'd3';

const draw = (props) => {
    const data = props.data;

    const dataset = [
        { label: 'Failed', count: data.filter(x => x["Target"] === 1).length, Percentage: data.filter(x => x["Target"] === 1).length/data.length*100},
        { label: 'No Failure', count: data.filter(x => x["Target"] === 0).length, Percentage: data.filter(x => x["Target"] === 0).length/data.length*100 }
    ]

    d3.select('.vis-piechart1 > *').remove();
    const margin = { top: 10, right: 200, bottom: 30, left: 40 };
    const width = props.width - margin.left - margin.right;
    const height = props.height - margin.top - margin.bottom;

    let svg = d3.select('.vis-piechart1')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + (width / 2 + margin.left) + ',' + (height / 2 + margin.top) + ')');

    let radius = Math.min(width, height) / 2;

    let color = d3.scaleOrdinal()
        .range(['steelblue', 'LightBlue', 'LightSteelBlue']);

    let arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);

    let pie = d3.pie()
        .value(function (d) { return d.count; })
        .sort(null);

    svg.selectAll('path')
        .data(pie(dataset))
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', function (d, i) {
            return color(d.data.label);
        });
    let legendG = svg.selectAll(".legend")
        .data(pie(dataset))
        .enter().append("g")
        .attr("transform", function (d, i) {
            return "translate(" + (i * 120 +180) + "," + 0 + ")"; 
        })
        .attr("class", "legend");

    legendG.append("rect")
        .attr("width", 10)
        .attr("height", 10)
        .attr("transform", function (d, i) {
            return "translate(-10,0)"; 
        })
        .attr("fill", function (d, i) {
            return color(i);
        });

    legendG.append("text") 
        .text(function (d) {
            return d.data.label + " " + d.data.Percentage+"%";
        })
        .style("font-size", 12)
        .attr("y", 10)
        .attr("transform", function (d, i) {
            return "translate(-10,0)"; 
        })
        .attr("x", 11);
}

export default draw;