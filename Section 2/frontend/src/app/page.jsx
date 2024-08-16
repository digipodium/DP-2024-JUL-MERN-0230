
import Input from '@/components/Input';
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold'>My Home Page</h1>
      <p>ksgdh</p>
      <br />
      <input type="text" />

      <button style={{ color: 'white', backgroundColor: 'black', padding: 10 }}>
        Submit
      </button>

      <Input id={'name'} label={'Full Name'} />
      <Input id={'email'} label={'Email Address'} type={'email'} />
      <Input id={'dob'} label={'Date of Birth'} type={'date'} />

    </div>
  )
}

export default Home;