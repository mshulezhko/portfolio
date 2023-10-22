import React from "react";
import { Form, Field } from 'react-final-form'
import styles from './Login.module.css'

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


            <form onSubmit={handleSubmit}>
                <div className={styles.loginForm}>
                    <div className={styles.loginFormTitle}>LOGIN</div>

                    <div className={styles.loginFormField}>
                        <Field name='email' >
                            {({ input, meta }) => (
                                <div>
                                    <input {...input} type="email" placeholder="Login" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div className={styles.loginFormField}>
                        <Field name='password' >
                            {({ input, meta }) => (
                                <div>
                                    <input {...input} type="password" placeholder="Password" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )

                            }
                        </Field>
                    </div>
                    <div className={styles.checkbox}>
                        <label>Remember me</label>
                        <Field name='remember_me' component='input' type="checkbox" />
                    </div>
                    <div>
                        {captchaUrl &&
                            <div>
                                <img src={captchaUrl} alt='captcha' />
                                <Field name='captcha' component='input' type='text' placeholder='enter captcha characters' />
                            </div>}
                    </div>
                    <div className={styles.loginFormBtn}>
                        <button className={styles.btnLogin} type="submit" disabled={submitting || pristine}>
                            Login
                        </button>
                        <button className={styles.btnReset}
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
        )}

    />

}

export default Login