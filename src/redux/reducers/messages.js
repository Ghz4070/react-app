import * as actions from './../action/constantes';

const stateInitial = {
    messages: [],
    error: null,
    pending: false,
};

const messages = (state = stateInitial, action) => {
    switch (action.type) {
        case actions.ADD_MESSAGE:
            // console.log(state)
            return {
                ...state,
                messages: [
                    ...state.messages,
                    action.message,

                ]
            }
        case actions.GET_MESSAGES_PENDING:
            return {
                ...state,
                pending: false,
            };
        case actions.GET_MESSAGES_SUCCESS:
            return {
                ...state,
                pending: true,
                messages: [
                    ...action.messages,
                ],
                error: null
            };
        case actions.GET_MESSAGES_ERROR:
            return {
                ...state,
                pending: true,
                error: action.error
            };
        default:
            return state
    }
};

export default messages;