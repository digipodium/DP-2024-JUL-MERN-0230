'use client';
import React from 'react'

const EventHandling = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-4xl'>Event Handling</h1>
            <button className='border bg-gray-800 text-white rounded p-2'
                onClick={() => { alert('Hurray') }} >Click Me</button>
        </div>
    )
}

export default EventHandling;