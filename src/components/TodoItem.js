import React, { Component } from 'react'
import { deleteTodo, toggleStatus } from '../actions/todo'
import '../styles/todoItem.css'

class TodoItem extends Component {
    deleteTodo = (e) => {
        deleteTodo(this.props.id)
    }

    changeStatus = (e) => {
        toggleStatus(this.props.id)
    }

    render() {
        return (
            <li className = {this.props.active ? '' : "complete"}onClick={this.changeStatus}>
                {this.props.text}
                <button id="x"onClick={this.deleteTodo}>X</button>
            </li>
        )
    }
}

export default TodoItem