import React, { Component } from 'react';
import Header from './Header'
import Player from './Player'


class App extends Component {
  state = {
    players: [
      {
        name: "Dominic",
        id: 1,
        score: 0
      },
      {
        name: "Danielle",
        id: 2,
        score: 0
      },
      {
        name: "Ralph",
        id: 3,
        score: 0
      },
      {
        name: "Oscar",
        id: 4,
        score: 0
      }
    ]
  };

  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      score: prevState.players[index].score += delta
    }))
  }

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
          players={this.state.players} 
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            id={player.id}
            score={player.score}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}           
          />
        )}
      </div>
    );
  }
}

export default App;
