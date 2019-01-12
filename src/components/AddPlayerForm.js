import React, { Component } from 'react'

class AddPlayerForm extends Component {
  
  state = {
    value: ''
  }

  handleValueChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleSubmit = (e) => {
    console.log('test1')
    e.preventDefault()
    this.props.addPlayer(this.state.value)
  }
  
  render () {
    console.log(this.state.value)
    return (
      <form onSubmit={this.handleSubmit} >
        <input
          type='text'
          onChange={this.handleValueChange}
          placeholder="Enter a player's name"              
          />

        <input
          type='submit'
          value='Add player'
        />
      </form>
    )
  }
}

export default AddPlayerForm
