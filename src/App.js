import React from 'react';
import './App.css';
import { ScrollIcon } from 'react-transformicons';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Jumbotron fluid>
        <Container>
          <h1>Help U</h1>
          <p>
           Let me Help you
          </p>
          <ScrollIcon animation="butterfly" />
        </Container>
      </Jumbotron>
    </div>
  );
}

export default App;
