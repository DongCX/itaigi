'use strict'

import React from 'react'
import Router from 'react-router'
import Transmit from 'react-transmit'

class SearchBar extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      q: this.props.q || ''
    }
  }

  handleKeyDown (evt) {
    if (evt.keyCode === 13) {
      this.handleSubmit(evt)
      return
    }
  }

  handleKeyUp (evt) {
    var q = evt.target.value
    this.setState({q})
  }

  handleSubmit (evt) {
    if (this.state.q !== '') {
      this.props.handleSubmit(this.state.q)
    }
  }

  render () {
    return (
        <div className='search ui action input container'>
          <input type='text'
            placeholder='A... 那個'
            onKeyDown={this.handleKeyDown.bind(this)}
            onKeyUp={this.handleKeyUp.bind(this)}/>
          <button
            className='ui button'
            onClick={this.handleSubmit.bind(this)}>台語怎樣講</button>
        </div>
      )
  }
}

export default Transmit.createContainer(SearchBar, { query: {} })
