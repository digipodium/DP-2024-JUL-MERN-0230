import React from 'react'

const Input = ({ label, id, type="text" }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} className='block px-3 py-1 w-full border' />
        </div>
    )
}

export default Input;