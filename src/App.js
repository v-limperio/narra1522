import './App.css';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import React from 'react';
import MainNavbar from './UI_components/main_navbar';
import TotaleChiamate1522 from './graphs/24 Giugno/Tavola 2/TotaleChiamate1522';
import MotivoChiamata1522 from './graphs/24 Giugno/Tavola 2/MotivoChiamata1522';
import AndamentoChiamate from './graphs/24 Giugno/Tavola 7/AndamentoChiamate';

const App = () => {
  return (
    <Container fluid>
      <MainNavbar />

      <Row className="testata">
        <Col className="coltestata">
          <h1>Heading</h1>
          <h3>Prova Grafico (Verticale)</h3>
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
            nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
            vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
        </Col>
        <Col md className="hc-graphbox">
          <TotaleChiamate1522 />
        </Col>
      </Row>

      <Row className="testata">
        <Col className="coltestata">
          <h1>Heading</h1>
          <h3>Prova Grafico (Orizzontale)</h3>
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
            nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
            vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="MotivoChiamata1522TitleBox">
        </Col>
      </Row>
      <Row>
        <Col className="MotivoChiamata1522InputBox">
          <p>Anno: <select id="selectAnno"></select></p>
          <p>Dati: <select id="selectData"></select></p>
        </Col>
      </Row>
      <Row className="hr-graphbox">
        <Col md className="hr-graphbox">
          <MotivoChiamata1522 />
        </Col>
      </Row>

      <Row className="testata">
        <Col className="coltestata">
          <h1>Heading</h1>
          <h3>Prova Grafico (Orizzontale)</h3>
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
            nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
            vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
        </Col>
      </Row>
      <Row className="hr-graphbox">
        <Col md className="hr-graphbox">
          <AndamentoChiamate />
        </Col>
      </Row>

    </Container>
  );
};

export default App;
