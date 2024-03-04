import React from 'react'
import { useFormik } from "formik";
import { signUpSchema } from '../schemas';

const initialValues = {
    name: "",
    email: '',
    password: '',
    confirm_password: ''
}

const MyFom = () => {
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values,action) => {
            // so , here the initialvalues's value will be get here !!
            console.log(values, '<====values!!!');
            action.resetForm();
        }
    })

    const { handleChange, touched, handleSubmit, errors, values, handleBlur } = formik;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input name='name' id='name' value={values.name} onChange={handleChange} onBlur={handleBlur} />
                {errors.name && touched.name?<p>{errors.name}</p>:""}
                <label htmlFor='email'>Email</label>
                <input name='email' id='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                {errors.email && touched.email?<p>{errors.email}</p>:""}
                <label htmlFor='password'>Password</label>
                <input name='password' type='password' id='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
                {errors.password && touched.password?<p>{errors.password}</p>:""}
                
                <label htmlFor='confirm_password'>Confirm Password</label>
                <input name='confirm_password' type='password' id='confirm_password' value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} />
                {errors.confirm_password && touched.confirm_password?<p>{errors.confirm_password}</p>:""}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default MyFom