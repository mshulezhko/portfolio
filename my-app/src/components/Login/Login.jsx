import React from "react";
import { Form, Field } from 'react-final-form'

const Login = (props) => {
    const {login, stopSubmitError, captchaUrl} = props

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

        render={({ handleSubmit, form, submitting, pristine, values })  => (

            <form onSubmit={handleSubmit}>
                <div>
                    <Field name='email' >
                        {({ input, meta }) => (
                            <div>
                                <label>Login</label>
                                <input {...input} type="email" placeholder="login" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                        </Field>
                </div>
                <div>
                    <Field name='password' >
                        {({input, meta}) => (
                            <div>
                                 <label>Password</label>
                                 <input {...input} type="password" placeholder="password" />
                                 {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )

                        }
                        </Field>
                </div>
                <div>
                    <label>Remember me</label>
                    <Field name='remember_me' component='input' type="checkbox" />
                </div>
                <div>
                    {captchaUrl && 
                    <div>
                        <img src={captchaUrl} alt='captcha' />
                    <Field name='captcha' component='input' type='text' placeholder='enter captcha characters' />
                    </div>}
                    <button type="submit" disabled={submitting || pristine}>
                        Login
                    </button>
                                <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
                </div>
                 <pre>{JSON.stringify(values, 0, 2)}</pre>
                <div className="err">{stopSubmitError?.map(element => {
                    return <h1>{element}</h1>
                 })} </div> 
            </form>
        )}

    />

}

export default Login