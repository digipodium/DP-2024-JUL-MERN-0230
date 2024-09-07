'use client';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ManageUser = () => {

    const [userList, setUserList] = useState([]);

    const fetchUsers = async () => {
        const res = await axios.get('http://localhost:5000/user/getall');
        console.table(res.data);
        setUserList(res.data);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const displayUsers = () => {
        if (userList.length === 0) {
            return <p>Loading...</p>
        } else {
            return <table className='w-full'>
                <thead className='bg-blue-800 text-white text-left'>
                    <tr>
                        <th className='p-2'>ID</th>
                        <th className='p-2'>Name</th>
                        <th className='p-2'>Email</th>
                        <th className='p-2'>City</th>
                    </tr>
                </thead>
                <tbody className='bg-blue-200'>
                    {
                        userList.map((user) => {
                            return <tr key={user._id}>
                                <td className='p-2 border border-blue-400'>{user._id}</td>
                                <td className='p-2 border border-blue-400'>{user.name}</td>
                                <td className='p-2 border border-blue-400'>{user.email}</td>
                                <td className='p-2 border border-blue-400'>{user.city}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        }
    }

    return (
        <div>
            <div className='max-w-[80%] mx-auto border mt-8 p-6 shadow rounded-lg'>
                <h1 className='text-center text-3xl font-bold'>ManageUsers</h1>

                {displayUsers()}

            </div>
        </div>
    )
}

export default ManageUser