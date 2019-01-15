import React, { PureComponent } from 'react'
import Counter from './Counter'
import PropTypes from 'prop-types'
import HighScore from './HighScore'
import { Consumer } from './context'

class Player extends PureComponent {
  static propTypes = {
    index: PropTypes.number.isRequired,
    isHighScore: PropTypes.bool.isRequired
  }

  render () {
    const { index } = this.props

    return (
      <div className='player'>
        <Consumer>
          {({ actions, players }) => (
            <span className='player-name'>
              <button className='remove-player' onClick={() => actions.removePlayer(players[index].id)}>✖</button>
              <HighScore isHighScore={actions.isHighScore} />
              {players[index].name}
            </span>
          )}
        </Consumer>

        <Counter index={index} />
      </div>
    )
  }
}

export default Player
