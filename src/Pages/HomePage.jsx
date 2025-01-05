import React from 'react';
import { FaStar, FaLocationArrow } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import destinations from '../Data/Destination';

function HomePage() {
  return (
    <>
      <section className='container mx-auto py-3'>
        <div className='mb-8'>
          <h2 className='text-3xl font-bold mb-4'>About Nepal</h2>
          <p className='text-gray-700 mb-4'>
            Nepal, a landlocked country in South Asia, is known for its rich history, diverse culture, and stunning geography. It is home to eight of the world's fourteen highest peaks, including Mount Everest, the highest point on Earth. Nepal's culture is a blend of various traditions and customs from different ethnic groups, celebrated through festivals, music, dance, and cuisine.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Emblem_of_Nepal.svg/800px-Emblem_of_Nepal.svg.png" alt="Nepal Emblem" className='w-full h-64 object-cover rounded-lg' />
            <img src="https://media.sublimetrails.com/uploads/img/untitled-design--50-.webp" alt="Patan Durbar Square" className='w-full h-64 object-cover rounded-lg' />
            <img src="https://images.unsplash.com/photo-1551650990-0b86483712bf" alt="Lumbini" className='w-full h-64 object-cover rounded-lg' />
          </div>
        </div>

        <div className='font-serif items-center flex justify-between'>
          <div>
            <h3 className='font-bold text-2xl py-2'>Popular Destinations</h3>
            <p>These popular destinations have a lot to offer</p>
          </div>
          <div className='bg-blue-100 border-2 rounded-lg p-2'>
            <button className='flex items-center gap-2 text-blue-400'>View All Destinations <FaLocationArrow /></button>
          </div>
        </div>
      </section>

      <section>
        <div className='py-5 w-full h-full'>
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="pt-5 pb-5"
          >
            {destinations.map(destination => (
              <SwiperSlide key={destination.id}>
                <Link to={`/destination/${destination.id}`}>
                  <div className='border border-gray-200 rounded-lg overflow-hidden shadow-lg'>
                    <img src={destination.image} alt={destination.name} className='w-full h-64 object-cover' />
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
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default HomePage;