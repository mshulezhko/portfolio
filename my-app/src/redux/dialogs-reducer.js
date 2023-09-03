const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'
let initialState = {
    dialogs: [
        { id: '1', name: 'Valeriy' },
        { id: '2', name: 'Valeriy2' },
        { id: '3', name: 'Valeriy3' },
    ],
    messages: [
        { id: 1, message: 'how are you' },
        { id: 1, message: 'how are you' },
        { id: 1, message: 'how are you' },
    ],
    newMessageBody: ''
}

export default function dialogReducer(state = initialState, action) {
    // debugger;
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: 14, message: state.newMessageBody }],
                newMessageBody: ''
            }
        default:
            return state;

    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateMessageCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body })