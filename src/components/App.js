import React from 'react'
import Header from './Header'
import AddPlayerForm from './AddPlayerForm'
import PlayersList from './PlayersList'

const App = () => {
  return (
    <div className='scoreboard'>
      <Header />

      <PlayersList />
      <AddPlayerForm />
    </div>
  )
}

export default App
