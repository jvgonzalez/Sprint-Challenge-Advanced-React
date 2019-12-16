import React, { Component } from 'react';
import axios from "axios";
import logo from './logo.svg';
import PlayerCard from './PlayerCard';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then( res => {
        this.setState({
          data: res.data
        })
      })


  }

  render() {
    return (
      <div>
        <h1>Women in the World Cup </h1>

        {this.state.data.map((data) => (
         <PlayerCard data={data} />

        ))}


      </div>
    )
  }
}

export default App;
