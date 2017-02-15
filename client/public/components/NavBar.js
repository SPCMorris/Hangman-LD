import React, { Component } from 'react'
import { Menu, Dropdown, Button, Input, Form } from 'semantic-ui-react'

class NavBar extends Component {
  constructor(props) {
    super(props)
  }
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item>
          Hangman Logo
        </Menu.Item>

        <Menu.Menu position='right'>
            <Dropdown item text='Solo Game'>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                      <Form.Input label='Nickname' name='nickname' placeholder='Nickname' required/>
                      <Form.Input label='Secret' name='secret' placeholder="Shhh. It's a secret." type='password' required/>
                    </Form.Group>
                    <Button primary type='submit'>Submit</Button>
                  </Form>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          
            <Dropdown item text='Team Game'>
             <Dropdown.Menu>
               <Dropdown.Item>
                 <Form onSubmit={this.handleSubmit}>
                   <Form.Group widths='equal'>
                     <Form.Input label='Nickname' name='name' placeholder='Nickname' required/>
                     <Form.Input label='Secret' name='secret' placeholder="Shhh. It's a secret." type='password' required/>
                   </Form.Group>
                   <Button primary type='submit'>Submit</Button>
                 </Form>
               </Dropdown.Item>
             </Dropdown.Menu>
           </Dropdown>
        </Menu.Menu>
        
      </Menu>
    )
  }
}

export default NavBar;
