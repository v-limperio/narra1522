import React, { useRef } from 'react';
import * as d3 from "d3";


const MotivoChiamata1522 = () => {
    const ref = useRef();
    const github_gist = "https://raw.githubusercontent.com/v-limperio/CAV_1522/main/json/24%20Giugno/Tavola-2.json";
    var margin = { top: 40, right: 10, bottom: 20, left: 40 },
        width = 1300 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom

    React.useEffect(() => {
        Promise.all([
            d3.json(github_gist, function (d) {
                return {
                    anno: d.anno,
                    motivo_chiamata: d.motivo_chiamata,
                    chiamata_telefonica: d.chiamata_telefonica,
                    chat: d.chat
                }
            })
        ]).then(
            function (allData) {
                const chiamate = allData[0];

                //Genero l'svg
                const svg = d3
                    .select(ref.current)
                    .classed("svg-container", true)
                    .attr("class", "svg-content-responsive")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("viewBox", "0 0 1360 550")
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                //TITOLO
                svg.append("text")
                    .attr("class", "title")
                    .attr("x", (width / 2))
                    .attr("y", 0 - (margin.top / 2))
                    .attr("text-anchor", "middle")
                    .style("font-size", "16px")
                    .style("text-decoration", "underline")
                    .text("Motivazioni dei contatti validi al servizio 1522.");

                //Asse X
                var x = d3
                    .scaleBand()
                    .domain(chiamate.map(d => d.motivo_chiamata))
                    .range([margin.left, width - margin.right])
                    .padding(0.2);

                svg.append("g")
                    .attr("class", "xAxis")
                    .attr("transform", `translate(0,${height - margin.bottom})`)
                    .style("font-size", 12)
                    .call(d3.axisBottom(x))
                    .selectAll(".tick text")
                    .call(wrap, x.bandwidth());

                //Asse Y
                var y = d3
                    .scaleLinear()
                    .domain([0, d3.max(chiamate, d => d.chiamata_telefonica)])
                    .range([height - margin.bottom, margin.top]);
                
                svg.append("g")
                    .attr("class", "yAxis")
                    .attr("transform", `translate(${margin.left},0)`)
                    .style("font-size",12)
                    .call(d3.axisLeft(y))
                    .call(g => g.select(".domain").remove());

                //Barchart
                svg.append("g")
                    .selectAll("g")
                    .data(chiamate)
                    .enter()
                    .append("rect")
                        .attr("x", d => x(d.motivo_chiamata))
                        .attr("y", d => y(d.chiamata_telefonica))
                        .attr("width", x.bandwidth())
                        .attr("height", d => height - y(0))
                        .attr("fill", "#98abc5")
                        .append("title")
                        .text(d =>  `${d.motivo_chiamata}
Chiamate: ${d.chiamata_telefonica}`);

                //Animation
                svg.selectAll("rect")
                    .transition()
                    .duration(2000)
                    .attr("y", d => y(d.chiamata_telefonica))
                    .attr("height", d  => y(0) - y(d.chiamata_telefonica));

                //Funzione di Wrap per le etichette troppo lunghe 
                function wrap(text, width) {
                    text.each(function () {
                        var text = d3.select(this),
                            words = text.text().split(/\s+/).reverse(),
                            word,
                            line = [],
                            lineNumber = 0,
                            lineHeight = 1, // ems
                            y = text.attr("y"),
                            dy = parseFloat(text.attr("dy")),
                            tspan = text.text(null)
                                .append("tspan")
                                .attr("x", 0)
                                .attr("y", y)
                                .attr("dy", dy + "em");
                        while (!!(word = words.pop())) {
                            line.push(word);
                            tspan.text(line.join(" "));
                            if (tspan.node().getComputedTextLength() > width) {
                                line.pop();
                                tspan.text(line.join(" "));
                                line = [word];
                                tspan = text.append("tspan")
                                    .attr("x", 0)
                                    .attr("y", y)
                                    .attr("dy", `${++lineNumber * lineHeight + dy}em`)
                                    .text(word);
                            }
                        }
                    });
                }
                // Fine Funzione

            })
    });

    return <svg ref={ref} />
};

export default MotivoChiamata1522;