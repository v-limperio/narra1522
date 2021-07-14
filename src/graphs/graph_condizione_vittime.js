import React from 'react';
import { Col } from 'react-bootstrap';
import * as d3 from "d3";

const GraphCondizioneVittime = () => {
    const condizione_occupazionale = d3.csv("https://raw.githubusercontent.com/v-limperio/CAV_1522/main/17_Maggio/Tavola%209/Tavola-9-Condizione-Occupazionale.csv");
    console.log(condizione_occupazionale);
    const dimensions = {
        width: 600,
        height: 300,
        margin: { top: 30, right: 30, bottom: 30, left: 60 }
    };

    React.useEffect(() => {

    });

    return <p>Graphbox</p>
};

export default GraphCondizioneVittime;