import React from 'react';
import destinations from '../Data/Destination'; 
import { FaStar } from 'react-icons/fa';

function AllDestinations() {
  return (
    <section className='container mx-auto py-3'>
      <h3 className='font-bold text-2xl py-2'>All Destinations</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {destinations.map(destination => (
          <div key={destination.id} className='border border-gray-200 rounded-lg overflow-hidden shadow-lg'>
            <img src={destination.image} alt={destination.name} className='w-full h-[300px] object-cover' />
            <div className='p-4'>
              <h4 className='font-bold text-xl mb-2'>{destination.name}</h4>
              <div className='flex items-center mb-2'>
                {[...Array(Math.round(destination.rating))].map((_, i) => (
                  <FaStar key={i} className='text-yellow-500' />
                ))}
              </div>
              <p className='text-gray-700'>{destination.type} - {destination.region}</p>
              <p className='text-gray-500'>Popularity: {destination.popularity}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AllDestinations;
