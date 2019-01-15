import React from 'react'
import PropTypes from 'prop-types'
import Stats from './Stats'
import Stopwatch from './Stopwatch'
import { Consumer } from './context'

const Header = ({ title }) => {
  return (
    <header>
      <Stats />
      <Consumer>
        {({ title }) => (
          <h1>{title}</h1>
        )}
      </Consumer>
      <Stopwatch />
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

Header.defaultProps = {
  title: 'Scoreboard'
}

export default Header
