import React from 'react'
import style from './Dialogs.module.css'
import DialogsItem from './DialogsItem'
import Messages from './Messages'

function Dialogs(props) {
    // debugger;

    let newMessageRef = React.createRef()

    function sendMessage() {
        props.sendMessage()
    }

    function updateMessage() {
        let messageText = newMessageRef.current.value
        props.updateMessage(messageText)
    }

    return <div className={style.wrapper_dialogs}>
        <div className={style.dialogsBlock}>
            {
                props.dialogs.map((item) =>
                    <DialogsItem id={item.id} name={item.name} />)
            }

        </div>
        <div className={style.dialogs_content}>
            {
                props.messages.map((text) =>
                    <Messages text={text.message} />)
            }
        </div>
        <div><textarea value={props.newMessageBody} ref={newMessageRef} onChange={updateMessage}></textarea> <button onClick={sendMessage}>send
            message</button></div>
    </div>
}
export default Dialogs