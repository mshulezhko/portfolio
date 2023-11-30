import React from 'react'
import './dialogs.css'
import DialogsItem from './DialogsItem'
import Messages from './Messages'
import DialogsForm from './DialogsForm/DialogsForm'

function Dialogs(props) {

    const { dialogs, messages, sendMessage } = props

    return <div className='dialogs-container'>
        <div className='dialogs-item'>
            {
                dialogs.map((item) =>
                    <DialogsItem key={item.id} id={item.id} name={item.name} />)
            }

        </div>
        <div className='dialog-content'>
            {
                messages.map((text, id) =>
                    <Messages key={id} text={text.message} />)
            }
        </div>
        <DialogsForm sendMessage={sendMessage} />
    </div>
}
export default Dialogs