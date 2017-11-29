import React from 'react';
import { List } from 'semantic-ui-react';

const TeamCell = ({
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


export default TeamCell;