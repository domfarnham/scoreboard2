import React, { PureComponent } from 'react'
import Counter from './Counter'
import PropTypes from 'prop-types'
import HighScore from './HighScore'

class Player extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    changeScore: PropTypes.func.isRequired,
    removePlayer: PropTypes.func.isRequired,
    isHighScore: PropTypes.bool.isRequired
  }

  render () {
    const { name, id, score, index, changeScore, removePlayer, isHighScore } = this.props

    return (
      <div className='player'>
        <span className='player-name'>
          <button className='remove-player' onClick={() => removePlayer(id)}>✖</button>
          <HighScore isHighScore={isHighScore} />
          {name}
        </span>

        <Counter
          score={score}
          index={index}
          changeScore={changeScore}
        />
      </div>
    )
  }
}

export default Player
