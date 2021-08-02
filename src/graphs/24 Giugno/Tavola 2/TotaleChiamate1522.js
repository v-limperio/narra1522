import React, { useRef } from 'react';
import * as d3 from "d3";

const TotaleChiamate1522 = () => {
    const ref = useRef();
    var margin = { top: 40, right: 10, bottom: 20, left: 40 },
        width = 600 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom

    const github_gist = "https://raw.githubusercontent.com/v-limperio/CAV_1522/main/json/24%20Giugno/Tavola-2.json";

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
        ])
            .then(
                function (allData) {
                    const chiamate = allData[0],
                        totale_chiamate = d3.filter(chiamate, d => d.motivo_chiamata === "Totale valide"), //Filtro il totale delle chiamate
                        allKeys = Object.keys(totale_chiamate[0]),
                        groupKey = allKeys[0],
                        keys = allKeys.slice(2),
                        colors = d3
                            .scaleOrdinal()
                            .range(["#98abc5", "#6b486b"]);

                    //Genero l'svg
                    const svg = d3
                        .select(ref.current)
                        .classed("svg-container", true)
                        .attr("class", "svg-content-responsive")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom)
                        .attr("viewBox", "0 0 650 550")
                        .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                    //Legenda
                    svg.append("circle").attr("cx", 150).attr("cy", 15).attr("r", 6).style("fill", "#98abc5")
                    svg.append("text").attr("x", 160).attr("y", 15).text("Chiamata telefonica").style("font-size", "15px").attr("alignment-baseline", "middle")
                    svg.append("circle").attr("cx", 350).attr("cy", 15).attr("r", 6).style("fill", "#6b486b")
                    svg.append("text").attr("x", 360).attr("y", 15).text("Chat").style("font-size", "15px").attr("alignment-baseline", "middle")

                    //TITOLO
                    svg.append("text")
                        .attr("class", "title")
                        .attr("x", (width / 2))
                        .attr("y", 0 - (margin.top / 2))
                        .attr("text-anchor", "middle")
                        .style("font-size", "16px")
                        .style("text-decoration", "underline")
                        .text("Totale dei contatti validi al servizio 1522 (Telefono/Chat). Anno 2018/2020");

                    //Scala per l'asse x
                    var x = d3
                        .scaleBand()
                        .domain(totale_chiamate.map(d => d[groupKey]))
                        .range([0, width])
                        .paddingInner(0.1);
                    //Asse x
                    svg.append("g")
                        .attr("class", "xAxis")
                        .attr("transform", `translate(0,${height})`)
                        .style("font-size", 12)
                        .call(d3.axisBottom(x));

                    //Sottgruppi
                    var x1 = d3
                        .scaleBand()
                        .domain(keys)
                        .rangeRound([0, x.bandwidth()])
                        .padding(0.05);

                    //Scala per l'asse y
                    var y = d3
                        .scaleLinear()
                        .domain([0, d3.max(totale_chiamate, d => d3.max(keys, key => d[key]))]).nice()
                        .range([height, 0]);
                    //Asse y
                    svg.append("g")
                        .attr("class", "yAxis")
                        .style("font-size", 12)
                        .call(d3.axisLeft(y))
                        .call(g => g.select(".domain").remove());

                    //Barchart
                    svg.append("g")
                        .selectAll("g")
                        .data(totale_chiamate)
                        .join("g")
                        .attr("transform", d => `translate(${x(d[groupKey])},0)`)
                        .selectAll("rect")
                        .data(d => keys.map(key => ({ key, value: d[key] })))
                        .join("rect")
                        .attr("x", d => x1(d.key))
                        .attr("y", d => y(d.value))
                        .attr("width", x1.bandwidth())
                        .attr("height", d => y(0) - y(d.value))
                        .attr("fill", d => colors(d.key))
                        .append("title")
                        .text(d => `Canale: ${d.key}
Contatti: ${d.value}`);

                    //Animazioni
                },
            );
    });


    return (
        <svg ref={ref} />
    );
}
export default TotaleChiamate1522;