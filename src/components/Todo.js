import React, { Component } from 'react'

export default class Todo extends Component {

    onToggle = () => {
      this.props.checkedItem({key: this.props.id, status: this.props.status})
    }

  render() {
    const key = this.props.id
    const content = this.props.content
    return (
      <div>
        <li style={{textDecoration: this.props.status == 'completed' ? 'line-through' : 'none'}} key={key} onClick={this.onToggle}>{content}</li>
      </div>
    )
  }
}