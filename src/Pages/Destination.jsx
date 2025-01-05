import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import destinations from '../Data/Destination';
import Card from '../Components/DestinationCard';

function Destinations() {
  const [region, setRegion] = useState('');
  const [type, setType] = useState('');
  const [sort, setSort] = useState('');

  const filteredDestinations = destinations
    .filter(destination => (region ? destination.region === region : true))
    .filter(destination => (type ? destination.type === type : true))
    .sort((a, b) => {
      if (sort === 'rating') {
        return b.rating - a.rating;
      } else if (sort === 'popularity') {
        return b.popularity - a.popularity;
      }
      return 0;
    });

  return (
    <div className="container mx-auto py-5">
      <h2 className="text-3xl font-bold mb-4">Destinations</h2>
      
      <div className="flex justify-between mb-4">
        <div>
          <label className="mr-2">Region:</label>
          <select value={region} onChange={(e) => setRegion(e.target.value)} className="border p-2 rounded">
            <option value="">All</option>
            <option value="Eastern">Eastern</option>
            <option value="Central">Central</option>
            <option value="Western">Western</option>
            <option value="Mid-Western">Mid-Western</option>
          </select>
        </div>
        <div>
          <label className="mr-2">Type:</label>
          <select value={type} onChange={(e) => setType(e.target.value)} className="border p-2 rounded">
            <option value="">All</option>
            <option value="Trekking">Trekking</option>
            <option value="Cultural">Cultural</option>
            <option value="Adventure">Adventure</option>
            <option value="Historical">Historical</option>
          </select>
        </div>
        <div>
          <label className="mr-2">Sort by:</label>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="border p-2 rounded">
            <option value="">None</option>
            <option value="rating">Rating</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDestinations.map(destination => (
          <Link to={`/destination/${destination.id}`} key={destination.id}>
            <Card
              image={destination.image}
              title={destination.name}
              description={`${destination.type} - ${destination.region}`}
              rating={destination.rating}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Destinations;