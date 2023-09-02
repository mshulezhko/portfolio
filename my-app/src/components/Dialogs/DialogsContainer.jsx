import React from 'react'
import Dialogs from './Dialogs'

import { sendMessageCreator, updateMessageCreator } from '../../redux/dialogs-reducer'

function DialogsContainer(props) {
    let state = props.store.getState().dialogPage
// debugger;

    function sendMessage() {
        props.store.dispatch(sendMessageCreator())
    }

    function updateMessage(messageText) {
        props.store.dispatch(updateMessageCreator(messageText))
    }

    return <Dialogs
    updateMessage={updateMessage}
    sendMessage={sendMessage}
    messages={state.messages} dialogs={state.dialogs}
    newMessageBody={state.newMessageBody}/>
}
export default DialogsContainer