import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {

        const url = `http://localhost:5000/services`;
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])



    return (
        <div>
            <h1 className='text-2xl font-bold'>Our IT Services</h1>
            <div className='grid m-2 grid-cols lg:grid-cols-3 gap-1'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default Services;