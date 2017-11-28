import React, { Component } from 'react';
import {  Link,  withRouter } from 'react-router-dom';
import { Input, Button, Select, Label } from 'semantic-ui-react';

import EscapeGameList from '../EscapeGameList';
import FilterForm from '../FilterForm';
import cityArray from '../../constants/cityArray'
import themeArray from '../../constants/themeArray';
import difficultyArray from '../../constants/difficultyArray';

const Filter = ({
  escapeGame,
  room,
  prix,
  city,
  priceMin,
  priceMax,
  playerNb,
  hourMin,
  hourMax,
  date,
  theme,
  difficulty,
  error,
}) => {
	return (
	<FilterForm>
	  <Label for="citySelect">Ville</Label>
	  <Select id="citySelect" onChange={this.onSelectCity} options={cityArray}/>

	  <Label for="themeSelect">Theme</Label>
	  <Select id="themeSelect" onChange={this.onSelectTheme} options={themeArray}/>

	  <Label for="difficultySelect">Difficulté</Label>
	  <Select id="difficultySelect" onChange={this.onSelectDifficulty} options={difficultyArray}/>

	  <Label for="priceMinInput">Prix minimum</Label>
	  <Input id="priceMinInput" type="number" min="0" />

	  <Label for="priceMaxInput">Prix maximum</Label>
	  <Input id="priceMaxInput" type="number" />

	  <Label for="playerNbInput">Nombre de place voulues</Label>
	  <Input id="playerNbInput" type="number" min="1" />

	  <Label for="hourMinInput">Heure minimum</Label>
	  <Input id="hourMinInput" type="number" />

	  <Label for="hourMaxInput">Heure maximum</Label>
	  <Input id="hourMaxInput" type="number" />

	  <Label for="dateInput">Date</Label>
	  <Input id="dateInput" type="date" />

	</FilterForm>
	);
}

export default Filter
