import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { select } from 'd3-selection'
import * as d3 from "d3"

class StackedBarNLineChart extends Component {
    constructor(props){
        super(props);
        this.createBarChart = this.createBarChart.bind(this)
    }
    componentDidMount() {
        this.createBarChart()
    }
    componentDidUpdate() {
        this.createBarChart()
    }
    createBarChart() {
        const node = this.node;
        var svg = select(node),
            margin = {top: 20, right: 20, bottom: 30, left: 40},
            width = 1500 - margin.left - margin.right,
            height = 900 - margin.top - margin.bottom,
            g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        var x = d3.scaleBand()
            .rangeRound([0, width])
            .paddingInner(0.05)
            .align(0.1);
        var y = d3.scaleLinear()
            .rangeRound([height, 0]);
        var initStackedBarChart = {
            draw: function(config) {
                var me = this,
                    stackKey = config.key,
                    data = config.data,
                    margin = {top: 20, right: 20, bottom: 30, left: 60},
                    parseDate = d3.timeParse("%m/%Y"),
                    width = 960 - margin.left - margin.right,
                    height = 500 - margin.top - margin.bottom,
                    xScale = d3.scaleBand().range([0, width]).padding(0.1),
                    yScale = d3.scaleLinear().range([height, 0]),
                    color = function(i){
                        var ar = ["#0159AD","#297DD6","#5AD3FF"];
                        return ar[i];
                    },
                    xAxis = d3.axisBottom(xScale).tickFormat(d3.timeFormat("%b %Y")),
                    yAxis =  d3.axisLeft(yScale),
                    svg = select(node).append("svg")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom)
                        .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var stack = d3.stack()
                    .keys(stackKey)
                    .order(d3.stackOrderNone)
                    .offset(d3.stackOffsetNone);

                var layers= stack(data);
                data.sort(function(a, b) { return b.total - a.total; });
                xScale.domain(data.map(function(d) {
                    return parseDate(d.date);
                }));
                yScale.domain([0, d3.max(layers[layers.length - 1], function(d) { return d[0] + d[1]; }) ]).nice();

                var layer = svg.selectAll(".layer")
                    .data(layers)
                    .enter().append("g")
                    .attr("class", "layer")
                    .style("fill", function(d, i) { return color(i); });

                layer.selectAll("rect")
                    .data(function(d) { return d; })
                    .enter().append("rect")
                    .attr("x", function(d) {
                        return xScale(parseDate(d.data.date))+20;
                    })
                    .attr("y", function(d) { return yScale(d[1]); })
                    .attr("height", function(d) { return yScale(d[0]) - yScale(d[1]); })
                    .attr("width", 30);

                svg.append("g")
                    .attr("class", "axis axis--x")
                    .attr("transform", "translate(0," + (height+0) + ")")
                    .call(xAxis);

                svg.append("g")
                    .attr("class", "axis axis--y")
                    .attr("transform", "translate(0,0)")
                    .call(yAxis);

                svg.append("text")
                    .attr("transform", "rotate(-90)")
                    .attr("y", 0 - margin.left)
                    .attr("x",0 - (height / 2))
                    .attr("dy", "1em")
                    .style("text-anchor", "middle")
                    .attr("class","y-axis-label")
                    .attr("fill","gray")
                    .text("NUMBER OF PATIENTS");

            }
        };
        var data = [{"date":"1/2017","total":32393,"New":61,"NewBrand":883,"Refills":224},{"date":"2/2017","total":30919,"New":2120,"NewBrand":42,"Refills":361},{"date":"3/2017","total":30107,"New":1205,"NewBrand":832,"Refills":472},{"date":"4/2017","total":32252,"New":477,"NewBrand":48,"Refills":157},{"date":"5/2017","total":35473,"New":508,"NewBrand":49,"Refills":137},{"date":"6/2017","total":38863,"New":802,"NewBrand":209,"Refills":231},{"date":"7/2017","total":42647,"New":382,"NewBrand":134,"Refills":333},{"date":"8/2017","total":44614,"New":483,"NewBrand":164,"Refills":25},{"date":"9/2017","total":47751,"New":189,"NewBrand":276,"Refills":220},{"date":"10/2017","total":46852,"New":128,"NewBrand":353,"Refills":218},{"date":"11/2017","total":37853,"New":178,"NewBrand":333,"Refills":32},{"date":"12/2017","total":43217,"New":91,"NewBrand":18,"Refills":28}]
        var key = ["NewBrand", "Refills", "New"];
        initStackedBarChart.draw({
            data: data,
            key: key,
            element: 'stacked-bar'
        });
    }
    render() {
        return <svg ref={node => this.node = node}
                    width={1280} height={500}>
        </svg>
    }
}
export default StackedBarNLineChart