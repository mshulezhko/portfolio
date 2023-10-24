import React from 'react'
import styles from './Dialogs.module.css'
import DialogsItem from './DialogsItem'
import Messages from './Messages'
import DialogsForm from './DialogsForm/DialogsForm'

function Dialogs(props) {

    const {dialogs, messages, sendMessage} = props

    return <div className={styles.wrapperDialogs}>
        <div className={styles.dialogsBlock}>
            {
                dialogs.map((item) =>
                    <DialogsItem key={item.id} id={item.id} name={item.name} />)
            }

        </div>
        <div className={styles.dialogs_content}>
            {
                messages.map((text, id) =>
                    <Messages key={id} text={text.message} />)
            }
        </div>
        <DialogsForm sendMessage={sendMessage}  />
    </div>
}
export default Dialogs