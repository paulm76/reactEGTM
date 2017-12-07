import React, { Component } from 'react';
import {Link}  from 'react-router-dom';

export default class PageNotFound extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        dataToDisplay: []
    };
}
  componentDidMount(){
    var myHeaders = new Headers();
    var myInit = { method: 'GET',
                headers: myHeaders,
               mode: 'cors',
               cache: 'default' };
    fetch("http://localhost:3001", myInit).then((res)=>res.json()).then((json)=>this.setState({
                dataToDisplay: json.response[0].Mail
            }))
  }
  render(){

      return(
        <div className="not-found">
          <h1>Erreur 404 : page non trouvée </h1>
          <Link to='/' > Retour à la page principale </Link>
          <div>{this.state.dataToDisplay}</div>
        </div>
    )
  }
}
