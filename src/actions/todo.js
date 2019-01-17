import store from '../store'
import shortid from 'shortid'

export function addTodo(todo) {
    store.dispatch({
        type: 'ADD_TODO',
        todo: {
            id: shortid.generate(),
            text: todo,
            active: true
        }
    })     
}

export function deleteTodo(id) {
    store.dispatch({
        type: 'DELETE_TODO',
        id: id
    })
}

export function toggleStatus(id) {
    store.dispatch({
        type: 'TOGGLE_STATUS',
        id:id

    })
}

export function changeFilter(filter) {
    store.dispatch({
        type: 'CHANGE_FILTER',
        filter: filter
    })
}
