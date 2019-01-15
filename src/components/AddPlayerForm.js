import React, { Component } from 'react'
import { Consumer } from './context'

class AddPlayerForm extends Component {
  state = {
    value: ''
  };

  handleValueChange = (e) => {
    this.setState({ value: e.target.value })
  }

  render () {
    return (
      <Consumer>
        {context => {
          const handleSubmit = (e) => {
            e.preventDefault()
            context.actions.addPlayer(this.state.value)
            this.setState({ value: '' })
          }

          return (
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                value={this.state.value}
                onChange={this.handleValueChange}
                placeholder="Enter a player's name"
              />

              <input
                type='submit'
                value='Add Player'
              />
            </form>
          )
        }}
      </Consumer>
    )
  }
}

export default AddPlayerForm
