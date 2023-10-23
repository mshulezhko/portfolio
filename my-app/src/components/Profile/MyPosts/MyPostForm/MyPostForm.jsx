import React from 'react'
import { Form, Field } from 'react-final-form'
import styles from './MyPostForm.module.css'


const MyPostForm = (props) => {
  const { addPost } = props

  const onSubmit = (fieldsValue) => {
    addPost(fieldsValue.new_post)
  }

  return <Form
    onSubmit={onSubmit}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <form className={styles.postForm} onSubmit={handleSubmit}>
        <Field placeholder="Add new post 💡..." className={styles.postField} component='textarea' type='text' name='new_post' />
        <button className={styles.sendPostBtn} type="submit" disabled={submitting}>
          Add new post
        </button>
      </form>
    )}
  />
}

export default MyPostForm