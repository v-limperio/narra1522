import React, { useRef } from 'react';
import * as d3 from "d3";

// Tavola 7 - Chiamate da utenti dal 1°marzo 2020 al 31 ottobre 2020. Anni 2013-2020. Valori assoluti

const AndamentoChiamate = () => {
    const ref = useRef(),
        github_gist = "https://raw.githubusercontent.com/v-limperio/CAV_1522/main/json/24%20Giugno/Tavola-7.json";
    var margin = { top: 40, right: 10, bottom: 70, left: 40 },
        width = 1300 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom

    React.useEffect(() => {
        d3.json(github_gist, function (d) {
            return {
                intervallo_date: d.intervallo_date,
                chiamate_valide: d.chiamate_valide
            }
        }).then(
            function (allData) {
                const chiamate = allData,
                format = d3.timeFormat("%Y-%m-%d");

                //SVG
                const svg = d3
                    .select(ref.current)
                    .attr("class", "svg-content-responsive")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .attr("viewBox", "0 0 1400 550")
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                //TITOLO
                svg.append("text")
                    .attr("class", "title")
                    .attr("x", (width / 2))
                    .attr("y", 0 - (margin.top / 2))
                    .attr("text-anchor", "middle")
                    .style("text-decoration", "underline")
                    .text("Chiamate da utenti dal 1°marzo al 31 ottobre. Dal 2013 al 2020.");
            }
        )
    });

    return <svg ref={ref} />
}

export default AndamentoChiamate