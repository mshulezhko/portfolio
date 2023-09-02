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
            state.newMessageBody = action.body
            console.log(UPDATE_NEW_MESSAGE_BODY)
            console.log(state)
            return state;
        case SEND_MESSAGE:
            state.messages.push({ id: 14, message: state.newMessageBody })
            console.log(SEND_MESSAGE)
            console.log(state)
            state.newMessageBody = ''
            return state;
        default:
            return state;

    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateMessageCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body })