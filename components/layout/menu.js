import React, { PureComponent } from 'react';
import Link from 'next/link';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import routes from '../../static/routes';


class Menu extends PureComponent {
  render() {
    return (
      <div>
        {routes.map((item, index) => (
          <Link key={index} prefetch href={item.path} passHref>
            <ListItem button>
              <ListItemText primary={item.title} />
            </ListItem>
          </Link>
        ))}
      </div>
    );
  }
}

export default Menu;
