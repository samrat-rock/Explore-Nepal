import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import destinations from '../Data/Destination';

function DestinationDetails() {
  const { id } = useParams();
  const destination = destinations.find(dest => dest.id === parseInt(id));

  if (!destination) return <p>Destination not found</p>;

  return (
    <div className="container mx-auto py-5">
      <h2 className="text-3xl font-bold mb-4">{destination.name}</h2>
      <div className="flex space-x-4 mb-4">
        <img src={destination.image} alt={destination.name} className="w-1/2 h-auto object-cover rounded-lg" />
        <div className="w-1/2">
          <div className="flex items-center mb-2">
            {[...Array(Math.round(destination.rating))].map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
          </div>
          <p className="text-gray-700">{destination.type} - {destination.region}</p>
          <p className="text-gray-500">Popularity: {destination.popularity}</p>
          <p className="mt-4">{destination.description}</p>
        </div>
      </div>
      <Link to="/destinations" className="text-blue-500">Back to Destinations</Link>
    </div>
  );
}

export default DestinationDetails;
