import React, { Component } from 'react';
import { Button, Form, Input, Select, Container, Header } from 'semantic-ui-react';

const difficulty = [
  { key: 1, text: 'Easy', value: 'easy' },
  { key: 2, text: 'Medium', value: 'medium' },
  { key: 3, text: 'Hard', value: 'hard' },
];

const teams = [
  { key: 1, text: 'Solo', value: 'solo' },
  { key: 2, text: 'Team', value: 'team' }
];

class GameBuilder extends Component {
  constructor(props) {
    super(props)
  }

  state = { formData: {} }

   handleSubmit = (e, { formData }) => {
     e.preventDefault()
     this.setState({ formData })
     console.log(formData)
   }

  render() {
      const { formData } = this.state
      return (
        <Container>
          <Header as='h3' dividing>
            Build Your Game!
          </Header>

          <p>
            Welcome to Hangman! If you do not know what the game hangman is check it out here at <a href='https://en.wikipedia.org/wiki/Hangman_%28game%29'>Wikipedia</a>. Using the options below build out the type of game you want to play! If you already have an ongoing game please use the nav bar up top to load the type of game you were playing. 
          </p>

          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Input label='Nickname' name='nickname' placeholder='Nickname' required/>
              <Form.Input label='Secret' name='secret' placeholder="Shhh. It's a secret." type='password' required/>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Select label='Difficulty' name='difficulty' options={difficulty} placeholder='Select your frustration level' />
              <Form.Select label='Game Type' name='gameType' options={teams} placeholder='Select your play stye' />
            </Form.Group>
            <p>If you leave the "Difficulty" and "Game Type" fields blank it will default to easy and solo respectively.</p>
            <Button primary type='submit'>Submit</Button>
          </Form>
        </Container>
      )
    }
  }

export default GameBuilder;