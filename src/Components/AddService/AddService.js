import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
            const url = 'http://localhost:5000/services';
            fetch(url,{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(service => {
                alert('Your Services Successfuly Added');
                data.target.reset();
            })
        console.log(data);
    
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className='text-2xl font-bold mb-5'>Add Your Service</h1>
                        <input type="text" placeholder="Name" {...register("name", { required: true })} class="input input-bordered w-full max-w-xs" />
                        <textarea type="text" placeholder="Description" {...register("description", { required: true })} class=" my-2 input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="URL" {...register("img", { required: true })} class="input input-bordered w-full max-w-xs" />
                        <input type="number" placeholder="Price" {...register("price", { required: true })} class="input input-bordered w-full max-w-xs mt-2" />
                        <div class="my-3 card-actions justify-center">
                            <button type='submit' class="btn btn-primary">Add Service</button>
                            
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default AddService;