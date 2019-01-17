const initialState = {
    todos: [],
    filter: 'all'
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {...state, todos:[...state.todos, action.todo]}
        case 'DELETE_TODO':
            return {...state, todos: state.todos.filter(todo => todo.id !== action.id)}
        case 'TOGGLE_STATUS':
            return {...state, todos: state.todos.map(todo => {
                if (todo.id === action.id) {
                    todo.active = !todo.active
                } 

                return todo
            })}
        case 'CHANGE_FILTER':
            return {...state, filter: action.filter}
        default:
            return state 
    }
}



