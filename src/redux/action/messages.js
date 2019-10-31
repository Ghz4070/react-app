import axios from 'axios'
import * as action from './constantes'
import { socket } from './../../services/websocket'

export const addMessage = (message) => {

    let objectMessage = {
        "type": "ADD_MESSAGE",
        "username": "toto",
        "message": message
    }

    socket.send(JSON.stringify(objectMessage));
    socket.close();
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
