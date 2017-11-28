import React from 'react';
import { Loader } from 'semantic-ui-react';

import TeamsList from '../TeamList';
import Filter from '../Filter';
import Footer from '../Footer';

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
      <div>
      <Filter />
      <TeamsList
      teams={teams}
      isFrontPage={true}
      />
      </div>
  );
}

export default FrontPage;
