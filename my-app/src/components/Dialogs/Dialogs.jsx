import React from 'react'
import style from './Dialogs.module.css'
import DialogsItem from './DialogsItem'
import Messages from './Messages'
import DialogsForm from './DialogsForm/DialogsForm'

function Dialogs(props) {

    const {dialogs, messages, sendMessage} = props

    return <div className={style.wrapper_dialogs}>
        <div className={style.dialogsBlock}>
            {
                dialogs.map((item) =>
                    <DialogsItem id={item.id} name={item.name} />)
            }

        </div>
        <div className={style.dialogs_content}>
            {
                messages.map((text) =>
                    <Messages text={text.message} />)
            }
        </div>
        <DialogsForm sendMessage={sendMessage}  />
    </div>
}
export default Dialogs