import axios from 'axios'
import * as action from './constantes'

export const addMessage = (message) => {
    return {
        type: action.ADD_MESSAGE,
        message: {
            message: message,
            username: 'toto'
        }
    }
}

export const getMessages = () => {
    return (dispatch) => {
        dispatch({ type: action.GET_MESSAGES_PENDING })
        return axios.get('https://my-json-server.typicode.com/tlenclos/formation-react-fake-server/messages')
            .then((response) => dispatch({
                type: action.GET_MESSAGES_SUCCESS,
                messages: response.data
            }))
            .catch((response) => dispatch({
                type: action.GET_MESSAGES_ERROR,
                error: response.error
            }))
    }
}
