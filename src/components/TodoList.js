import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'
import '../styles/todoList.css'
import { changeFilter } from '../actions/todo';

class TodoList extends Component {
    removeTodo() {

    }

    allItems = (e) => {
        e.preventDefault()
        changeFilter('all')
    }

    activeItems = (e) => {
        e.preventDefault()
        changeFilter('active')
    }

    inactiveItems = (e) => {
        e.preventDefault()
        changeFilter('inactive')
    }

    render() {
        const remainingTasks = this.props.todos.filter(x => x.active).length
        return (
            <div className = "listcontainer">
                <ul>
                    {this.props.todos.map(todo =>(
                        <TodoItem key={todo.id} {...todo}/>
                    ))}
                </ul>
                <div className="bottomBar">
                    <span>{remainingTasks} items left</span>
                    <button className="barbutt"onClick={this.allItems}>All</button>
                    <button className="barbutt"onClick={this.activeItems}>Active</button>
                    <button className="barbutt"onClick={this.inactiveItems}>Completed</button>
                </div>
            </div>
        )    
    }
}

function mapAppStateToProps(appState) {
    return {
        todos: checkFilter(appState)
    }
    
}

function checkFilter(appState) {
    if (appState.filter === 'all') {
        return appState.todos
    } else if(appState.filter === 'active') {
        return appState.todos.filter(x => x.active)
    } else if(appState.filter === 'inactive') {
        return appState.todos.filter(x => !x.active)
    }

}

export default connect(mapAppStateToProps)(TodoList)