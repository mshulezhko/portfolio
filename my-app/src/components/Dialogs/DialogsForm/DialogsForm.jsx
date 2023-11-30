import React from 'react'
import { Form, Field } from 'react-final-form'
import '../dialogs.css'


const DialogsForm = (props) => {

    const { sendMessage } = props

    const onSubmit = (fieldValue) => {
        sendMessage(fieldValue.new_message)
        fieldValue.new_message = ''
    }

    return <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} >
                <div>
                    <Field placeholder='new message...' className='dialog-input' component='input' type='text' name='new_message' />
                </div>
                <div>
                    <button className='btn send-message-btn' type="submit" disabled={submitting || pristine}>
                        Send message
                    </button>
                </div>
            </form>
        )}
    />
}

export default DialogsForm