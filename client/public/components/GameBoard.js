import React, { Component } from 'react';
import { Container, Reveal, Grid, Image, List, Button, Header } from 'semantic-ui-react';

const abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const abcListBuilder = () => (
  abc.map( (char, index) => {
    return (
        <Grid.Column key={index}>
            <Button basic>{ char }</Button>
        </Grid.Column>
    );
  })
);

 class GameBoard extends Component {
   constructor(props) {
     super(props)
   }

   render() {
    const abcList = abcListBuilder();
     return (
       <Container> 
        <Header as='h3' dividing>
          Possible Character Guesses!
        </Header>

        <Grid container stackable columns='equal'>
          { abcList }
        </Grid>
       </Container>
     );
   }
 }

 export default GameBoard;