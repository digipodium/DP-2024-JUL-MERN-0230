'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Name is required')
    .min(3, 'Name must be atleast 3 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string().required('Password is required')
    .matches(/[A-Z]/, 'Password must contain atleast one uppercase letter')
    .matches(/[a-z]/, 'Password must contain atleast one lowercase letter')
    .matches(/[0-9]/, 'Password must contain atleast one number')
    .matches(/\W/, 'Password must contain atleast one special character')
});

const Signup = () => {

  const [passwordHidden, setPasswordHidden] = useState(true);

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);

      axios.post('http://localhost:5000/user/add', values)
        .then((result) => {
          toast.success('User created successfully');
        }).catch((err) => {
          console.log(err);
          toast.error(err?.response?.data?.message || 'Something went wrong');
        });
      resetForm();
    },
    validationSchema: SignupSchema
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
            {signupForm.touched.name &&
              (<p className='text-sm text-red-500'>{signupForm.errors.name}</p>)
            }
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
            {signupForm.touched.email &&
              (<p className='text-sm text-red-500'>{signupForm.errors.email}</p>)
            }
          </div>
          <div className='mb-5 relative'>
            <label htmlFor="password">Password</label>

            <button type='button' className='absolute right-2 bottom-2'
              onClick={ () => { setPasswordHidden(!passwordHidden) } }
            >{passwordHidden ? 'Show' : 'Hide'}</button>
            
            <input
              type={ passwordHidden ? 'password' : 'text' }
              id="password"
              onChange={signupForm.handleChange}
              value={signupForm.values.password}
              className='w-full border border-gray-400 rounded-lg px-3 py-2 mt-1'
            />
            {signupForm.touched.password &&
              (<p className='text-sm text-red-500'>{signupForm.errors.password}</p>)
            }
          </div>

          <button type='submit' className='mt-5 bg-violet-500 p-3 w-full text-white rounded-lg'>Submit</button>

        </form>
      </div>
    </div>
  )
}

export default Signup;