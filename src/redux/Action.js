export const ADD_MESSAGE = 'ADD_MESSAGE'

export function addMessage(messages) {
    return {
        type: ADD_MESSAGE,
        messages
    }
}