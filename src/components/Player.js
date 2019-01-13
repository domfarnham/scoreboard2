import React, { PureComponent } from 'react'
import Counter from './Counter'
import PropTypes from 'prop-types'

class Player extends PureComponent {
  render () {
    const { name, id, score, index, changeScore, removePlayer } = this.props

    return (
      <div className='player'>
        <span className='player-name'>
          <button className='remove-player' onClick={() => removePlayer(id)}>✖</button>
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

Player.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  score: PropTypes.number,
  index: PropTypes.number,
  changeScore: PropTypes.func,
  removePlayer: PropTypes.func
}
export default Player
