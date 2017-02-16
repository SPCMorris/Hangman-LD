import React, { Component } from 'react';
import { Container, Reveal, Grid, Image, Segment, Button, Header } from 'semantic-ui-react';

const abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const abcListBuilder = () => (
  abc.map( (char, index) => {
    return (
        <Segment key={index}>
            { char }
        </Segment>
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

        <Segment.Group horizontal>
          { abcList }
        </Segment.Group>


       </Container>
     );
   }
 }

 export default GameBoard;