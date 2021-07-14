import React from 'react';
import { Col } from 'react-bootstrap';
import * as d3 from "d3";

const GraphChiamate1522 = () => {
    const chiamate2018 = d3.csv("https://raw.githubusercontent.com/v-limperio/CAV_1522/main/24_Giugno/Tavola-2/Tavola-2-2018.csv");
    const chiamate2019 = d3.csv("https://raw.githubusercontent.com/v-limperio/CAV_1522/main/24_Giugno/Tavola-2/Tavola-2-2019.csv");
    const chiamate2020 = d3.csv("https://raw.githubusercontent.com/v-limperio/CAV_1522/main/24_Giugno/Tavola-2/Tavola-2-2020.csv");

    const dimensions = {
        width: 600,
        height: 300,
        margin: { top: 30, right: 30, bottom: 30, left: 60 }
    };

    React.useEffect(() => {

    });

    return <Col>Graphbox</Col>
};

export default GraphChiamate1522;