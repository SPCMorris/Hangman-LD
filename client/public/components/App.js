import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import NavBar from './NavBar';
import GameBuilder from './GameBuilder';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container> 
        <NavBar />
        <GameBuilder />
          { this.props.children }
      </Container>
    );
  }
}

export default App;