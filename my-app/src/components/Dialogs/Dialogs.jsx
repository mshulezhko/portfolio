import React from 'react'
import style from './Dialogs.module.css'
import DialogsItem from './DialogsItem'
import Messages from './Messages'

function Dialogs(props) {

return <div className={style.wrapper_dialogs}>
    <div className={style.dialogs}>
        {
            props.gialogsItem.map((item) => <DialogsItem id={item.id} name={item.name} /> )
        }

    </div>
    <div className={style.dialogs_content}>
        {
            props.messages.map((message) => <Messages text={message.text} />)
        }
    </div>
</div>
}
export default Dialogs