import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import GameBuilder from './GameBuilder';
import NavBar from './NavBar';
import GameBoard from './GameBoard';

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
        <GameBoard /> 
      </Container>
    );
  }
}

export default App;