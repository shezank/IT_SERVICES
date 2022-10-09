import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
            <div className="relative overflow-hidden bg-white my-10">
                <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                        <div className="sm:max-w-lg">
                            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">We Service What you want!</h1>
                            <p className="mt-4 text-xl text-gray-500">Get The Best Accounts From Our Store. Best Quality Products </p>
                            <div className='m-5'>
                                <Link to='' className="w-32 items-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center align font-medium text-white hover:bg-indigo-700">GET STARTED</Link>
                            </div>
                        </div>
                        <div>
                            <div className="mt-10">
                                {/* <!-- Decorative image grid --> */}
                                <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                        <div className="flex items-center space-x-6 lg:space-x-8">
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                    <img src="https://i.ibb.co/LRnsvWv/Graphic-Design.jpg" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://i.ibb.co/4Wd4hch/digital-marketing-training.png" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://i.ibb.co/82jZLpG/Web-Design-and-Development-Training.jpg" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://i.ibb.co/znJfHmY/Social-Media-Marketing-Plan.jpg" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://i.ibb.co/kQt74my/Screenshot-1.png" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;