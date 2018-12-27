import React, { PureComponent } from 'react';
import { Link } from '../../static/routes';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


class Menu extends PureComponent {
  render() {
    return (
      <div>
        <Link route="/">
          <ListItem button>
            <ListItemText primary='Home' />
          </ListItem>
        </Link>
        <Link route="/customer/85743">
          <ListItem button>
            <ListItemText primary='Profile 1' />
          </ListItem>
        </Link>
        <Link route="customer" params={{id: '98412'}}>
          <ListItem button>
            <ListItemText primary='Profile 2' />
          </ListItem>
        </Link>
        <Link route="/about">
          <ListItem button>
            <ListItemText primary='About' />
          </ListItem>
        </Link>
      </div>
    );
  }
}

export default Menu;
