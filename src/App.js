import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import MainNavbar from './UI_components/main_navbar';
import Chiamate1522 from './graphs/chiamate1522';

const App = () => {
  return (
    <Container fluid>
      <MainNavbar />
      <Row className="hr-graphbox">
        <Col md className="hc-graphbox">
          <Chiamate1522 />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
