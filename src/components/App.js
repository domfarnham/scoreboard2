import React, { Component } from 'react'
import Header from './Header'
import Player from './Player'
import AddPlayerForm from './AddPlayerForm'

class App extends Component {
  state = {
    players: [
      {
        name: 'Dominic',
        id: 1,
        score: 0
      },
      {
        name: 'Danielle',
        id: 2,
        score: 0
      },
      {
        name: 'Ralph',
        id: 3,
        score: 0
      },
      {
        name: 'Oscar',
        id: 4,
        score: 0
      }
    ]
  }

  prevPlayersID = 4

  handleScoreChange = (index, delta) => {
    this.setState(prevState => {
      prevState.players[index].score += delta
      return ({
        score: prevState.players[index].score
      })
    })
  }

  handleAddPlayer = (name) => {
    this.setState(prevState => {
      let newPlayersList = [...prevState.players]
      newPlayersList.push(
        {
          name: name,
          id: this.prevPlayersID += 1,
          score: 0
        }
      )
      return {
        players: newPlayersList
      }
    })
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      }
    })
  }

  render () {
    return (
      <div className='scoreboard'>
        <Header
          title='Scoreboard'
          players={this.state.players}
        />

        {/* Players list */}
        {this.state.players.map((player, index) =>
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

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    )
  }
}

export default App
