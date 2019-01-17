import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'

import TodoList from './TodoList'
import TodoForm from './TodoForm'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <TodoForm />
          <TodoList />
        </div>
      </Provider>
    )
  }
}

export default App
