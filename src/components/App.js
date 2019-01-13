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
        score: 0,
        isHighScore: false
      },
      {
        name: 'Danielle',
        id: 2,
        score: 0,
        isHighScore: false
      },
      {
        name: 'Ralph',
        id: 3,
        score: 0,
        isHighScore: false
      },
      {
        name: 'Oscar',
        id: 4,
        score: 0,
        isHighScore: false
      }
    ]
  }

  prevPlayersID = 4

  handleHighScore = () => {
    const highScore = this.state.players.reduce((highest, player) => {
      return Math.max(highest, player.score)
    }, 0)

    const highScorers = this.state.players.map(player => {
      if (player.score === highScore && highScore !== 0) {
        player.isHighScore = true
      } else if (player.isHighScore) {
        player.isHighScore = false
      }
      return player
    })

    this.setState({
      players: highScorers
    })
  }

  handleScoreChange = (index, delta) => {
    const updatedPlayers = this.state.players.map((player, playerIndex) => {
      if (index === playerIndex) { player.score += delta }
      return player
    })

    this.setState({
      players: updatedPlayers
    }, () => this.handleHighScore())
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
            isHighScore={player.isHighScore}
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    )
  }
}

export default App
