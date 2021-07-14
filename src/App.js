import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import GraphChiamate1522 from './graphs/graph_chiamate1522';
import MainNavbar from './UI_components/main_navbar';
import GraphCondizioneVittime from './graphs/graph_condizione_vittime';

class App extends React.Component {
  render() {
    return (
      <Container fluid>
        <MainNavbar />
        <Row className="Row1">
          <Col className="Textbox">
            <h1>Heading</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
              sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
              vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </Col>
          <Col className="GraphCondizioneVittime">
            <GraphCondizioneVittime />
          </Col>
        </Row>
      </Container>
    );
  }
}


export default App;
