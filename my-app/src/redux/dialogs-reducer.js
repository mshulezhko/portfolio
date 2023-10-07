const SEND_MESSAGE = 'dialogs-reducer/SEND_MESSAGE'
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
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: 14, message: action.message }],
                newMessageBody: ''
            }
        default:
            return state;

    }
}

export const sendMessageCreator = (message) => ({ type: SEND_MESSAGE, message })
