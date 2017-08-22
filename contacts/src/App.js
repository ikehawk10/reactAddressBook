import React, { Component } from 'react';
import Header from './Components/Header';
import {Grid, Row, Col} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          <Row>
            <Col xs={12} md={12} lg={12}>MyApp</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
