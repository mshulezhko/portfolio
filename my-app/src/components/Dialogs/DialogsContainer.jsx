import Dialogs from './Dialogs'

import { sendMessageCreator} from '../../redux/dialogs-reducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hos/withAuthRedirect'
import { compose } from 'redux'


const mapStateToProps = (state) => {
    return {
        messages: state.dialogPage.messages,
        dialogs:state.dialogPage.dialogs,
        newMessageBody: state.dialogPage.newMessageBody
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (messageText) => dispatch(sendMessageCreator(messageText))
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)