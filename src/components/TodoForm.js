import React, { Component } from 'react'
import { addTodo } from '../actions/todo'
import { connect } from 'react-redux'
import '../styles/todoForm.css'



class TodoForm extends Component {
    state = {
        todo: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }  

    handleSubmit = (e) => {
        e.preventDefault()
        addTodo(this.state.todo)
        this.setState({
            todo:''
        })
    }

    render() {
        return (
            <div className="container">
                <h1>todos</h1>
                <div className="form">
                <form autoComplete = "off" onSubmit={this.handleSubmit}>
                    <input 
                        type = "text"
                        placeholder = "What Needs To Be Done?"
                        name = "todo"
                        value = {this.state.todo}
                        onChange = {this.handleChange}
                        />
                </form>
                </div>
            </div>
        )    
    }
}

function mapAppStateToProps(appState) {
    return {
        todos: appState.todos
    }
    
}

export default connect(mapAppStateToProps)(TodoForm)