import React from 'react';
import { Loader } from 'semantic-ui-react';

import TeamsList from '../TeamList';
import TeamsGrid from '../TeamGrid';
import Filter from '../Filter';
import FrontPageForm from '../FrontPageForm';

const FrontPage = ({
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

  return(
    <FrontPageForm>
      <Filter />
      <TeamsList
      teams={teams}
      isFrontPage={true}
      />
    </FrontPageForm>
  );
}

export default FrontPage;
