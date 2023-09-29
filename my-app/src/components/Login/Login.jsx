import React from "react";
import { Form, Field } from 'react-final-form'

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// const onSubmit = (values) => {
//     console.log(values)
//   await sleep(300)
//   window.alert(JSON.stringify(values, 0, 2))
// }


const Login = (props) => {

    const onSubmit = (fieldsValue) => {
        console.log(fieldsValue)
        props.login(fieldsValue.email, fieldsValue.password, fieldsValue.remember_me)
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
                    <button type="submit" disabled={submitting || pristine}>
                        Login123
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
                <div className="err">{props.stopSubmitError?.map(element => {
                    return <h1>{element}</h1>
                 })} </div> 
            </form>
        )}

    />

}

export default Login