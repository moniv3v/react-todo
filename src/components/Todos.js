import React, { Component } from 'react'
import Todo from './Todo.js'

export default class Todos extends Component {

  render() {
    const {todos} = this.props
    return (
      <div>
        {todos.map((todo, i) => <Todo checkedItem={this.props.checkedItem} id={todo.id} content={todo.content} status={todo.status}/>)}
      </div>
    )
  }
}