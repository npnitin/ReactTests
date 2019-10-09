import React from 'react';
import {Menu,Button,Dropdown} from 'semantic-ui-react';

const Navbar = (props) =>{
    return(
        <Menu size='small' className='MenuClass'>
        <Menu.Item className='homeSection'
          name='home'
        />
        <Menu.Item className='messageSection'
          name='messages'
        />

        <Menu.Menu position='right' className='dropDownSection'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item className='signupSection'>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
}

export default Navbar;