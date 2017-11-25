import React from 'react';
import { Loader } from 'semantic-ui-react';

import TeamsList from '../TeamsList';

const FrontPage = ({
  teamSelected,
  teams,
  teamsLoading,
  teamsError,
}) => {
  if (teamsError) {
    return <p>Uuups, something went wrong.</p>;
  }

  if (teamsLoading) {
    return <Loader active inline="centered" />;
  }

  if (!teams) {
    return <p>Uuups, there are no more front page stories for you.</p>;
  }

  const readableTeams = teamSelected
    ? teams.filter(team => !teamSelected[team.objectID])
    : teams;

  if (!readableTeams.length) {
    return <p>Uuups, there are no more front page stories for you.</p>;
  }

  return <TeamsList
    teams={readableTeams}
    isFrontPage={true}
  />
}

export default FrontPage;
