import { combineReducers } from 'redux'
import { addTodo } from './Action'

function todos(state = [], action) {
    switch (action.type) {
        case addTodo:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        default:
            return state
    }
}

const todoApp = combineReducers({
    todos
})

export default todoApp