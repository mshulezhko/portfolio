import React from 'react'
import { Form, Field } from 'react-final-form'


const DialogsForm = (props) => {
    const onSubmit = (fieldValue) => {
        console.log(fieldValue)
        props.sendMessage(fieldValue.new_message)

    }

    return <Form 
    onSubmit={onSubmit}
     render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} >
        <div>
        <label>New Message</label>
        <Field component='input' type='text' name='new_message' />
        </div>
        <div>
            <button type="submit" disabled={submitting || pristine}>
              Send message
            </button>
        </div>
        </form>
     )}
    />
}

export default DialogsForm