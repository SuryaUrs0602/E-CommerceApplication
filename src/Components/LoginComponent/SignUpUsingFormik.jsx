import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

const initialValues = {
    name: '',
    email: '',
    password: ''
}

const onSubmit = async (values, e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:8000/users', values);
    } catch (error) {
        console.log('Some error occured')
    }
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
        .email('Invalid Email Format')
        .required('Required'),
    password: Yup.string().required('Required')
})


const SignUpUsingFormik = () => {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    return (
        <div className='flex items-center justify-center min-h-screen bg-grey-100'>
            <div className='bg-white p-6 rounded-lg shadow-md w-96'>
                <h3 className="text-xl font-semibold mb-4 text-center">Sign Up</h3>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignUpUsingFormik
