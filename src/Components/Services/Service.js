import React from 'react';

const Service = ({ service }) => {

    const { name, description, img, price } = service;
    console.log(img);
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-5 pt-5">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <h2 class="card-title">Price: ${price}</h2>
                    <div class="card-actions">
                        <button class="btn">Buy Now</button>
                        <button class=" mx-2 btn">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;