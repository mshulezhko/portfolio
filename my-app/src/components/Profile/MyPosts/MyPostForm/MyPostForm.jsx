import React from 'react'
import { Form, Field } from 'react-final-form'


const MyPostForm = (props) => {
  const {addPost} = props
    // debugger
    const onSubmit = (fieldsValue) => {
        addPost(fieldsValue.new_post)
    }

    return <Form
    onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
            <Field component='textarea' type='text' name='new_post' />
            <button type="submit" disabled={submitting}>
               Post
             </button>
        </form>
      )}
    />
}

export default MyPostForm