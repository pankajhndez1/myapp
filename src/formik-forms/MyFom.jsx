import React from 'react'
import { useFormik } from "formik";
import { signUpSchema } from '../schemas';

const initialValues = {
    name: "",
    email: '',
    password: '',
    confirm_password: ''
}

const InputField = ({ label, name, type = 'text', formik }) => (
    <div >
        <div className='flex space-x-4'>
            <div >
                <label className='text-lg font-medium' htmlFor={name}>{label}</label>
            </div>
            <div >
                <input
                    name={name}
                    id={name}
                    type={type}
                    value={formik.values[name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>
            <div>
                {formik.errors[name] && formik.touched[name] && <p className='text-red-700'>{formik.errors[name]==="confirm_password"?"Confirm Password":formik.errors[name]}</p>}
            </div>
        </div>
    </div>
);

const MyForm = () => {
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log(values, '<====values!!!');
            action.resetForm();
        }
    });

    return (
        <div >
            <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col space-y-5">

                    <InputField label="Name" name="name" formik={formik} />

                    <InputField label="Email" name="email" formik={formik} />

                    <InputField label="Password" name="password" type="password" formik={formik} />

                    <InputField label="Confirm Password" name="confirm_password" type="password" formik={formik} />

                    <button type='submit'>
                        <div className='flex justify-start'>
                            <span className='border px-4 py-3 rounded-lg bg-blue-400 text-black font-medium hover:text-white hover:font-semibold'>Submit</span>
                        </div>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default MyForm
