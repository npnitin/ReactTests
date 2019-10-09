import React from 'react';
import {Menu,Button,Dropdown} from 'semantic-ui-react';

const Navbar = (props) =>{
    return(
        <Menu size='small' data-test='MenuClass' className='MenuClass'>
        <Menu.Item data-test='homeSection' className='homeSection'
          name='home'
        />
        <Menu.Item data-test='messageSection' className='messageSection'
          name='messages'
        />

        <Menu.Menu position='right' data-test='dropDownSection' className='dropDownSection'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item data-test='signupSection' className='signupSection'>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
}

export default Navbar;