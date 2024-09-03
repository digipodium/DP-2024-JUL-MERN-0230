'use client';
import { useFormik } from 'formik';
import React from 'react'

const Signup = () => {

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);

      resetForm();
    }
  })

  return (
    <div>
      <div className='max-w-lg rounded-lg border shadow mx-auto mt-5 py-6 px-5'>
        <h3 className='text-2xl text-center font-bold'>Signup Form</h3>

        <form onSubmit={signupForm.handleSubmit}>

          <div className='mb-5'>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={signupForm.handleChange}
              value={signupForm.values.name}
              className='w-full border border-gray-400 rounded-lg px-3 py-2 mt-1'
            />
          </div>
          <div className='mb-5'>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              onChange={signupForm.handleChange}
              value={signupForm.values.email}
              className='w-full border border-gray-400 rounded-lg px-3 py-2 mt-1'
            />
          </div>
          <div className='mb-5'>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={signupForm.handleChange}
              value={signupForm.values.password}
              className='w-full border border-gray-400 rounded-lg px-3 py-2 mt-1'
            />
          </div>

          <button type='submit' className='mt-5 bg-violet-500 p-3 w-full text-white rounded-lg'>Submit</button>

        </form>
      </div>
    </div>
  )
}

export default Signup;