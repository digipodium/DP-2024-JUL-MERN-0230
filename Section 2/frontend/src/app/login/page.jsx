'use client';
import { useFormik } from 'formik';
import React from 'react'

const Login = () => {

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      console.log(values);

      

    }
  })

  return (
    <div>
      <h1 className='text-center font-bold text-2xl'>Login Page</h1>

      <div className='max-w-lg mx-auto rounded-lg bg-white mt-5 p-10 border shadow-lg'>
        <form onSubmit={loginForm.handleSubmit}>

          <label htmlFor="email">Email</label>
          <input
            onChange={loginForm.handleChange}
            id='email'
            value={loginForm.values.email}
            className='w-full border border-gray-300 bg-gray-100 p-2 rounded-lg mb-5'
            type="email" />

          <label htmlFor="password">Password</label>
          <input
            onChange={loginForm.handleChange}
            id='password'
            value={loginForm.values.password}
            className='w-full border border-gray-300 bg-gray-100 p-2 rounded-lg mb-5'
            type="password" />


          <button type='submit' className='bg-blue-500 text-white mt-4 w-full py-2'>Submit</button>

        </form>
      </div>

    </div>
  )
}

export default Login;