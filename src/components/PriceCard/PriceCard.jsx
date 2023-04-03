import { LifebuoyIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    console.log(price);
    return (
        <div className='bg-indigo-400 p-3 mt-5 rounded-md flex flex-col'>
            <h2 className='text-center'>
                <span className='text-5xl font-extrabold text-purple-700'>{price.price}</span>
                <span className='text-2xl font-bold text-white'>/mon</span>
            </h2>
            <h5 className='text-center text-2xl font-b
            '>{price.name}</h5>
            <p className='underline font-bold text-white'>Features</p>
            {
                price.features.map((feature, index) => <Feature feature={feature} key={index}></Feature>)
            }
            <button className='w-full bg-green-600 py-2 rounded-md text-white mt-auto hover:bg-zinc-950'>Buy Now</button>
        </div>
    );
};

export default PriceCard;