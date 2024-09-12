'use client';
import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const FileUpload = () => {

    const [previewUrl, setPreviewUrl] = useState('');

    const uploadfile = (e) => {
        const file = e.target.files[0];

        const formdata = new FormData();
        formdata.append('file', file);
        formdata.append('upload_preset', 'preset123');
        formdata.append('cloud_name', 'ddsnnqpbv');

        axios.post('https://api.cloudinary.com/v1_1/ddsnnqpbv/image/upload', formdata, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((result) => {
                toast.success('File Uploaded Successfully');
                console.log(result.data);
                setPreviewUrl(result.data.url);

            }).catch((err) => {
                console.log(err);
                toast.error('File Upload Failed');
            });
    }

    return (
        <div>
            <h1 className='text-center my-10 font-bold text-3xl'>Uploading File to Cloud</h1>

            <input onChange={uploadfile} type="file" className='m-10' />

        </div>
    )
}

export default FileUpload