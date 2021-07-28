import React, { useRef } from 'react';
import * as d3 from "d3";

// Tavola 7 - Chiamate da utenti dal 1°marzo 2020 al 31 ottobre 2020. Anni 2013-2020. Valori assoluti

const Tavola7 = () => {
    const ref = useRef(),
        github_gist = "https://raw.githubusercontent.com/v-limperio/CAV_1522/main/24_Giugno/Tavola-7.csv";

    var margin = { top: 50, right: 80, bottom: 80, left: 40 },
        width = 900 - margin.left - margin.right,
        height = 697 - margin.top - margin.bottom;

    React.useEffect(() => {
        d3.csv(github_gist, function (d) {
            return {
                data: new Date(d.data),
                chiamate_2013: +d.chiamate_2013,
                chiamate_2014: +d.chiamate_2014,
                chiamate_2015: +d.chiamate_2015,
                chiamate_2016: +d.chiamate_2016,
                chiamate_2017: +d.chiamate_2017,
                chiamate_2018: +d.chiamate_2018,
                chiamate_2019: +d.chiamate_2019,
                chiamate_2020: +d.chiamate_2020,
            }
        }).then(
            function (allData) {
                const chiamate = allData;
                const format = d3.timeFormat("%Y-%m-%d");
                var keys = chiamate.columns.slice(1);

                console.log(d3.extent(chiamate, d => d.data));

                //SVG
                const svg = d3
                    .select(ref.current)
                    .attr("class", "svg-content-responsive")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("viewBox", "0 0 750 697")
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");       

                //TITOLO
                svg.append("text")
                    .attr("class", "title")
                    .attr("x", (width / 2) - margin.left)
                    .attr("y", 0 - (margin.top / 2))
                    .attr("text-anchor", "middle")
                    .style("font-size", "18")
                    .style("text-decoration", "underline")
                    .text("Chiamate da utenti dal 1°marzo al 31 ottobre. Dal 2013 al 2020.");

                //Scale per Asse x
                var x = d3
                    .scaleUtc()
                    .domain(d3.extent(chiamate, d => d.data))
                    .range([margin.left, width - margin.right]);
                //Asse x
                svg.append("g")
                    .attr("class", "xAxis")
                    .style("font-size", 14)
                    .attr("transform", `translate(-20,${height - margin.bottom})`)
                    .call(d3.axisBottom(x));

                //Scale per Asse y
                var y = d3
                    .scaleLinear()
                    .domain([0, 300])
                    .range([height - margin.bottom, margin.top])
                //Asse y
                svg.append("g")
                    .attr("class", "yAxis")
                    .style("font-size", 14)
                    .attr("transform", `translate(0,0)`)
                    .call(d3.axisLeft(y))
                    .call(g => g.select(".domain").remove());

                //Linechart
                svg.append("path")
                    .attr("class", "linechart-chiamate")
                    .datum(chiamate)
                    .attr("fill", "none")
                    .attr("stroke", "steelblue")
                    .attr("stroke-width", 2)
                    .attr("d", d3.line()
                        .x(function(d) {return x(d.data)})
                        .y(function(d) {return y(d.chiamate_2020)})
                        );

            }
        )
    });

    return <svg ref={ref} />
}

export default Tavola7