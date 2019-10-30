import { combineReducers } from 'redux'
import {
    ADD_MESSAGE,
    GET_MESSAGES_PENDING,
    GET_MESSAGES_SUCCESS,
    GET_MESSAGES_ERROR
} from './action'

const stateInitial = {
    messages: [],
    error: null,
    pending: false,
};

const messages = (state = stateInitial, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            console.log(state)
            return {
                ...state,
                messages: [
                    ...state.messages,
                    action.message,
                ]                
            }
        case GET_MESSAGES_PENDING:
            return {
                ...state,
                pending: false,
            };
        case GET_MESSAGES_SUCCESS:
            return {
                ...state,
                pending: true,
                messages: [
                    ...action.messages,
                ],
                error: null
            };
        case GET_MESSAGES_ERROR:
            return {
                ...state,
                pending: true,
                error: action.error
            };
        default:
            return state
    }
};

export const messageApp = combineReducers({
    messages
})