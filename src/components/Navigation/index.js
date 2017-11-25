import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

const Navigation = (props, context) =>
  <div>
    {context.authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </div>

Navigation.contextTypes = {
  authUser: PropTypes.object,
};

const NavigationAuth = () =>
  <Menu secondary>
    <Menu.Item>
      <Link to={routes.FRONTPAGE}>EGTM</Link>
    </Menu.Item>

    <Menu.Item position="right">
      <Link to={routes.TEAMS}>Mes equipes</Link>
    </Menu.Item>
    <Menu.Item position="right">
      <Link tp={routes.GAIN_SIMULATOR}>Simulateur de gains</Link>
    </Menu.Item>
    <Menu.Item position="right">
      <Link to={routes.ACCOUNT}>Mon compte</Link>
    </Menu.Item>
    <Menu.Item position="right">
      <SignOutButton />
    </Menu.Item>
  </Menu>

const NavigationNonAuth = () =>
  <Menu secondary>
    <Menu.Item>
      <Link to={routes.FRONTPAGE}>EGTM</Link>
    </Menu.Item>

    <Menu.Item position="right">
      <Link tp={routes.GAIN_SIMULATOR}>Simulateur de gains</Link>
    </Menu.Item>
    <Menu.Item position="right">
      <Link to={routes.SIGN_IN}>Sign In</Link>
    </Menu.Item>
  </Menu>

export default Navigation;