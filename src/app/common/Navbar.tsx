import * as React from 'react';
import {
  Menu,
  Input,
  Icon,
  Segment
} from 'semantic-ui-react';
import {
  NavLink
} from 'react-router-dom';

export const Navbar: React.SFC<object> = (props) => {
  return(
    <Segment inverted>
      <Menu inverted secondary size="large">
        <NavLink to="/" className="header item">
          <Icon name="react" size="large" inverted color="violet" />
          Issue Tracker
        </NavLink>

        <NavLink to="/" className="item">
          Home
        </NavLink>
        
        <Menu.Menu position="right">
          <Menu.Item>
              <Input
                size="large"
                icon='search'
                iconPosition="left"
                placeholder='search..' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Segment>
  )
}

Navbar.displayName = 'Navbar';
