import React from 'react'
import style from './Dialogs.module.css'
import DialogsItem from './DialogsItem'
import Messages from './Messages'
import DialogsForm from './DialogsForm/DialogsForm'

function Dialogs(props) {
    // debugger;

    // function sendMessage() {
    //     props.sendMessage()
    // }


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
        <DialogsForm sendMessage={props.sendMessage}  />
    </div>
}
export default Dialogs