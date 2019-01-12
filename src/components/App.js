import React, { Component } from 'react';
import Header from './Header'
import Player from './Player'


class App extends Component {
  state = {
    players: [
      {
        name: "Dominic",
        id: 1
      },
      {
        name: "Daniell",
        id: 2
      },
      {
        name: "Ralph",
        id: 3
      },
      {
        name: "Oscar",
        id: 4
      }
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalPlayers={this.state.players.length} 
        />
  
        {/* Players list */}
        {this.state.players.map( player =>
          <Player 
            name={player.name}
            id={player.id}
            key={player.id.toString()} 
            removePlayer={this.handleRemovePlayer}           
          />
        )}
      </div>
    );
  }
}

export default App;
