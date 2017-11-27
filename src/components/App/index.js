import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Navigation from '../Navigation';
import FrontPage from '../FrontPage';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import AccountPage from '../Account';
import GainSimulator from '../GainSimulator'
import withAuthentication from '../Session/withAuthentication';
import * as routes from '../../constants/routes';

import './index.css';

const HN_URL = 'http://hn.algolia.com/api/v1/search';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [
        {nom:'Paul\'s Team',admin:'Paul',escapeGame: 'La defense',room:'ljqershbrf',placesMax:6,placesOccupe:2},
        {nom:'Mathieu\'s Team',admin:'Mathieu',escapeGame: 'toto',room:'titi',placesMax:4,placesOccupe:3},
        {nom:'Seb\'s Team',admin:'Seb',escapeGame: 'bar',room:'foo',placesMax:8,placesOccupe:5},
        {nom:'Jean-Paul\'s Team',admin:'Jean-Paul',escapeGame: 'res',room:'err',placesMax:12,placesOccupe:7}
      ],
      teamsLoading: false,
      teamsError: null,
    };

    this.onFetchTeams = this.onFetchTeams.bind(this);
  }
/*
  componentDidMount() {
    this.onFetchTeams();

    firebase.auth.onAuthStateChanged(authUser => {
      if (!this.state.readingsInit && authUser) {
        this.onFetchReadings(authUser);

        this.setState({ readingsInit: true });
      }
    });
  }
*/
  onFetchTeams() {
    this.setState({ teamsLoading: true })

    this.setState({ teams: [
        {nom:'Paul\'s Team',admin:'Paul',escapeGame: 'La defense',room:'ljqershbrf',placesMax:6,placesOccupe:2},
        {nom:'Mathieu\'s Team',admin:'Mathieu',escapeGame: 'toto',room:'titi',placesMax:4,placesOccupe:3},
        {nom:'Seb\'s Team',admin:'Seb',escapeGame: 'bar',room:'foo',placesMax:8,placesOccupe:5},
        {nom:'Jean-Paul\'s Team',admin:'Jean-Paul',escapeGame: 'res',room:'err',placesMax:12,placesOccupe:7}
      ]
    });

    this.setState({ teamsLoading: false });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Navigation />

          <hr/>

          <Route
            exact path={routes.FRONTPAGE}
            component={() =>
              <FrontPage
                { ...this.state }
              />
            }
          />

          <Route
            exact path={routes.SIGN_UP}
            component={SignUpPage}
          />
          <Route
            exact path={routes.SIGN_IN}
            component={SignInPage}
          />
          <Route
            exact path={routes.PASSWORD_FORGET}
            component={PasswordForgetPage}
          />
          <Route
            exact path={routes.ACCOUNT}
            component={AccountPage}
          />
          <Route 
            exact path={routes.GAIN_SIMULATOR}
            component={GainSimulator}
          />
        </div>
      </Router>
    );
  }
}

//export default withAuthentication(App);
export default App;