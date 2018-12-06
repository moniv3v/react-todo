import React, { Component } from 'react'
import TodoInputContainer from '../container/TodoInputContainer'
import TodosContainer from '../container/TodosContainer'
import { connect } from "react-redux";

export default class TodoList extends Component {

  render() {
    return (
      <div>
        <TodoInputContainer/>
        <TodosContainer todos={this.props.todos}/>
        
      </div>
    )
  }
}