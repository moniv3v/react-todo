import React, { Component } from 'react'

export default class TodoFilter extends Component {
    onChangeShowTodo = () => {
        console.log(this.refs.show_todo.checked);
        if(this.refs.show_todo.checked){
            this.props.replaceTodo(this.refs.show_todo.checked)
        }else{
            this.props.replaceTodo(this.refs.show_todo.checked)
        }
    }

    render() {
        return (
            <div>
                <input type="checkbox" ref="show_todo" onChange={this.onChangeShowTodo} />
                <span>show Todo</span>
            </div>
        )
    }
}
