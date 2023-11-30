import React from "react";
import { Form, Field } from 'react-final-form'
import './login.css'

const Login = (props) => {
    const { login, stopSubmitError, captchaUrl } = props

    const onSubmit = (fieldsValue) => {
        login(fieldsValue.email, fieldsValue.password, fieldsValue.remember_me, fieldsValue.captcha)
    }

    return <Form onSubmit={onSubmit}

        validate={values => {
            const errors = {}
            if (!values.email) {
                errors.username = 'Required'
            }
            if (!values.password) {
                errors.password = 'Required'
            }

            return errors
        }}

        render={({ handleSubmit, form, submitting, pristine, values }) => (


            <form className='login-form' onSubmit={handleSubmit}>
                <div className='login-form-container'>
                    <div className='login-form-title'>LOGIN</div>

                    <div >
                        <Field name='email' >
                            {({ input, meta }) => (
                                <div>
                                    <input className='login-form-input' {...input} type="email" placeholder="Login" />
                                    {meta.error && meta.touched && <div>{meta.error} email</div>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div >
                        <Field name='password' >
                            {({ input, meta }) => (
                                <div>
                                    <input className='login-form-input' {...input} type="password" placeholder="Password" />
                                    {meta.error && meta.touched && <div>{meta.error} password</div>}
                                </div>
                            )

                            }
                        </Field>
                    </div>
                    <div className='login-form-checkbox'>
                        <span className='checkbox-label'>Remember me</span>
                        <Field name='remember_me' component='input' type="checkbox" />
                    </div>
                    <div>
                        {captchaUrl &&
                            <div>
                                <img src={captchaUrl} alt='captcha' />
                                <Field name='captcha' component='input' type='text' placeholder='enter captcha characters' />
                            </div>}
                    </div>
                    <div className='login-form-btn-wrap'>
                        <button className='login-form-btn' type="submit" disabled={submitting || pristine}>
                            Login
                        </button>
                        <button className='login-form-btn'
                            type="button"
                            onClick={form.reset}
                            disabled={submitting || pristine}
                        >
                            Reset
                        </button>
                    </div>
                    <div className="err">{stopSubmitError?.map(element => {
                        return <h1>{element}</h1>
                    })} </div>
                </div>
            </form>
        )} />
}

export default Login