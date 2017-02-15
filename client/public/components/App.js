import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import GameBuilder from './GameBuilder';
import NavBar from './NavBar';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container> 
        <NavBar />
        <br></br>
        <GameBuilder />
      </Container>

    );
  }
}

export default App;