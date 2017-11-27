import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, List, Icon, Label } from 'semantic-ui-react';
import styled from 'styled-components';

import * as routes from '../../constants/routes';

const TeamItem = ({
  team,
  isFrontPage,
  isReadingsPage,
}) =>
  <List.Item>
    <List.Content>

      <List.Description as="div">
        <List.Header as="h4">
          {isFrontPage}

          <p>{team.escapeGame}</p>
        </List.Header>

      </List.Description>
    </List.Content>
  </List.Item>
/*
TeamItem.contextTypes = {
  authUser: PropTypes.object,
};

class ReadLaterButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      readLaterSuccess: null,
      readLaterError: null,
    };

    this.onReadLater = this.onReadLater.bind(this);
  }

  onReadLater(story, authUser) {
    db.doCreateReading(authUser, story)
      .then(() => {
        this.setState(() => ({ readLaterSuccess: true }));
      })
      .catch(() => {
        this.setState(() => ({ readLaterError: true }));
      });
  }

  render() {
    const { story, authUser } = this.props;
    const { readLaterSuccess, readLaterError } = this.state;

    if (!authUser) {
      return null;
    }

    if (readLaterSuccess) {
      return <span><Icon name="check" /> Saved</span>;
    }

    if (readLaterError) {
      return <span><Icon name="bug" /> Uuups</span>;
    }

    return (
      <Button
        icon
        size="mini"
        primary={true}
        onClick={() => this.onReadLater(story , authUser)}
      >
        <Icon name="bookmark" />
      </Button>
    );
  }
}

const DismissButton = ({
  story,
  authUser,
}) => {
  if (!authUser) {
    return null;
  }

  return (
    <Button
      size="mini"
      primary={true}
      onClick={() => db.doRemoveReading(authUser, story)}
    >
      <Icon name="bookmark" /> Dismiss
    </Button>
  );
}
*/
export default TeamItem;