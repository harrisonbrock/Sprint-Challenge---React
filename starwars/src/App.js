import React, { Component } from 'react';
import Character from './components/Character';
import './App.css';
import CharacterList from "./components/CharacterList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch('https://swapi.co/api/people')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div>
          {/*<ui>*/}
            {/*{this.state.starwarsChars.map((person, index) =>*/}
                {/*<li> <Character key={index} character={person}/></li>*/}
            {/*)}*/}
          {/*</ui>*/}
          <CharacterList character={this.state.starwarsChars}/>
        </div>
      </div>
    );
  }
}

export default App;
