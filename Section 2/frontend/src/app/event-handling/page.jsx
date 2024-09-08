'use client';
import React, { useRef } from 'react'

const EventHandling = () => {

    const boxRef = useRef(null);

    const previewImage = (e) => {
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.onload = (data) => {
            const img = document.createElement('img');
            img.src = data.target.result;
            document.body.appendChild(img);
        }
        reader.readAsDataURL(file);
    }

    return (
        <div className='max-w-2xl mx-auto h-screen' onMouseMove={(e) => {
            // console.log(e.clientX, e.clientY);
            boxRef.current.style.left = e.clientX - 40 + 'px';
            boxRef.current.style.top = e.clientY - 40 + 'px';
        }}>
            <div
                className='size-20 bg-yellow-200 rounded-full absolute duration-500'
                ref={boxRef}
            ></div>
            <h1 className='text-center font-bold text-4xl'>Event Handling</h1>
            <button className='border bg-gray-800 text-white rounded p-2'
                onClick={() => { alert('Hurray') }} >Click Me</button>

            <input
                className='border p-2 w-full mt-4'
                type="text" onChange={(e) => { console.log(e.target.value) }} />

            <input
                type="color"
                className='mt-5'
                onChange={(e) => { document.body.style.backgroundColor = e.target.value }}
            />

            <input
                type="file"
                onChange={(e) => { console.log(e.target.files) }}
                multiple
            />

            <label
                className='block bg-black w-full rounded-lg p-5 text-white font-bold mt-4'
                htmlFor="mypicker">Choose an Image</label>
            <input
                id='mypicker'
                type="file"
                className='block hidden'
                onChange={previewImage}
                accept='image/*'
            />

            <input
                onKeyDown={(e) => {
                    console.log(e.code);
                }}
                className='border p-2 w-full mt-4'
                type="text" />



        </div>
    )
}

export default EventHandling;