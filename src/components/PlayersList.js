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
              key={player.id.toString()}
              index={index}
            />
          )
        )
      }}
    </Consumer>
  )
}

export default PlayersList
