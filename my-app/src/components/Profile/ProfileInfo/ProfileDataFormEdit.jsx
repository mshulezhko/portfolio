import React from 'react'
import { Form, Field } from 'react-final-form'
import  './profile-info.css'


const ProfileDataFormEdit = (props) => {
    const onSubmit = (formData) => {
        props.saveUserDataProfile(formData)
        props.setEditModeUpdate(false)
    }

    return <Form initialValues={props.initialValues} onSubmit={onSubmit}

        validate={values => {
            const errors = {}
            if (!values.fullName) {
                errors.fullName = 'Required'
                errors.lookingForAJobDescription = 'Required'
                errors.AboutMe = 'Required'
            }

            return errors
        }}

        render={({ handleSubmit, form, submitting, pristine, values }) => (

            <form className='profile-edit-form' onSubmit={handleSubmit}>
                <Field name='fullName' >
                    {({ input, meta }) => (
                        <div>
                            <label>Full name</label>
                            <input placeholder='Full name'  className='profile-edit-form-input' {...input} type="text" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>
                <Field name='aboutMe' >
                    {({ input, meta }) => (
                        <div>
                            <label>About me</label>
                            <input placeholder='About me' className='profile-edit-form-input' {...input} type="text" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>

                <Field name='lookingForAJob' type="checkbox" >
                    {({ input, meta }) => (
                        <div>
                            <label>Looking for a job</label>
                            <input {...input} className='profile-edit-form-checkbox' type="checkbox" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>
            
                <Field name='contacts.github' >
                    {({ input, meta }) => (
                        <div>
                            <label>Github </label>
                            <input placeholder='Github url' className='profile-edit-form-input' {...input} type="url" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>
                <Field name='contacts.instagram' >
                    {({ input, meta }) => (
                        <div>
                            <label>LinkedIn</label>
                            <input placeholder='LinkedIn' className='profile-edit-form-input' {...input} type="text" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>
                    <Field name='lookingForAJobDescription' >
                    {({ input, meta }) => (
                        <div>
                            <label>Looking for a job description</label>
                            <input placeholder='Looking for a job description' className='profile-edit-form-input' {...input} type="text" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>
                <div>
                    <button className='profile-edit-form-btn' type="submit">
                        Save
                    </button>
                </div>
            </form>
        )}
    />
}

export default ProfileDataFormEdit