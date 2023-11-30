import React from 'react'
import { Form, Field } from 'react-final-form'
import './my_post_form.css'


const MyPostForm = (props) => {
  const { addPost } = props

  const onSubmit = (fieldsValue) => {
    addPost(fieldsValue.new_post)
    fieldsValue.new_post = ''
  }

  return <Form
    onSubmit={onSubmit}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <form className='post-form' onSubmit={handleSubmit}>
        <Field placeholder="Add new post 💡..." className='post-field' component='textarea' type='text' name='new_post' />
        <button className='send-post-btn' type="submit" disabled={submitting}>
          Add new post
        </button>
      </form>
    )}
  />
}

export default MyPostForm