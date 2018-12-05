import React, { Component } from 'react'
import { connect } from "react-redux";

export default class TodoInput extends Component {
  onClickAddNewTodo = () => {
    const {input} = this.refs
    this.props.addNewTodo(input.value)
    input.value = ''
  }

  render() {
    return (
      <div>
        <input ref="input"/>
        <button onClick={this.onClickAddNewTodo}>add</button>
      </div>
    )
  }
}

