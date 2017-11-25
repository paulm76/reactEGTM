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
      teams: null,
      teamsLoading: false,
      teamsError: null,

      teamSelectedInit: null,
      teamSelected: null,
      teamSelectedLoading: null,
    };

    this.onFetchTeams = this.onFetchTeams.bind(this);
    this.onFetchReadings = this.onFetchReadings.bind(this);
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

    axios(`${HN_URL}?tags=front_page`)
      .then(result => this.setState((prevState) => ({
        teams: result.data.hits,
        teamsLoading: false,
      })))
      .catch(error => this.setState({
        teamsError: error,
        teamsLoading: false,
      }));
  }

  onFetchReadings(authUser) {
    this.setState(() => ({ readingsLoading: true }));
/*
    db.onGetReadings(authUser, (snapshot) =>
      this.setState(() => ({
        teamSelected: snapshot.val(),
        teamSelectedLoading: false,
      }))
    );*/
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

export default withAuthentication(App);