import React, { useRef } from 'react';
import * as d3 from "d3";
import { fcumsum } from 'd3';

const Tavola2 = () => {
    const ref = useRef();
    var margin = { top: 50, right: 150, bottom: 80, left: 90 },
        width = 1460 - margin.left - margin.right,
        height = 650 - margin.top - margin.bottom

    const github_gists = [
        "https://raw.githubusercontent.com/v-limperio/CAV_1522/main/24_Giugno/Tavola-2/Tavola-2-2018.csv",
        "https://raw.githubusercontent.com/v-limperio/CAV_1522/main/24_Giugno/Tavola-2/Tavola-2-2019.csv",
        "https://raw.githubusercontent.com/v-limperio/CAV_1522/main/24_Giugno/Tavola-2/Tavola-2-2020.csv"
    ];

    React.useEffect(() => {
        Promise.all([
            d3.csv(github_gists[0], function (d2018) {
                return {
                    chiamate_utenti: d2018.chiamate_utenti,
                    chiamata_telefonica: +d2018.chiamata_telefonica,
                    chat: +d2018.chat
                }
            }),
            d3.csv(github_gists[1], function (d2019) {
                return {
                    chiamate_utenti: d2019.chiamate_utenti,
                    chiamata_telefonica: +d2019.chiamata_telefonica,
                    chat: +d2019.chat
                }
            }),
            d3.csv(github_gists[2], function (d2020) {
                return {
                    chiamate_utenti: d2020.chiamate_utenti,
                    chiamata_telefonica: +d2020.chiamata_telefonica,
                    chat: +d2020.chat
                }
            })
        ])
            .then(
                function (allData) {
                    const data2018 = allData[0],
                        data2019 = allData[1],
                        data2020 = allData[2],
                        colors = d3
                            .scaleOrdinal()
                            .range(["#98abc5", "#d0743c"]),
                        keys = data2018.columns.slice(1),
                        groupkey = data2018.columns[0];

                    //Genero l'svg
                    const svg = d3
                        .select(ref.current)
                        .classed("svg-container", true)
                        .attr("class", "svg-content-responsive")
                        .attr("width", "100%")
                        .attr("height", "100%")
                        .attr("viewBox", "0 0 1360 650")
                        .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                    //Legenda
                    svg.append("circle").attr("cx",370).attr("cy",15).attr("r", 6).style("fill", "#98abc5")
                    svg.append("text").attr("x", 390).attr("y", 15).text("Chiamata telefonica").style("font-size", "15px").attr("alignment-baseline","middle")
                    svg.append("circle").attr("cx",640).attr("cy",15).attr("r", 6).style("fill", "#d0743c")
                    svg.append("text").attr("x", 660).attr("y", 15).text("Chat").style("font-size", "15px").attr("alignment-baseline","middle")

                    //TITOLO
                    svg.append("text")
                        .attr("class", "title")
                        .attr("x", (width / 2))
                        .attr("y", 0 - (margin.top / 2))
                        .attr("text-anchor", "middle")
                        .style("font-size", "16px")
                        .style("text-decoration", "underline")
                        .text("Motivi delle chiamate valide per tipologia di canale (telefono, chat). Anno 2020");

                    //Scala per l'asse x
                    var x = d3
                        .scaleBand()
                        .domain(data2018.map(function (d) { return d.chiamate_utenti })) // ritorna la lista di tipologie di chiamate
                        .range([margin.left, width - margin.right])
                        .padding(0.1);
                    //Asse x
                    svg.append("g")
                        .attr("class", "xAxis")
                        .attr("transform", `translate(0,${height - margin.bottom})`)
                        .call(d3.axisBottom(x).tickSizeOuter(0))
                        .selectAll(".tick text")
                        .call(wrap, x.bandwidth());
                    
                    //Prelevo Chiamate telefoniche e chat
                    var x1 = d3
                        .scaleBand()
                        .domain(keys)
                        .rangeRound([0,x.bandwidth()])
                        .padding(0.1);

                    //Scala per l'asse y
                    var y = d3
                        .scaleLinear()
                        .domain([0, 20000])
                        .range([height - margin.bottom, margin.top]);
                    //Asse y
                    svg.append("g")
                        .attr("class", "yAxis")
                        .attr("transform", `translate(${margin.left},0)`)
                        .call(d3.axisLeft(y))
                        .call(g => g.select(".domain").remove());

                    //BARCHART
                    svg.append("g")
                        .selectAll("g")
                        .data(data2020)
                        .join("g")
                            .attr("transform", d => `translate(${x(d[groupkey])},0)`)
                        .selectAll("rect")
                        .data(d => keys.map(key => ({key, value: d[key]})))
                        .join("rect")
                            .attr("x", (d) => x1(d.key))
                            .attr("y", d => y(d.value))
                            .attr("height", d => y(0) - y(d.value))
                            .attr("width", x1.bandwidth())
                            .attr("fill", d => colors(d.key));

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

                },
            );
    });


    return (
        <svg ref={ref} />
    );
}
export default Tavola2;