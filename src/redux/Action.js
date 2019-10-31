import axios from 'axios'

export const ADD_MESSAGE = 'ADD_MESSAGE'
export const ADD_USERNAME = 'ADD_USERNAME'

export const GET_MESSAGES_PENDING = 'GET_MESSAGES_PENDING'
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS'
export const GET_MESSAGES_ERROR = 'GET_MESSAGES_ERROR'

export const addMessage = (message) => {
    return {
        type: ADD_MESSAGE,
        message: {
            message: message,
            username: 'toto'
        }
    }
}

export const getMessages = () => {
    return (dispatch) => {
        dispatch({ type: GET_MESSAGES_PENDING })
        return axios.get('https://my-json-server.typicode.com/tlenclos/formation-react-fake-server/messages')
            .then((response) => dispatch({
                type: GET_MESSAGES_SUCCESS,
                messages: response.data
            }))
            .catch((response) => dispatch({
                type: GET_MESSAGES_ERROR,
                error: response.error
            }))
    }
}
