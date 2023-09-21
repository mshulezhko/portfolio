// import React from 'react'
import Dialogs from './Dialogs'

import { sendMessageCreator, updateMessageCreator } from '../../redux/dialogs-reducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hos/withAuthRedirect'
import { compose } from 'redux'

// function DialogsContainer(props) {
//     let state = props.store.getState().dialogPage
// // debugger;

//     function sendMessage() {
//         props.store.dispatch(sendMessageCreator())
//     }

//     function updateMessage(messageText) {
//         props.store.dispatch(updateMessageCreator(messageText))
//     }

//     return <Dialogs
//     updateMessage={updateMessage}
//     sendMessage={sendMessage}
//     messages={state.messages} dialogs={state.dialogs}
//     newMessageBody={state.newMessageBody}/>
// }

const mapStateToProps =(state) => {
    // debugger
    return {
        messages: state.dialogPage.messages,
        dialogs:state.dialogPage.dialogs,
        newMessageBody: state.dialogPage.newMessageBody
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessage: (messageText) => dispatch(updateMessageCreator(messageText)),
        sendMessage: () => dispatch(sendMessageCreator())

    }
}


compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

// const AuthRedirectDialogsComponent = withAuthRedirect(Dialogs)

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectDialogsComponent)

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)