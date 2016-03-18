import React, { Component } from 'react'

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = { todo: 'ready!' }
  }

  onChange(e) {
    console.log(this)
    this.setState({ todo: e.target.value })
  }

  tick() {
    console.log(1, this)
  }

  render() {
    return  (
      <div>
        <input onChange={this.onChange}  />
        <div onClick={this.tick}>{ this.state.todo }</div>
      </div>
    )
  }
}