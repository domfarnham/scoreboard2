import React from 'react'
import { Consumer } from './context'
import Player from './Player'

const PlayersList = () => {
  return (
    <Consumer>
      {context => {
        return (
          context.players.map((player, index) =>
            <Player
              name={player.name}
              id={player.id}
              score={player.score}
              key={player.id.toString()}
              index={index}
              changeScore={context.handleScoreChange}
              removePlayer={context.handleRemovePlayer}
              isHighScore={player.isHighScore}
            />
          )
        )
      }}
    </Consumer>
  )
}

export default PlayersList
