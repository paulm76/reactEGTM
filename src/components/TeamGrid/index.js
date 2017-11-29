import React from 'react';
import { Grid, Cell } from 'react-mdl';

import TeamCell from '../TeamCell';

const TeamGrid = ({
  teams,
  isFrontPage,
  isReadingsPage,
}) =>

  <Grid class="team-grid" style={{ display: 'flex', 'flex-direction': 'row' }}>
  	<Cell col={12} tablet={3}>
  	  {teams.map(team =>
  	    <TeamCell
  	  	  key={team.objectID}
          team={team}
          isFrontPage={isFrontPage}
          isReadingsPage={isReadingsPage}
  	    />
  	  )}
  	</Cell>
  	<Cell col={9} tablet={3}>
  	  {teams.map(team =>
  	    <TeamCell
  	  	  key={team.objectID}
          team={team}
          isFrontPage={isFrontPage}
          isReadingsPage={isReadingsPage}
  	    />
  	  )}
  	</Cell>
  	<Cell col={3} phone={3}>
  	  {teams.map(team =>
  	    <TeamCell
  	  	  key={team.objectID}
          team={team}
          isFrontPage={isFrontPage}
          isReadingsPage={isReadingsPage}
  	    />
  	  )}
  	</Cell>
  </Grid>


const TeamHeader = ({ team }) =>
  <span>
    <p>{team.nom}</p>
  </span>

export default TeamGrid;