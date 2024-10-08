'use client';
import axios from 'axios'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const token = localStorage.getItem('token') || '';

const ManageUser = () => {

    const [userList, setUserList] = useState([]);

    const router = useRouter();

    const fetchUsers = () => {

        if (!token) router.push('/login');

        axios.get('http://localhost:5000/user/getall', {
            headers: {
                'x-auth-token': token
            }
        })
            .then((res) => {
                console.table(res.data);
                setUserList(res.data);
            }).catch((err) => {
                console.log(err);
                if (err.response.status === 403) router.push('/login');
            });
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const deleteUser = (id) => {
        axios.delete('http://localhost:5000/user/delete/' + id)
            .then((result) => {
                fetchUsers();
                toast.success('User deleted successfully');
            }).catch((err) => {
                console.log(err);
                toast.error('Something went wrong');
            });
    }

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
                        <th colSpan={2}></th>
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
                                <td className='p-2 border border-blue-400'>
                                    <Link
                                        href={'/updateuser/' + user._id}
                                        className='bg-blue-500 rounded-full py-1 px-3 text-white'
                                    >Edit</Link>
                                </td>
                                <td className='p-2 border border-blue-400'>
                                    <button onClick={() => deleteUser(user._id)}
                                        className='bg-red-500 rounded-full py-1 px-3 text-white'
                                    >Delete</button>
                                </td>
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