import React from 'react';
import { FaStar } from 'react-icons/fa';

function Card({ image, title, description, rating }) {
  return (
    <div className='border border-gray-200 rounded-lg overflow-hidden shadow-lg'>
      <img src={image} alt={title} className='w-full h-[300px] object-cover' />
      <div className='p-4'>
        <h4 className='font-bold text-xl mb-2'>{title}</h4>
        <div className='flex items-center mb-2'>
          {[...Array(Math.round(rating))].map((_, i) => (
            <FaStar key={i} className='text-yellow-500' />
          ))}
        </div>
        <p className='text-gray-700'>{description}</p>
      </div>
    </div>
  );
}

export default Card;